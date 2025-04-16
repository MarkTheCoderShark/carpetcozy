"use client";

import React, { useState } from 'react';
import Button from './Button';

interface FormData {
  'first-name': string;
  'last-name': string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    'first-name': '',
    'last-name': '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const formDataObj = new FormData();
      Object.entries({ ...formData, 'form-name': 'contact' }).forEach(([key, value]) => {
        formDataObj.append(key, value);
      });

      const response = await fetch('/.netlify/functions/handle-form', {
        method: 'POST',
        body: formDataObj,
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          'first-name': '',
          'last-name': '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('An unexpected error occurred. Please try again later or contact us directly.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg relative" role="alert">
        <strong className="font-bold">Success!</strong>
        <span className="block sm:inline"> Thank you for your message. We'll be in touch soon!</span>
      </div>
    );
  }

  return (
    <>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/.netlify/functions/handle-form"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don't fill this out if you're human: <input name="bot-field" />
          </label>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="first-name" className="block text-text-primary/90 font-medium mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="first-name"
              name="first-name"
              className="w-full px-4 py-2 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background-alt"
              required
              value={formData['first-name']}
              onChange={handleChange}
              disabled={status === 'loading'}
            />
          </div>
          <div>
            <label htmlFor="last-name" className="block text-text-primary/90 font-medium mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              className="w-full px-4 py-2 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background-alt"
              required
              value={formData['last-name']}
              onChange={handleChange}
              disabled={status === 'loading'}
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-text-primary/90 font-medium mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background-alt"
            required
            value={formData.email}
            onChange={handleChange}
            disabled={status === 'loading'}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-text-primary/90 font-medium mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-2 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background-alt"
            required
            value={formData.phone}
            onChange={handleChange}
            disabled={status === 'loading'}
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-text-primary/90 font-medium mb-2">
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            className="w-full px-4 py-2 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background-alt"
            value={formData.service}
            onChange={handleChange}
            disabled={status === 'loading'}
          >
            <option value="">Select a Service</option>
            <option value="residential">Residential Carpet Cleaning</option>
            <option value="commercial">Commercial Carpet Cleaning</option>
            <option value="pet-stain">Pet Stain & Odor Removal</option>
            <option value="stain-treatment">Deep Stain Treatment</option>
            <option value="upholstery">Upholstery Cleaning</option>
            <option value="area-rug">Area Rug Cleaning</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-text-primary/90 font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full px-4 py-2 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background-alt"
            placeholder="Tell us about your needs or ask any questions..."
            value={formData.message}
            onChange={handleChange}
            disabled={status === 'loading'}
          ></textarea>
        </div>

        <div>
          <Button type="submit" variant="primary" size="lg" disabled={status === 'loading'}>
            {status === 'loading' ? 'Submitting...' : 'Submit Message'}
          </Button>
        </div>

        {status === 'error' && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mt-4" role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline"> {errorMessage}</span>
          </div>
        )}
      </form>

      <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
        <input type="text" name="first-name" />
        <input type="text" name="last-name" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <select name="service"></select>
        <textarea name="message"></textarea>
      </form>
    </>
  );
};

export default ContactForm;