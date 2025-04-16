import { Handler } from '@netlify/functions';

const handler: Handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  try {
    // Parse the form data
    const formData = new URLSearchParams(event.body);
    
    // Validate required fields
    const requiredFields = ['first-name', 'last-name', 'email', 'phone', 'service', 'message'];
    for (const field of requiredFields) {
      if (!formData.get(field)) {
        return {
          statusCode: 400,
          body: JSON.stringify({ error: `Missing required field: ${field}` }),
        };
      }
    }

    // Forward the submission to Netlify's form handling service
    const response = await fetch(process.env.NETLIFY_FORMS_ENDPOINT || '', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: event.body,
    });

    if (!response.ok) {
      throw new Error('Failed to submit form to Netlify');
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully' }),
    };
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};

export { handler }; 