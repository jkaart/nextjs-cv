import Link from 'next/link'
import { formatProjectDates } from '@/utils/formatProjectDates'
import { formatTechnologiesString } from '@/utils/formatTechnologiesString'
import type { ProjectMetadata } from '@/utils/projects'

interface ProjectListItemProps {
  project: ProjectMetadata
  href: string
}

const ProjectListItem = ({ project, href }: ProjectListItemProps) => {
  const technologies = project.technologies ? project.technologies.sort() : []

  const { startDate, endDate } = formatProjectDates(
    project.startDate,
    project.endDate
  )

  return (
    <Link className='border p-2' href={href}>
      <h3 className='text-l font-bold'>{project.title}</h3>
      <p>{project.summary}</p>
      <div className='my-2'>
        <span className='inline-flex me-1 font-bold'>
          Käytetyt teknologiat:
        </span>
        <div className='inline-flex gap-1 font-bold'>
          {formatTechnologiesString(technologies)}
        </div>
      </div>
      <div>
        {startDate} - {endDate}
      </div>
    </Link>
  )
}

export default ProjectListItem
