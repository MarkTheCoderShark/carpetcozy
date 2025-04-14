import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Top Carpet Cleaning Tips for Pet Owners in Folsom',
  description: 'Expert tips for Folsom pet owners to maintain clean carpets and eliminate pet odors. Learn about professional pet stain and odor removal services.',
  keywords: 'pet odor carpet cleaning Folsom, pet urine removal Folsom, pet stain removal, professional carpet cleaning for pets, pet odor treatment',
  openGraph: {
    title: 'Top Carpet Cleaning Tips for Pet Owners in Folsom',
    description: 'Expert tips for Folsom pet owners to maintain clean carpets and eliminate pet odors. Learn about professional pet stain and odor removal services.',
    type: 'article',
    publishedTime: new Date().toISOString(),
    authors: ['CarpetCozy Team'],
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8">Top Carpet Cleaning Tips for Pet Owners in Folsom</h1>
      
      {/* Introduction Section */}
      <section className="bg-white rounded-xl shadow-sm py-10 px-6 lg:py-14 max-w-3xl mx-auto mb-8">
        <div className="prose lg:prose-xl mx-auto">
          <p className="lead text-lg">
            Living with pets in Folsom brings joy and companionship, but it also comes with unique challenges for carpet maintenance. Pet accidents, shedding, and odors can take a toll on your flooring. At CarpetCozy, we understand the special needs of pet owners and have developed effective strategies to keep your carpets clean, fresh, and looking their best.
          </p>
        </div>
      </section>

      {/* Immediate Actions Section */}
      <section className="bg-gray-50 rounded-xl shadow-sm py-10 px-6 lg:py-14 max-w-3xl mx-auto mb-8">
        <div className="prose lg:prose-xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-6">Immediate Actions for Pet Accidents</h2>
          <p>
            When pet accidents happen, quick action is crucial. Follow these steps:
          </p>
          <ul>
            <li>Blot the area immediately with clean white cloths or paper towels</li>
            <li>Avoid rubbing, which can spread the stain and damage carpet fibers</li>
            <li>Use an enzymatic cleaner specifically designed for pet stains</li>
            <li>Allow the area to dry completely before vacuuming</li>
          </ul>
        </div>
      </section>

      {/* Preventing Pet Odors Section */}
      <section className="bg-white rounded-xl shadow-sm py-10 px-6 lg:py-14 max-w-3xl mx-auto mb-8">
        <div className="prose lg:prose-xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-6">Preventing Pet Odors in Your Carpet</h2>
          <p>
            Prevention is key to maintaining fresh-smelling carpets in a pet-friendly home:
          </p>
          <ul>
            <li>Regular vacuuming (2-3 times per week) to remove pet hair and dander</li>
            <li>Immediate cleaning of any accidents</li>
            <li>Use of pet-specific carpet deodorizers</li>
            <li>Regular professional deep cleaning every 6-12 months</li>
          </ul>
        </div>
      </section>

      {/* Common Problems Section */}
      <section className="bg-gray-50 rounded-xl shadow-sm py-10 px-6 lg:py-14 max-w-3xl mx-auto mb-8">
        <div className="prose lg:prose-xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-6">Common Carpet Problems for Pet Owners</h2>
          <p>
            Pet owners often face these carpet challenges:
          </p>
          <ul>
            <li>Persistent urine odors that regular cleaning can't remove</li>
            <li>Stubborn stains from accidents</li>
            <li>Accumulation of pet hair in carpet fibers</li>
            <li>Wear and tear from pet traffic patterns</li>
          </ul>
        </div>
      </section>

      {/* Professional Cleaning Section */}
      <section className="bg-white rounded-xl shadow-sm py-10 px-6 lg:py-14 max-w-3xl mx-auto mb-8">
        <div className="prose lg:prose-xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-6">Why Professional Cleaning is Essential</h2>
          <p>
            While regular maintenance helps, professional cleaning offers several benefits:
          </p>
          <ul>
            <li>Deep extraction of embedded pet hair and dander</li>
            <li>Specialized treatments for tough stains and odors</li>
            <li>Sanitization to eliminate bacteria and allergens</li>
            <li>Expert knowledge of different carpet types and appropriate cleaning methods</li>
          </ul>
        </div>
      </section>

      {/* CarpetCozy Process Section */}
      <section className="bg-gray-50 rounded-xl shadow-sm py-10 px-6 lg:py-14 max-w-3xl mx-auto mb-8">
        <div className="prose lg:prose-xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-6">CarpetCozy's Pet-Specific Cleaning Process</h2>
          <p>
            Our specialized pet stain and odor removal service includes:
          </p>
          <ul>
            <li>UV inspection to locate all accident spots</li>
            <li>Pre-treatment with pet-specific enzymes</li>
            <li>Hot water extraction for deep cleaning</li>
            <li>Deodorization treatment</li>
            <li>Final inspection to ensure complete odor removal</li>
          </ul>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-50 rounded-xl shadow-sm py-10 px-6 lg:py-14 max-w-3xl mx-auto mb-8">
        <div className="prose lg:prose-xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Eliminate Pet Stains and Odors?</h2>
          <p className="mb-6">
            Let CarpetCozy help you maintain a clean, fresh-smelling home that both you and your pets can enjoy.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg"
          >
            Schedule Pet Stain Removal
          </Link>
        </div>
      </section>
    </div>
  );
} 