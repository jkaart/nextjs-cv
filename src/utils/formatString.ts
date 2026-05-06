const stringReducer = (
  text: string,
  value: string,
  index: number,
  array: string[]
): string => text + (index < array.length - 1 ? ', ' : ' ja ') + value

export const formatString = (stringArray: string[]): string => {
  if (!stringArray.length) return ''
  return [...stringArray].reduce(stringReducer)
}
