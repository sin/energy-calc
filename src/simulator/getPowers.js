import { POWER_COOF, MAX_POWERS } from './constants'
import { sum, range } from './utils'

const INTERVALS = range(21, 5)
const REGULATING = ['hydro', 'gas', 'oil']
const NON_REGULATING = ['demand', 'nuclear', 'chp', 'coal', 'wind', 'solar']
const IS_WEATHER_DEPENDANT = [false, false, false, true, true] // ["Nuclear", "CHP", "Coal", "Wind", "Solar"]

const calculateAverageDemand = powerTable => {
  const demands = powerTable.map(([, demand]) => demand)
  return Math.round(demands.reduce(sum) / (demands.length + 1))
}

const calculateRegulatingPowerDemand = (powers, demand, averageDemand) => {
  // don't add more weather dependent power if it exceeds average demand
  const production = powers
    .map((value, key) => (IS_WEATHER_DEPENDANT[key] ? Math.min(value, averageDemand) : value))
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
export const getPowers = installed => {
  const powerTable = INTERVALS.map(interval => {
    const powers = NON_REGULATING.map(powerType => {
      const max = installed[powerType] * MAX_POWERS[powerType]
      const power = Math.round(max * getUtulizationFactor(interval, powerType))

      return Math.max(0, power)
    })

    return [interval, ...powers]
  })

  const averageDemand = calculateAverageDemand(powerTable)

  return powerTable.map(row => {
    const [interval, demand, ...nonRegulatingPowers] = row
    const [nuclear, chp, coal, wind, solar] = nonRegulatingPowers

    const baseload = Math.min(demand, nuclear + chp + coal)

    const regulating1 = demand - baseload
    const regulating2 = calculateRegulatingPowerDemand(nonRegulatingPowers, demand, averageDemand)
    const regulatingDemand = Math.min(regulating1, regulating2)

    const [hydroAvailable, gasAvailable, oilAvailable] = REGULATING.map(
      powerType => installed[powerType] * MAX_POWERS[powerType]
    )
    const hydro = Math.min(regulatingDemand, hydroAvailable)
    const gas = Math.min(regulatingDemand - hydro, gasAvailable)
    const oil = Math.min(regulatingDemand - hydro - gas, oilAvailable)

    const regulating = hydro + oil + gas
    const nonRegulating = nuclear + chp + coal + wind + solar

    const renewables = Math.min(wind + solar, demand - baseload - regulatingDemand, averageDemand)
    const production = nonRegulating + regulating
    const deficit = Math.max(0, demand - production)

    const powers = [nuclear, hydro, wind, solar, chp, gas, coal, oil]
    const types = { baseload, renewables, regulating }

    return { interval, demand, deficit, powers, types }
  })
}
