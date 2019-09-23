import { getAvailable } from './getAvailable'
import { getPowers } from './getPowers'
import { getEnergy } from './getEnergy'
import { getExternalities } from './getExternalities'
import { sum, round, roundTo, powerToEnergy } from './utils'
import { KEYS } from './constants'

export function getData(data) {
  const installed = KEYS.map(key => data[key])
  const available = getAvailable(data)

  const powers = getPowers(data)
  const energy = getEnergy(powers)
  const { co2, fuel, waste, nuclear } = getExternalities(energy)
  const capacityFactors = energy.map(
    (energy, index) => roundTo(2)(energy / powerToEnergy(installed[index])) || 0
  )

  const totalEnergy = energy.reduce(sum)
  const totalInstalled = installed.reduce(sum)
  const totalAvailable = available.reduce(sum)
  const ratio = round(totalInstalled / totalAvailable)

  const totalCO2 = co2.reduce(sum)
  const totalWaste = waste.reduce(sum)
  const totalFuel = fuel.reduce(sum)

  return {
    installed,
    available,
    powers,
    energy,
    capacityFactors,
    co2,
    fuel,
    waste,
    nuclear,
    totalEnergy,
    totalAvailable,
    totalInstalled,
    totalCO2,
    totalFuel,
    totalWaste,
    ratio
  }
}
