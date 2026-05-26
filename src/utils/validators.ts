import { allDevIcons, type DevIconName } from '@allDevIconTypes'

const allDevIconsSet: ReadonlySet<string> = new Set(allDevIcons)

export const validateRawSkills = (
  skills: ReadonlyArray<{ iconName: unknown }>
) => {
  skills.forEach(skill => {
    validateDevIcon(skill.iconName)
  })
}

export const validateDevIcon: (
  iconName: unknown
) => asserts iconName is DevIconName = iconName => {
  if (iconName === '') throw new Error('iconName must be a non-empty string')

  if (typeof iconName !== 'string' || !allDevIconsSet.has(iconName)) {
    throw new Error(`${iconName} is not a valid icon name`)
  }
}
