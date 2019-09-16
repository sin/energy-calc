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
  {
    deficit: 0,
    demand: 26700,
    groups: { baseload: 12875, regulating: 8250, renewables: 5575 },
    interval: 0,
    powers: {
      chp: 3375,
      coal: 500,
      gas: 1000,
      hydro: 6720,
      nuclear: 9000,
      oil: 530,
      solar: 325,
      wind: 5250
    }
  },
  {
    deficit: 0,
    demand: 24767,
    groups: { baseload: 12463, regulating: 7933, renewables: 4371 },
    interval: 5,
    powers: {
      chp: 3142,
      coal: 500,
      gas: 1000,
      hydro: 6720,
      nuclear: 8821,
      oil: 213,
      solar: 186,
      wind: 4185
    }
  },
  {
    deficit: 0,
    demand: 23460,
    groups: { baseload: 12058, regulating: 7709, renewables: 3693 },
    interval: 10,
    powers: {
      chp: 2916,
      coal: 500,
      gas: 989,
      hydro: 6720,
      nuclear: 8642,
      oil: 0,
      solar: 124,
      wind: 3569
    }
  },
  {
    deficit: 0,
    demand: 22534,
    groups: { baseload: 11669, regulating: 7552, renewables: 3313 },
    interval: 15,
    powers: {
      chp: 2698,
      coal: 500,
      gas: 832,
      hydro: 6720,
      nuclear: 8471,
      oil: 0,
      solar: 97,
      wind: 3216
    }
  },
  {
    deficit: 0,
    demand: 21817,
    groups: { baseload: 11302, regulating: 7437, renewables: 3078 },
    interval: 20,
    powers: {
      chp: 2491,
      coal: 500,
      gas: 717,
      hydro: 6720,
      nuclear: 8311,
      oil: 0,
      solar: 81,
      wind: 2997
    }
  },
  {
    deficit: 0,
    demand: 21203,
    groups: { baseload: 10962, regulating: 7339, renewables: 2902 },
    interval: 25,
    powers: {
      chp: 2296,
      coal: 500,
      gas: 619,
      hydro: 6720,
      nuclear: 8166,
      oil: 0,
      solar: 69,
      wind: 2833
    }
  },
  {
    deficit: 0,
    demand: 20629,
    groups: { baseload: 10651, regulating: 7241, renewables: 2737 },
    interval: 30,
    powers: {
      chp: 2116,
      coal: 500,
      gas: 521,
      hydro: 6720,
      nuclear: 8035,
      oil: 0,
      solar: 58,
      wind: 2679
    }
  },
  {
    deficit: 0,
    demand: 20067,
    groups: { baseload: 10365, regulating: 7135, renewables: 2567 },
    interval: 35,
    powers: {
      chp: 1950,
      coal: 500,
      gas: 415,
      hydro: 6720,
      nuclear: 7915,
      oil: 0,
      solar: 51,
      wind: 2516
    }
  },
  {
    deficit: 0,
    demand: 19513,
    groups: { baseload: 10102, regulating: 7021, renewables: 2390 },
    interval: 40,
    powers: {
      chp: 1799,
      coal: 500,
      gas: 301,
      hydro: 6720,
      nuclear: 7803,
      oil: 0,
      solar: 47,
      wind: 2343
    }
  },
  {
    deficit: 0,
    demand: 18972,
    groups: { baseload: 9854, regulating: 6908, renewables: 2210 },
    interval: 45,
    powers: {
      chp: 1663,
      coal: 500,
      gas: 188,
      hydro: 6720,
      nuclear: 7691,
      oil: 0,
      solar: 45,
      wind: 2165
    }
  },
  {
    deficit: 0,
    demand: 18457,
    groups: { baseload: 9611, regulating: 6816, renewables: 2030 },
    interval: 50,
    powers: {
      chp: 1542,
      coal: 500,
      gas: 96,
      hydro: 6720,
      nuclear: 7569,
      oil: 0,
      solar: 37,
      wind: 1993
    }
  },
  {
    deficit: 0,
    demand: 17977,
    groups: { baseload: 9363, regulating: 6762, renewables: 1852 },
    interval: 55,
    powers: {
      chp: 1435,
      coal: 500,
      gas: 42,
      hydro: 6720,
      nuclear: 7428,
      oil: 0,
      solar: 13,
      wind: 1839
    }
  },
  {
    deficit: 0,
    demand: 17533,
    groups: { baseload: 9097, regulating: 6730, renewables: 1706 },
    interval: 60,
    powers: {
      chp: 1340,
      coal: 500,
      gas: 10,
      hydro: 6720,
      nuclear: 7257,
      oil: 0,
      solar: 0,
      wind: 1706
    }
  },
  {
    deficit: 0,
    demand: 17115,
    groups: { baseload: 8804, regulating: 6717, renewables: 1594 },
    interval: 65,
    powers: {
      chp: 1255,
      coal: 500,
      gas: 0,
      hydro: 6717,
      nuclear: 7049,
      oil: 0,
      solar: 0,
      wind: 1594
    }
  },
  {
    deficit: 0,
    demand: 16703,
    groups: { baseload: 8475, regulating: 6731, renewables: 1497 },
    interval: 70,
    powers: {
      chp: 1178,
      coal: 500,
      gas: 11,
      hydro: 6720,
      nuclear: 6797,
      oil: 0,
      solar: 0,
      wind: 1497
    }
  },
  {
    deficit: 0,
    demand: 16258,
    groups: { baseload: 8109, regulating: 6746, renewables: 1403 },
    interval: 75,
    powers: {
      chp: 1107,
      coal: 500,
      gas: 26,
      hydro: 6720,
      nuclear: 6502,
      oil: 0,
      solar: 0,
      wind: 1403
    }
  },
  {
    deficit: 0,
    demand: 15735,
    groups: { baseload: 7708, regulating: 6732, renewables: 1295 },
    interval: 80,
    powers: {
      chp: 1039,
      coal: 500,
      gas: 12,
      hydro: 6720,
      nuclear: 6169,
      oil: 0,
      solar: 0,
      wind: 1295
    }
  },
  {
    deficit: 0,
    demand: 15075,
    groups: { baseload: 7285, regulating: 6631, renewables: 1159 },
    interval: 85,
    powers: {
      chp: 969,
      coal: 500,
      gas: 0,
      hydro: 6631,
      nuclear: 5816,
      oil: 0,
      solar: 0,
      wind: 1159
    }
  },
  {
    deficit: 0,
    demand: 14215,
    groups: { baseload: 6865, regulating: 6366, renewables: 984 },
    interval: 90,
    powers: { chp: 895, coal: 500, gas: 0, hydro: 6366, nuclear: 5470, oil: 0, solar: 0, wind: 984 }
  },
  {
    deficit: 0,
    demand: 13094,
    groups: { baseload: 6484, regulating: 5836, renewables: 774 },
    interval: 95,
    powers: { chp: 810, coal: 500, gas: 0, hydro: 5836, nuclear: 5174, oil: 0, solar: 0, wind: 774 }
  },
  {
    deficit: 0,
    demand: 11658,
    groups: { baseload: 6202, regulating: 4906, renewables: 550 },
    interval: 100,
    powers: { chp: 712, coal: 500, gas: 0, hydro: 4906, nuclear: 4990, oil: 0, solar: 0, wind: 550 }
  }
]

describe('getPowers', () => {
  it('returns correct power table', () => {
    expect(getPowers(INSTALLED_POWERS)).toEqual(expected)
  })
})
