const fs = require('fs');
const path = require('path');

// Load service areas from JSON file
const serviceAreas = require('../src/app/areas/service-areas.json');

// Function to convert area name to slug
function toSlug(areaName) {
  return areaName.toLowerCase().replace(/\s+/g, '-');
}

// Function to generate page content for a specific area
function generatePageContent(area) {
  return `import Link from "next/link";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata = {
  title: \`Commercial Tile & Grout Cleaning in ${area} | CarpetCozy\`,
  description: \`Expert commercial tile and grout cleaning for ${area} businesses, restaurants, medical facilities & gyms. Professional, reliable service from CarpetCozy.\`,
  keywords: \`commercial tile cleaning ${area}, restaurant tile cleaning ${area}, gym floor cleaning ${area}, grout cleaning ${area}, tile cleaning ${area} CA, CarpetCozy\`
};

export default function ${area.replace(/\s+/g, '')}CommercialTileServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Commercial Tile and Grout Cleaning",
          "name": \`Commercial Tile and Grout Cleaning in ${area}\`,
          "description": metadata.description,
          "url": \`\${process.env.NEXT_PUBLIC_SITE_URL || 'https://carpetcozy.com'}/\${toSlug(area)}-commercial-tile-cleaning\`,
          "provider": {
            "@type": "LocalBusiness",
            "name": "CarpetCozy",
            "@id": \`\${process.env.NEXT_PUBLIC_SITE_URL || 'https://carpetcozy.com'}\`
          },
          "areaServed": {
            "@type": "Place",
            "name": \`${area}, California\`
          },
          "potentialAction": {
            "@type": "ReserveAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": \`\${process.env.NEXT_PUBLIC_SITE_URL || 'https://carpetcozy.com'}/contact?service=commercial-tile&location=\${toSlug(area)}\`,
              "actionPlatform": [
                "http://schema.org/DesktopWebPlatform",
                "http://schema.org/IOSPlatform",
                "http://schema.org/AndroidPlatform"
              ]
            },
            "result": {
              "@type": "Reservation",
              "name": \`Request a Commercial Tile Cleaning Quote in ${area}\`
            }
          }
        })} />
        
      {/* Rest of the component code */}
    </>
  );
}`;
}

// Main script execution
async function generatePages() {
  // Create pages for each service area
  for (const area of serviceAreas) {
    const areaSlug = toSlug(area);
    const dirPath = path.join(__dirname, '..', 'src', 'app', `${areaSlug}-commercial-tile-cleaning`);
    const filePath = path.join(dirPath, 'page.tsx');

    // Create directory if it doesn't exist
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    // Generate and write the page content
    const pageContent = generatePageContent(area);
    fs.writeFileSync(filePath, pageContent);
    console.log(`Created page for ${area} at ${filePath}`);
  }

  console.log('All location-specific commercial tile cleaning pages have been generated!');
}

// Run the script
generatePages().catch(console.error);