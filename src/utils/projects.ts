import { readFileSync } from 'node:fs'
import { readdir } from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'

export interface ProjectMetadata {
  title?: string
  summary?: string
  technologies?: string[]
  startDate?: string
  endDate?: string | 'current'
  slug: string
}

interface Project {
  metadata: ProjectMetadata
  content: string
}

const mdxRootDirectory = path.join(process.cwd(), 'src', 'data', 'mdx', 'projects')
export const assetsRootDirectory = path.join(process.cwd(), 'src', 'data', 'assets', 'projects')

export const getProject = async (slug: string): Promise<Project | null> => {
  try {
    const filePath = path.join(mdxRootDirectory, `${slug}.mdx`)
    const fileContents = readFileSync(filePath, { encoding: 'utf-8' })

    const { data, content } = matter(fileContents)

    return { metadata: { ...data, slug }, content }
  }
  catch {
    return null
  }
}

export const getProjects = async (limit?: number): Promise<ProjectMetadata[]> => {
  const files = await readdir(mdxRootDirectory)

  const projects = files
    .map((file: string) => getProjectMetadata(file))

  if (limit) {
    return projects.slice(0, limit)
  }

  return projects
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
