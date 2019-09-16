import { CAPACITY_FACTORS } from './constants'
import { round, sum, transpose } from './utils'

export const getChart = powers => {
  const [installedPowers, availablePowers] = transpose(
    Object.entries(powers)
      .filter(([powerType]) => powerType !== 'demand')
      .map(([powerType, installedPower]) => [
        installedPower,
        round((CAPACITY_FACTORS[powerType] / 100) * installedPower)
      ])
  )

  const total = installedPowers.reduce(sum)
  const available = availablePowers.reduce(sum)
  const ratio = round(total / available)

  return { total, available, ratio }
}
