import type { ProjectMetadata } from '@utils/projects'

export const compareProjects = (
  a: ProjectMetadata & { endDate: string },
  b: ProjectMetadata & { endDate: string }
) => {
  const projectA = a.endDate.toLowerCase()
  const projectB = b.endDate.toLowerCase()

  if (projectA > projectB) return -1
  if (projectA < projectB) return 1
  return 0
}

export const sortProjects = (
  projects: (ProjectMetadata & { endDate: string })[]
) => {
  return [...projects].sort(compareProjects)
}
