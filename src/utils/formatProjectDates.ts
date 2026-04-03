import { dateToString } from "./dateToString"

export const formatProjectDates = (startDate: string | undefined, endDate: string | undefined) => {
  const formattedStartDate = startDate
    ? Number.isNaN(new Date(startDate).getTime())
      ? null
      : dateToString(new Date(startDate), 'date')
    : null

  const formattedEndDate = endDate
    ? endDate === 'current'
      ? 'nykyinen'
      : Number.isNaN(new Date(endDate).getTime())
        ? null
        : dateToString(new Date(endDate), 'date')
    : null

  return { startDate: formattedStartDate, endDate: formattedEndDate }
}
