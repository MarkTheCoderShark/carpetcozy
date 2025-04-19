const fetch = require('node-fetch');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const formData = JSON.parse(event.body);

    // Prepare data for Netlify submission
    // Netlify expects form data URL encoded
    const encodedData = new URLSearchParams({
      'form-name': 'contact-page-form', // Ensure this matches the form name Netlify expects
      ...formData,
    }).toString();

    // Submit to Netlify's endpoint
    // Use the site's URL, Netlify intercepts POSTs to the root path
    // with 'form-name' parameter for form submissions.
    const response = await fetch(process.env.URL || 'https://carpetcozy.com/', { // Use environment variable or fallback
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodedData,
    });

    if (!response.ok) {
      // Log the error response from Netlify if possible
      const errorBody = await response.text();
      console.error('Netlify form submission failed:', response.status, errorBody);
      throw new Error(`Netlify form submission failed: ${response.status}`);
    }

    // If submission to Netlify is successful
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully to Netlify function' }),
    };

  } catch (error) {
    console.error('Error processing form submission:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to submit form' }),
    };
  }
};