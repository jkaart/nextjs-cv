import type { Hobby } from '@types'

export const compareHobbies = (a: Hobby, b: Hobby) =>
  a.toLowerCase().localeCompare(b.toLowerCase())

/**
 * Sorts an array of hobby entries alphabetically in ascending order.
 * Returns a new sorted array with hobbies ordered A-Z by their string value.
 * Uses default JavaScript sort comparison on hobby names/identifiers.
 *
 * @param hobbies - Array of Hobby objects to sort
 * @returns New array of hobbies sorted alphabetically (ascending)
 */
export const sortHobbies = (hobbies: Hobby[]) => {
  return [...hobbies].sort(compareHobbies)
}
