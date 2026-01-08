'use client';

import { CheckCircledIcon, ExclamationTriangleIcon, CrossCircledIcon } from '@radix-ui/react-icons';

interface FeedbackMessageProps {
  message: string | null;
  type: 'success' | 'warning' | 'error';
}

export default function FeedbackMessage({ message, type }: FeedbackMessageProps) {
  if (!message) {
    return <div className="min-h-[52px]" />;
  }

  const icon = {
    success: <CheckCircledIcon className="w-5 h-5 flex-shrink-0" />,
    warning: <ExclamationTriangleIcon className="w-5 h-5 flex-shrink-0" />,
    error: <CrossCircledIcon className="w-5 h-5 flex-shrink-0" />,
  }[type];

  const styles = {
    success: 'bg-green-50 text-green-800 border-green-200',
    warning: 'bg-yellow-50 text-yellow-800 border-yellow-200',
    error: 'bg-red-50 text-red-800 border-red-200',
  }[type];

  return (
    <div className="min-h-[52px]">
      <div className={`flex items-start gap-3 p-3 rounded-lg text-sm font-medium border ${styles}`}>
        {icon}
        <span className="flex-1">{message}</span>
      </div>
    </div>
  );
}

