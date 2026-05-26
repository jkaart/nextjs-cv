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
})
