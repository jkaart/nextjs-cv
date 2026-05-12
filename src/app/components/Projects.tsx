import ProjectsList from '@components/ProjectsList'
import { getProjects } from '@utils/projects'

/**
 * Fetches and displays the top 3 projects on the page.
 * Uses server-side fetching to retrieve project metadata,
 * limits results to 3 items for performance, and renders them in a list.
 *
 * @returns JSX element containing the ProjectsList component with fetched data
 */
const Projects = async () => {
  const projects = await getProjects(3)
  return <ProjectsList projects={projects} />
}

export default Projects
