import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Prepare Your Home for Professional Carpet Cleaning | CarpetCozy",
  description: "Make the most of your carpet cleaning service with these easy preparation tips. Learn what to do before the professionals arrive to ensure the best possible results.",
  keywords: ["prepare for carpet cleaning", "professional carpet cleaning preparation", "carpet cleaning tips", "before carpet cleaning", "maximize carpet cleaning results"],
  openGraph: {
    title: "How to Prepare Your Home for Professional Carpet Cleaning",
    description: "Make the most of your carpet cleaning service with these easy preparation tips. Learn what to do before the professionals arrive to ensure the best possible results.",
    type: "article",
    url: "https://carpetcozy.com/blog/prepare-home-for-carpet-cleaning",
  },
};

export default function PrepareHomeForCarpetCleaning() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8">How to Prepare Your Home for Professional Carpet Cleaning</h1>

      {/* Introduction Section */}
      <section className="bg-white rounded-xl shadow-sm py-10 px-6 lg:py-14 max-w-3xl mx-auto mb-8">
        <div className="prose lg:prose-xl mx-auto">
          <p className="lead text-lg">
            Scheduling professional carpet cleaning is a smart investment in your home's cleanliness, appearance, and indoor air quality. To get the most value from your service, a little preparation goes a long way. At CarpetCozy, we want to help you maximize results and efficiency, which is why we've created this comprehensive guide on how to prepare your home before our team arrives.
          </p>
        </div>
      </section>

      {/* Why Preparation Matters */}
      <section className="bg-gray-50 rounded-xl shadow-sm py-10 px-6 lg:py-14 max-w-3xl mx-auto mb-8">
        <div className="prose lg:prose-xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-6">Why Preparation Matters</h2>
          <p>
            Taking time to prepare your home before professional carpet cleaning offers several important benefits:
          </p>
          <ul>
            <li>Ensures more thorough cleaning of all carpet areas</li>
            <li>Maximizes the efficiency of the cleaning process</li>
            <li>Protects your valuable and fragile items</li>
            <li>Prevents potential accidents or damage</li>
            <li>Allows technicians to focus solely on delivering exceptional cleaning results</li>
          </ul>
          <p>
            With proper preparation, you'll get better results in less time—a win for both you and the cleaning professionals.
          </p>
        </div>
      </section>

      {/* Pre-Cleaning Checklist */}
      <section className="bg-white rounded-xl shadow-sm py-10 px-6 lg:py-14 max-w-3xl mx-auto mb-8">
        <div className="prose lg:prose-xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-6">Your Pre-Cleaning Checklist: 1-2 Days Before</h2>
          
          <h3 className="mt-6 mb-2 text-xl font-semibold">1. Clear Floor Spaces</h3>
          <p>
            Remove small items, toys, shoes, and other objects from all carpeted areas being cleaned. This includes:
          </p>
          <ul>
            <li>Books and magazines</li>
            <li>Children's toys</li>
            <li>Pet toys and accessories</li>
            <li>Shoes and clothing items</li>
            <li>Small decorative objects</li>
            <li>Floor plants and their stands</li>
          </ul>
          
          <h3 className="mt-6 mb-2 text-xl font-semibold">2. Move Lightweight Furniture</h3>
          <p>
            While most carpet cleaning services (including CarpetCozy) will move larger furniture pieces as needed, you can speed up the process by relocating lightweight items such as:
          </p>
          <ul>
            <li>Coffee tables and end tables</li>
            <li>Dining chairs</li>
            <li>Floor lamps</li>
            <li>Small bookcases or storage units</li>
            <li>Footstools and ottomans</li>
          </ul>
          <p>
            Moving these items to uncarpeted areas or rooms not being cleaned will save time and ensure more thorough carpet coverage.
          </p>
          
          <h3 className="mt-6 mb-2 text-xl font-semibold">3. Identify and Point Out Stains</h3>
          <p>
            Make note of stubborn stains or problem areas that need special attention. Consider:
          </p>
          <ul>
            <li>Making a list of stain locations and types (wine, pet accidents, coffee, etc.)</li>
            <li>Taking photos of concerning areas</li>
            <li>Placing removable sticky notes near hard-to-see stains</li>
          </ul>
          <p>
            This preparation ensures technicians can pre-treat these areas appropriately with the right solutions.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-semibold mb-3">CarpetCozy Pro Tip</h3>
            <p>
              Avoid using store-bought spot removers right before professional cleaning. Some products can react with professional cleaning solutions. If you have a fresh spill, simply blot (don't rub) with a clean white cloth and water, then let our technicians handle the rest.
            </p>
          </div>
        </div>
      </section>

      {/* Day of Cleaning Section */}
      <section className="bg-gray-50 rounded-xl shadow-sm py-10 px-6 lg:py-14 max-w-3xl mx-auto mb-8">
        <div className="prose lg:prose-xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-6">On the Day of Cleaning</h2>
          
          <h3 className="mt-6 mb-2 text-xl font-semibold">1. Vacuum Carpets (If Possible)</h3>
          <p>
            While not absolutely necessary (as professional cleaners typically do a preliminary vacuum), giving your carpets a quick vacuum can remove surface debris and allow for deeper cleaning. Focus on high-traffic areas and visible dirt.
          </p>
          
          <h3 className="mt-6 mb-2 text-xl font-semibold">2. Secure Pets</h3>
          <p>
            For the safety and comfort of your pets and our technicians:
          </p>
          <ul>
            <li>Place pets in a secure area away from the cleaning zones</li>
            <li>Consider boarding or arranging for pets to be out of the home</li>
            <li>Ensure pet waste is cleaned up from yards where technicians may need access</li>
          </ul>
          
          <h3 className="mt-6 mb-2 text-xl font-semibold">3. Clear Parking Space</h3>
          <p>
            Reserve a convenient parking spot close to your home's entrance for the cleaning van, which needs to be relatively close to your home for equipment access.
          </p>
          
          <h3 className="mt-6 mb-2 text-xl font-semibold">4. Provide Clear Access</h3>
          <p>
            Ensure there's a clear path to all rooms being cleaned. This includes:
          </p>
          <ul>
            <li>Moving obstacles from hallways and doorways</li>
            <li>Securing low-hanging items that might be damaged by equipment</li>
            <li>Clearing entryway areas where hoses and equipment will be staged</li>
          </ul>
        </div>
      </section>

      {/* Special Considerations Section */}
      <section className="bg-white rounded-xl shadow-sm py-10 px-6 lg:py-14 max-w-3xl mx-auto mb-8">
        <div className="prose lg:prose-xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-6">Special Considerations</h2>
          
          <h3 className="mt-6 mb-2 text-xl font-semibold">Valuable and Fragile Items</h3>
          <p>
            Before cleaning day, take time to:
          </p>
          <ul>
            <li>Remove valuable items from tables and surfaces that will be moved</li>
            <li>Secure wall hangings and art pieces that could be disturbed by equipment vibration</li>
            <li>Relocate electronics and cords that might be in the way</li>
            <li>Store delicate knickknacks and collectibles safely away from the cleaning area</li>
          </ul>
          
          <h3 className="mt-6 mb-2 text-xl font-semibold">Draperies and Window Treatments</h3>
          <p>
            Pin up or tie back any drapes, curtains, or blinds that hang to the floor to prevent them from getting wet during the cleaning process.
          </p>

          <h3 className="mt-6 mb-2 text-xl font-semibold">Children's Considerations</h3>
          <p>
            If you have young children:
          </p>
          <ul>
            <li>Arrange for children to be out of the home during cleaning if possible</li>
            <li>Move favorite toys to a designated safe area before technicians arrive</li>
            <li>Collect and store small items like LEGO pieces that could be lost or vacuumed up</li>
          </ul>
        </div>
      </section>

      {/* Post-Cleaning Plans Section */}
      <section className="bg-gray-50 rounded-xl shadow-sm py-10 px-6 lg:py-14 max-w-3xl mx-auto mb-8">
        <div className="prose lg:prose-xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-6">Making Post-Cleaning Plans</h2>
          <p>
            Professional carpet cleaning typically requires some drying time. To accommodate this:
          </p>
          <ul>
            <li>Plan for 4-8 hours of drying time, depending on carpet type, humidity, and airflow</li>
            <li>Arrange family activities away from freshly cleaned areas</li>
            <li>Consider which rooms you'll need access to immediately and schedule cleaning accordingly</li>
            <li>Prepare alternative sleeping arrangements if bedrooms are being cleaned late in the day</li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-semibold mb-3">CarpetCozy Drying Enhancement</h3>
            <p>
              At CarpetCozy, we use high-powered extraction equipment that removes more moisture during cleaning, resulting in faster drying times. We'll also place air movers in critical areas upon request to further accelerate drying.
            </p>
          </div>
        </div>
      </section>

      {/* What You Don't Need to Do Section */}
      <section className="bg-white rounded-xl shadow-sm py-10 px-6 lg:py-14 max-w-3xl mx-auto mb-8">
        <div className="prose lg:prose-xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-6">What You Don't Need to Worry About</h2>
          <p>
            While preparation is helpful, our CarpetCozy technicians handle many aspects of the job. You don't need to:
          </p>
          <ul>
            <li><strong>Move heavy furniture:</strong> Our teams are trained to safely move sofas, entertainment centers, beds, and other large pieces</li>
            <li><strong>Purchase or rent equipment:</strong> We bring everything needed for professional-grade cleaning</li>
            <li><strong>Pre-treat stains:</strong> Our technicians have specialized products and training for stain removal</li>
            <li><strong>Clear entire rooms:</strong> We work around unmovable items like pianos, large entertainment centers, and antique furniture</li>
          </ul>
        </div>
      </section>

      {/* Communication Section */}
      <section className="bg-gray-50 rounded-xl shadow-sm py-10 px-6 lg:py-14 max-w-3xl mx-auto mb-8">
        <div className="prose lg:prose-xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-6">Communicating With Your Cleaning Technicians</h2>
          <p>
            For the best experience and results, be ready to:
          </p>
          <ul>
            <li>Point out areas of special concern (heavy traffic paths, pet accidents, spills)</li>
            <li>Identify any carpet repairs or stretching needs you've noticed</li>
            <li>Mention any previous treatments or cleaning methods used on the carpets</li>
            <li>Discuss any health concerns or sensitivities to cleaning products</li>
            <li>Ask questions about carpet care between professional cleanings</li>
          </ul>
          <p>
            Our CarpetCozy technicians appreciate your input and are happy to address specific concerns about your carpets.
          </p>
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-white rounded-xl shadow-sm py-10 px-6 lg:py-14 max-w-3xl mx-auto mb-8">
        <div className="prose lg:prose-xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-6">Ready for Cleaner, Fresher Carpets</h2>
          <p>
            By following these preparation steps, you'll help create the optimal conditions for successful carpet cleaning. Your preparation combined with our professional expertise ensures your carpets receive the most thorough cleaning possible.
          </p>
          <p>
            Remember that our CarpetCozy technicians are trained to handle the unexpected, so don't stress if you can't complete every item on this list. We're here to make your carpet cleaning experience as convenient and effective as possible.
          </p>
          <p className="mt-8">
            <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">Schedule Your Professional Carpet Cleaning</Link>
          </p>
        </div>
      </section>

      {/* Related Articles */}
      <section className="max-w-3xl mx-auto mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-semibold text-lg mb-2">
              <Link href="/blog/what-to-expect-carpet-cleaning" className="text-blue-600 hover:text-blue-800">
                What to Expect During a CarpetCozy Cleaning Appointment
              </Link>
            </h3>
            <p className="text-gray-700">
              A complete walkthrough of our cleaning process from booking to completion.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-semibold text-lg mb-2">
              <Link href="/blog/how-often-clean-carpet-with-pets" className="text-blue-600 hover:text-blue-800">
                How Often Should You Clean Carpets with Pets or Kids?
              </Link>
            </h3>
            <p className="text-gray-700">
              Learn the ideal carpet cleaning frequency for high-activity households.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 