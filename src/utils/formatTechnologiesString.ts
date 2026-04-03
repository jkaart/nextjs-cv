
const technologiesReducer = (text: string, value: string, index: number, array: string[]): string => (
  text + (index < array.length - 1 ? ', ' : ' ja ') + value)

export const formatTechnologiesString = (technologies: string[]): string => {
  if (!technologies.length) return ''
  return [...technologies].reduce(technologiesReducer)
}