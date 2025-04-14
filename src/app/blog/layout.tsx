import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CarpetCozy Blog',
  description: 'Expert carpet cleaning tips and insights from CarpetCozy.',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-32"> {/* Add padding top for navigation */}
        {children}
      </div>
    </div>
  );
} 