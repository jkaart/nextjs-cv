import type { Data, DataWithId, DataWithoutId } from '@types'
import { addIdToData } from '@utils/addIdToData'
import { parseDateFields } from '@utils/parseDateFields'
import { validateRawSkill } from '@utils/validators'

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
  skill: [
    {
      language: 'HTML',
      level: 'excellent',
      type: 'frontend',
      iconName: 'html5'
    }
  ],
  workExperience: []
}

const dataWithId: DataWithId = addIdToData(rawData)

validateRawSkill(dataWithId.skill)

export const data: Data = parseDateFields(dataWithId)
