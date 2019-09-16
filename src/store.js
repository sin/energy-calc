const ls = window.localStorage
const STORE_KEY = 'energy-calc-data'
const DEFAULT_STATE = {
  nuclear: 9000,
  hydro: 16000,
  wind: 7500,
  solar: 500,
  gas: 500,
  oil: 1000,
  chp: 4500,
  coal: 0,
  demand: 26700
}

export function save(data) {
  ls.setItem(STORE_KEY, JSON.stringify(data))
}

export function load() {
  const data = ls.getItem(STORE_KEY)
  if (data) return JSON.parse(data)

  reset()
  return DEFAULT_STATE
}

export function reset() {
  ls.setItem(STORE_KEY, JSON.stringify(DEFAULT_STATE))
  return load()
}
