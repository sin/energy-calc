import { getPowers } from './getPowers'
import { getEnergy } from './getEnergy'
import { getFuel } from './getFuel'
import { getChart } from './getChart'

export function getData(installedPowers) {
  const powers = getPowers(installedPowers)
  const energy = getEnergy(powers)
  const fuels = getFuel(energy)
  const { total, available, ratio } = getChart(installedPowers)

  return { powers, energy, fuels, total, available, ratio }
}
