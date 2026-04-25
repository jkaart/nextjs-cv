import { readFileSync } from 'node:fs'
import { readdir, stat } from 'node:fs/promises'
import path from 'node:path'
import { sortProjects } from '@utils/sortProjects'
import matter from 'gray-matter'

interface Url {
  title: string
  url: string
}

export interface ProjectMetadata {
  title?: string
  summary?: string
  technologies?: string[]
  startDate?: string
  endDate?: string | 'current'
  urls?: Url[]
  slug: string
}

interface Project {
  metadata: ProjectMetadata
  content: string
}

const dataRootDirectory = path.join(process.cwd(), 'src', 'data')

const mdxRootDirectory = path.join(dataRootDirectory, 'mdx', 'projects')

export const assetsRootDirectory = path.join(
  dataRootDirectory,
  'assets',
  'projects'
)

export const getProject = async (slug: string): Promise<Project | null> => {
  try {
    const filePath = path.join(mdxRootDirectory, `${slug}.mdx`)
    const fileContents = readFileSync(filePath, { encoding: 'utf-8' })

    const { data, content } = matter(fileContents)

    return { metadata: { ...data, slug }, content }
  } catch {
    return null
  }
}

export const getProjects = async (
  limit?: number
): Promise<ProjectMetadata[]> => {
  const files = await readdir(mdxRootDirectory)

  const projects = files.map((file: string) => getProjectMetadata(file))
  const filteredProjectsWithEndDate = projects.filter(
    (project): project is ProjectMetadata & { endDate: string } =>
      typeof project.endDate === 'string'
  )

  const filteredProjectsWithoutEndDate = projects.filter(
    (project): project is ProjectMetadata =>
      typeof project.endDate === 'undefined'
  )

  const sortedProjects = sortProjects(filteredProjectsWithEndDate)

  const allProjects = [...sortedProjects, ...filteredProjectsWithoutEndDate]

  if (limit) {
    return allProjects.slice(0, limit)
  }

  return allProjects
}

export const getProjectMetadata = (filepath: string): ProjectMetadata => {
  const slug = filepath.replace(/\.mdx$/, '')
  const filePath = path.join(mdxRootDirectory, filepath)
  const fileContent = readFileSync(filePath, { encoding: 'utf-8' })

  const { data } = matter(fileContent)
  return { ...data, slug }
}

export const getProjectImages = async (slug: string) => {
  if (!slug) {
    return null
  }
  const filesPath = path.join(assetsRootDirectory, slug)

  const files = await readdir(filesPath)

  const images = files
    .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .map(file => `/assets/projects/${slug}/${file}`)

  return images
}

const scanDir = async (dir: string): Promise<string[]> => {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = await Promise.all(
    entries.map(async entry => {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) return scanDir(full)
      return full
    })
  )
  return files.flat()
}

export const getLastContentUpdate = async () => {
  const files = await scanDir(dataRootDirectory)

  const times = await Promise.all(
    files
      .filter(file => /\.(mdx|tsx|jpg|jpeg|png|webp)$/.test(file))
      .map(async file => {
        const fileStat = await stat(file)
        return fileStat.mtimeMs
      })
  )

  return new Date(Math.max(...times))
}
