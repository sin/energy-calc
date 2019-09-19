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
    interval: 0,
    powers: [9000, 6720, 5250, 325, 3375, 1000, 300, 730],
    types: { baseload: 12675, regulating: 8450, renewables: 5575 }
  },
  {
    deficit: 0,
    demand: 24767,
    interval: 5,
    powers: [8821, 6720, 4185, 186, 3142, 1000, 294, 419],
    types: { baseload: 12257, regulating: 8139, renewables: 4371 }
  },
  {
    deficit: 0,
    demand: 23460,
    interval: 10,
    powers: [8642, 6720, 3569, 124, 2916, 1000, 288, 201],
    types: { baseload: 11846, regulating: 7921, renewables: 3693 }
  },
  {
    deficit: 0,
    demand: 22534,
    interval: 15,
    powers: [8471, 6720, 3216, 97, 2698, 1000, 282, 50],
    types: { baseload: 11451, regulating: 7770, renewables: 3313 }
  },
  {
    deficit: 0,
    demand: 21817,
    interval: 20,
    powers: [8311, 6720, 2997, 81, 2491, 940, 277, 0],
    types: { baseload: 11079, regulating: 7660, renewables: 3078 }
  },
  {
    deficit: 0,
    demand: 21203,
    interval: 25,
    powers: [8166, 6720, 2833, 69, 2296, 847, 272, 0],
    types: { baseload: 10734, regulating: 7567, renewables: 2902 }
  },
  {
    deficit: 0,
    demand: 20629,
    interval: 30,
    powers: [8035, 6720, 2679, 58, 2116, 753, 268, 0],
    types: { baseload: 10419, regulating: 7473, renewables: 2737 }
  },
  {
    deficit: 0,
    demand: 20067,
    interval: 35,
    powers: [7915, 6720, 2516, 51, 1950, 651, 264, 0],
    types: { baseload: 10129, regulating: 7371, renewables: 2567 }
  },
  {
    deficit: 0,
    demand: 19513,
    interval: 40,
    powers: [7803, 6720, 2343, 47, 1799, 541, 260, 0],
    types: { baseload: 9862, regulating: 7261, renewables: 2390 }
  },
  {
    deficit: 0,
    demand: 18972,
    interval: 45,
    powers: [7691, 6720, 2165, 45, 1663, 432, 256, 0],
    types: { baseload: 9610, regulating: 7152, renewables: 2210 }
  },
  {
    deficit: 0,
    demand: 18457,
    interval: 50,
    powers: [7569, 6720, 1993, 37, 1542, 344, 252, 0],
    types: { baseload: 9363, regulating: 7064, renewables: 2030 }
  },
  {
    deficit: 0,
    demand: 17977,
    interval: 55,
    powers: [7428, 6720, 1839, 13, 1435, 294, 248, 0],
    types: { baseload: 9111, regulating: 7014, renewables: 1852 }
  },
  {
    deficit: 0,
    demand: 17533,
    interval: 60,
    powers: [7257, 6720, 1706, 0, 1340, 268, 242, 0],
    types: { baseload: 8839, regulating: 6988, renewables: 1706 }
  },
  {
    deficit: 0,
    demand: 17115,
    interval: 65,
    powers: [7049, 6720, 1594, 0, 1255, 262, 235, 0],
    types: { baseload: 8539, regulating: 6982, renewables: 1594 }
  },
  {
    deficit: 0,
    demand: 16703,
    interval: 70,
    powers: [6797, 6720, 1497, 0, 1178, 284, 227, 0],
    types: { baseload: 8202, regulating: 7004, renewables: 1497 }
  },
  {
    deficit: 0,
    demand: 16258,
    interval: 75,
    powers: [6502, 6720, 1403, 0, 1107, 309, 217, 0],
    types: { baseload: 7826, regulating: 7029, renewables: 1403 }
  },
  {
    deficit: 0,
    demand: 15735,
    interval: 80,
    powers: [6169, 6720, 1295, 0, 1039, 306, 206, 0],
    types: { baseload: 7414, regulating: 7026, renewables: 1295 }
  },
  {
    deficit: 0,
    demand: 15075,
    interval: 85,
    powers: [5816, 6720, 1159, 0, 969, 217, 194, 0],
    types: { baseload: 6979, regulating: 6937, renewables: 1159 }
  },
  {
    deficit: 0,
    demand: 14215,
    interval: 90,
    powers: [5470, 6684, 984, 0, 895, 0, 182, 0],
    types: { baseload: 6547, regulating: 6684, renewables: 984 }
  },
  {
    deficit: 0,
    demand: 13094,
    interval: 95,
    powers: [5174, 6164, 774, 0, 810, 0, 172, 0],
    types: { baseload: 6156, regulating: 6164, renewables: 774 }
  },
  {
    deficit: 0,
    demand: 11658,
    interval: 100,
    powers: [4990, 5240, 550, 0, 712, 0, 166, 0],
    types: { baseload: 5868, regulating: 5240, renewables: 550 }
  }
]

describe('getPowers', () => {
  it('returns correct power table', () => {
    expect(getPowers(INSTALLED_POWERS)).toEqual(expected)
  })
})
