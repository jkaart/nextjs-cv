import type { Education } from '@types'

/**
 * Compares two education entries by year of decree in descending order.
 * Returns a positive value if b is newer, negative if a is newer, 0 if equal.
 * Used as a comparator function for sorting educations array.
 *
 * @param a - First education entry to compare
 * @param b - Second education entry to compare
 * @returns Negative number if a comes before b, positive if after, 0 if equal
 */
export const compareEducations = (a: Education, b: Education) =>
  b.yearOfDecree - a.yearOfDecree

/**
 * Sorts an array of education entries by year of decree in descending order.
 * Returns a new sorted array with the most recent educations first.
 * Uses compareEducations as the comparison function for sorting.
 *
 * @param educations - Array of Education objects to sort
 * @returns New array of educations sorted by yearOfDecree (descending)
 */
export const sortEducations = (educations: Education[]) => {
  return [...educations].sort(compareEducations)
}
