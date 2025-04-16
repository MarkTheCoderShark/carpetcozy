const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
  try {
    // Hard-coded minimal sitemap to ensure it works consistently
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://carpetcozy.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://carpetcozy.com/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://carpetcozy.com/services</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://carpetcozy.com/areas</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://carpetcozy.com/contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://carpetcozy.com/services/residential</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://carpetcozy.com/services/commercial</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://carpetcozy.com/services/pet-stain-removal</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/xml',
        'X-Content-Type-Options': 'nosniff',
        'Cache-Control': 'public, max-age=3600'
      },
      body: sitemap
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to serve sitemap' })
    };
  }
}; 