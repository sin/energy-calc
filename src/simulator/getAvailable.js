import { CAPACITY_FACTORS } from './constants'
import { round } from './utils'

export const getAvailable = installed => {
  return Object.entries(installed)
    .filter(([powerType]) => powerType !== 'demand')
    .map(([powerType, installed]) => installed * CAPACITY_FACTORS[powerType])
    .map(round)
}
