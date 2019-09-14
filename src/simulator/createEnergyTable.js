import { REGULATING_POWER_LABELS, POWER_TABLE_LABELS } from './constants'
import { powerToEnergy, round, sum, addLabel } from './utils'

const labels = [...POWER_TABLE_LABELS.slice(2), ...REGULATING_POWER_LABELS]

// power in MW at 50 percent
// energy in TWh rounded to 1 decimal
export function createEnergyTable(powerTable, regulatingEnergy) {
  const [, demand, ...baseEnergy] = powerTable[10].map(power => round(powerToEnergy(power)))

  const energyList = [...baseEnergy, ...regulatingEnergy]
  const energySum = energyList.reduce(sum)
  const surplus = round(energySum - demand)

  const energyTable = energyList.map(addLabel(labels))
  return [...energyTable, [surplus > 0 ? 'Surplus' : 'Deficit', surplus]]
}
