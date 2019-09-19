/**
 * converts MW to TWh per year
 */
export const powerToEnergy = power => (power * 8760) / 1e6

/**
 * sums two values
 */
export const sum = (a, b) => a + b

/**
 * calculates average of values in array
 */
export const average = array => array.reduce(sum) / array.length

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
 * transpose array
 */
export const transpose = array => Object.keys(array[0]).map(column => array.map(row => row[column]))

/**
 * formatting
 */
export const formatNumber = multiply => value =>
  Number((value / 10 ** multiply).toFixed(1)).toLocaleString()

/**
 *
 */
export const identity = value => value
