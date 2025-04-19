"use client";

import React from 'react'; // Removed useState
// Removed useRouter
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

// Metadata should ideally be static for Server Components,
// but since we marked this as "use client", it's okay here for now.
// Consider moving metadata if refactoring later.
// export const metadata = {
//   title: "Contact Us | CarpetCozy",
//   description:
//     "Get in touch with CarpetCozy for professional carpet cleaning services. Contact us for a free quote and expert advice.",
// };

export default function ContactPage() {
  // Removed state and handleSubmit

  return (
    <>
      {/* Hero Section */}
      <section
        className="hero relative bg-cover bg-center pt-32 pb-24 min-h-[500px]" // Added padding, bg-cover, bg-center
        style={{ backgroundImage: "url('/images/hero.jpeg')" }} // Use inline style for background
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-0"></div>

        {/* Removed the separate Image component */}
        {/* Content Container */}

        {/* Centered the container and text */}
        {/* Added pt-24 (header height) + extra padding */}
        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-text-primary">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-text-primary/80">
            We're here to help! Reach out for a free quote or to schedule your cleaning service.
          </p>
          {/* Buttons removed for this page */}
        </div> {/* End Content Container */}
      </section>

      {/* Contact Form Section */}
      <Section bgColor="default"> {/* Updated bgColor */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-text-primary border-b-2 border-primary pb-2">
              Get in Touch
            </h2>
            <p className="mb-6">
              Have questions about our services? Ready to schedule a cleaning?
              Fill out the form and we'll get back to you as soon as possible.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p>(916) 123-4567</p>
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>info@carpetcozy.com</p>
              </div>
              <div>
                <h3 className="font-semibold">Service Areas</h3>
                <p>Sacramento, Roseville, Rocklin, and surrounding areas</p>
              </div>
            </div>
          </div>

          {/* Contact Form Placeholder */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-text-primary border-b-2 border-primary pb-2">
              Send Us a Message
            </h2>
            {/* Reverted to Netlify HTML attributes */}
            <form
              name="contact-page-form"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field" // Re-added honeypot
              action="/thank-you" // Keep action for redirect
              className="space-y-6"
            >
              {/* Re-added hidden form-name input */}
              <input type="hidden" name="form-name" value="contact-page-form" />
              
              {/* Re-added honeypot field */}
              <p className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>
              {/*
              <p className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>
              */}
              
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  placeholder="Your Name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-1">Phone (Optional)</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  placeholder="(555) 123-4567"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  // Removed disabled state
                >
                  Send Message
                </Button>
              </div>
              {/* Removed status message */}
            </form>
          </div>
        </div>
      </Section>

      {/* Contact Information */}
      <div className="bg-background-alt p-8 rounded-lg shadow-subtle"> {/* Updated styles */}
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-text-primary border-b-2 border-primary pb-2">Contact Information</h2> {/* Updated colors */}

        <div className="space-y-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> {/* Updated color */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold mb-1 text-text-primary">Phone</h3> {/* Updated color */}
              <p className="text-text-primary/80">(555) 123-4567</p> {/* Updated color */}
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> {/* Updated color */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold mb-1 text-text-primary">Contact Form</h3> {/* Updated color */}
              <p className="text-text-primary/80">Fill out our form and we'll get back to you within 24 hours</p> {/* Updated color */}
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> {/* Updated color */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold mb-1 text-text-primary">Address</h3> {/* Updated color */}
              <p className="text-text-primary/80"> {/* Updated color */}
                123 Carpet Way<br />
                Roseville, CA 95678
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> {/* Updated color */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 01118 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold mb-1 text-text-primary">Business Hours</h3> {/* Updated color */}
              <p className="text-text-primary/80"> {/* Updated color */}
                Monday - Friday: 8:00 AM - 6:00 PM<br />
                Saturday: 9:00 AM - 3:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4 text-text-primary">Connect With Us</h3> {/* Updated color */}
          <div className="flex space-x-4">
            <a href="#" className="text-primary hover:text-primary/80"> {/* Updated color */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="text-primary hover:text-primary/80"> {/* Updated color */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href="#" className="text-primary hover:text-primary/80"> {/* Updated color */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.589 6.686a4.93 4.93 0 00-3.351-4.128 4.928 4.928 0 00-5.33 1.075 4.935 4.935 0 00-1.345 3.312 4.935 4.935 0 00-1.7-3.042 4.928 4.928 0 00-5.461-.894 4.928 4.928 0 00-2.323 2.397 4.93 4.93 0 001.055 5.452l8.11 8.11 8.345-8.345c.913-.913 2.215-2.205 2.215-3.939 0-.166-.014-.33-.04-.492a4.929 4.929 0 00-.175-.505zM5.5 9a3.5 3.5 0 010 7zm13 0a3.5 3.5 0 010 7z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="h-96 relative">
        <div className="absolute inset-0 z-0">
          {/* Replace with actual Google Maps embed */}
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500">Google Maps Embed</p>
          </div>
        </div>
      </section>

      {/* Service Areas Preview */}
      <Section bgColor="alt" title="Service Areas" subtitle="We proudly serve Roseville and surrounding communities"> {/* Changed to alt background */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <div className="bg-background p-4 rounded-lg text-center shadow-subtle"> {/* Updated styles */}
            <h3 className="font-bold text-text-primary">Roseville</h3> {/* Updated color */}
          </div>
          <div className="bg-background p-4 rounded-lg text-center shadow-subtle"> {/* Updated styles */}
            <h3 className="font-bold text-text-primary">Rocklin</h3> {/* Updated color */}
          </div>
          <div className="bg-background p-4 rounded-lg text-center shadow-subtle"> {/* Updated styles */}
            <h3 className="font-bold text-text-primary">Granite Bay</h3> {/* Updated color */}
          </div>
          <div className="bg-background p-4 rounded-lg text-center shadow-subtle"> {/* Updated styles */}
            <h3 className="font-bold text-text-primary">Sacramento</h3> {/* Updated color */}
          </div>
          {/* Add more areas as needed */}
        </div>
        <div className="text-center mt-8">
          <Button href="/areas" variant="primary">View All Service Areas</Button> {/* Updated styles */}
        </div>
      </Section>
    </>
  );
}
