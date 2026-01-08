'use client';

import Image from 'next/image';

interface EnoAvatarProps {
  size?: 'sm' | 'md';
  withBorder?: boolean;
}

export default function EnoAvatar({ size = 'md', withBorder = false }: EnoAvatarProps) {
  const sizeClasses = size === 'sm' ? 'w-6 h-6' : 'w-8 h-8';
  const borderClasses = withBorder ? 'border border-gray-200' : '';
  
  return (
    <span
      className={`${sizeClasses} rounded-full bg-white p-1.5 flex items-center justify-center overflow-hidden ${borderClasses}`}
    >
      <Image
        src="/images/eno.png"
        alt="Eno"
        width={40}
        height={40}
        className="w-full h-full object-contain"
      />
    </span>
  );
}

