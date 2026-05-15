import { getBaseUrl } from '@utils/getBaseUrl'
import { getProjects } from '@utils/projects'
import type { MetadataRoute } from 'next'

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const baseUrl = getBaseUrl()

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date()
    }
  ]

  const projects = await getProjects()
  if (!projects) {
    return []
  }
  const allProjectsSitemap = projects.map(project => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: project.lastUpdateDate
  }))

  return [...staticPages, ...allProjectsSitemap]
}

export default sitemap
