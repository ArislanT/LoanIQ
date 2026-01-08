'use client';

import { PlusCircledIcon } from '@radix-ui/react-icons';

interface ExtraPaymentInputProps {
  value: number;
  onChange: (value: number) => void;
  onSubmit: () => void;
  isLoading: boolean;
  isDisabled: boolean;
  label: string;
  buttonLabel: string;
}

export default function ExtraPaymentInput({
  value,
  onChange,
  onSubmit,
  isLoading,
  isDisabled,
  label,
  buttonLabel,
}: ExtraPaymentInputProps) {
  return (
    <div className="bg-green-50 border border-green-200 rounded-xl p-4">
      <label className="block text-sm font-semibold text-green-800 mb-2">
        {label}
      </label>
      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">$</span>
          <input
            type="text"
            inputMode="numeric"
            value={value}
            onChange={(e) => {
              const sanitized = e.target.value.replace(/[^0-9]/g, '');
              onChange(sanitized === '' ? 0 : parseInt(sanitized, 10));
            }}
            className="w-full pl-7 pr-4 py-2 bg-white border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg font-semibold text-gray-900"
          />
        </div>
        <button
          onClick={onSubmit}
          disabled={isLoading || isDisabled || value <= 0}
          className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <PlusCircledIcon className="w-5 h-5" />
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}


