import { getProjects } from '@utils/projects'

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url)
  const limit = searchParams.get('limit')

  const projects = await getProjects(limit ? Number(limit) : undefined)

  return Response.json(JSON.stringify(projects))
}
