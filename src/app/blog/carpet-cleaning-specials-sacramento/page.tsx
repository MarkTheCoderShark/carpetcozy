import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'This Month\'s Carpet Cleaning Specials in Sacramento & Nearby Cities | CarpetCozy',
  description: 'Discover exclusive carpet cleaning deals and promotions in Sacramento, Roseville, Folsom, and Rocklin. Limited-time offers from CarpetCozy - book now to save!',
  keywords: 'carpet cleaning specials near me, carpet cleaning deals Sacramento, discount carpet cleaning Roseville, carpet cleaning coupons, affordable carpet cleaning Folsom, Rocklin carpet cleaning promotions',
  openGraph: {
    title: 'This Month\'s Carpet Cleaning Specials in Sacramento & Nearby Cities',
    description: 'Discover exclusive carpet cleaning deals and promotions in Sacramento, Roseville, Folsom, and Rocklin. Limited-time offers from CarpetCozy - book now to save!',
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
                This Month's Carpet Cleaning Specials in Sacramento & Nearby Cities
              </h1>
              <div className="text-sm text-gray-500 mb-4 text-left">
                Published: {new Date().toLocaleDateString()}
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <h2>Limited-Time Carpet Cleaning Deals in Your Area</h2>
              <p>
                Looking for professional carpet cleaning at an exceptional value? CarpetCozy is offering exclusive specials throughout Sacramento, Roseville, Folsom, and Rocklin this month. These limited-time offers provide the perfect opportunity to experience our premium cleaning services at reduced rates. Don't miss your chance to refresh your home's carpets while saving significantly on our professional services.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">🔥 Flash Sale: This Week Only!</h3>
                <p className="text-gray-700 mb-2">Book any carpet cleaning service before {new Date(new Date().setDate(new Date().getDate() + 7)).toLocaleDateString()} and receive <strong className="text-blue-600">20% off your entire service</strong>. Use code <strong className="bg-gray-100 px-2 py-1 rounded text-blue-600">FLASH20</strong> when booking.</p>
                <p className="text-sm text-gray-500 italic">*Cannot be combined with other offers. Minimum service charge applies.</p>
              </div>

              <h2>Current Carpet Cleaning Promotions in Sacramento</h2>
              <div className="bg-white border rounded-lg shadow-sm p-6 mb-8">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Whole House Special</h3>
                <p className="mb-3">Clean three rooms and get the fourth room FREE</p>
                <ul className="list-disc pl-5 mb-4">
                  <li>Professional hot water extraction cleaning</li>
                  <li>Pre-treatment of high-traffic areas</li>
                  <li>Spot treatment for visible stains</li>
                  <li>Deodorizer included at no extra charge</li>
                </ul>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-500 line-through">$259</span>
                    <span className="text-2xl font-bold text-blue-600 ml-2">$199</span>
                  </div>
                  <Link 
                    href="/contact" 
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    Book Now
                  </Link>
                </div>
              </div>

              <h2>Roseville Resident Exclusive Offers</h2>
              <div className="bg-white border rounded-lg shadow-sm p-6 mb-8">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Deep Clean Package</h3>
                <p className="mb-3">Perfect for homes with pets or high-traffic areas</p>
                <ul className="list-disc pl-5 mb-4">
                  <li>Premium deep cleaning treatment</li>
                  <li>Extended pre-treatment for stubborn stains</li>
                  <li>Pet odor neutralization treatment</li>
                  <li>Carpet protector application</li>
                </ul>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-500 line-through">$299</span>
                    <span className="text-2xl font-bold text-blue-600 ml-2">$229</span>
                  </div>
                  <Link 
                    href="/contact" 
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    Book Now
                  </Link>
                </div>
              </div>

              <h2>Special Offers for Folsom Homeowners</h2>
              <div className="bg-white border rounded-lg shadow-sm p-6 mb-8">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">New Customer Special</h3>
                <p className="mb-3">First-time customers save 25% on their first service</p>
                <ul className="list-disc pl-5 mb-4">
                  <li>Two rooms and one hallway</li>
                  <li>Comprehensive pre-vacuuming</li>
                  <li>Hot water extraction cleaning</li>
                  <li>Quick-dry service</li>
                </ul>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-500 line-through">$160</span>
                    <span className="text-2xl font-bold text-blue-600 ml-2">$120</span>
                  </div>
                  <Link 
                    href="/contact" 
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    Book Now
                  </Link>
                </div>
              </div>

              <h2>Rocklin Area Seasonal Promotions</h2>
              <div className="bg-white border rounded-lg shadow-sm p-6 mb-8">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Move-In/Move-Out Special</h3>
                <p className="mb-3">Perfect for property managers and homeowners</p>
                <ul className="list-disc pl-5 mb-4">
                  <li>Whole house carpet cleaning</li>
                  <li>Extra attention to high-traffic areas</li>
                  <li>Sanitizing treatment</li>
                  <li>Priority scheduling available</li>
                </ul>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-500 line-through">$350</span>
                    <span className="text-2xl font-bold text-blue-600 ml-2">$275</span>
                  </div>
                  <Link 
                    href="/contact" 
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    Book Now
                  </Link>
                </div>
              </div>

              <h2>Additional Ways to Save on Carpet Cleaning</h2>
              <ul>
                <li><strong>Referral Program:</strong> Refer a friend and you both receive $25 off your next service</li>
                <li><strong>Maintenance Plan:</strong> Sign up for our quarterly maintenance plan and save 15% on all services</li>
                <li><strong>Multi-Service Discount:</strong> Book carpet cleaning plus upholstery cleaning and save 10% on both</li>
                <li><strong>Social Media Special:</strong> Follow us on social media for exclusive flash deals announced weekly</li>
                <li><strong>Email Subscribers:</strong> Join our email list for first access to our best promotions</li>
              </ul>

              <h2>Why Choose CarpetCozy for Your Carpet Cleaning Needs</h2>
              <p>
                Our specials provide excellent value, but the real benefit comes from our commitment to quality service:
              </p>
              <ul>
                <li><strong>Experienced technicians</strong> with proper training and certification</li>
                <li><strong>State-of-the-art equipment</strong> for superior cleaning results</li>
                <li><strong>Eco-friendly solutions</strong> safe for children, pets, and the environment</li>
                <li><strong>Satisfaction guarantee</strong> on all of our services</li>
                <li><strong>Locally owned and operated</strong> with deep knowledge of Sacramento area homes</li>
              </ul>

              <h2>Booking Your Discounted Carpet Cleaning Service</h2>
              <p>
                Taking advantage of these special offers is easy:
              </p>
              <ol>
                <li>Call us at (916) 555-1234 and mention the specific special</li>
                <li>Book online using the appropriate promotion code</li>
                <li>Schedule your service at a time convenient for you</li>
                <li>Prepare your home following our simple preparation guidelines</li>
                <li>Enjoy professional results at exceptional savings</li>
              </ol>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
                <h3 className="text-lg font-bold text-gray-900 mb-2">⏰ Limited-Time Offers</h3>
                <p className="text-gray-700">
                  These specials are only available until the end of the month. Spots are filling quickly, so we recommend booking soon to secure your preferred date and time.
                </p>
              </div>

              <h2>Frequently Asked Questions About Our Specials</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Can promotions be combined?</h3>
                  <p>Most promotions cannot be combined with other offers. Please ask our representative about specific details when booking.</p>
                </div>
                <div>
                  <h3 className="font-semibold">What is considered a "standard room"?</h3>
                  <p>A standard room is up to 250 square feet. Larger rooms may be counted as multiple rooms or incur an additional charge.</p>
                </div>
                <div>
                  <h3 className="font-semibold">Are there any additional charges?</h3>
                  <p>The advertised prices include standard cleaning. Heavily soiled carpets, specialty stain removal, or furniture moving may incur additional charges.</p>
                </div>
                <div>
                  <h3 className="font-semibold">How long do these offers last?</h3>
                  <p>Current promotions are valid through the end of {new Date().toLocaleString('default', { month: 'long' })}. However, some flash sales may be shorter in duration.</p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Ready to Book Your Discounted Cleaning?
                </h3>
                <p className="mb-4 text-lg text-gray-700">
                  Don't miss out on these limited-time carpet cleaning specials. Contact us today to book your service and enjoy professional, high-quality carpet cleaning at exceptional prices.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Claim Your Special Offer
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:w-80 flex-shrink-0">
          <div className="sticky top-8 bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Book Your Special
            </h3>
            <p className="text-gray-600 mb-4">
              These offers won't last long! Contact us today to secure your preferred date and time.
            </p>
            <Link
              href="/contact"
              className="block w-full text-center bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors mb-4"
            >
              Book Now
            </Link>
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2">Or call us directly:</p>
              <p className="text-lg font-semibold text-blue-600">(916) 555-1234</p>
            </div>
          </div>
          
          <div className="mt-6 bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Limited-Time Flash Sale
            </h3>
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-red-700 font-bold mb-2">20% OFF ANY SERVICE</p>
              <p className="text-gray-600 mb-3">Use code: <span className="font-mono bg-gray-100 px-2 py-1 rounded">FLASH20</span></p>
              <p className="text-sm text-gray-500">Valid until: {new Date(new Date().setDate(new Date().getDate() + 7)).toLocaleDateString()}</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
} 