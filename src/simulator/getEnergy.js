import { powerToEnergy, round } from './utils'

export function getEnergy(powerTable) {
  const energyTable = powerTable.map(({ powers }) => {
    return Object.entries(powers).reduce((result, [powerType, power]) => {
      return { ...result, [powerType]: round(powerToEnergy(power)) }
    }, {})
  })

  return Object.keys(energyTable[0]).reduce((result, powerType) => {
    const energy = energyTable.reduce((sum, row) => row[powerType] + sum, 0)
    return { ...result, [powerType]: round(energy / 20) }
  }, {})
}
