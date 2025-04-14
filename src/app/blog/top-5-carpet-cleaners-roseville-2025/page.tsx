import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Top 5 Carpet Cleaning Companies in Roseville (2025 Update)',
  description: 'Looking for the best carpet cleaning service in Roseville? Discover why CarpetCozy leads the list of Roseville\'s top carpet cleaning companies in 2025.',
  keywords: 'best carpet cleaners Roseville, Roseville carpet cleaning, residential carpet cleaning Roseville, pet stain removal Roseville, professional carpet cleaners near me',
  openGraph: {
    title: 'Top 5 Carpet Cleaning Companies in Roseville (2025 Update)',
    description: 'Looking for the best carpet cleaning service in Roseville? Discover why CarpetCozy leads the list of Roseville\'s top carpet cleaning companies in 2025.',
    type: 'article',
    publishedTime: new Date().toISOString(),
    authors: ['CarpetCozy Team'],
  },
};

export default function BlogPost() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Top 5 Carpet Cleaning Companies in Roseville (2025 Update)</h1>
        <div className="text-gray-600 mb-4">Published: {new Date().toLocaleDateString()}</div>
      </header>

      <section className="prose prose-lg max-w-none">
        <h2>Introduction</h2>
        <p>
          In Roseville's unique residential climate, maintaining clean carpets isn't just about aesthetics—it's about preserving your home's air quality and extending the life of your flooring investment. With the city's mix of seasonal changes and active family lifestyles, choosing the right carpet cleaning service becomes crucial for maintaining a healthy, beautiful home.
        </p>

        <h2>1. CarpetCozy — Roseville's #1 Carpet Cleaning Company</h2>
        <p>
          As a locally owned and operated business, CarpetCozy has earned its place as Roseville's premier carpet cleaning service. Our commitment to eco-friendly, pet-safe cleaning solutions sets us apart in the industry. We offer comprehensive services including:
        </p>
        <ul>
          <li>Residential and commercial carpet cleaning</li>
          <li>Pet odor and stain removal</li>
          <li>Advanced steam cleaning technology</li>
          <li>Same-day quotes and flexible scheduling</li>
        </ul>
        <p>
          Our team of friendly, local technicians consistently earns ★★★★★ reviews from Roseville residents, reflecting our dedication to exceptional service.
        </p>

        <h2>2. What Sets CarpetCozy Apart from Other Cleaners</h2>
        <p>
          Our commitment to transparency and customer satisfaction is unmatched. We offer:
        </p>
        <ul>
          <li>Clear, upfront pricing with no hidden fees</li>
          <li>Rapid response times for emergency services</li>
          <li>State-of-the-art cleaning equipment</li>
          <li>Extended service area coverage including Rocklin, Folsom, and Loomis</li>
        </ul>

        <h2>3. Common Carpet Problems in Roseville Homes</h2>
        <p>
          Roseville homeowners often face specific carpet challenges:
        </p>
        <ul>
          <li>Pet-related issues (odors and stains)</li>
          <li>Allergen accumulation from open windows</li>
          <li>High-traffic area wear and tear</li>
          <li>Natural carpet aging and discoloration</li>
        </ul>

        <h2>4. How Often Should You Get Your Carpet Cleaned?</h2>
        <p>
          While the general recommendation is every 12-18 months, we suggest:
        </p>
        <ul>
          <li>Every 6 months for homes with pets or children</li>
          <li>More frequent cleaning for high-traffic areas</li>
          <li>Immediate attention for spills and stains</li>
        </ul>

        <h2>5. What Roseville Customers Say About CarpetCozy</h2>
        <blockquote className="border-l-4 border-blue-500 pl-4 italic">
          "CarpetCozy transformed our carpets after years of pet stains. Their team was professional, efficient, and left our home smelling fresh. Highly recommend!" - Sarah M., Roseville
        </blockquote>
        <p>
          Our Google rating speaks for itself, with hundreds of satisfied customers across the greater Roseville area.
        </p>

        <h2>Final Thoughts: Choose Local, Choose Cozy</h2>
        <p>
          When it comes to carpet cleaning in Roseville, CarpetCozy stands out for our local expertise, commitment to quality, and customer-first approach. We're not just cleaning carpets—we're helping maintain healthy, beautiful homes in our community.
        </p>

        <div className="mt-8 text-center">
          <Link 
            href="/contact" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Your Free Quote Today
          </Link>
        </div>
      </section>
    </article>
  );
} 