export type EmptyObject = Record<string, never>

/**
 * @usage defines a type of an object's values
 */
export type Valueof<T> = T[keyof T]

/**
 * @usage changes a required field to an optional one
 * @source https://stackoverflow.com/a/54178819
 */
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
