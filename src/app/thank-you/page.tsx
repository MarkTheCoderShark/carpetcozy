import Link from 'next/link';

export const metadata = {
  title: 'Thank You | CarpetCozy',
  description: 'Thank you for contacting CarpetCozy. We will get back to you shortly.',
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <div className="mb-8">
            <svg
              className="mx-auto h-16 w-16 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 48 48"
            >
              <circle cx="24" cy="24" r="22" strokeWidth="2" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 24l6 6 12-12"
              />
            </svg>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Thank You for Contacting Us!
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            We have received your message and will get back to you as soon as possible.
            Usually, we respond within 24 hours during business days.
          </p>
          
          <div className="space-y-4">
            <p className="text-gray-600">
              While you wait, you might be interested in:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/services"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Explore Our Services
              </Link>
              <Link
                href="/blog"
                className="inline-block bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Read Our Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 