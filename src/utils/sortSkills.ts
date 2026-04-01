import type { Skill } from '@/data/data'

export const compareSkills = (a: Skill, b: Skill) => {
  const skillA = a.language.toLowerCase()
  const skillB = b.language.toLowerCase()

  if (skillA < skillB) return -1
  if (skillA > skillB) return 1
  return 0
}

export const sortSkills = (skills: Skill[]) => {
  return [...skills].sort(compareSkills)
}
