import ProjectUrl from '@components/ProjectUrl'
import type { ProjectMetadata } from '@types'
import { capitalizeString } from '@utils/capitalizeString'
import { convertToString } from '@utils/convertToString'
import { formatProjectDates } from '@utils/formatProjectDates'
import Image from 'next/image'
import Link from 'next/link'
import type { HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface ProjectListItemProps {
  project: ProjectMetadata
  href: string
  className?: HTMLProps<HTMLElement>['className']
}

interface TextContainerProps {
  label: string
  text: string
  className?: HTMLProps<HTMLElement>['className']
}

const TextContainer = ({ label, text, className }: TextContainerProps) => {
  const mergedClassNames = twMerge('inline', className)
  return (
    <p>
      <span className='font-semibold'>{label}</span>
      <span className={mergedClassNames}>{text}</span>
    </p>
  )
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
 *   roles: ['programmer'],
 *   tasks: ['implemented footer'],
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
  const technologies = project.technologies
    ? [...project.technologies.sort()]
    : []
  const tasks = project.tasks ? [...project.tasks].sort() : []
  const roles = project.roles ? [...project.roles].sort() : []

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
      <TextContainer
        label='Käytetyt teknologiat: '
        text={capitalizeString(convertToString(technologies))}
      />
      <TextContainer
        label='Rooli(t): '
        text={capitalizeString(convertToString(roles))}
      />
      <TextContainer
        label='Työtehtävä(t): '
        text={capitalizeString(convertToString(tasks))}
      />
      <TextContainer
        label='Projektiin osallistumisaika: '
        text={`${startDate} - ${endDate}`}
      />
      <div className='flex flex-col mt-2'>
        {project.urls?.map(url => (
          <div key={url.url} className='flex flex-row gap-1'>
            {url.url.includes('github') ? (
              <Image
                className='dark:invert'
                width={24}
                height={24}
                alt='Github icon'
                src='/assets/icons/svg/other/github.svg'
              />
            ) : (
              <Image
                className='dark:invert'
                width={24}
                height={24}
                alt='Globe icon'
                src='/assets/icons/svg/other/globe-bold.svg'
              />
            )}
            <ProjectUrl href={url.url} title={url.title} />
          </div>
        ))}
      </div>
      <div className='flex flex-row gap-1'>
        <Image
          className='dark:invert'
          width={24}
          height={24}
          alt='Globe icon'
          src='/assets/icons/svg/other/globe-bold.svg'
        />
        <Link href={href} className='hover:text-blue-600 hover:cursor-pointer'>
          Lue lisää projektista
        </Link>
      </div>
    </div>
  )
}

export default ProjectListItem
