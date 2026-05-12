import { formatString } from '@utils/formatString'
import type { ProjectMetadata } from '@utils/projects'
import Link from 'next/link'

interface ProjectProps {
  project: ProjectMetadata
}

/**
 * Renders a single project card as a clickable link.
 * Displays the project title, summary, and technologies used.
 * Links to the individual project page at /projects/{slug}.
 *
 * @param project - The project metadata object containing title, summary, technologies, and slug
 * @returns A styled Link component with project information
 *
 * @example
 * ```tsx
 * <Project project={{
 *   slug: 'my-first-app',
 *   title: 'My First App',
 *   summary: 'A simple todo application built with React.',
 *   technologies: ['React', 'TypeScript', 'Tailwind CSS'],
 * }} />
 *
 * <Project project={{
 *   slug: 'portfolio-site',
 *   title: 'Portfolio Website',
 *   summary: 'Personal portfolio showcasing my work.',
 * }} />
 * ```
 */
const Project = ({ project }: ProjectProps) => (
  <Link
    href={`/projects/${project.slug}`}
    className='border rounded-md p-2 bg-primary-background'
  >
    <h3 className='font-bold text-lg'>{project.title}</h3>
    <p>{project.summary}</p>
    {project.technologies && (
      <p>
        <span className='font-bold'>Käytetyt teknologiat: </span>
        {formatString(project.technologies)}
      </p>
    )}
  </Link>
)

export default Project
