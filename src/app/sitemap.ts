import { getBaseUrl } from '@utils/getBaseUrl'
import { getProjects } from '@utils/projects'
import type { MetadataRoute } from 'next'

const FALLBACK_BASE_URL = 'http://localhost:3000'

const resolveBaseUrl = (): string => {
  try {
    return getBaseUrl().replace(/\/$/, '')
  } catch {
    return (process.env.NEXT_PUBLIC_BASE_URL || FALLBACK_BASE_URL).replace(/\/$/, '')
  }
}

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const baseUrl = resolveBaseUrl()

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
