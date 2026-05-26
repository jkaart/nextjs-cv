import { allDevIcons } from '@allDevIconTypes'
import type { SkillRaw } from '@types'

export const validateRawSkill = (skills: SkillRaw[]) => {
  skills.forEach(skill => {
    validateDevIcon(skill.iconName)
  })
}

export const validateDevIcon = (iconName: string) => {
  if (iconName === '') {
    throw new Error('an empty string is not acceptable')
  }
  if (!allDevIcons.includes(iconName)) {
    throw new Error(`${iconName} is not valid icon name`)
  }
}
