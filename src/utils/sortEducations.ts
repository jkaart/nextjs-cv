import type { Education } from '@data/data'

export const compareEducations = (a: Education, b: Education) =>
  b.yearOfDecree - a.yearOfDecree

export const sortEducations = (educations: Education[]) => {
  return [...educations].sort(compareEducations)
}
