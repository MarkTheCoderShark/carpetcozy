import { HandlerEvent, HandlerContext } from '@netlify/functions';

export const handler = async (event: HandlerEvent, context: HandlerContext) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  try {
    const formData = JSON.parse(event.body || '{}');
    const requiredFields = ['first-name', 'last-name', 'email', 'phone', 'service', 'message'];
    const missingFields = requiredFields.filter(field => !formData[field]);

    if (missingFields.length > 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: `Missing required fields: ${missingFields.join(', ')}`,
        }),
      };
    }

    // Submit to Netlify Forms
    const response = await fetch('https://api.netlify.com/api/v1/forms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NETLIFY_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        form_name: 'contact',
        data: formData,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form to Netlify Forms');
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error('Error processing form:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'An unexpected error occurred while processing your request.',
      }),
    };
  }
}; 