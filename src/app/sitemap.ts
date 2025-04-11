import { MetadataRoute } from 'next';
import { serviceAreas, ServiceArea } from './areas/data'; // Assuming areas data is exported correctly

// Define the base URL of your site
const baseUrl = 'https://carpetcozy.com';

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticRoutes = [
    '', // Homepage
    '/about',
    '/services',
    '/areas',
    '/reviews', // Assuming these pages exist or will be created
    '/gallery', // Assuming these pages exist or will be created
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as MetadataRoute.Sitemap[0]['changeFrequency'], // Type assertion
    priority: route === '' ? 1.0 : 0.8, 
  }));

  // Service pages
  const serviceRoutes = [
    '/services/residential',
    '/services/commercial',
    '/services/pet-stain-removal',
    '/services/stain-treatment',
    '/services/upholstery',
    '/services/area-rug',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as MetadataRoute.Sitemap[0]['changeFrequency'],
    priority: 0.7,
  }));

  // Service Area pages (dynamically generated from data)
  const areaRoutes = serviceAreas.map((area: ServiceArea) => ({
    url: `${baseUrl}/areas/${area.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as MetadataRoute.Sitemap[0]['changeFrequency'], // Areas might update more often
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...areaRoutes,
  ];
}