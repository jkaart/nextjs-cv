import { formatString } from '@utils/formatString'
import { getProjects, type ProjectMetadata } from '@utils/projects'
import Link from 'next/link'

interface ProjectProps {
  project: ProjectMetadata
}

const Project = ({ project }: ProjectProps) => (
  <Link
    href={`/projects/${project.slug}`}
    className='border rounded-md p-2 bg-gray-100 dark:bg-gray-800'
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

const AllProjects = async () => {
  const projects = await getProjects()
  return (
    <div className='flex flex-col gap-2'>
      {projects.map(project => (
        <Project key={project.slug} project={project} />
      ))}
    </div>
  )
}

export default AllProjects
