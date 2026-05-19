import type { ProjectMetadata } from '@types'

/**
 * Compares two project metadata entries by their end date in reverse alphabetical order.
 * Returns -1 if a's endDate comes after b's, 1 if before, 0 if equal.
 * This sorts projects with later end dates first (Z to A).
 *
 * @param a - First project metadata entry with endDate
 * @param b - Second project metadata entry with endDate
 * @returns Negative number if a should come before b, positive if after, 0 if equal
 */
export const compareProjects = (
  a: ProjectMetadata & { endDate: string },
  b: ProjectMetadata & { endDate: string }
) => {
  const projectA = a.endDate.toLowerCase()
  const projectB = b.endDate.toLowerCase()

  if (projectA > projectB) return -1
  if (projectA < projectB) return 1
  return 0
}

/**
 * Sorts an array of project metadata entries by end date in reverse alphabetical order.
 * Returns a new sorted array with projects having later end dates first.
 * Uses compareProjects as the comparison function for sorting.
 *
 * @param projects - Array of ProjectMetadata objects with endDate to sort
 * @returns New array of projects sorted by endDate (reverse alphabetical, Z-A)
 */
export const sortProjects = (
  projects: (ProjectMetadata & { endDate: string })[]
) => {
  return [...projects].sort(compareProjects)
}
