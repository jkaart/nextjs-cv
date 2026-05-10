type OutputFormat = 'year' | 'month' | 'date'

/**
 * Converts a Date object to a formatted string.
 * Supports three output formats: year, month-year or full date (day.month.year).
 *
 * @param date - The Date object to convert
 * @param outputFormat - Optional format specifier ('year' for YYYY, 'month' for MM/YYYY, 'date' for DD.MM.YYYY)
 * @returns Formatted date string based on the specified output format
 */
export const dateToString = (
  date: Date,
  outputFormat?: OutputFormat
): string => {
  if (outputFormat === 'date') {
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
  }
  if (outputFormat === 'year') {
    return date.getFullYear().toString()
  }
  return `${date.getMonth() + 1}\\${date.getFullYear()}`
}
