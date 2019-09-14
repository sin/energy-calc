import { CAPACITY_FACTORS, REGULATING_POWER_LABELS } from './constants'
import { installedToEnergy, round, powerToEnergy } from './utils'

import { createPowerTable } from './createPowerTable'
import { createAdjustedPowerTable } from './createAdjustedPowerTable'
import { createEnergyTable } from './createEnergyTable'
import { createAdjustedEnergyTable } from './createAdjustedEnergyTable'
import { createPowerChartTable } from './createPowerChartTable'
import { createFuelTable } from './createFuelTable'

export const getEnergyData = installedPowers => {
  const regulatingEnergy = REGULATING_POWER_LABELS.map(installedToEnergy(installedPowers))
  const [hydro, oil, gas] = regulatingEnergy
  const reserveEnergy = round(oil + gas)

  const powerTable = createPowerTable(installedPowers)
  const adjustedPowerTable = createAdjustedPowerTable(powerTable)
  const [powerChartTable, ...powerSummary] = createPowerChartTable(installedPowers)

  const energyTable = createEnergyTable(powerTable, regulatingEnergy)
  const { energyBalance } = createAdjustedEnergyTable(adjustedPowerTable, hydro, reserveEnergy)

  const [fuelTable, ...wasteSummary] = createFuelTable(energyTable)

  const gasPower = (installedPowers.gas * CAPACITY_FACTORS.gas) / 100
  const oilPower = (installedPowers.oil * CAPACITY_FACTORS.oil) / 100

  const gasAvailable = powerToEnergy(gasPower)
  const oilAvailable = powerToEnergy(oilPower)

  const gasTime = Math.min(1, -energyBalance / gasAvailable)
  const gasDemand = powerToEnergy(gasTime * gasPower)

  const oilTime = Math.min(1, (-energyBalance - gasDemand) / oilAvailable)
  const oilDemand = powerToEnergy((oilTime * installedPowers.oil * CAPACITY_FACTORS.oil) / 100)
  const regulating = gasDemand + oilDemand

  const { adjustedEnergyTable } = createAdjustedEnergyTable(adjustedPowerTable, hydro, regulating)

  const powerInstalled = powerChartTable[0].slice(1, -1).reduce((a, b) => a + b, 0)
  const powerAvailable = powerChartTable[1].slice(1, -1).reduce((a, b) => a + b, 0)
  const powerRatio = powerInstalled / powerAvailable

  return {
    powerTable,
    adjustedPowerTable,
    energyTable,
    adjustedEnergyTable,
    powerChartTable,
    powerSummary,
    fuelTable,
    wasteSummary,
    powerInstalled,
    powerAvailable,
    powerRatio
  }
}
