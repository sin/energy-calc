import { powerToEnergy, round, average, transpose } from './utils'

export function getEnergy(powerTable) {
  return transpose(powerTable.map(({ powers }) => powers))
    .map(average)
    .map(powerToEnergy)
    .map(round)
}
