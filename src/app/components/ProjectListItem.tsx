import ProjectUrl from '@components/ProjectUrl'
import { formatProjectDates } from '@utils/formatProjectDates'
import { formatString } from '@utils/formatString'
import type { ProjectMetadata } from '@utils/projects'
import Link from 'next/link'
import type { HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface ProjectListItemProps {
  project: ProjectMetadata
  href: string
  className?: HTMLProps<HTMLElement>['className']
}

/**
 * Displays a single project as a list item with title, summary, technologies, dates, and external links.
 * Renders as a clickable link that navigates to the specified href when clicked.
 * Shows project metadata including used technologies (sorted alphabetically), formatted date range,
 * and buttons for each external URL associated with the project.
 *
 * @param props - Component props containing project metadata and navigation link
 * @param props.project - ProjectMetadata object with project information (title, summary, technologies, dates, URLs)
 * @param props.href - The URL path to navigate to when the item is clicked
 * @param props.className - Optional additional CSS classes for styling customization
 *
 * @example
 * ```tsx
 * const mockProject: ProjectMetadata = {
 *   slug: 'my-project',
 *   title: 'My Awesome Project',
 *   summary: 'A brief description of my awesome project.',
 *   technologies: ['React', 'TypeScript', 'Node.js'],
 *   startDate: '2023-01-01',
 *   endDate: '2023-12-31',
 *   urls: [
 *     { url: 'https://github.com/example/repo', title: 'GitHub' },
 *     { url: 'https://example.com/docs', title: 'Documentation' }
 *   ]
 * }
 *
 * <ProjectListItem project={mockProject} href='/projects/my-project' />
 * ```
 */
const ProjectListItem = ({
  project,
  href,
  className
}: ProjectListItemProps) => {
  const technologies = project.technologies ? project.technologies.sort() : []

  const { startDate, endDate } = formatProjectDates(
    project.startDate,
    project.endDate
  )

  const mergedClassNames = twMerge(
    'border rounded-xl p-2 bg-secondary-background hover:shadow-gray-400 hover:shadow-lg',
    className
  )

  return (
    <div className={mergedClassNames}>
      <h3 className='text-l font-bold'>{project.title}</h3>
      <p>{project.summary}</p>
      <div className='my-2'>
        <span className='inline-flex me-1 font-bold'>
          Käytetyt teknologiat:
        </span>
        <div className='inline-flex gap-1 font-bold'>
          {formatString(technologies)}
        </div>
      </div>
      <div>
        {startDate} - {endDate}
      </div>
      <div className='flex flex-col'>
        {project.urls?.map(url => (
          <ProjectUrl key={url.url} href={url.url} title={url.title} />
        ))}
      </div>
      <Link href={href} className='hover:text-blue-600 hover:cursor-pointer'>
        Lue lisää projektista
      </Link>
    </div>
  )
}

export default ProjectListItem
