'use client';

import { ReactNode } from 'react';

interface WelcomeBannerProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

// welcome banner component
export default function WelcomeBanner({ title, subtitle, children }: WelcomeBannerProps) {
  return (
    <div className="bg-gradient-to-r from-capital-blue to-capital-blue-light text-white rounded-xl p-8 mb-8 shadow-capital-lg">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      {subtitle && <p className="text-blue-100">{subtitle}</p>}
      {children}
    </div>
  );
}
