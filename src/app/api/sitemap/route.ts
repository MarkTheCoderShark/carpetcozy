import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Read the sitemap file from public directory
    const filePath = path.join(process.cwd(), 'public', 'sitemap.xml');
    const sitemapContent = fs.readFileSync(filePath, 'utf8');
    
    // Return the sitemap with proper XML content type
    return new NextResponse(sitemapContent, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600',
      }
    });
  } catch (error) {
    console.error('Error serving sitemap:', error);
    
    // Create a basic sitemap with homepage if file can't be read
    const basicSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://carpetcozy.com</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;
    
    return new NextResponse(basicSitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600',
      }
    });
  }
} 