import { transpose, sum } from './utils'
import { FUEL, WASTE, CO2 } from './constants'

export const createFuelTable = energyTable => {
  const powerTypes = ['nuclear', 'chp', 'coal', 'wind', 'solar', 'hydro', 'oil', 'gas']

  const fuelTable = powerTypes.map((powerType, index) => {
    const energy = energyTable[index][1]
    const values = [FUEL, WASTE, CO2].map(value => Math.round(energy * value[powerType] * 1000))
    return [powerType, ...values]
  })

  const transposed = transpose(fuelTable)
  const [fuel, waste, co2] = transposed.slice(1).map(value => value.reduce(sum))

  return [fuelTable, fuel, waste, co2]
}
