import type { DataWithoutId } from '@types'
import { v4 as uuidv4 } from 'uuid'

export const addIdToData = (data: DataWithoutId) => {
  return {
    ...data,
    education: data.education.map(education => ({
      ...education,
      id: uuidv4()
    })),
    skill: data.skill.map(skill => ({ ...skill, id: uuidv4() })),
    workExperience: data.workExperience.map(workExperience => ({
      ...workExperience,
      id: uuidv4()
    })),
    languageSkill: data.languageSkill.map(language => ({
      ...language,
      id: uuidv4()
    }))
  }
}
