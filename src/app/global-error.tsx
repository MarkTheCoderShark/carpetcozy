'use client';

import { useEffect } from 'react';
import Button from '@/components/ui/Button';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen py-16 px-4 text-center">
          <h2 className="text-3xl font-bold text-red-600 mb-4">Something went wrong!</h2>
          <p className="text-gray-600 mb-8 max-w-md">
            We apologize for the inconvenience. An unexpected error has occurred.
          </p>
          <button
            onClick={reset}
            className="bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 transition duration-300"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
} 