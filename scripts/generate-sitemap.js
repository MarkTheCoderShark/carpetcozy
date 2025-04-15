const fs = require('fs');
const path = require('path');

// Load serviceAreas from JSON file
const serviceAreas = require('../src/app/areas/service-areas.json');

const baseUrl = 'https://carpetcozy.com';

const staticRoutes = [
  '', '/about', '/services', '/areas', '/reviews', '/gallery', '/contact'
].map(route => `${baseUrl}${route}`);

const serviceRoutes = [
  '/services/residential',
  '/services/commercial',
  '/services/pet-stain-removal',
  '/services/stain-treatment',
  '/services/upholstery',
  '/services/area-rug',
].map(route => `${baseUrl}${route}`);

const areaRoutes = serviceAreas.map(area => `${baseUrl}/areas/${area.slug}`);

const locationServiceSlugs = [
  'carpet', 'commercial-carpet', 'pet-stain-removal', 'steam', 'tile', 'upholstery', 'water-extraction'
];

const locationServiceRoutes = serviceAreas.flatMap(area =>
  locationServiceSlugs.map(serviceSlug => `${baseUrl}/${area.slug}-${serviceSlug}-cleaning`)
);

const allUrls = [
  ...staticRoutes,
  ...serviceRoutes,
  ...areaRoutes,
  ...locationServiceRoutes,
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls.map(url => `
    <url>
      <loc>${url}</loc>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>
  `).join('')}
</urlset>`;

const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap.trim());
console.log('Sitemap generated!'); 