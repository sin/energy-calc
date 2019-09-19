import { INSTALLED_TODAY } from './simulator/constants'

const ls = window.localStorage
const STORE_KEY = 'energy-calc-data'

export function save(data) {
  ls.setItem(STORE_KEY, JSON.stringify(data))
}

export function load() {
  const data = ls.getItem(STORE_KEY)
  if (data) return JSON.parse(data)

  reset()
  return INSTALLED_TODAY
}

export function reset() {
  ls.setItem(STORE_KEY, JSON.stringify(INSTALLED_TODAY))
  return load()
}
