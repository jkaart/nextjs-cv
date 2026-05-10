import type { Data, DataWithId } from '@types'

export const parseDateFields = (data: DataWithId) => {
  const dataWithDateObjects: Data = {
    ...data,
    education: data.education.map(education => ({
      ...education,
      dateOfDecree: new Date(education.dateOfDecree)
    })),
    workExperience: data.workExperience.map(workExperience => ({
      ...workExperience,
      startDate: new Date(workExperience.startDate),
      endDate: new Date(workExperience.endDate)
    }))
  }
  return dataWithDateObjects
}
