import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What to Expect During a CarpetCozy Cleaning Appointment',
  description: 'Learn exactly what happens during a professional carpet cleaning appointment with CarpetCozy. From preparation to completion, we guide you through every step of the process.',
  keywords: 'what to expect carpet cleaning, carpet cleaning process, professional carpet cleaning steps, carpet cleaning preparation',
  openGraph: {
    title: 'What to Expect During a CarpetCozy Cleaning Appointment',
    description: 'Learn exactly what happens during a professional carpet cleaning appointment with CarpetCozy. From preparation to completion, we guide you through every step of the process.',
    type: 'article',
    publishedTime: new Date().toISOString(),
    authors: ['CarpetCozy Team'],
  },
};

export default function BlogPost() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">What to Expect During a CarpetCozy Cleaning Appointment</h1>
        <div className="text-gray-600 mb-4">Published: {new Date().toLocaleDateString()}</div>
      </header>

      <section className="prose prose-lg max-w-none">
        <h2>Your Complete Guide to the CarpetCozy Experience</h2>
        <p>
          At CarpetCozy, we understand that scheduling your first professional carpet cleaning can feel a bit uncertain. That's why we've created this comprehensive guide to walk you through exactly what to expect during your appointment, from preparation to completion.
        </p>

        <h2>Before Your Appointment</h2>
        <p>
          To ensure the best possible results, we recommend these simple preparation steps:
        </p>
        <ul>
          <li>Clear small items from the floor (shoes, toys, etc.)</li>
          <li>Move any fragile or valuable items from the cleaning area</li>
          <li>Identify any specific stains or problem areas</li>
          <li>Ensure pets are secured in a safe area</li>
          <li>Make sure there's clear access to the areas being cleaned</li>
        </ul>

        <h2>When Your Technician Arrives</h2>
        <p>
          Our professional technicians will:
        </p>
        <ul>
          <li>Arrive within your scheduled time window</li>
          <li>Wear clean, professional uniforms and shoe covers</li>
          <li>Conduct a thorough pre-inspection of your carpets</li>
          <li>Discuss any specific concerns or problem areas</li>
          <li>Explain the cleaning process and answer your questions</li>
        </ul>

        <h2>The Cleaning Process</h2>
        <p>
          Our comprehensive cleaning process includes:
        </p>
        <ul>
          <li><strong>Pre-Vacuuming:</strong> Thorough vacuuming to remove loose dirt and debris</li>
          <li><strong>Pre-Treatment:</strong> Application of specialized cleaning solutions</li>
          <li><strong>Stain Treatment:</strong> Targeted treatment of specific stains</li>
          <li><strong>Hot Water Extraction:</strong> Deep cleaning with our advanced equipment</li>
          <li><strong>Post-Treatment:</strong> Application of protective treatments if requested</li>
        </ul>

        <h2>During the Cleaning</h2>
        <p>
          While we work, you can expect:
        </p>
        <ul>
          <li>Minimal disruption to your daily routine</li>
          <li>Clear communication about progress</li>
          <li>Respect for your home and belongings</li>
          <li>Efficient movement between rooms</li>
          <li>Professional handling of furniture (if requested)</li>
        </ul>

        <h2>After the Cleaning</h2>
        <p>
          Once the cleaning is complete:
        </p>
        <ul>
          <li>Your technician will conduct a final inspection</li>
          <li>You'll receive care instructions for your freshly cleaned carpets</li>
          <li>We'll discuss any follow-up care or maintenance</li>
          <li>You'll receive information about our satisfaction guarantee</li>
          <li>Payment will be processed (we accept all major credit cards)</li>
        </ul>

        <h2>Drying Time and Care</h2>
        <p>
          After your cleaning:
        </p>
        <ul>
          <li>Typical drying time is 4-6 hours</li>
          <li>We recommend keeping foot traffic to a minimum during drying</li>
          <li>Windows can be opened to speed up drying</li>
          <li>Furniture can be replaced after 24 hours</li>
          <li>Regular vacuuming can resume after 48 hours</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold mb-4">Ready to Experience the CarpetCozy Difference?</h3>
          <p className="mb-4">
            Now that you know what to expect, it's time to schedule your professional carpet cleaning. Our team is ready to transform your carpets and exceed your expectations.
          </p>
          <Link 
            href="/contact" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
          >
            Schedule Your Cleaning
          </Link>
        </div>

        <h2>Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">How long does the cleaning take?</h3>
            <p>Most homes take 2-4 hours, depending on size and condition.</p>
          </div>
          <div>
            <h3 className="font-semibold">Do I need to be home during the cleaning?</h3>
            <p>While you don't need to be present, we recommend being available for the initial walkthrough.</p>
          </div>
          <div>
            <h3 className="font-semibold">Is the cleaning solution safe for pets and children?</h3>
            <p>Yes, we use eco-friendly, pet-safe cleaning solutions.</p>
          </div>
          <div>
            <h3 className="font-semibold">What if I'm not satisfied with the results?</h3>
            <p>We offer a 100% satisfaction guarantee and will address any concerns.</p>
          </div>
        </div>

        <h2>Final Thoughts</h2>
        <p>
          At CarpetCozy, we're committed to making your carpet cleaning experience as smooth and stress-free as possible. Our professional team follows a proven process to deliver exceptional results while respecting your home and schedule. We look forward to serving you and exceeding your expectations.
        </p>
      </section>
    </article>
  );
} 