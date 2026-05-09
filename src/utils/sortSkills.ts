import type { Skill } from '@types'

/**
 * Compares two skill entries by their language name in alphabetical order.
 * Returns -1 if a's language comes before b's, 1 if after, 0 if equal.
 * Used as a comparator function for sorting skills array.
 *
 * @param a - First skill entry to compare
 * @param b - Second skill entry to compare
 * @returns Negative number if a comes before b, positive if after, 0 if equal
 */
export const compareSkills = (a: Skill, b: Skill) => {
  const skillA = a.language.toLowerCase()
  const skillB = b.language.toLowerCase()

  if (skillA < skillB) return -1
  if (skillA > skillB) return 1
  return 0
}

/**
 * Sorts an array of skill entries alphabetically by language name in ascending order.
 * Returns a new sorted array with skills ordered A-Z by their language.
 * Uses compareSkills as the comparison function for sorting.
 *
 * @param skills - Array of Skill objects to sort
 * @returns New array of skills sorted by language (ascending, A-Z)
 */
export const sortSkills = (skills: Skill[]) => {
  return [...skills].sort(compareSkills)
}
