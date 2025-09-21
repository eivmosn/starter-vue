import { isNumber } from './'

export function sum<T>(source: T[], key: keyof T) {
  return source.reduce((acc, item) => isNumber(item[key]) ? acc + item[key] : acc, 0)
}

export function avg<T>(source: T[], key: keyof T) {
  return sum(source, key) / source.length
}

export function max<T>(source: T[], key: keyof T) {
  return Math.max(...source.map(item => isNumber(item[key]) ? item[key] : 0))
}
export function min<T>(source: T[], key: keyof T) {
  return Math.min(...source.map(item => isNumber(item[key]) ? item[key] : 0))
}

export function range<T>(source: T[], key: keyof T) {
  return max(source, key) - min(source, key)
}
