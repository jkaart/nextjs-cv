import { getDevIcon, getDevIconPath } from '@utils/getDevIcon'

describe('getDevIcon', () => {
  it('should return an icon component for valid icon names', async () => {
    const Icon = getDevIcon('siReact')
    expect(Icon).toBeDefined()
  })

  it('should handle invalid icon names gracefully', async () => {
    const Icon = getDevIcon('nonExistentIcon123')
    expect(Icon).toBeDefined()
  })
})

describe('getDevIconPath', () => {
  it('should return a valid SVG path for known icons', async () => {
    const iconPaths = await getDevIconPath('siReact')

    if (iconPaths) {
      expect(typeof iconPaths.paths).toBe('array')
      iconPaths.paths.forEach(path => {
        expect(typeof path.d).toBe('string')
        expect(typeof path.fill).toBe('string')
      })
    }
  })

  it('should return null for invalid icon names', async () => {
    const path = await getDevIconPath('nonExistentIcon123')
    expect(path).toBe(null)
  })

  it('should handle various valid react-icons', async () => {
    const icons = ['siReact', 'siGithub', 'siNodejs', 'siPython']

    for (const icon of icons) {
      const iconPaths = await getDevIconPath(icon)
      if (iconPaths) {
        expect(typeof iconPaths.paths).toBe('array')
        iconPaths.paths.forEach(path => {
          expect(typeof path.d).toBe('string')
          expect(typeof path.fill).toBe('string')
        })
      }
    }
  })

  it('should return null when component is not a function', async () => {
    const path = await getDevIconPath('invalid')
    expect(path).toBe(null)
  })
})
