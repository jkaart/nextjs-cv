import type { Data, DataWithoutId } from '@types'
import { addIdToData } from '@utils/addIdToData'

const rawData: DataWithoutId = {
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
  skill: [],
  workExperience: []
}

export const data: Data = addIdToData(rawData)
