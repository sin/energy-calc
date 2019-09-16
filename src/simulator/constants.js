export const POWER_TABLE_LABELS = ['%', 'Demand', 'Nuclear', 'CHP', 'Coal', 'Wind', 'Solar']
export const REGULATING_POWER_LABELS = ['hydro', 'gas', 'oil']
export const ENERGY_TABLE_LABELS = ['Name', 'Energy']
export const FUEL_TABLE_LABELS = ['', 'Fuel', 'Solid Waste', 'CO2']
export const ADJUSTED_POWER_TABLE_LABELS = [
  '%',
  'Demand',
  'Base',
  'Renewables',
  'Regulate Demand',
  'Surplus'
]
export const POWER_CHART_LABELS = [
  '',
  'Nuclear',
  'Hydro',
  'Wind',
  'Solar',
  'Gas',
  'Oil',
  'CHP',
  'Coal',
  'Deficit'
]

export const MAX_POWERS = {
  nuclear: 100,
  wind: 70,
  solar: 65,
  chp: 75,
  coal: 100,
  demand: 100,
  hydro: 42,
  oil: 100,
  gas: 100
}

export const CAPACITY = {
  nuclear: 7000,
  hydro: 3700,
  wind: 2630,
  solar: 1000,
  gas: 0,
  oil: 0,
  chp: 3050,
  coal: 7884
}

export const MAX_CAPACITY = {
  nuclear: 7884,
  hydro: 3700,
  wind: 2630,
  solar: 1000,
  gas: 7884,
  oil: 7884,
  chp: 3050,
  coal: 7884
}

export const CAPACITY_FACTORS = {
  nuclear: 90,
  hydro: 82,
  wind: 9,
  solar: 0,
  gas: 90,
  oil: 90,
  chp: 77,
  coal: 90
}

export const FUEL = {
  nuclear: 0.005,
  hydro: 0,
  wind: 0,
  solar: 0,
  gas: 187,
  oil: 331,
  chp: 1000,
  coal: 379
}

// grams / kWh
export const CO2 = {
  nuclear: 5,
  hydro: 9,
  wind: 15,
  solar: 46,
  gas: 515,
  oil: 993,
  chp: 15,
  coal: 881
}

export const WASTE = {
  nuclear: 0.005,
  hydro: 0,
  wind: 0,
  solar: 0,
  gas: 0,
  oil: 0,
  chp: 15,
  coal: 37
}

export const POWER_COOF = {
  demand: [
    5.22305012772976e-12,
    -1.99919545823719e-9,
    2.84634493734413e-7,
    -1.96831546062457e-5,
    0.000718706830438671,
    -0.0176184293258551
  ],
  nuclear: [
    2.60027483362602e-12,
    -4.21522717629026e-10,
    8.43915935489853e-9,
    8.25183318068457e-7,
    -1.04055498388049e-5,
    -0.00395592006246061
  ],
  chp: [0, 0, -8.66564795646319e-9, 1.28246828222672e-6, 1.86719686851292e-5, -0.0139171520689115],
  coal: [0, 0, 0, 0, 0, 0],
  wind: [
    2.32518114747708e-11,
    -8.24592229234651e-9,
    1.13347571282831e-6,
    -7.65761024246728e-5,
    0.00267572948815116,
    -0.0521660174799689
  ],
  solar: [
    3.49355320699972e-10,
    -8.72092274335658e-8,
    8.13600796546478e-6,
    -0.000372701904416939,
    0.0091188719947563,
    -0.123030025850834
  ]
}
