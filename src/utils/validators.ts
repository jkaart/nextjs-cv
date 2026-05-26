import { allDevIcons } from '@allDevIconTypes'

export const validateRawSkills = (
  skills: ReadonlyArray<{ iconName: string }>
) => {
  skills.forEach(skill => {
    validateDevIcon(skill.iconName)
  })
}

export const validateDevIcon = (iconName: string) => {
  if (iconName === '') {
    throw new Error('iconName must be a non-empty string')
  }
  if (!(allDevIcons as ReadonlyArray<string>).includes(iconName)) {
    throw new Error(`${iconName} is not valid icon name`)
  }
}
