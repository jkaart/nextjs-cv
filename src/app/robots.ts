import { getBaseUrl } from '@utils/getBaseUrl'
import type { MetadataRoute } from 'next'

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: '*',
    allow: '/',
    disallow: '/api/'
  },
  sitemap: `${getBaseUrl()}/sitemap.xml`
})

export default robots
