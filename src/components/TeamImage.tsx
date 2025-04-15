'use client';

import Image from 'next/image';
import { useState } from 'react';

interface TeamImageProps {
  className?: string;
  containerClassName?: string;
}

export default function TeamImage({ className = '', containerClassName = '' }: TeamImageProps) {
  const [useRegularImg, setUseRegularImg] = useState(false);

  return (
    <div className={`relative ${containerClassName}`}>
      {useRegularImg ? (
        <img
          src="/images/team.png"
          alt="The CarpetCozy Professional Team"
          className={`object-cover w-full h-full ${className}`}
        />
      ) : (
        <Image
          src="/images/team.png"
          alt="The CarpetCozy Professional Team"
          width={1200}
          height={800}
          priority
          className={`object-cover w-full h-full ${className}`}
          onError={() => setUseRegularImg(true)}
        />
      )}
    </div>
  );
} 