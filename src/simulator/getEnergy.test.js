import { getEnergy } from './getEnergy'
import { getPowers } from './getPowers'

const INSTALLED_POWERS = {
  demand: 26700,
  nuclear: 9000,
  hydro: 16000,
  wind: 7500,
  solar: 500,
  gas: 1000,
  oil: 530,
  chp: 4500,
  coal: 0
}

const expected = {
  chp: 16.1,
  coal: 0,
  gas: 6,
  hydro: 61.1,
  nuclear: 67,
  oil: 1,
  solar: 0.5,
  wind: 20.4
}

describe('getEnergy', () => {
  it('returns correct energy table', () => {
    expect(getEnergy(getPowers(INSTALLED_POWERS))).toEqual(expected)
  })
})
