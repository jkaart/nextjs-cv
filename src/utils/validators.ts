import { allDevIcons, type DevIconName } from '@allDevIconTypes'

const allDevIconsSet = new Set(allDevIcons)

export const validateRawSkills = (
  skills: ReadonlyArray<{ iconName: DevIconName }>
) => {
  skills.forEach(skill => {
    validateDevIcon(skill.iconName)
  })
}

export const validateDevIcon = (iconName: DevIconName) => {
  if (!allDevIconsSet.has(iconName)) {
    throw new Error(`${iconName} is not a valid icon name`)
  }
}
