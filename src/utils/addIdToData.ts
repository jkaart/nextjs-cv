import type { DataWithId, DataWithoutId } from '@types'
import { v4 as uuidv4 } from 'uuid'

/**
 * Adds unique UUID identifiers to all nested arrays in the data object.
 * Generates IDs for education, skill, workExperience, and languageSkill arrays.
 *
 * @param data - The DataWithoutId object containing arrays without IDs
 * @returns A new Data object with all array items having unique UUID ids
 */
export const addIdToData = (data: DataWithoutId): DataWithId => {
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
