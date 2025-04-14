import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Is Professional Carpet Cleaning Worth It? Here\'s What Roseville Homeowners Say',
  description: 'Discover why Roseville homeowners choose professional carpet cleaning. Read real testimonials and learn about the long-term benefits of professional carpet care.',
  keywords: 'is professional carpet cleaning worth it, professional carpet cleaning benefits, carpet cleaning testimonials, Roseville carpet cleaning reviews',
  openGraph: {
    title: 'Is Professional Carpet Cleaning Worth It? Here\'s What Roseville Homeowners Say',
    description: 'Discover why Roseville homeowners choose professional carpet cleaning. Read real testimonials and learn about the long-term benefits of professional carpet care.',
    type: 'article',
    publishedTime: new Date().toISOString(),
    authors: ['CarpetCozy Team'],
  },
};

export default function BlogPost() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <article className="flex-1">
          <div className="bg-white rounded-xl shadow-md p-8">
            <header className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Is Professional Carpet Cleaning Worth It? Here's What Roseville Homeowners Say
              </h1>
              <div className="text-sm text-gray-500 mb-4 text-left">
                Published: {new Date().toLocaleDateString()}
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <h2>The Real Value of Professional Carpet Cleaning</h2>
              <p>
                Many Roseville homeowners wonder if professional carpet cleaning is worth the investment. While DIY methods might seem cost-effective initially, professional cleaning offers benefits that go far beyond surface-level cleanliness. Let's explore what local homeowners have to say about their experiences.
              </p>

              <h2>What Roseville Homeowners Say About Professional Cleaning</h2>
              <div className="space-y-6 my-8">
                <blockquote className="border-l-4 border-blue-500 pl-4 italic">
                  "After years of renting carpet cleaners, we finally tried CarpetCozy's professional service. The difference was night and day. Our carpets looked brand new, and the air in our home felt fresher. It's definitely worth the investment." - Sarah M., Roseville
                </blockquote>

                <blockquote className="border-l-4 border-blue-500 pl-4 italic">
                  "As a parent of three young children, I was skeptical about professional cleaning. But after seeing how much dirt and allergens were removed, I'm convinced it's essential for our family's health. We schedule cleanings every 6 months now." - Michael T., Roseville
                </blockquote>

                <blockquote className="border-l-4 border-blue-500 pl-4 italic">
                  "Our carpets were showing wear after 5 years. CarpetCozy's team not only restored them but also gave us tips to maintain them better. The results lasted much longer than our previous DIY attempts." - Jennifer L., Roseville
                </blockquote>
              </div>

              <h2>Long-Term Benefits of Professional Cleaning</h2>
              <p>
                Professional carpet cleaning offers several advantages that DIY methods can't match:
              </p>
              <ul>
                <li><strong>Extended Carpet Life:</strong> Regular professional cleaning can extend your carpet's life by 5-10 years</li>
                <li><strong>Improved Air Quality:</strong> Removes up to 98% of allergens and dust mites</li>
                <li><strong>Better Stain Removal:</strong> Professional-grade equipment and solutions tackle tough stains</li>
                <li><strong>Time Savings:</strong> No need to rent equipment or spend hours cleaning</li>
                <li><strong>Expert Knowledge:</strong> Trained technicians know how to handle different carpet types</li>
              </ul>

              <h2>Cost vs. Value Analysis</h2>
              <p>
                Let's break down the true value of professional cleaning:
              </p>
              <ul>
                <li>Average professional cleaning cost: $200-$400</li>
                <li>Potential carpet replacement cost: $3,000-$5,000</li>
                <li>Health benefits from improved air quality: Priceless</li>
                <li>Time saved from DIY cleaning: 4-6 hours</li>
                <li>Extended carpet life: 5-10 years</li>
              </ul>

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Ready to Experience the CarpetCozy Difference?
                </h3>
                <p className="mb-4 text-lg text-gray-700">
                  Schedule your professional carpet cleaning appointment today and experience the CarpetCozy difference!
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Schedule Your Cleaning
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:w-80 flex-shrink-0">
          <div className="sticky top-8 bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Get a Free Quote
            </h3>
            <p className="text-gray-600 mb-4">
              Ready to transform your carpets? Get a free, no-obligation quote today.
            </p>
            <Link
              href="/contact"
              className="block w-full text-center bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Request Quote
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
} 