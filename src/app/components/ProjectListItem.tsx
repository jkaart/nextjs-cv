import Link from 'next/link'
import { dateToString } from '@/utils/dateToString'
import type { ProjectMetadata } from '@/utils/projects'

interface ProjectListItemProps {
  project: ProjectMetadata
  href: string
}

const ProjectListItem = ({ project, href }: ProjectListItemProps) => {
  const technologies = project.technologies ?? []

  const startDate = project.startDate
    ? dateToString(new Date(project.startDate), 'date')
    : null
  const endDate = project.endDate
    ? project.endDate === 'current'
      ? 'nykyinen'
      : dateToString(new Date(project.endDate), 'date')
    : null

  return (
    <Link className="border p-2" href={href}>
      <h3 className="text-l font-bold">{project.title}</h3>
      <p>{project.summary}</p>
      <div>
        <span className="inline-flex me-1 font-bold">Käytetyt teknologiat:</span>
        <div className='inline-flex gap-1 py-3'>
          {technologies.map(technology => <div key={technology} className='font-bold'>{technology}</div>)}
        </div>
      </div>
      <div>{startDate} - {endDate}</div>
    </Link>
  )
}

export default ProjectListItem
