type OutputFormat = 'month' | 'date'

export const dateToString = (date: Date, outputFormat?: OutputFormat) => {
  if (!outputFormat || outputFormat === 'month') {
    return (`${date.getMonth() + 1}\\${date.getFullYear()}`)
  }
  else if (outputFormat === 'date') {
    return (`${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`)
  }
}