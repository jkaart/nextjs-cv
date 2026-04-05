import { getDevIcon, getDevIconPath } from "@utils/getDevIcon"

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
    const path = await getDevIconPath('siReact')
    expect(typeof path).toBe('string')
  })

  it('should return empty string for invalid icon names', async () => {
    const path = await getDevIconPath('nonExistentIcon123')
    expect(path).toBe('')
  })

  it('should handle various valid react-icons', async () => {
    const icons = ['siReact', 'siGithub', 'siNodejs', 'siPython']

    for (const icon of icons) {
      const path = await getDevIconPath(icon)
      expect(typeof path).toBe('string')
    }
  })

  it('should return empty string when component is not a function', async () => {
    const path = await getDevIconPath('invalid')
    expect(path).toBe('')
  })
})
