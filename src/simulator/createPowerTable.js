import { MAX_POWERS } from './constants'
import { POWER_COOF } from './constants'
import { sum, range } from './utils'

const POWER_TYPES = Object.keys(POWER_COOF)
const INTERVALS = range(21, 5)

/**
 * Creates table with the power duration
 * power in 5 percent time intervals, 0-100 percent
 */
export const createPowerTable = installedPowers =>
  INTERVALS.map(interval => {
    // and for each power type
    let powers = POWER_TYPES.map(powerType => {
      const installedPower = installedPowers[powerType]
      const maxOperationalPower = MAX_POWERS[powerType]
      const maxPower = (installedPower * maxOperationalPower) / 100

      // calculate utilization factor from powerCoof
      // the share of maximum operational power that is turned off
      // when demand is low, 1 === 100% on
      const utilizationFactor =
        1 +
        POWER_COOF[powerType].map((polystep, i) => polystep * Math.pow(interval, 6 - i)).reduce(sum)

      const adjustedPower = Math.round(maxPower * utilizationFactor)
      // power can't be negative
      return Math.max(0, adjustedPower)
    })
    // first column contains interval
    return [interval, ...powers]
  })
