import { CAPACITY_FACTORS } from './constants'
import { round, sum, transpose } from './utils'

export const createPowerChartTable = powers => {
  const [installedPowers, availablePowers] = transpose(
    Object.entries(powers)
      .filter(([powerType]) => powerType !== 'demand')
      .map(([powerType, installedPower]) => [
        installedPower,
        round((CAPACITY_FACTORS[powerType] / 100) * installedPower)
      ])
  )

  const installed = installedPowers.reduce(sum)
  const available = availablePowers.reduce(sum)
  const balance = Math.min(0, round(powers.demand - available))

  const powerChartTable = [
    ['Installed', ...installedPowers, '-'],
    ['Available', ...availablePowers, balance]
  ]

  return [powerChartTable, installed, available, balance]
}
