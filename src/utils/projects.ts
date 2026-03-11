import { readFileSync } from 'node:fs'
import { readdir } from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'

export interface ProjectMetadata {
  title?: string
  summary?: string
  technologies?: string[]
  slug: string
}

interface Project {
  metadata: ProjectMetadata
  content: string
}

const rootDirectory = path.join(process.cwd(), 'src', 'data', 'mdx', 'projects')

export const getProject = async (slug: string): Promise<Project | null> => {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`)
    const fileContents = readFileSync(filePath, { encoding: 'utf-8' })

    const { data, content } = matter(fileContents)

    return { metadata: { ...data, slug }, content }
  }
  catch {
    return null
  }
}

export const getProjects = async (limit?: number): Promise<ProjectMetadata[]> => {
  const files = await readdir(rootDirectory)

  const projects = files
    .map((file: string) => getProjectMetadata(file))

  if (limit) {
    return projects.slice(0, limit)
  }

  return projects
}

export const getProjectMetadata = (filepath: string): ProjectMetadata => {
  const slug = filepath.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, filepath)
  const fileContent = readFileSync(filePath, { encoding: 'utf-8' })

  const { data } = matter(fileContent)
  return { ...data, slug }
}