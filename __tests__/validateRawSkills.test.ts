import { validateRawSkills } from '@utils/validators'

describe('validateRawSkills', () => {
  const skills = [
    { iconName: 'html5' },
    { iconName: 'css' },
    { iconName: 'javascript' },
    { iconName: 'react' }
  ]

  it('does not throw error for valid skills', () => {
    validateRawSkills(skills)
  })
})
