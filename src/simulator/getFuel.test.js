import { getFuel } from './getFuel'
import { getEnergy } from './getEnergy'
import { getPowers } from './getPowers'

const INSTALLED_POWERS = {
  demand: 26700,
  nuclear: 9000,
  hydro: 16000,
  wind: 7500,
  solar: 500,
  gas: 1000,
  oil: 1000,
  chp: 4500,
  coal: 500
}

const expected = {
  chp: { co2: 241500, fuel: 16100000, waste: 241500 },
  coal: { co2: 4052600, fuel: 1743400, waste: 170200 },
  gas: { co2: 1545000, fuel: 561000, waste: 0 },
  hydro: { co2: 544500, fuel: 0, waste: 0 },
  nuclear: { co2: 335000, fuel: 335, waste: 335 },
  oil: { co2: 297900, fuel: 99300, waste: 0 },
  solar: { co2: 23000, fuel: 0, waste: 0 },
  wind: { co2: 306000, fuel: 0, waste: 0 }
}

describe('getFuel', () => {
  it('returns correct fuel table', () => {
    expect(getFuel(getEnergy(getPowers(INSTALLED_POWERS)))).toEqual(expected)
  })
})
