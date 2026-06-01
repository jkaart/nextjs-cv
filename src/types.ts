import type { DevIconName } from '@allDevIconTypes'
import type { SelectedDevIconName } from '@selectedDevIconTypes'

/** Unique identifier for entities */
type Id = string

/** Proficiency level enumeration */
export type Level = 'veryPoor' | 'poor' | 'good' | 'veryGood' | 'excellent'

/** Finnish education system degrees */
type Degree =
  | 'Perustutkinto'
  | 'Ammattitutkinto'
  | 'Ammattikorkeakoulututkinto'
  | 'Ylioppilastutkinto'
  | 'Yliopistotutkinto'
  | 'Työvoimakoulutus'
  | 'Muu'

/** Image metadata */
export interface Image {
  src: string
  altText: string
}

/** Personal information about the profile owner */
export interface Me {
  firstName: string
  lastName: string
  jobTitle: string
  image: Image
}

/** Contact information */
export interface Contact {
  email: string
  linkedIn: string
  homepage: string
  gitHub: string
}

/** Raw education data from source */
export interface EducationRaw {
  id: Id
  academy: string
  education: string
  degree: Degree
  dateOfGraduation: string
  professionalTitle: string
}

/** Skill information with proficiency level */
export interface Skill {
  id: Id
  language: string
  level: Level
  type: 'frontend' | 'backend' | 'frontend/backend' | 'other'
  iconName: SelectedDevIconName
}

export interface SkillRaw extends Omit<Skill, 'iconName'> {
  iconName: DevIconName
}

/** Raw work experience data from source */
export interface WorkExperienceRaw {
  id: Id
  title: string
  workplaceName: string
  job: string
  startDate: string
  endDate: string
}

/** Language proficiency levels for spoken and written skills */
interface LanguageLevels {
  spoken: Level
  written: Level
}

/** Language skill with optional proficiency levels */
export interface LanguageSkill {
  id: Id
  language: string
  levels?: LanguageLevels
  motherLanguage?: boolean
}

/** Hobby or interest */
export type Hobby = string

/** Utility type that removes the 'id' field from objects and arrays */
type WithoutId<T> = {
  [K in keyof T]: T[K] extends (infer U)[]
    ? U extends { id: Id }
      ? Omit<U, 'id'>[]
      : T[K]
    : T[K] extends { id: Id }
      ? Omit<T[K], 'id'>
      : T[K]
}

/** Main data structure containing all profile information with IDs */
export interface DataWithId {
  sourceCodeUrl?: string
  me: Me
  contact: Contact
  languageSkill: LanguageSkill[]
  hobby: Hobby[]
  education: EducationRaw[]
  skill: Skill[]
  workExperience: WorkExperienceRaw[]
}

/** Main data structure without ID fields for display purposes */
export interface DataWithoutId extends Omit<WithoutId<DataWithId>, 'skill'> {
  skill: Omit<SkillRaw, 'id'>[]
}

/** Utility type that converts date string fields to Date objects */
export type ParseDateFields<T> = {
  [K in keyof T]: K extends 'dateOfGraduation' | 'startDate' | 'endDate'
    ? Date
    : T[K] extends Array<infer U>
      ? ParseDateFields<U>[]
      : T[K] extends object
        ? ParseDateFields<T[K]>
        : T[K]
}

/** Fully parsed data structure with Date objects instead of date strings */
export type Data = ParseDateFields<DataWithId>

/** Parsed education data with Date objects */
export type Education = ParseDateFields<EducationRaw>

/** Parsed work experience data with Date objects */
export type WorkExperience = ParseDateFields<WorkExperienceRaw>

export type ContactIconType = 'homePage' | 'eMail' | 'gitHub' | 'linkedIn'

interface Url {
  title: string
  url: string
}

export interface ProjectMetadata {
  title?: string
  summary?: string
  technologies?: string[]
  startDate?: string
  endDate?: string
  tasks?: string[]
  roles?: string[]
  urls?: Url[]
  slug: string
}

export type SSRProjectMetadata = ProjectMetadata & { lastUpdateDate: Date }

export interface Project {
  metadata: SSRProjectMetadata
  content: string
}
