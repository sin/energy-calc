import { getEnergy } from './getEnergy'
import { getPowers } from './getPowers'

const INSTALLED_POWERS = {
  demand: 26700,
  nuclear: 9000,
  hydro: 16000,
  wind: 7500,
  solar: 500,
  chp: 4500,
  gas: 1000,
  coal: 0,
  oil: 530
}

const expected = [63.9, 58.2, 19.4, 0.5, 15.3, 5.7, 0, 0.9]

describe('getEnergy', () => {
  it('returns correct energy table', () => {
    expect(getEnergy(getPowers(INSTALLED_POWERS))).toEqual(expected)
  })
})
