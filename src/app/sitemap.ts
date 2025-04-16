// This file has been renamed to sitemap.ts.disabled to use the static sitemap instead
import { MetadataRoute } from 'next';
import serviceAreas from './areas/service-areas.json';

// This function is disabled in favor of a static sitemap.xml in the public directory
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://carpetcozy.com';
  const currentDate = new Date().toISOString();
  
  // Static routes with high priority
  const staticRoutes = [
    { url: baseUrl, priority: 1.0 },
    { url: `${baseUrl}/about`, priority: 0.8 },
    { url: `${baseUrl}/services`, priority: 0.9 },
    { url: `${baseUrl}/areas`, priority: 0.9 },
    { url: `${baseUrl}/reviews`, priority: 0.8 },
    { url: `${baseUrl}/gallery`, priority: 0.8 },
    { url: `${baseUrl}/contact`, priority: 0.8 },
  ];
  
  // Service routes
  const serviceRoutes = [
    { url: `${baseUrl}/services/residential`, priority: 0.9 },
    { url: `${baseUrl}/services/commercial`, priority: 0.9 },
    { url: `${baseUrl}/services/pet-stain-removal`, priority: 0.9 },
    { url: `${baseUrl}/services/stain-treatment`, priority: 0.9 },
    { url: `${baseUrl}/services/upholstery`, priority: 0.9 },
    { url: `${baseUrl}/services/area-rug`, priority: 0.9 },
  ];
  
  // Area pages
  const areaRoutes = serviceAreas.map(area => ({
    url: `${baseUrl}/areas/${area.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));
  
  // Location service pages - these get high priority as they're our main landing pages
  const locationServiceSlugs = [
    { slug: 'carpet', priority: 1.0 },
    { slug: 'commercial-carpet', priority: 0.9 },
    { slug: 'pet-stain-removal', priority: 0.9 },
    { slug: 'steam', priority: 0.9 },
    { slug: 'tile', priority: 0.9 },
    { slug: 'upholstery', priority: 0.9 },
    { slug: 'water-extraction', priority: 0.9 }
  ];
  
  const locationServiceRoutes = serviceAreas.flatMap(area =>
    locationServiceSlugs.map(service => ({
      url: `${baseUrl}/${area.slug}-${service.slug}-cleaning`,
      lastModified: currentDate,
      changeFrequency: 'weekly', // Higher frequency for better crawling
      priority: service.priority,
    }))
  );
  
  // Combine all routes
  return [
    ...staticRoutes.map(route => ({
      url: route.url,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: route.priority,
    })),
    ...serviceRoutes.map(route => ({
      url: route.url,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: route.priority,
    })),
    ...areaRoutes,
    ...locationServiceRoutes,
  ];
}