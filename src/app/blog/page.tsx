import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CarpetCozy Blog - Expert Carpet Cleaning Tips and Insights',
  description: 'Discover expert tips, insights, and updates about carpet cleaning services in Roseville and surrounding areas.',
};

const blogPosts = [
  {
    title: "Carpet Cleaning Myths Debunked: What Really Works in 2025",
    description: "Separate fact from fiction with this expert guide to common carpet cleaning myths. Get the truth about what works and what doesn't from CarpetCozy's professionals.",
    slug: "carpet-cleaning-myths-debunked",
    date: new Date().toLocaleDateString(),
  },
  {
    title: "Eco-Friendly Carpet Cleaning Solutions That Are Safe for Kids and Pets",
    description: "Discover the benefits of green carpet cleaning methods that are safe for your family, pets, and the environment while still delivering exceptional results.",
    slug: "eco-friendly-carpet-cleaning-solutions",
    date: new Date().toLocaleDateString(),
  },
  {
    title: "10 Carpet Maintenance Tips Every Rocklin Homeowner Should Know",
    description: "Learn essential carpet maintenance tips to extend the life of your carpets in Rocklin's unique climate. Discover practical advice for keeping carpets cleaner longer.",
    slug: "carpet-maintenance-tips-rocklin",
    date: new Date().toLocaleDateString(),
  },
  {
    title: "10 Carpet Maintenance Tips Every Roseville Homeowner Should Know",
    description: "Discover essential carpet maintenance practices specific to Roseville's climate and lifestyle. Learn how to keep your carpets looking newer longer with these expert tips.",
    slug: "carpet-maintenance-tips-roseville",
    date: new Date().toLocaleDateString(),
  },
  {
    title: "10 Carpet Maintenance Tips Every Sacramento Homeowner Should Know",
    description: "Learn essential carpet maintenance tips to extend the life of your carpets in Sacramento's unique climate. Discover practical advice for keeping carpets cleaner longer.",
    slug: "carpet-maintenance-tips-sacramento",
    date: new Date().toLocaleDateString(),
  },
  {
    title: 'How to Remove Old Carpet Stains (And When to Call CarpetCozy)',
    description: 'Learn effective DIY methods for removing stubborn old carpet stains, plus know exactly when it\'s time to call professional carpet cleaners for help.',
    slug: 'remove-old-carpet-stains',
    date: new Date().toLocaleDateString(),
  },
  {
    title: 'This Month\'s Carpet Cleaning Specials in Sacramento & Nearby Cities',
    description: 'Discover exclusive carpet cleaning deals and promotions in Sacramento, Roseville, Folsom, and Rocklin. Limited-time offers from CarpetCozy - book now to save!',
    slug: 'carpet-cleaning-specials-sacramento',
    date: new Date().toLocaleDateString(),
  },
  {
    title: 'Deep Carpet Cleaning in Roseville: What It Is & Why Your Floors Need It',
    description: 'Understand what truly qualifies as deep carpet cleaning in Roseville homes. Learn the difference between basic and deep cleaning methods and why your carpets need professional deep cleaning.',
    slug: 'deep-carpet-cleaning-roseville',
    date: new Date().toLocaleDateString(),
  },
  {
    title: 'How Often Should You Clean Carpets with Pets or Kids?',
    description: 'Learn the ideal carpet cleaning frequency for homes with pets and children. Get expert recommendations from CarpetCozy on maintaining clean, healthy carpets.',
    slug: 'how-often-clean-carpet-with-pets',
    date: new Date().toLocaleDateString(),
  },
  {
    title: 'Is Professional Carpet Cleaning Worth It? Here\'s What Roseville Homeowners Say',
    description: 'Discover why Roseville homeowners believe professional carpet cleaning is a worthwhile investment. Read real testimonials and learn the true value beyond the price tag.',
    slug: 'is-professional-carpet-cleaning-worth-it',
    date: new Date().toLocaleDateString(),
  },
  {
    title: 'Top Carpet Cleaning Tips for Pet Owners in Folsom',
    description: 'Learn effective strategies to keep your carpets clean and odor-free when you have pets in Folsom. Discover professional methods to tackle stubborn pet stains and odors.',
    slug: 'pet-carpet-cleaning-tips-folsom',
    date: new Date().toLocaleDateString(),
  },
  {
    title: 'Steam vs Shampoo Carpet Cleaning: What Works Best in Rocklin Homes?',
    description: 'Discover the pros and cons of steam and shampoo carpet cleaning methods specifically for Rocklin homes. Learn which technique delivers better results for your carpets.',
    slug: 'steam-vs-shampoo-carpet-cleaning-rocklin',
    date: new Date().toLocaleDateString(),
  },
  {
    title: 'The Real Cost of Carpet Cleaning in Roseville, CA (2025 Guide)',
    description: 'Understand what determines carpet cleaning prices in Roseville, from average costs to factors that affect pricing. Get insider tips on finding the best value.',
    slug: 'carpet-cleaning-cost-roseville-2025',
    date: new Date().toLocaleDateString(),
  },
  {
    title: 'Top 5 Carpet Cleaners in Roseville (2025 Update)',
    description: 'Discover the best carpet cleaning services in Roseville with our comprehensive guide. Compare services, prices, and customer satisfaction to find your perfect match.',
    slug: 'top-5-carpet-cleaners-roseville-2025',
    date: new Date().toLocaleDateString(),
  },
  {
    title: 'What to Expect During a CarpetCozy Cleaning Appointment',
    description: 'A complete walkthrough of the CarpetCozy cleaning process from booking to completion. Learn what happens before, during, and after your professional carpet cleaning appointment.',
    slug: 'what-to-expect-carpet-cleaning',
    date: new Date().toLocaleDateString(),
  },
  // New blog posts
  {
    title: 'How to Prepare Your Home for Professional Carpet Cleaning',
    description: 'Make the most of your carpet cleaning service with these easy preparation tips. Learn what to do before the professionals arrive to ensure the best possible results.',
    slug: 'prepare-home-for-carpet-cleaning',
    date: new Date().toLocaleDateString(),
  },
  {
    title: 'The Ultimate Guide to Removing Wine Stains from Carpets',
    description: 'Act fast with our professional tips for removing red wine stains from carpets. Learn immediate steps and long-term solutions from CarpetCozy experts.',
    slug: 'removing-wine-stains-carpets',
    date: new Date().toLocaleDateString(),
  },
  {
    title: 'Commercial Carpet Cleaning: What Every Granite Bay Business Owner Should Know',
    description: 'Discover how professional carpet cleaning can improve your Granite Bay business image, employee health, and customer experience. Learn best practices and maintenance tips.',
    slug: 'commercial-carpet-cleaning-granite-bay',
    date: new Date().toLocaleDateString(),
  },
  {
    title: 'Carpet vs. Hardwood: Which Flooring Option Is Best for Auburn Homes?',
    description: 'Compare the pros and cons of carpet and hardwood flooring for Auburn homes. Consider maintenance, durability, comfort, and cost factors before making your decision.',
    slug: 'carpet-vs-hardwood-auburn',
    date: new Date().toLocaleDateString(),
  },
  {
    title: 'Seasonal Carpet Cleaning: Why Fall Is the Perfect Time in El Dorado Hills',
    description: 'Learn why autumn is an ideal season for deep carpet cleaning in El Dorado Hills homes. Prepare your carpets for winter and holiday gatherings with these professional tips.',
    slug: 'fall-carpet-cleaning-el-dorado-hills',
    date: new Date().toLocaleDateString(),
  },
  {
    title: 'How Professional Carpet Cleaning Improves Indoor Air Quality in Citrus Heights',
    description: 'Discover the connection between clean carpets and healthier air in your Citrus Heights home. Learn how professional cleaning removes allergens, dust mites, and pollutants.',
    slug: 'carpet-cleaning-air-quality-citrus-heights',
    date: new Date().toLocaleDateString(),
  },
  {
    title: 'The Complete Guide to Area Rug Cleaning in Folsom Homes',
    description: 'Protect your investment with proper area rug cleaning techniques for Folsom homes. Learn how to clean different rug types and when to seek professional help.',
    slug: 'area-rug-cleaning-folsom',
    date: new Date().toLocaleDateString(),
  },
  {
    title: 'Post-Construction Carpet Cleaning: Essential Steps for New Orangevale Homes',
    description: 'Ensure your new Orangevale home starts fresh with professional post-construction carpet cleaning. Remove construction dust, debris, and chemicals for a healthier living environment.',
    slug: 'post-construction-carpet-cleaning-orangevale',
    date: new Date().toLocaleDateString(),
  },
  // Add more blog posts here as they are created
];

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            CarpetCozy Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert tips, insights, and updates about carpet cleaning services in Roseville and surrounding areas.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article 
              key={post.slug} 
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-semibold mb-3 text-gray-900 hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
              </Link>
              <p className="text-sm text-gray-500 mb-4">{post.date}</p>
              <p className="text-gray-700 mb-4">{post.description}</p>
              <Link 
                href={`/blog/${post.slug}`}
                className="inline-block text-blue-600 hover:text-blue-800 font-medium"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
} 