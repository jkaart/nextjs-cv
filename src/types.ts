type Id = string

type Level = 'poor' | 'good' | 'excellent'

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

export interface Hobby {
  id: Id
  hobby: string
}

export interface Language {
  id: Id
  language: string
  level: Level
}

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
  language: Language[]
  hobbies: Hobby[]
  education: Education[]
  skill: Skill[]
  workExperience: WorkExperience[]
}

export type DataWithoutId = WithoutId<Data>
// export type DataWithoutId = {
//     me: Omit<Me, "id">;
//     contact: Omit<Contact, "id">;
//     language: Omit<Language[], "id">;
//     hobbies: Omit<Hobby[], "id">;
//     education: Omit<Education[], "id">;
//     skill: Omit<Skill[], "id">;
//     workExperience: Omit<WorkExperience[], "id">;
// }
