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
    const formData = new URLSearchParams(event.body || '');
    
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

    // Create form submission data
    const submission: Record<string, string> = {
      'form-name': 'contact',
      'first-name': formData.get('first-name') as string,
      'last-name': formData.get('last-name') as string,
      'email': formData.get('email') as string,
      'phone': formData.get('phone') as string,
      'service': formData.get('service') as string,
      'message': formData.get('message') as string,
    };

    // Submit to Netlify Forms
    const response = await fetch(process.env.NETLIFY_FORMS_ENDPOINT || '', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(submission).toString(),
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