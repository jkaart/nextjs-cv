import ProjectListItem from '@components/ProjectListItem'
import type { ProjectMetadata } from '@utils/projects'

interface ProjectsListProps {
  projects: ProjectMetadata[]
}

/**
 * Displays a grid of project list items.
 * Renders projects in a responsive grid layout (3 columns on large screens, 1 column on mobile),
 * mapping each project to a ProjectListItem component with appropriate navigation hrefs.
 *
 * @param props - Component props containing array of project metadata objects
 * @param props.projects - Array of ProjectMetadata objects to display as list items
 *
 * @example
 * ```tsx
 * const projects: ProjectMetadata[] = [
 *   {
 *     slug: 'project-1',
 *     title: 'Project One',
 *     summary: 'First project description.',
 *     technologies: ['React'],
 *     startDate: '2024-01-01',
 *     endDate: '2024-03-01',
 *     urls: []
 *   },
 *   {
 *     slug: 'project-2',
 *     title: 'Project Two',
 *     summary: 'Second project description.',
 *     technologies: ['Vue'],
 *     startDate: '2024-03-01',
 *     endDate: '2024-05-01',
 *     urls: []
 *   }
 * ]
 *
 * <ProjectsList projects={projects} />
 * ```
 */
const ProjectsList = ({ projects }: ProjectsListProps) => (
  <div className='w-full'>
    {projects.map(project => (
      <ProjectListItem
        key={project.slug}
        project={project}
        href={`/projects/${project.slug}`}
        className='mb-4 mx-2'
      />
    ))}
  </div>
)

export default ProjectsList
