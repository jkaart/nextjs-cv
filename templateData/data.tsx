import { v4 as uuidv4 } from 'uuid'

type Id = string

export interface Image {
  src: string
  altText: string
}

export interface Me {
  firstName: string
  lastName: string
  jobTitle: string
  image: Image
}

export interface Contact {
  email: string
  linkedIn: string
  homepage: string
  gitHub: string
}

export interface Education {
  id: Id
  academy: string
  education: string
  degree: 'Perustutkinto' | 'Ammattitutkinto' | 'Työvoimakoulutus'
  yearOfDecree: number
  professionalTitle: string
}

export interface Skill {
  id: Id
  language: string
  level: 'poor' | 'good' | 'excellent'
  type: 'frontend' | 'backend' | 'frontend/backend' | 'other'
  iconName: string
}

export interface WorkExperience {
  id: Id
  title: string
  workplaceName: string
  job: string
  startDate: Date
  endDate: Date
}

interface RawData {
  me: Me
  contact: Contact
  education: Omit<Education, 'id'>[]
  skill: Omit<Skill, 'id'>[]
  workExperience: Omit<WorkExperience, 'id'>[]
}

export interface Data {
  me: Me
  contact: Contact
  education: Education[]
  skill: Skill[]
  workExperience: WorkExperience[]
}

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
