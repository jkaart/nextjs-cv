import type { Level } from '@types'

/**
 * Translates a proficiency level enum value to Finnish language.
 * Maps English level descriptions to their Finnish equivalents.
 * Throws TypeError if an invalid level is provided.
 *
 * @param level - Proficiency level enum value (veryPoor, poor, good, veryGood, excellent)
 * @returns Corresponding Finnish translation of the proficiency level
 * @throws {TypeError} If level is not a valid proficiency level
 */
export const translateLevel = (level: Level) => {
  switch (level) {
    case 'veryPoor':
      return 'erittäin huono'
    case 'poor':
      return 'huono'
    case 'good':
      return 'hyvä'
    case 'veryGood':
      return 'tosi hyvä'
    case 'excellent':
      return 'erinomainen'
    default:
      throw TypeError('invalid level')
  }
}
