import { getProjects } from '@/utils/projects'

export const GET = async () => {
  const projects = await getProjects()

  return Response.json(JSON.stringify(projects))
}
