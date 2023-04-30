import { EmptyObject } from './object'

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }

/**
 * @usage defines mutually exclusive relationship between types
 * @source https://stackoverflow.com/a/53229567
 */
export type XOR<T, U> = T | U extends object
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U

export const maybeProps = <T extends Record<string, unknown>>(
  conditional: boolean = false,
  props: T
): T | EmptyObject => {
  if (conditional) {
    return props
  } else {
    return {}
  }
}

export const maybeProp = <T = unknown>(
  conditional: boolean = false,
  value: T
): T | undefined => {
  if (conditional) {
    return value
  } else {
    return undefined
  }
}

export const stopPropagation = (
  ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) => {
  ev.stopPropagation()
}
