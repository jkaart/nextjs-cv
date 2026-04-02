import type { WorkExperience } from '@/data/data'

export const compareWorkExperiences = (a: WorkExperience, b: WorkExperience) =>
  b.startDate.getTime() - a.startDate.getTime()

export const sortWorkExperiences = (workExperiences: WorkExperience[]) => {
  return [...workExperiences].sort(compareWorkExperiences)
}
