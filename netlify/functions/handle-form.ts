interface NetlifyEvent {
  httpMethod: string;
  body: string | null;
}

interface NetlifyResponse {
  statusCode: number;
  body: string;
}

const handler = async (event: NetlifyEvent): Promise<NetlifyResponse> => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  try {
    const payload = JSON.parse(event.body || '{}');

    // Log the form submission (you can see this in Netlify's Functions log)
    console.log('Form submission received:', payload);

    // Return success response
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submission successful' }),
    };
  } catch (error) {
    console.error('Error processing form submission:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error processing form submission' }),
    };
  }
};

export { handler }; 