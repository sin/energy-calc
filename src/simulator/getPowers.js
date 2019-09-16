import { POWER_COOF, MAX_POWERS, REGULATING_POWER_LABELS } from './constants'
import { sum, range } from './utils'

const POWER_TYPES = Object.keys(POWER_COOF)
const INTERVALS = range(21, 5)

const calculateAverageDemand = powerTable => {
  const demands = powerTable.map(({ demand }) => demand)
  // TODO: the average is calculated incorrectly
  // return Math.round(demands.reduce(sum) / demands.length);
  return Math.round(demands.reduce(sum) / (demands.length + 1))
}

const calculateRegulatingPowerDemand = ({ demand, powers }, averageDemand) => {
  // ["Nuclear", "CHP", "Coal", "Wind", "Solar"]
  const isWeatherDependent = { nuclear: false, chp: false, coal: false, wind: true, solar: true }

  const production = Object.entries(powers)
    .map(([powerType, value]) =>
      // don't add more weather dependent power if it exceeds average demand
      isWeatherDependent[powerType] ? Math.min(value, averageDemand) : value
    )
    .reduce(sum)

  return Math.max(0, demand - production)
}

/**
 * Calculates utilization factor from powerCoof
 *
 * the share of maximum operational power that is turned off
 * when demand is low, 1 === 100% on
 *
 * @param {number} interval
 * @param {string} powerType
 */
const getUtulizationFactor = (interval, powerType) =>
  1 + POWER_COOF[powerType].map((polystep, i) => polystep * Math.pow(interval, 6 - i)).reduce(sum)

/**
 * Creates table with the power duration
 * power in 5 percent time intervals, 0-100 percent
 */
export const getPowers = installedPowers => {
  const powerTable = INTERVALS.map(interval => {
    const { demand, ...powers } = Object.assign(
      {},
      ...POWER_TYPES.map(powerType => {
        const installedPower = installedPowers[powerType]
        const maxPower = (installedPower * MAX_POWERS[powerType]) / 100

        const power = Math.round(maxPower * getUtulizationFactor(interval, powerType))

        return { [powerType]: Math.max(0, power) }
      })
    )

    return { interval, demand, powers }
  })

  const averageDemand = calculateAverageDemand(powerTable)

  return powerTable.map(row => {
    const { demand, powers } = row
    const { nuclear, chp, coal, wind, solar } = powers

    const baseload = Math.min(demand, nuclear + chp + coal)

    const regulating1 = demand - baseload
    const regulating2 = calculateRegulatingPowerDemand(row, averageDemand)

    const regulatingDemand = Math.min(regulating1, regulating2)

    // renewables, weather dependent = wind + solar
    // weather power can't exceed average demand or demand - baseload - regulating demanded
    const renewables = Math.min(wind + solar, demand - baseload - regulatingDemand, averageDemand)

    const [hydroAvailable, gasAvailable, oilAvailable] = REGULATING_POWER_LABELS.map(
      powerType => (installedPowers[powerType] * MAX_POWERS[powerType]) / 100
    )

    const hydro = Math.min(regulatingDemand, hydroAvailable)
    const gas = Math.min(regulatingDemand - hydro, gasAvailable)
    const oil = Math.min(regulatingDemand - hydro - gas, oilAvailable)
    const regulating = hydro + oil + gas

    const nonRegulating = nuclear + chp + coal + wind + solar
    const production = nonRegulating + regulating
    const deficit = Math.max(0, demand - production)

    row.powers = Object.assign(row.powers, { hydro, gas, oil })

    return { ...row, deficit, groups: { baseload, renewables, regulating } }
  })
}
