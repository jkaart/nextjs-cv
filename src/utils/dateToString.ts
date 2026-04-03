type OutputFormat = 'month' | 'date'

export const dateToString = (date: Date, outputFormat?: OutputFormat): string => {
  if (outputFormat === 'date') {
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
  }
  return `${date.getMonth() + 1}\\${date.getFullYear()}`
}
