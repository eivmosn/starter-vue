const hasOwnProperty = Object.prototype.hasOwnProperty

export const isArray: typeof Array.isArray = Array.isArray

export const objectToString: typeof Object.prototype.toString = Object.prototype.toString

export function toTypeString(value: unknown): string {
  return objectToString.call(value)
}

export function isPlainObject(val: unknown): val is object {
  return toTypeString(val) === '[object Object]'
}

export function isMap(val: unknown): val is Map<any, any> {
  return toTypeString(val) === '[object Map]'
}

export function isSet(val: unknown): val is Set<any> {
  return toTypeString(val) === '[object Set]'
}

export function isDate(val: unknown): val is Date {
  return toTypeString(val) === '[object Date]'
}
export function isRegExp(val: unknown): val is RegExp {
  return toTypeString(val) === '[object RegExp]'
}
export function isFunction(val: unknown): val is Function {
  return typeof val === 'function'
}

export const isString = (val: unknown): val is string => typeof val === 'string'

export const isSymbol = (val: unknown): val is symbol => typeof val === 'symbol'

export const isNumber = (val: unknown): val is number => typeof val === 'number'

export const isBoolean = (val: unknown): val is boolean => typeof val === 'boolean'

export function isObject(val: unknown): val is Record<any, any> {
  return val !== null && typeof val === 'object'
}

export function isPromise<T = any>(val: unknown): val is Promise<T> {
  return (
    (isObject(val) || isFunction(val))
    && isFunction((val as any).then)
    && isFunction((val as any).catch)
  )
}

export function hasOwn(val: object, key: string | symbol): key is keyof typeof val {
  return hasOwnProperty.call(val, key)
}

export function normalizePath(path: string): string[] {
  return path.match(/[^.[\]]+/g) || []
}

export function hasChinese(str: string) {
  return /[\u4E00-\u9FA5]/.test(str)
}

export function isPhoneNumber(str: string) {
  return /^1[3-9]\d{9}$/.test(str)
}

export function isEmail(str: string) {
  return /^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/.test(str)
}

export type FormatValue = ReturnType<typeof formatUrlValue>

export function formatUrlValue(value: string) {
  if (value === 'true')
    return true
  if (value === 'false')
    return false
  if (value === 'null')
    return null
  if (value === 'undefined')
    return undefined
  if (value.startsWith('[') && value.endsWith(']')) {
    return value.slice(1, -1).split(',')
  }
  return value
}

export function toBoolean(value: any): boolean {
  if (value === 'true')
    return true
  if (value === 'false')
    return false
  return !!value
}

export function getValueByPath(obj: any, path: string) {
  const keys = normalizePath(path)
  let value = obj
  for (const key of keys) {
    if (value && key in value) {
      value = value[key]
    }
    else {
      return undefined
    }
  }
  return value
}

export function getItem<T>(
  items: T[],
  predicate: (item: T) => boolean,
  childrenField: keyof T = 'children' as keyof T,
): T | undefined {
  const stack: T[] = [...items]
  while (stack.length) {
    const item = stack.pop()!
    if (predicate(item)) {
      return item
    }
    if (isArray(item[childrenField])) {
      stack.push(...item[childrenField])
    }
  }
}

export function flatten<T>(source: T[], childrenField: string | string[], delChildren = true) {
  const fields = isArray(childrenField) ? childrenField : [childrenField]
  const stack: T[] = [...source]
  const result: T[] = []
  while (stack.length) {
    const item = stack.pop()!
    result.push(item)
    for (const field of fields) {
      if (isArray(item[field as keyof T])) {
        stack.push(...item[field as keyof T] as T[])
        if (delChildren) {
          delete item[field as keyof T]
        }
      }
    }
  }
  return result
}

export function deepClone<T>(source: T): T {
  if (isPlainObject(source)) {
    const result: Record<string, unknown> = {}
    for (const key in source) {
      result[key] = deepClone(source[key])
    }
    return result as T
  }
  else if (isArray(source)) {
    return source.map(item => deepClone(item)) as T
  }
  else {
    return source
  }
}

export function setStyle(element: HTMLElement, style: Partial<CSSStyleDeclaration>) {
  for (const key in style) {
    if (hasOwn(style, key)) {
      const value = style[key]
      if (value !== undefined) {
        element.style[key] = value
      }
    }
  }
}

export function isEmpty(value: any): boolean {
  if (value === null || value === undefined) {
    return true
  }
  if (isArray(value) || isPlainObject(value)) {
    return Object.keys(value).length === 0
  }
  return value === '' || value === false || value === 0
}

export function fileToBase64(target: File | Blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(target)
    reader.onload = () => {
      resolve(reader.result as string)
    }
    reader.onerror = (error) => {
      reject(error)
    }
  })
}

export function legelUnit(value: string | number, unit = 'px') {
  const _value = Number.parseFloat(`${value}`)
  return `${_value}${unit}`
}
