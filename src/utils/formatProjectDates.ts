import { dateToString } from '@utils/dateToString'

/**
 * Formats project start and end dates into a standardized string format.
 * Validates input dates and handles special cases like 'current' for ongoing projects.
 * Returns null for invalid or undefined dates.
 *
 * @param startDate - Start date as ISO string or undefined
 * @param endDate - End date as ISO string or undefined
 * @returns Object containing formatted start and end dates in DD.MM.YYYY format, or null values
 */
export const formatProjectDates = (
  startDate: string | undefined,
  endDate: string | undefined
) => {
  const formattedStartDate = startDate
    ? Number.isNaN(new Date(startDate).getTime())
      ? null
      : dateToString(new Date(startDate), 'date')
    : null

  const formattedEndDate = endDate
    ? Number.isNaN(new Date(endDate).getTime())
      ? null
      : dateToString(new Date(endDate), 'date')
    : null

  return { startDate: formattedStartDate, endDate: formattedEndDate }
}
