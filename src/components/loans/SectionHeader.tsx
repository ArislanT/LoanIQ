'use client';

import { ReactNode } from 'react';

interface SectionHeaderProps {
  icon: ReactNode;
  iconBgColor: string;
  iconColor: string;
  title: string;
  subtitle?: string;
}

/**
 * SectionHeader - Icon + title + subtitle header for categorized sections
 * Used for loan categories, policy sections, etc.
 */
export default function SectionHeader({ 
  icon, 
  iconBgColor, 
  iconColor, 
  title, 
  subtitle 
}: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className={`w-10 h-10 ${iconBgColor} rounded-lg flex items-center justify-center`}>
        <span className={iconColor}>{icon}</span>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
      </div>
    </div>
  );
}

