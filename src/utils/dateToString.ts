type OutputFormat = 'month' | 'date'

/**
 * Converts a Date object to a formatted string.
 * Supports two output formats: month-year or full date (day.month.year).
 *
 * @param date - The Date object to convert
 * @param outputFormat - Optional format specifier ('month' for MM/YYYY, 'date' for DD.MM.YYYY)
 * @returns Formatted date string based on the specified output format
 */
export const dateToString = (
  date: Date,
  outputFormat?: OutputFormat
): string => {
  if (outputFormat === 'date') {
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
  }
  return `${date.getMonth() + 1}\\${date.getFullYear()}`
}
