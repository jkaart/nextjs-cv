import { allDevIcons } from '@allDevIconTypes'
import { validateDevIcon } from '@utils/validators'

describe('validateDevIcon', () => {
  it('return nothing if valid css iconName', () => {
    const validIconName = allDevIcons[allDevIcons.indexOf('css')]
    expect(() => validateDevIcon(validIconName)).not.toThrow()
  })

  it('return nothing if valid react iconName', () => {
    const validIconName = allDevIcons[allDevIcons.indexOf('react')]
    expect(() => validateDevIcon(validIconName)).not.toThrow()
  })

  it('returns Error if iconName not acceptable', () => {
    expect(() => validateDevIcon('random-text')).toThrow(
      'random-text is not valid icon name'
    )
  })

  it('returns Error if iconName is empty string', () => {
    expect(() => validateDevIcon('')).toThrow(
      'an empty string is not acceptable'
    )
  })
})
