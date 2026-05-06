type Id = string

export type Level = 'veryPoor' | 'poor' | 'good' | 'veryGood' | 'excellent'

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
  level: Level
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

interface LanguageLevels {
  spoken: Level
  written: Level
}

export interface LanguageSkill {
  id: Id
  language: string
  levels?: LanguageLevels
  motherLanguage?: boolean
}

export type Hobby = string

type WithoutId<T> = {
  [K in keyof T]: T[K] extends (infer U)[]
    ? U extends { id: Id }
      ? Omit<U, 'id'>[]
      : T[K]
    : T[K] extends { id: Id }
      ? Omit<T[K], 'id'>
      : T[K]
}

export interface Data {
  me: Me
  contact: Contact
  languageSkill: LanguageSkill[]
  hobby: Hobby[]
  education: Education[]
  skill: Skill[]
  workExperience: WorkExperience[]
}

export type DataWithoutId = WithoutId<Data>
