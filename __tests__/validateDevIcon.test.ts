import { allDevIcons } from '@allDevIconTypes'
import { validateDevIcon } from '@utils/validators'

describe('validateDevIcon', () => {
  it('returns nothing if valid css iconName', () => {
    expect(allDevIcons).toContain('css')
    expect(() => validateDevIcon('css')).not.toThrow()
  })

  it('returns nothing if valid react iconName', () => {
    expect(allDevIcons).toContain('react')
    expect(() => validateDevIcon('react')).not.toThrow()
  })

  it('returns Error if iconName not acceptable', () => {
    expect(() => validateDevIcon('random-text')).toThrow(
      'random-text is not a valid icon name'
    )
  })

  it('returns Error if iconName is empty string', () => {
    expect(() => validateDevIcon('')).toThrow(
      'iconName must be a non-empty string'
    )
  })
})
