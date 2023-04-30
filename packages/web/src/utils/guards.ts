/**
 * @usage Determine if a value is defined
 */
export const isDefined = <T>(arg: T | undefined): arg is T =>
  typeof arg !== 'undefined'

/**
 * @usage Determine if a value is undefined, null or empty string
 */
export const isEmpty = (arg: string | number | null | undefined): boolean =>
  typeof arg === 'undefined' || arg === null || arg === ''
