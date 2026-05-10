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

export interface EducationRaw {
  id: Id
  academy: string
  education: string
  degree: 'Perustutkinto' | 'Ammattitutkinto' | 'Työvoimakoulutus'
  dateOfDecree: string
  professionalTitle: string
}

export interface Skill {
  id: Id
  language: string
  level: Level
  type: 'frontend' | 'backend' | 'frontend/backend' | 'other'
  iconName: string
}

export interface WorkExperienceRaw {
  id: Id
  title: string
  workplaceName: string
  job: string
  startDate: string
  endDate: string
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

export interface DataWithId {
  me: Me
  contact: Contact
  languageSkill: LanguageSkill[]
  hobby: Hobby[]
  education: EducationRaw[]
  skill: Skill[]
  workExperience: WorkExperienceRaw[]
}

export type DataWithoutId = WithoutId<DataWithId>

export type ParseDateFields<T> = {
  [K in keyof T]: K extends 'dateOfDecree' | 'startDate' | 'endDate'
    ? Date
    : T[K] extends Array<infer U>
      ? ParseDateFields<U>[]
      : T[K] extends object
        ? ParseDateFields<T[K]>
        : T[K]
}

export type Data = ParseDateFields<DataWithId>

export type Education = ParseDateFields<EducationRaw>
export type WorkExperience = ParseDateFields<WorkExperienceRaw>
