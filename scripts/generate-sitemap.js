const fs = require('fs');
const path = require('path');

// Load serviceAreas from JSON file
const serviceAreas = require('../src/app/areas/service-areas.json');

const baseUrl = 'https://carpetcozy.com';
const today = new Date().toISOString().split('T')[0]; // For lastmod date

// Blog posts from the array above
const blogRoutes = [
  'what-to-expect-carpet-cleaning',
  'prepare-home-for-carpet-cleaning',
  'removing-wine-stains-carpets',
  'fall-carpet-cleaning-el-dorado-hills',
  'commercial-carpet-cleaning-granite-bay',
  'carpet-vs-hardwood-auburn',
  'carpet-cleaning-air-quality-citrus-heights',
  'area-rug-cleaning-folsom',
  'post-construction-carpet-cleaning-orangevale'
].map(slug => ({
  url: `${baseUrl}/blog/${slug}`,
  priority: 0.8,
  changefreq: 'monthly'
}));

// Assign higher priority to location service pages
const staticRoutes = [
  { path: '', priority: 1.0 },
  { path: '/about', priority: 0.8 },
  { path: '/services', priority: 0.9 },
  { path: '/areas', priority: 0.9 },
  { path: '/reviews', priority: 0.8 },
  { path: '/gallery', priority: 0.8 },
  { path: '/contact', priority: 0.8 }
].map(route => ({ 
  url: `${baseUrl}${route.path}`, 
  priority: route.priority,
  changefreq: 'monthly'
}));

const serviceRoutes = [
  { path: '/services/residential', priority: 0.9 },
  { path: '/services/commercial', priority: 0.9 },
  { path: '/services/commercial-tile', priority: 0.9 },
  { path: '/services/pet-stain-removal', priority: 0.9 },
  { path: '/services/stain-treatment', priority: 0.9 },
  { path: '/services/upholstery', priority: 0.9 },
  { path: '/services/area-rug', priority: 0.9 },
].map(route => ({ 
  url: `${baseUrl}${route.path}`, 
  priority: route.priority,
  changefreq: 'monthly'
}));

const areaRoutes = serviceAreas.map(area => ({
  url: `${baseUrl}/areas/${area.slug}`,
  priority: 0.9,
  changefreq: 'monthly'
}));

const locationServiceSlugs = [
  { slug: 'carpet', priority: 1.0 },
  { slug: 'commercial-carpet', priority: 0.9 },
  { slug: 'pet-stain-removal', priority: 0.9 },
  { slug: 'deep-stain', priority: 0.9 },
  { slug: 'steam', priority: 0.9 },
  { slug: 'tile', priority: 0.9 },
  { slug: 'commercial-tile', priority: 0.9 },
  { slug: 'upholstery', priority: 0.9 },
  { slug: 'area-rug', priority: 0.9 },
  { slug: 'water-extraction', priority: 0.9 }
];

const locationServiceRoutes = serviceAreas.flatMap(area =>
  locationServiceSlugs.map(service => ({
    url: `${baseUrl}/${area.slug}-${service.slug}-cleaning`,
    priority: service.priority,
    changefreq: 'weekly' // Higher frequency for location pages to signal freshness
  }))
);

const allUrls = [
  ...staticRoutes,
  ...serviceRoutes,
  ...areaRoutes,
  ...locationServiceRoutes,
  ...blogRoutes, // Add blog routes to sitemap
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls.map(page => `
    <url>
      <loc>${page.url}</loc>
      <lastmod>${today}</lastmod>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>
  `).join('')}
</urlset>`;

const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap.trim());
console.log('Sitemap generated with improved SEO priorities and blog posts!'); 