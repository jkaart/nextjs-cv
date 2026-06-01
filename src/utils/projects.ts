import { readFileSync } from 'node:fs'
import { readdir, stat } from 'node:fs/promises'
import path from 'node:path'
import type { Project, ProjectMetadata, SSRProjectMetadata } from '@types'
import { sortProjects } from '@utils/sortProjects'
import matter from 'gray-matter'

const dataRootDirectory = path.join(process.cwd(), 'src/data')

const mdxRootDirectory = path.join(dataRootDirectory, 'mdx', 'projects')

export const assetsRootDirectory = path.join(
  dataRootDirectory,
  'assets',
  'projects'
)

/**
 * Retrieves a single project by its slug from the MDX directory.
 * Reads the .mdx file, extracts frontmatter metadata using gray-matter,
 * and returns the project object with metadata and content.
 * Returns null if the project doesn't exist or an error occurs.
 *
 * @param slug - The unique identifier for the project (filename without extension)
 * @returns Promise resolving to project object with SSR metadata and content, or null if not found
 */
export const getProject = async (slug: string): Promise<Project | null> => {
  try {
    const filePath = path.join(mdxRootDirectory, `${slug}.mdx`)
    const fileContents = readFileSync(filePath, { encoding: 'utf-8' })

    const { data, content } = matter(fileContents)

    const fileStat = await stat(filePath)
    const lastUpdateDate = new Date(fileStat.mtimeMs)

    return { metadata: { ...data, slug, lastUpdateDate }, content }
  } catch {
    return null
  }
}

/**
 * Retrieves all projects from the MDX directory with optional limit.
 * Extracts metadata from each .mdx file, filters by endDate type,
 * sorts completed projects (with endDate) before ongoing ones,
 * and applies limit if specified.
 *
 * @param limit - Optional maximum number of projects to return
 * @returns Array of project metadata objects, sorted with completed first
 */
export const getProjects = async (
  limit?: number
): Promise<ProjectMetadata[] | SSRProjectMetadata[]> => {
  const files = await readdir(mdxRootDirectory)

  const projectPromises = files.map((file: string) => getProjectMetadata(file))
  const projects = (await Promise.all(projectPromises)).filter(
    (project): project is ProjectMetadata => project !== null
  )

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

/**
 * Extracts metadata from a single project file by its filepath.
 * Removes the .mdx extension to create slug, reads file content,
 * and extracts frontmatter data using gray-matter parser.
 *
 * @param filepath - The filename of the MDX file (e.g., 'project1.mdx')
 * @returns ProjectMetadata object with extracted frontmatter and generated slug
 */
export const getProjectMetadata = async (
  filepath: string
): Promise<ProjectMetadata | null> => {
  const slug = filepath.replace(/\.mdx$/, '')
  const project = await getProject(slug)

  if (!project) {
    return null
  }
  const metadata = project.metadata

  return metadata
}

/**
 * Retrieves all image URLs for a specific project from the assets directory.
 * Filters files by common image extensions (jpg, jpeg, png, webp),
 * constructs relative paths to each image file.
 * Returns null if slug is empty or no images found.
 *
 * @param slug - The project identifier matching the assets folder name
 * @returns Array of image URLs relative to /assets/projects/, or null if invalid
 */
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

/**
 * Recursively scans a directory and returns all file paths.
 * Traverses subdirectories to collect both files and nested directories,
 * flattens the result into a single array of absolute file paths.
 *
 * @param dir - The root directory path to scan recursively
 * @returns Array of full file paths for all files in the directory tree
 */
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

/**
 * Finds the last modification time across all project content and asset files.
 * Scans the data directory recursively for MDX, TSX, and image files,
 * retrieves their modification times, and returns the most recent one.
 * Useful for determining when content was last updated.
 *
 * @returns Date object representing the latest file modification time, or current date if no files found
 */
export const getLastContentUpdate = async () => {
  const files = await scanDir(dataRootDirectory)

  const times = await Promise.all(
    files
      .filter(file => /\.(mdx|ts|jpg|jpeg|png|webp)$/.test(file))
      .map(async file => {
        const fileStat = await stat(file)
        return fileStat.mtimeMs
      })
  )

  return new Date(Math.max(...times))
}
