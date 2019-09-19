export const LABELS = ['Atom', 'Hydro', 'Wiatr', 'Słońce', 'CHP', 'Gaz', 'Węgiel', 'Ropa']
export const KEYS = ['nuclear', 'hydro', 'wind', 'solar', 'chp', 'gas', 'coal', 'oil']

export const INSTALLED_TODAY = {
  nuclear: 0,
  hydro: 893,
  wind: 1374,
  solar: 4947,
  chp: 2751,
  gas: 1956,
  coal: 30276,
  oil: 0,
  demand: 27600
}

export const MAX_POWERS = {
  nuclear: 1,
  hydro: 0.42,
  wind: 0.7,
  solar: 0.65,
  chp: 0.75,
  gas: 1,
  coal: 0.6,
  oil: 1,
  demand: 1
}

export const MAX_CAPACITY = {
  nuclear: 7884,
  hydro: 3700,
  wind: 2630,
  solar: 1000,
  chp: 3050,
  gas: 7884,
  coal: 7884,
  oil: 7884
}

export const CAPACITY_FACTORS = {
  nuclear: 0.9,
  hydro: 0.82,
  wind: 0.9,
  solar: 0,
  chp: 0.77,
  gas: 0.9,
  coal: 0.7,
  oil: 0.9
}

// grams / kWh
export const CO2 = {
  nuclear: 5,
  hydro: 9,
  wind: 15,
  solar: 46,
  chp: 15,
  gas: 515,
  coal: 881,
  oil: 993
}

export const WASTE = {
  nuclear: 0.005,
  hydro: 0,
  wind: 0,
  solar: 0,
  chp: 15,
  gas: 0,
  coal: 37,
  oil: 0
}

export const FUEL = {
  nuclear: 0.005,
  hydro: 0,
  wind: 0,
  solar: 0,
  chp: 1000,
  gas: 187,
  coal: 379,
  oil: 331
}

export const POWER_COOF = {
  nuclear: [
    2.60027483362602e-12,
    -4.21522717629026e-10,
    8.43915935489853e-9,
    8.25183318068457e-7,
    -1.04055498388049e-5,
    -0.00395592006246061
  ],
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
  ],
  chp: [0, 0, -8.66564795646319e-9, 1.28246828222672e-6, 1.86719686851292e-5, -0.0139171520689115],
  coal: [
    2.60027483362602e-12,
    -4.21522717629026e-10,
    8.43915935489853e-9,
    8.25183318068457e-7,
    -1.04055498388049e-5,
    -0.00395592006246061
  ],
  demand: [
    5.22305012772976e-12,
    -1.99919545823719e-9,
    2.84634493734413e-7,
    -1.96831546062457e-5,
    0.000718706830438671,
    -0.0176184293258551
  ]
}
