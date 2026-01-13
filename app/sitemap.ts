import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://promarkflooring.com'

  const serviceAreas = [
    'vancouver', 'north-vancouver', 'west-vancouver', 'burnaby',
    'surrey', 'delta', 'langley', 'port-coquitlam', 'maple-ridge', 'mission'
  ]

  const services = ['floor-leveling', 'hardwood-installation', 'stairs', 'repair-maintenance']

  const staticPages = [
    '',
    '/services',
    '/gallery',
    '/resources',
    '/faq',
    '/contact',
    '/quote',
    '/industries',
    '/industries/residential',
    '/industries/commercial'
  ]

  const staticEntries: MetadataRoute.Sitemap = staticPages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1 : 0.8,
  }))

  const serviceEntries: MetadataRoute.Sitemap = services.map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const serviceAreaEntries: MetadataRoute.Sitemap = serviceAreas.map(area => ({
    url: `${baseUrl}/service-areas/${area}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticEntries, ...serviceEntries, ...serviceAreaEntries]
}
