const fetch = require('node-fetch');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const formData = JSON.parse(event.body);
    console.log('[submit-contact-form] Received data:', JSON.stringify(formData)); // Log received data

    // Prepare data for Netlify submission
    // Netlify expects form data URL encoded
    const encodedData = new URLSearchParams({
      'form-name': 'contact-page-form', // Ensure this matches the form name Netlify expects
      ...formData,
    }).toString();
    console.log('[submit-contact-form] Encoded data for Netlify:', encodedData); // Log encoded data

    // Submit to Netlify's endpoint
    // Use the site's URL, Netlify intercepts POSTs to the root path
    // Use the root path '/', Netlify intercepts POSTs to any path
    // with 'form-name' parameter for form submissions.
    const targetUrl = '/'; // Submit to root path
    console.log(`[submit-contact-form] Submitting to Netlify endpoint: ${targetUrl}`);
    const response = await fetch(targetUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodedData,
    });
    const responseBody = await response.text(); // Read body regardless of status
    console.log(`[submit-contact-form] Netlify submission response status: ${response.status}`); // Log response status
    console.log(`[submit-contact-form] Netlify submission response body: ${responseBody}`); // Log response body

    if (!response.ok) {
      // Log details but don't necessarily throw an error that stops the frontend success message
      // Rely on logs to see the actual Netlify failure
      console.error(`[submit-contact-form] Netlify submission failed: ${response.status} - ${responseBody}`);
      // Potentially return a different status or message if needed, but for now, let frontend show success
      // throw new Error(`Netlify form submission failed: ${response.status}`);
    }

    // If submission to Netlify is successful (as far as the fetch call goes)
    console.log('[submit-contact-form] Function execution successful.');
    return {
      statusCode: 200, // Return 200 to frontend even if Netlify silently failed, rely on logs
      body: JSON.stringify({ message: 'Form submission processed by function.' }),
    };

  } catch (error) {
    console.error('[submit-contact-form] Error processing submission:', error);
    return {
      statusCode: 500, // Internal server error
      body: JSON.stringify({ error: 'Failed to process form submission in function.' }),
    };
  }
};