'use client';

import { useEffect } from 'react';
import Button from '@/components/ui/Button';

export default function Error({
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
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-16 px-4 text-center">
      <h2 className="text-3xl font-bold text-red-600 mb-4">Something went wrong!</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        We apologize for the inconvenience. Please try again or contact us if the problem persists.
      </p>
      <div className="flex gap-4">
        <Button
          onClick={reset}
          variant="primary"
        >
          Try again
        </Button>
        <Button
          href="/"
          variant="outline"
        >
          Go Home
        </Button>
      </div>
    </div>
  );
} 