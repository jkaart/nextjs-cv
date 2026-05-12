import Project from '@components/Project'
import { getProjects } from '@utils/projects'

/**
 * Server component that fetches and displays all projects from the MDX directory.
 * Retrieves project metadata using getProjects(), then maps each project to a Project card.
 * Projects are sorted with completed ones first, followed by ongoing projects.
 *
 * @returns A div containing all project cards as clickable links
 *
 * @example
 * ```tsx
 * const ProjectsPage = async () => {
 *   return (
 *     <div className='container'>
 *       <h1>Projektit</h1>
 *       <AllProjects />
 *     </div>
 *   )
 * }
 * ```
 */
const AllProjects = async () => {
  const projects = await getProjects()
  return (
    <div className='flex flex-col gap-2 text-primary-foreground'>
      {projects.map(project => (
        <Project key={project.slug} project={project} />
      ))}
    </div>
  )
}

export default AllProjects
