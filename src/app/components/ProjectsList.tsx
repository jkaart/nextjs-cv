import type { ProjectMetadata } from '@/utils/projects'
import ProjectListItem from './ProjectListItem'

interface ProjectsListProps {
  projects: ProjectMetadata[]
}

const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <div className='w-full'>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
        {projects.map(project => (
          <ProjectListItem
            key={project.slug}
            project={project}
            href={`/projects/${project.slug}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectsList
