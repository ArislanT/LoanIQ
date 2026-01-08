'use client';

import { Progress } from 'radix-ui';
import { useLanguage } from '@/context/LanguageContext';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const { text } = useLanguage();
  const progress = (currentStep / totalSteps) * 100;
  
  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="max-w-2xl mx-auto px-4 py-3">
        <div className="flex items-center gap-3">
          <Progress.Root
            value={progress}
            className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden"
          >
            <Progress.Indicator
              className="h-full bg-capital-blue transition-all duration-500 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </Progress.Root>
          <span className="text-xs font-medium text-gray-600 whitespace-nowrap">
            {currentStep}/{totalSteps}
          </span>
        </div>
      </div>
    </div>
  );
}
