import type { WorkExperience } from '@types'

/**
 * Compares two work experience entries by their start date in descending order.
 * Returns a positive value if b's startDate is later, negative if a's is later, 0 if equal.
 * Used as a comparator function for sorting work experiences array.
 *
 * @param a - First work experience entry to compare
 * @param b - Second work experience entry to compare
 * @returns Negative number if a comes before b (a started earlier), positive if after, 0 if equal
 */
export const compareWorkExperiences = (a: WorkExperience, b: WorkExperience) =>
  b.startDate.getTime() - a.startDate.getTime()

/**
 * Sorts an array of work experience entries by start date in descending order.
 * Returns a new sorted array with the most recent work experiences first.
 * Uses compareWorkExperiences as the comparison function for sorting.
 *
 * @param workExperiences - Array of WorkExperience objects to sort
 * @returns New array of work experiences sorted by startDate (descending, newest first)
 */
export const sortWorkExperiences = (workExperiences: WorkExperience[]) => {
  return [...workExperiences].sort(compareWorkExperiences)
}
