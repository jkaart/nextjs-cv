import type { Data, DataWithId, DataWithoutId } from '@types'
import { addIdToData } from '@utils/addIdToData'
import { parseDateFields } from '@utils/parseDateFields'

export const rawData: DataWithoutId = {
  me: {
    firstName: 'John',
    lastName: 'Doe',
    jobTitle: 'Toimitusjohtaja',
    image: {
      src: '',
      altText: 'Picture of me'
    }
  },
  contact: {
    email: '',
    linkedIn: '',
    homepage: '',
    gitHub: ''
  },
  languageSkill: [],
  hobby: [],
  education: [],
  skill: [
    {
      language: 'HTML',
      level: 'excellent',
      type: 'frontend',
      iconName: 'html5'
    },
    {
      language: 'CSS',
      level: 'excellent',
      type: 'frontend',
      iconName: 'css3'
    },
    {
      language: 'JavaScript',
      level: 'excellent',
      type: 'frontend',
      iconName: 'javascript'
    },
    {
      language: 'React',
      level: 'excellent',
      type: 'frontend',
      iconName: 'react'
    }
  ],
  workExperience: []
}

const dataWithId: DataWithId = addIdToData(rawData)

export const data: Data = parseDateFields(dataWithId)
