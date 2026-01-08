'use client';

import { ReactNode } from 'react';
import { ChevronRightIcon } from '@radix-ui/react-icons';

interface QuickActionButtonProps {
  icon: ReactNode;
  iconBgColor: string;
  title: string;
  subtitle: string;
  onClick?: () => void;
}

// quick action button component
export default function QuickActionButton({ 
  icon, 
  iconBgColor, 
  title, 
  subtitle,
  onClick 
}: QuickActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-4 bg-gray-50 hover:bg-gray-100 border-2 border-gray-200 hover:border-capital-blue rounded-lg p-5 text-left transition-all group w-full"
    >
      <div className={`w-12 h-12 ${iconBgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
        {icon}
      </div>
      <div className="flex-1">
        <div className="font-bold text-gray-900 group-hover:text-capital-blue transition-colors">{title}</div>
        <div className="text-sm text-gray-600">{subtitle}</div>
      </div>
      <ChevronRightIcon className="w-5 h-5 text-gray-400 group-hover:text-capital-blue transition-colors" />
    </button>
  );
}
