import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Blog Post | CarpetCozy',
  description: 'Expert carpet cleaning tips and insights from CarpetCozy.',
};

const blogPosts = [
  {
    title: 'What to Expect During a CarpetCozy Cleaning Appointment',
    description: 'Learn exactly what happens during a professional carpet cleaning appointment with CarpetCozy. From preparation to completion, we guide you through every step of the process.',
    slug: 'what-to-expect-carpet-cleaning',
    date: new Date().toLocaleDateString(),
    sections: [
      {
        title: 'Before Your Appointment',
        content: 'Our team will contact you to confirm your appointment and provide preparation instructions. We recommend moving small furniture items and vacuuming high-traffic areas before our arrival.',
      },
      {
        title: 'When We Arrive',
        content: [
          'Our technician will arrive at your scheduled time',
          'We\'ll perform a thorough inspection of your carpets',
          'We\'ll discuss any specific concerns or problem areas',
          'We\'ll explain our cleaning process and answer any questions',
        ],
      },
      {
        title: 'The Cleaning Process',
        content: [
          'Pre-treatment of stains and high-traffic areas',
          'Hot water extraction cleaning',
          'Spot treatment for stubborn stains',
          'Deodorizing treatment (if requested)',
          'Final inspection and walkthrough',
        ],
      },
      {
        title: 'After Cleaning',
        content: 'We\'ll provide care instructions and recommendations for maintaining your clean carpets. Most carpets are dry within 4-6 hours, depending on humidity and ventilation.',
      },
    ],
    callToAction: 'Schedule your professional carpet cleaning appointment today and experience the CarpetCozy difference!',
  },
  // ... other blog posts
];

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <article className="flex-1">
            <div className="bg-white rounded-xl shadow-md p-8">
              <header className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  {post.title}
                </h1>
                <div className="text-sm text-gray-500 mb-4 text-left">
                  Published: {post.date}
                </div>
              </header>

              <div className="prose prose-lg max-w-none">
                <div className="border-b border-gray-200 my-6"></div>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4 mt-6 text-gray-900">
                    {post.sections[0].title}
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-700">
                    {post.sections[0].content}
                  </p>
                </section>

                {post.sections.slice(1).map((section, index) => (
                  <section key={index} className="mb-8">
                    <div className="border-b border-gray-200 my-6"></div>
                    <h2 className="text-2xl font-semibold mb-4 mt-6 text-gray-900">
                      {section.title}
                    </h2>
                    {Array.isArray(section.content) ? (
                      <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed text-gray-700">
                        {section.content.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-lg leading-relaxed text-gray-700">
                        {section.content}
                      </p>
                    )}
                  </section>
                ))}

                <div className="border-b border-gray-200 my-6"></div>

                <div className="bg-blue-50 p-6 rounded-lg mt-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    Ready to Experience the CarpetCozy Difference?
                  </h3>
                  <p className="mb-4 text-lg text-gray-700">
                    {post.callToAction}
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
    </div>
  );
} 