#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of placeholder images to create
const placeholders = [
  { name: 'hero-carpet.jpg', width: 1920, height: 1080 },
  { name: 'about-hero.jpg', width: 1920, height: 800 },
  { name: 'about-team.jpg', width: 800, height: 600 },
  { name: 'our-story.jpg', width: 800, height: 600 },
  { name: 'team-1.jpg', width: 400, height: 400 },
  { name: 'team-2.jpg', width: 400, height: 400 },
  { name: 'team-3.jpg', width: 400, height: 400 },
  { name: 'services-hero.jpg', width: 1920, height: 800 },
  { name: 'service-residential.jpg', width: 800, height: 600 },
  { name: 'service-commercial.jpg', width: 800, height: 600 },
  { name: 'service-pet-stain.jpg', width: 800, height: 600 },
  { name: 'service-stain-treatment.jpg', width: 800, height: 600 },
  { name: 'service-upholstery.jpg', width: 800, height: 600 },
  { name: 'service-area-rug.jpg', width: 800, height: 600 },
  { name: 'cleaning-process.jpg', width: 800, height: 600 },
  { name: 'contact-hero.jpg', width: 1920, height: 800 },
];

// SVG template for a placeholder image
const generateSvgPlaceholder = (width, height, name) => {
  const text = name.replace('.jpg', '').replace(/-/g, ' ');
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#2563EB" />
    <text x="50%" y="50%" font-family="Arial" font-size="24" fill="white" text-anchor="middle" dominant-baseline="middle">${text}</text>
  </svg>`;
};

// Create the directory if it doesn't exist
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
  console.log('Created directory:', imagesDir);
}

// Generate each placeholder
placeholders.forEach(({ name, width, height }) => {
  const filePath = path.join(imagesDir, name);
  const svg = generateSvgPlaceholder(width, height, name);
  
  fs.writeFileSync(filePath, svg);
  console.log(`Created placeholder: ${name} (${width}x${height})`);
});

console.log('All placeholders generated successfully.'); 