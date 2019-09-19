import { round } from './utils'
import { CO2, FUEL, WASTE, KEYS } from './constants'

export const getExternalities = energy => {
  const [co2, fuel, waste] = [CO2, FUEL, WASTE].map(table =>
    energy.map((value, index) => table[KEYS[index]] * value).map(round)
  )

  const nuclear = round(WASTE.nuclear * energy[0])

  return { co2, fuel, waste, nuclear }
}
