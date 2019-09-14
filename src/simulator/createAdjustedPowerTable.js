import { sum } from './utils'

const calculateAverageDemand = powerTable => {
  const demands = powerTable.map(row => row[1])
  // TODO: the average is calculated incorrectly
  // return Math.round(demands.reduce(sum) / demands.length);
  return Math.round(demands.reduce(sum) / (demands.length + 1))
}

const calculateRegulatingPowerDemand = (row, averageDemand) => {
  // ["Nuclear", "CHP", "Coal", "Wind", "Solar"]
  const isWeatherDependent = [false, false, false, true, true]

  // last column contains demand
  const demand = row[1]

  const production = row
    .slice(2) // ignore first and second column (interval and demand)
    .map((value, index) =>
      // don't add more weather dependent power if it exceeds average demand
      isWeatherDependent[index] ? Math.min(value, averageDemand) : value
    )
    .reduce(sum)

  return Math.max(0, demand - production)
}

/**
 * Calculates the amount of regulating power required to meet demand
 *
 * for each time interval calculate
 * regulating = demand - chp - nuclear - coal - renewable
 *
 * if regulating > 0
 *   increase regulating power
 * while regulating < 0
 *   first decrease coal // high margin cost
 *   then decrease renewable (Solar, Wind) // zero margin cost
 *   then nuclear // is not allowed to load-follow, zero margin cost
 *   then chp // needed for heating
 *   surplus += regulating
 */
export const createAdjustedPowerTable = powerTable => {
  // first we sort out how much the average demand is
  const averageDemand = calculateAverageDemand(powerTable)

  return powerTable.map(row => {
    const [interval, demand, nuclear, chp, coal, wind, solar] = row

    const production = nuclear + chp + coal + wind + solar

    // base power = nuclear + chp + coal
    // base power can't exceed demand
    const base = Math.min(demand, nuclear + chp + coal)

    // regulating power = demand - basePower
    // regulating power can't exceed regulating power demand
    const regulating = Math.max(0, demand - base)
    const regulatingDemand = calculateRegulatingPowerDemand(row, averageDemand)

    const regulatingDemanded = Math.min(regulating, regulatingDemand)

    // renewables, weather dependent = wind + solar
    // weather power can't exceed average demand or demand - base - regulating demanded
    const renewables = Math.min(wind + solar, demand - base - regulatingDemanded, averageDemand)

    // power surplus = production - demand
    const surplus = Math.max(0, production - demand)

    return [interval, demand, base, renewables, regulatingDemanded, surplus]
  })
}
