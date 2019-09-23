import sources from './sources'

import AvailablePower from './AvailablePower'
import InstalledPower from './InstalledPower'

import Emissions from './Emissions'
import NuclearWaste from './NuclearWaste'
import SolidWaste from './SolidWaste'

export default {
  available: AvailablePower,
  installed: InstalledPower,
  emissions: Emissions,
  nuclearWaste: NuclearWaste,
  solidWaste: SolidWaste,
  ...sources
}
