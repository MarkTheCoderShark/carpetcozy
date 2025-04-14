import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Remove Old Carpet Stains (And When to Call CarpetCozy) | Expert Guide',
  description: 'Learn effective DIY methods for removing stubborn old carpet stains, plus know exactly when it\'s time to call professional carpet cleaners for help.',
  keywords: 'remove old carpet stains, stubborn carpet stains, DIY carpet stain removal, professional carpet stain removal, set-in carpet stains, carpet cleaning tips',
  openGraph: {
    title: 'How to Remove Old Carpet Stains (And When to Call CarpetCozy)',
    description: 'Learn effective DIY methods for removing stubborn old carpet stains, plus know exactly when it\'s time to call professional carpet cleaners for help.',
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
                How to Remove Old Carpet Stains (And When to Call CarpetCozy)
              </h1>
              <div className="text-sm text-gray-500 mb-4 text-left">
                Published: {new Date().toLocaleDateString()}
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <h2>Understanding Why Old Carpet Stains Are So Challenging</h2>
              <p>
                We've all been there—discovering an old stain on your carpet that somehow went unnoticed for weeks or even months. Unlike fresh spills, old carpet stains present unique challenges because they've had time to set into the fibers, potentially causing permanent damage. Whether it's a mysterious dark spot, a forgotten wine spill, or pet accidents that weren't properly cleaned, this guide will help you tackle those stubborn old stains with professional-grade techniques.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
                <p className="font-medium">Before attempting any stain removal method, always test in an inconspicuous area first to ensure it won't damage your carpet's color or texture.</p>
              </div>

              <h2>Essential Supplies for Old Stain Removal</h2>
              <p>
                Before beginning the stain removal process, gather these supplies:
              </p>
              <ul>
                <li>White microfiber cloths or white paper towels (avoid colored cloths that might transfer dye)</li>
                <li>Spray bottle</li>
                <li>Distilled white vinegar</li>
                <li>Baking soda</li>
                <li>Dish soap (non-bleach, mild)</li>
                <li>Hydrogen peroxide (3% solution)</li>
                <li>Ammonia (for certain stains, but never mix with bleach)</li>
                <li>Commercial enzyme cleaner (especially for protein-based stains)</li>
                <li>Soft bristle brush</li>
                <li>Vacuum cleaner</li>
              </ul>

              <h2>Step-by-Step Methods for Different Types of Old Stains</h2>
              
              <h3>Method 1: The Vinegar and Baking Soda Approach (For General Old Stains)</h3>
              <ol>
                <li><strong>Vacuum the stained area</strong> thoroughly to remove any loose particles</li>
                <li><strong>Create a cleaning solution</strong> by mixing equal parts white vinegar and water in a spray bottle</li>
                <li><strong>Spray the solution</strong> liberally over the stain, saturating it completely</li>
                <li><strong>Let it sit for 5-10 minutes</strong> to penetrate the fibers</li>
                <li><strong>Sprinkle baking soda</strong> generously over the dampened area</li>
                <li><strong>Wait for it to fizz</strong> - this reaction helps lift the stain from the fibers</li>
                <li><strong>Let it dry completely</strong> (usually 4-6 hours or overnight)</li>
                <li><strong>Vacuum thoroughly</strong> to remove all baking soda residue</li>
                <li><strong>Repeat if necessary</strong> for particularly stubborn stains</li>
              </ol>

              <h3>Method 2: Enzyme Cleaners (For Protein-Based Stains)</h3>
              <p>
                Old protein-based stains like blood, pet accidents, milk, or food require enzyme cleaners that actually break down the proteins:
              </p>
              <ol>
                <li><strong>Blot the area</strong> with a damp cloth to remove any surface debris</li>
                <li><strong>Apply enzyme cleaner</strong> according to the product's instructions</li>
                <li><strong>Allow adequate dwell time</strong> - usually 10-15 minutes minimum, but some stains may require hours</li>
                <li><strong>Blot with clean water</strong> to rinse (don't oversaturate)</li>
                <li><strong>Air dry</strong> and then vacuum</li>
              </ol>

              <div className="bg-blue-50 p-5 my-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Pro Tip: Heat Is Often The Enemy</h4>
                <p>For protein-based stains (blood, milk, egg, etc.), avoid hot water or heat, as this can "cook" the proteins and permanently set the stain into carpet fibers. Always use cool or lukewarm water.</p>
              </div>

              <h3>Method 3: Hydrogen Peroxide Solution (For Colored Stains)</h3>
              <p>
                For old juice, wine, coffee, or tea stains:
              </p>
              <ol>
                <li><strong>Mix a solution</strong> of 1 part hydrogen peroxide (3%) with 1 part mild dish soap</li>
                <li><strong>Apply to the stain</strong> with a spray bottle or cloth</li>
                <li><strong>Gently work the solution</strong> into the stain with a soft brush or cloth</li>
                <li><strong>Let it sit for 10 minutes</strong></li>
                <li><strong>Blot with clean water</strong> to rinse</li>
                <li><strong>Repeat as needed</strong></li>
              </ol>
              <p className="text-sm italic">
                Note: Test hydrogen peroxide on a hidden area first, as it can lighten some carpet colors.
              </p>

              <h3>Method 4: Ammonia Solution (For Stubborn Synthetic Stains)</h3>
              <p>
                For tough synthetic stains like ink or dye:
              </p>
              <ol>
                <li><strong>Mix a solution</strong> of 1 tablespoon ammonia with 1 cup warm water</li>
                <li><strong>Apply sparingly</strong> to the stain</li>
                <li><strong>Blot, don't rub</strong> with a white cloth</li>
                <li><strong>Rinse with clean water</strong> by blotting</li>
                <li><strong>Dry thoroughly</strong></li>
              </ol>
              <p className="text-sm italic text-red-600 font-medium">
                Warning: Never use ammonia on wool carpets. Also, never mix ammonia with bleach as it creates toxic fumes.
              </p>

              <h2>Specific Solutions for Common Old Stains</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="border rounded-lg p-4">
                  <h4 className="font-bold">Old Pet Stains</h4>
                  <p>Use an enzymatic cleaner specifically designed for pet messes. These break down both the stain and odor compounds. For set-in odors, you may need to pull back the carpet and treat the padding underneath.</p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h4 className="font-bold">Old Red Wine Stains</h4>
                  <p>Combine 1 part dishwashing liquid with a few drops of hydrogen peroxide. Apply to the stain, let sit for 20 minutes, then blot with clean water. For very old stains, you might need multiple applications.</p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h4 className="font-bold">Old Coffee or Tea Stains</h4>
                  <p>Mix 1 part white vinegar, 1 part dish soap, and 2 parts warm water. Apply to the stain, let sit for 15 minutes, then blot with clean water. Repeat as needed.</p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h4 className="font-bold">Old Grease or Oil Stains</h4>
                  <p>Apply dishwashing liquid directly to the stain (it's designed to break down grease). Work it in gently, let sit for 10 minutes, then blot with clean water. Repeat, following with a vinegar and water solution.</p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h4 className="font-bold">Old Ink Stains</h4>
                  <p>Apply rubbing alcohol with a cotton ball (test first in an inconspicuous area). Blot, don't rub. For ballpoint ink, try hairspray containing alcohol, applying it to a cloth first, then blotting the stain.</p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h4 className="font-bold">Old Blood Stains</h4>
                  <p>Use only cold water (never hot) with a few drops of dish soap. For persistent stains, make a paste with meat tenderizer and cold water, which helps break down proteins. Apply, let dry, then vacuum.</p>
                </div>
              </div>

              <h2>When DIY Methods Aren't Working: Signs It's Time to Call CarpetCozy</h2>
              <p>
                While many old stains can be successfully treated with DIY methods, there are situations where professional intervention is necessary:
              </p>
              <ul>
                <li><strong>The stain has penetrated deep into the carpet padding</strong></li>
                <li><strong>You've made multiple attempts</strong> with no improvement</li>
                <li><strong>The stain covers a large area</strong> (more than 6 inches in diameter)</li>
                <li><strong>You're dealing with particularly difficult substances</strong> like permanent marker, paint, or nail polish</li>
                <li><strong>The carpet is valuable</strong> (oriental rugs, wool carpets, or antique pieces)</li>
                <li><strong>You notice carpet damage</strong> like discoloration or fiber damage after DIY attempts</li>
                <li><strong>The stain has an accompanying odor</strong> that won't go away</li>
              </ul>

              <h2>How Professional Carpet Cleaners Handle Stubborn Old Stains</h2>
              <p>
                Professional carpet cleaners like CarpetCozy have several advantages when tackling old, set-in stains:
              </p>
              <ul>
                <li><strong>Commercial-grade equipment</strong> with stronger extraction power</li>
                <li><strong>Professional-strength cleaning solutions</strong> not available to consumers</li>
                <li><strong>Specialized training</strong> in identifying fiber types and appropriate cleaning methods</li>
                <li><strong>Hot water extraction methods</strong> that reach deep into carpet padding</li>
                <li><strong>Professional spotting tools</strong> designed specifically for difficult stains</li>
                <li><strong>Experience with thousands of stains</strong> across different carpet types</li>
              </ul>

              <h2>The CarpetCozy Approach to Old Stain Removal</h2>
              <p>
                When you call CarpetCozy for stubborn stain removal, our process includes:
              </p>
              <ol>
                <li><strong>Stain assessment</strong> - We identify the type of stain and carpet fiber</li>
                <li><strong>Pre-treatment</strong> with specialized solutions designed for your specific stain</li>
                <li><strong>Dwell time</strong> to allow cleaning agents to break down the stain molecules</li>
                <li><strong>Agitation</strong> using professional techniques and tools</li>
                <li><strong>Hot water extraction</strong> with powerful truck-mounted equipment</li>
                <li><strong>Post-treatment</strong> for any remaining trace of the stain</li>
                <li><strong>Speed drying</strong> to prevent any potential issues from moisture</li>
              </ol>

              <h2>Preventing Future Stains From Becoming "Old Stains"</h2>
              <p>
                The best way to deal with old stains is to prevent them from setting in the first place:
              </p>
              <ul>
                <li><strong>Act quickly</strong> on any spills - the longer they sit, the harder they are to remove</li>
                <li><strong>Blot, don't rub</strong> fresh spills to prevent pushing the stain deeper into fibers</li>
                <li><strong>Keep a basic stain kit</strong> prepared for immediate response</li>
                <li><strong>Consider professional carpet protection</strong> treatments that repel stains</li>
                <li><strong>Schedule regular professional cleanings</strong> every 12-18 months to address minor stains before they set</li>
              </ul>

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Need Help With Stubborn Carpet Stains?
                </h3>
                <p className="mb-4 text-lg text-gray-700">
                  If you've tried DIY methods without success, CarpetCozy's expert technicians can help. We have specialized equipment and solutions designed specifically for old, set-in stains that regular cleaning can't remove.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Professional Stain Removal
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:w-80 flex-shrink-0">
          <div className="sticky top-8 bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Stain Emergency?
            </h3>
            <p className="text-gray-600 mb-4">
              For tough stains that won't budge with DIY methods, our professional team is just a call away.
            </p>
            <Link
              href="/contact"
              className="block w-full text-center bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors mb-4"
            >
              Schedule Stain Removal
            </Link>
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2">Or call us directly:</p>
              <p className="text-lg font-semibold text-blue-600">(916) 555-1234</p>
            </div>
          </div>
          
          <div className="mt-6 bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Quick Stain Reference
            </h3>
            <div className="space-y-3">
              <div className="border-b pb-2">
                <span className="font-medium">Coffee & Tea:</span> Vinegar + dish soap
              </div>
              <div className="border-b pb-2">
                <span className="font-medium">Red Wine:</span> Hydrogen peroxide + dish soap
              </div>
              <div className="border-b pb-2">
                <span className="font-medium">Pet Accidents:</span> Enzyme cleaner
              </div>
              <div className="border-b pb-2">
                <span className="font-medium">Grease:</span> Dish soap, then vinegar
              </div>
              <div className="border-b pb-2">
                <span className="font-medium">Ink:</span> Rubbing alcohol or hairspray
              </div>
              <div>
                <span className="font-medium">Blood:</span> Cold water + enzyme cleaner
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
} 