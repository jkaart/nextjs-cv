import type { Data, RawData } from '@types'
import { v4 as uuidv4 } from 'uuid'

const rawData: RawData = {
  me: {
    firstName: 'John',
    lastName: 'Doe',
    jobTitle: 'Toimitusjohtaja',
    image: {
      src: '',
      altText: 'Kuva minusta'
    }
  },
  contact: {
    email: '',
    linkedIn: '',
    homepage: '',
    gitHub: ''
  },
  education: [],
  skill: [],
  workExperience: []
}

export const data: Data = {
  ...rawData,
  education: rawData.education.map(education => ({
    ...education,
    id: uuidv4()
  })),
  skill: rawData.skill.map(skill => ({ ...skill, id: uuidv4() })),
  workExperience: rawData.workExperience.map(workExperience => ({
    ...workExperience,
    id: uuidv4()
  }))
}
