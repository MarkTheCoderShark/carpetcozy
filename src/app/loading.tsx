export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-200 border-solid rounded-full"></div>
        <div className="w-16 h-16 border-4 border-blue-600 border-solid rounded-full animate-spin absolute top-0 left-0 border-t-transparent"></div>
      </div>
      <p className="mt-4 text-gray-600">Loading...</p>
    </div>
  );
} 