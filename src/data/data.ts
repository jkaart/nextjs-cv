import type { Data, DataWithId, DataWithoutId } from '@types'
import { addIdToData } from '@utils/addIdToData'
import { parseDateFields } from '@utils/parseDateFields'

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

const dataWithId: DataWithId = addIdToData(rawData)

export const data: Data = parseDateFields(dataWithId)
