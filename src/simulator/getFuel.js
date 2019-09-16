import { FUEL, WASTE, CO2 } from './constants'

export const getFuel = energyTable => {
  return Object.entries(energyTable).reduce((result, [powerType, energy]) => {
    const [fuel, waste, co2] = [FUEL, WASTE, CO2].map(value =>
      Math.round(energy * value[powerType] * 1000)
    )
    return { ...result, [powerType]: { fuel, waste, co2 } }
  }, {})
}
