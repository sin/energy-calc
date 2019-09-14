import { CAPACITY } from './constants'

/**
 * converts MW to TWh per year
 */
export const powerToEnergy = power => (power * 8760) / 1e6

/**
 * calculate energy from installed and capacity factor
 */
export const installedToEnergy = installedPowers => label => {
  const key = label.toLowerCase()
  return round((installedPowers[key] * CAPACITY[key]) / 1e6)
}

/**
 * sums two values
 */
export const sum = (a, b) => a + b

/**
 * creates numbers range
 */
export const range = (length, step = 1, start = 0) =>
  Array.from({ length }, (_, index) => start + index * step)

/**
 * round to x decimal places
 */
export const roundTo = (places = 0) => value => {
  const factor = 10 ** places
  return Math.round(value * factor) / factor
}

/**
 * round to 1 decimal place
 */
export const round = roundTo(1)

/**
 * add column with labels
 */
export const addLabel = labels => (value, index) => [labels[index], value]

/**
 * transpose array
 */
export const transpose = array => Object.keys(array[0]).map(column => array.map(row => row[column]))
