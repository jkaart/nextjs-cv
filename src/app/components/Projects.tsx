import ProjectsList from '@components/ProjectsList'
import { getProjects } from '@utils/projects'

const Projects = async () => {
  const projects = await getProjects(3)
  return <ProjectsList projects={projects} />
}

export default Projects
