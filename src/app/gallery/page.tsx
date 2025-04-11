import Image from "next/image";
import Section from "@/components/ui/Section";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Gallery | CarpetCozy - See Our Cleaning Results",
  description: "View our gallery of carpet cleaning results in Roseville, Rocklin, and surrounding areas. See the CarpetCozy difference for yourself!",
  keywords: "carpet cleaning gallery, before and after carpet cleaning, carpet cleaning results, Roseville carpet cleaning photos, Rocklin carpet cleaning photos",
};

// Placeholder gallery images - Replace with actual work photos
const galleryImages = [
  { src: "/images/service-residential.jpg", alt: "Clean residential carpet after professional service" },
  { src: "/images/service-commercial.jpg", alt: "Spotless commercial carpet in an office space" },
  { src: "/images/service-pet-stain.jpg", alt: "Carpet after successful pet stain removal" },
  { src: "/images/service-stain-treatment.jpg", alt: "Tough stain removed from carpet fibers" },
  { src: "/images/service-upholstery.jpg", alt: "Cleaned and refreshed upholstery sofa" },
  { src: "/images/service-area-rug.jpg", alt: "Delicate area rug after specialized cleaning" },
  { src: "/images/cleaning-process.jpg", alt: "Technician performing hot water extraction" },
  { src: "/images/about-team.jpg", alt: "The CarpetCozy professional cleaning team" },
  { src: "/images/hero-carpet.jpg", alt: "Close-up of freshly cleaned carpet texture" },
];

export default function GalleryPage() {
  return (
    <>
      <Section title="Our Work Gallery" subtitle="See the CarpetCozy difference in action!">
        <p className="text-center max-w-2xl mx-auto mb-12 text-text-primary/80">
          We take pride in transforming carpets and upholstery. Browse through photos of our recent work in Roseville, Rocklin, and nearby communities.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative aspect-square overflow-hidden rounded-lg shadow-subtle cursor-pointer transition-all duration-300 hover:shadow-md"
              // Add onClick handler here later for lightbox functionality
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" // Basic sizes optimization
              />
              {/* Optional: Add overlay or icon on hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <svg className="w-10 h-10 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}