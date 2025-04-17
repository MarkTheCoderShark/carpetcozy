import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Blog Post | CarpetCozy',
  description: 'Expert carpet cleaning tips and insights from CarpetCozy.',
};

interface BlogPost {
  title: string;
  description: string;
  slug: string;
  date: string;
  sections: {
    title: string;
    content: string | string[];
  }[];
  callToAction: string;
}

const blogPosts: BlogPost[] = [
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
          'We&apos;ll perform a thorough inspection of your carpets',
          'We&apos;ll discuss any specific concerns or problem areas',
          'We&apos;ll explain our cleaning process and answer any questions',
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
        content: 'We&apos;ll provide care instructions and recommendations for maintaining your clean carpets. Most carpets are dry within 4-6 hours, depending on humidity and ventilation.',
      },
    ],
    callToAction: 'Schedule your professional carpet cleaning appointment today and experience the CarpetCozy difference!',
  },
  {
    title: 'How to Prepare Your Home for Professional Carpet Cleaning',
    description: 'Make the most of your carpet cleaning service with these easy preparation tips. Learn what to do before the professionals arrive to ensure the best possible results.',
    slug: 'prepare-home-for-carpet-cleaning',
    date: new Date().toLocaleDateString(),
    sections: [
      {
        title: 'Why Preparation Matters',
        content: 'Taking time to prepare your home before professional carpet cleaning offers several important benefits, including more thorough cleaning, maximized efficiency, and protection of your valuable items.',
      },
      {
        title: 'Your Pre-Cleaning Checklist',
        content: [
          'Clear floor spaces of small items, toys, and shoes',
          'Move lightweight furniture when possible',
          'Identify and point out stains that need special attention',
          'Make note of any delicate or valuable items in the cleaning area',
          'Secure loose items and fragile decor',
        ],
      },
      {
        title: 'On the Day of Cleaning',
        content: [
          'Vacuum carpets if possible (not required but helpful)',
          'Secure pets away from the cleaning areas',
          'Clear parking space for the cleaning van',
          'Provide clear access to all rooms being cleaned',
        ],
      },
      {
        title: 'Post-Cleaning Plans',
        content: 'Professional carpet cleaning typically requires 4-8 hours of drying time. Plan family activities accordingly and consider which rooms you&apos;ll need access to immediately.',
      },
    ],
    callToAction: 'Schedule your professional carpet cleaning with CarpetCozy and let us help you achieve the best results possible!',
  },
  {
    title: 'The Ultimate Guide to Removing Wine Stains from Carpets',
    description: 'Act fast with our professional tips for removing red wine stains from carpets. Learn immediate steps and long-term solutions from CarpetCozy experts.',
    slug: 'removing-wine-stains-carpets',
    date: new Date().toLocaleDateString(),
    sections: [
      {
        title: 'Why Wine Stains Are So Challenging',
        content: 'Red wine creates difficult stains because it contains chromogens, tannins, anthocyanins, and sugars that quickly penetrate carpet fibers and can become permanent if not treated promptly.',
      },
      {
        title: 'Emergency Response: The First 5 Minutes',
        content: [
          'Blot, don&apos;t rub - use clean white towels to absorb as much wine as possible',
          'Apply cold water to dilute remaining wine and blot again',
          'Add salt to draw out moisture, then vacuum thoroughly',
          'Never use hot water as it can set the stain permanently',
          'Act quickly for the best results',
        ],
      },
      {
        title: 'DIY Home Solutions for Fresh Wine Stains',
        content: [
          'Baking soda and vinegar method',
          'Club soda technique',
          'Hydrogen peroxide and dish soap mixture (for light-colored carpets only)',
          'Commercial wine stain removers',
        ],
      },
      {
        title: 'When to Call the Professionals',
        content: 'If DIY methods don&apos;t work or for valuable carpets, professional cleaners have access to specialized equipment and solutions that can remove even old, set-in wine stains.',
      },
    ],
    callToAction: 'Don&apos;t let wine stains ruin your carpets! Contact CarpetCozy for expert stain removal services that eliminate both stains and odors permanently.',
  },
  {
    title: 'Seasonal Carpet Cleaning: Why Fall Is the Perfect Time in El Dorado Hills',
    description: 'Learn why autumn is an ideal season for deep carpet cleaning in El Dorado Hills homes. Prepare your carpets for winter and holiday gatherings with these professional tips.',
    slug: 'fall-carpet-cleaning-el-dorado-hills',
    date: new Date().toLocaleDateString(),
    sections: [
      {
        title: 'Why Fall Is the Ideal Carpet Cleaning Season in El Dorado Hills',
        content: 'El Dorado Hills experiences moderate temperatures and lower humidity during fall, creating optimal conditions for carpet cleaning and faster drying times. Plus, it&apos;s perfect timing before holiday entertaining.',
      },
      {
        title: 'Removing Summer&apos;s Buildup',
        content: [
          'Pollen and outdoor allergens that accumulated during summer',
          'Soil and debris from increased outdoor activities',
          'Oils and sweat from bare feet during hotter months',
          'Sunscreen and lotion residues on carpet fibers',
          'Food particles from summer gatherings',
        ],
      },
      {
        title: 'Preparing for Winter and Holiday Gatherings',
        content: 'Fall carpet cleaning creates a clean slate before winter weather arrives and ensures your home is guest-ready for holiday entertaining. It removes existing dirt that could be ground deeper during winter months.',
      },
      {
        title: 'Fall Carpet Maintenance Tips for El Dorado Hills Homes',
        content: 'Implement a shoes-off policy as fall progresses, adjust your vacuuming schedule, use entrance mats strategically, and maintain optimal indoor humidity to keep your carpets cleaner through fall and winter.',
      },
    ],
    callToAction: 'Schedule your fall carpet cleaning with CarpetCozy and ensure your El Dorado Hills home is fresh and inviting for holiday gatherings!',
  },
  {
    title: 'Commercial Carpet Cleaning: What Every Granite Bay Business Owner Should Know',
    description: 'Discover how professional carpet cleaning can improve your Granite Bay business image, employee health, and customer experience. Learn best practices and maintenance tips.',
    slug: 'commercial-carpet-cleaning-granite-bay',
    date: new Date().toLocaleDateString(),
    sections: [
      {
        title: 'Benefits of Professional Commercial Carpet Cleaning',
        content: 'Regular commercial carpet cleaning enhances your professional appearance, improves indoor air quality, extends carpet lifespan, and creates a healthier environment for employees and customers.',
      },
      {
        title: 'Customized Solutions for Granite Bay Businesses',
        content: [
          'Office carpet cleaning with minimal disruption',
          'Retail space cleaning for high-traffic areas',
          'Restaurant and hospitality specialized solutions',
          'Medical facility cleaning with sanitation focus',
          'Educational institution scheduled maintenance',
        ],
      },
      {
        title: 'Our Commercial Carpet Cleaning Process',
        content: 'Our thorough process includes initial assessment, pre-treatment of high-traffic areas, hot water extraction cleaning, speed drying techniques, and a final inspection with maintenance recommendations.',
      },
      {
        title: 'Maintenance Programs for Ongoing Care',
        content: 'We offer customized maintenance plans for Granite Bay businesses based on foot traffic, carpet type, business hours, and budget considerations, helping maintain a consistently professional appearance.',
      },
    ],
    callToAction: 'Elevate your Granite Bay business image with CarpetCozy&apos;s professional commercial carpet cleaning services. Contact us today for a free on-site assessment!',
  },
  {
    title: 'Carpet vs. Hardwood: Which Flooring Option Is Best for Auburn Homes?',
    description: 'Compare the pros and cons of carpet and hardwood flooring for Auburn homes. Consider maintenance, durability, comfort, and cost factors before making your decision.',
    slug: 'carpet-vs-hardwood-auburn',
    date: new Date().toLocaleDateString(),
    sections: [
      {
        title: 'Comparing Comfort and Warmth',
        content: 'Carpet provides natural insulation and a warm, soft surface ideal for Auburn&apos;s cooler months, while hardwood offers a classic appearance but can feel cold underfoot without area rugs.',
      },
      {
        title: 'Maintenance Considerations for Auburn Homes',
        content: [
          'Carpet requires regular vacuuming and periodic professional cleaning',
          'Hardwood needs sweeping, occasional mopping, and refinishing every 5-10 years',
          'Auburn&apos;s seasonal changes can affect both flooring types differently',
          'Pets and children influence maintenance requirements for both options',
        ],
      },
      {
        title: 'Durability and Longevity',
        content: 'Quality hardwood can last decades with proper care, while carpet typically needs replacement every 7-10 years depending on quality and maintenance.',
      },
      {
        title: 'Cost Analysis: Initial vs. Long-term',
        content: 'Hardwood has a higher upfront cost but can last longer, while carpet is more affordable initially but may need more frequent replacement and professional cleaning.',
      },
    ],
    callToAction: 'No matter which flooring type you choose, CarpetCozy can help maintain your carpet&apos;s appearance and extend its life with our professional cleaning services!',
  },
  {
    title: 'How Professional Carpet Cleaning Improves Indoor Air Quality in Citrus Heights',
    description: 'Discover the connection between clean carpets and healthier air in your Citrus Heights home. Learn how professional cleaning removes allergens, dust mites, and pollutants.',
    slug: 'carpet-cleaning-air-quality-citrus-heights',
    date: new Date().toLocaleDateString(),
    sections: [
      {
        title: 'How Carpets Affect Indoor Air Quality',
        content: 'Carpets act as filters that trap dust, allergens, pet dander, and pollutants, but without regular deep cleaning, they can release these contaminants back into your Citrus Heights home&apos;s air.',
      },
      {
        title: 'Common Indoor Air Pollutants in Citrus Heights Homes',
        content: [
          'Dust mites and their waste products',
          'Pet dander and hair',
          'Pollen and outdoor allergens',
          'Mold spores and bacteria',
          'VOCs from household products',
        ],
      },
      {
        title: 'Health Benefits of Professional Carpet Cleaning',
        content: 'Regular professional cleaning can reduce allergy symptoms, decrease asthma triggers, eliminate harmful bacteria, and create a cleaner living environment, especially beneficial for sensitive individuals.',
      },
      {
        title: 'CarpetCozy&apos;s Air Quality-Focused Cleaning Process',
        content: 'Our hot water extraction method removes up to 98% of allergens and bacteria from carpets, while our HEPA-filtered equipment ensures that removed contaminants aren&apos;t released back into your home&apos;s air.',
      },
    ],
    callToAction: 'Breathe easier in your Citrus Heights home! Schedule your professional carpet cleaning with CarpetCozy and experience the difference cleaner carpets make to your indoor air quality.',
  },
  {
    title: 'The Complete Guide to Area Rug Cleaning in Folsom Homes',
    description: 'Protect your investment with proper area rug cleaning techniques for Folsom homes. Learn how to clean different rug types and when to seek professional help.',
    slug: 'area-rug-cleaning-folsom',
    date: new Date().toLocaleDateString(),
    sections: [
      {
        title: 'Understanding Different Rug Types',
        content: 'Different rug materials require different cleaning approaches. Wool, silk, synthetic, and natural fiber rugs each have specific care requirements that affect cleaning methods and frequency.',
      },
      {
        title: 'Regular Maintenance for Folsom Homes',
        content: [
          'Weekly vacuuming with proper attachments',
          'Immediate spot treatment for spills',
          'Regular rotation to prevent uneven wear',
          'Professional cleaning every 12-18 months',
          'Seasonal deep cleaning before major gatherings',
        ],
      },
      {
        title: 'When to Call the Professionals',
        content: 'Professional cleaning is recommended for valuable rugs, delicate materials, large rugs, or when dealing with stubborn stains, pet accidents, or deep-seated dirt.',
      },
      {
        title: 'CarpetCozy&apos;s Area Rug Cleaning Process',
        content: 'Our specialized process includes thorough inspection, gentle pre-treatment, careful cleaning with appropriate solutions, proper drying techniques, and final inspection to ensure your rug&apos;s longevity.',
      },
    ],
    callToAction: 'Protect your investment! Schedule professional area rug cleaning with CarpetCozy and keep your Folsom home&apos;s rugs looking their best for years to come.',
  },
  {
    title: 'Post-Construction Carpet Cleaning: A Guide for Orangevale Homeowners',
    description: 'Learn how professional post-construction carpet cleaning can protect your investment and ensure a healthy living environment in your Orangevale home.',
    slug: 'post-construction-carpet-cleaning-orangevale',
    date: new Date().toLocaleDateString(),
    sections: [
      {
        title: 'Why Post-Construction Cleaning is Essential',
        content: 'Construction debris, dust, and materials can deeply embed in carpet fibers. Professional cleaning removes these contaminants and prepares your space for safe occupancy.',
      },
      {
        title: 'Common Post-Construction Carpet Issues',
        content: [
          'Fine construction dust penetration',
          'Paint and adhesive residues',
          'Drywall dust accumulation',
          'Concrete and grout particles',
          'Wood shavings and metal fragments'
        ],
      },
      {
        title: 'Our Specialized Cleaning Process',
        content: 'We use a multi-step approach including HEPA vacuuming, pre-treatment for construction residues, hot water extraction, and specialized spot cleaning for construction-specific stains.',
      },
      {
        title: 'When to Schedule Post-Construction Cleaning',
        content: 'Timing is crucial - we recommend scheduling professional cleaning after all construction work is complete but before moving furniture into the space.',
      }
    ],
    callToAction: 'Protect your new carpet investment! Contact CarpetCozy for expert post-construction carpet cleaning in Orangevale.',
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