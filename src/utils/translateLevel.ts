import type { Level } from '@types'

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
