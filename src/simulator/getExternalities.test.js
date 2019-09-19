import { getExternalities } from './getExternalities'
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

const expected = [
  [319.5, 522, 291, 23, 229.5, 2266, 1850.1, 595.8],
  [0.3, 0, 0, 0, 15300, 822.8, 795.9, 198.6],
  [3.2, 0, 0, 0, 229.5, 0, 77.7, 0],
  3.2
]

describe('getFuel', () => {
  it('returns correct fuel table', () => {
    expect(getExternalities(getEnergy(getPowers(INSTALLED_POWERS)))).toEqual(expected)
  })
})
