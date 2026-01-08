'use client';

import { MinusCircledIcon, CrossCircledIcon } from '@radix-ui/react-icons';

interface ScenarioButtonsProps {
  onPayMinimum: () => void;
  onMissPayment: () => void;
  isLoading: boolean;
  isPayMinimumDisabled: boolean;
  isMissPaymentDisabled: boolean;
  labels: {
    payMinimum: string;
    missPayment: string;
  };
}

export default function ScenarioButtons({
  onPayMinimum,
  onMissPayment,
  isLoading,
  isPayMinimumDisabled,
  isMissPaymentDisabled,
  labels,
}: ScenarioButtonsProps) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <button
        onClick={onPayMinimum}
        disabled={isLoading || isPayMinimumDisabled}
        className="flex items-center justify-center gap-2 p-4 bg-blue-50 hover:bg-blue-100 border-2 border-blue-200 hover:border-blue-400 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      >
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <MinusCircledIcon className="w-5 h-5 text-white" />
        </div>
        <span className="text-sm font-semibold text-blue-700">{labels.payMinimum}</span>
      </button>

      <button
        onClick={onMissPayment}
        disabled={isLoading || isMissPaymentDisabled}
        className="flex items-center justify-center gap-2 p-4 bg-red-50 hover:bg-red-100 border-2 border-red-200 hover:border-red-400 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      >
        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
          <CrossCircledIcon className="w-5 h-5 text-white" />
        </div>
        <span className="text-sm font-semibold text-red-700">{labels.missPayment}</span>
      </button>
    </div>
  );
}

