import { getProjects } from '@/utils/projects'
import ProjectsList from './ProjectsList'

const Projects = async () => {
  const projects = await getProjects()
  return <ProjectsList projects={projects} />
}

export default Projects
