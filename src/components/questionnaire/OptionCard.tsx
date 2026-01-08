'use client';

import { RadioGroup } from 'radix-ui';
import { ReactNode } from 'react';

interface OptionCardProps {
  value: string;
  children: ReactNode;
}

export default function OptionCard({ value, children }: OptionCardProps) {
  return (
    <RadioGroup.Item
      value={value}
      className="w-full p-3 rounded-lg text-left text-sm font-medium transition-all duration-200 border relative group cursor-pointer data-[state=checked]:bg-capital-blue data-[state=checked]:text-white data-[state=checked]:border-capital-blue data-[state=checked]:shadow-sm bg-white text-gray-900 border-gray-300 hover:border-capital-blue focus:outline-none focus:ring-2 focus:ring-capital-blue/20"
    >
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all border-gray-400 group-hover:border-capital-blue group-data-[state=checked]:border-white group-data-[state=checked]:bg-white">
          <RadioGroup.Indicator className="w-3 h-3 rounded-full">
            <svg className="w-3 h-3 text-capital-blue" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </RadioGroup.Indicator>
        </div>
        <span className="flex-1">{children}</span>
      </div>
    </RadioGroup.Item>
  );
}
