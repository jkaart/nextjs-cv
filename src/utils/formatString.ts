/**
 * Reducer function that accumulates formatted strings with proper Finnish conjunctions.
 * Adds ', ' between items and ' ja ' before the last item for natural Finnish listing.
 *
 * @param text - The accumulated string so far
 * @param value - The current value to add
 * @param index - Current index in the array
 * @param array - The full array being processed
 * @returns Accumulated string with appropriate separator based on position
 */
const stringReducer = (
  text: string,
  value: string,
  index: number,
  array: string[]
): string => text + (index < array.length - 1 ? ', ' : ' ja ') + value

/**
 * Formats an array of strings into a comma-separated list with Finnish conjunction.
 * Uses ', ' between items and ' ja ' before the last item for natural Finnish listing.
 * Returns empty string for empty arrays.
 *
 * @param stringArray - Array of strings to format
 * @returns Formatted string with items separated by commas, ending with ' ja ' before last item
 */
export const formatString = (stringArray: string[]): string => {
  if (!stringArray.length) return ''
  return [...stringArray].reduce(stringReducer)
}
