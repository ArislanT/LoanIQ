'use client';

import { Separator } from '@radix-ui/react-separator';

interface LoanInfoHeaderProps {
  name: string;
  type: 'federal' | 'private';
  interestRate: number;
  monthlyPayment: number;
  gracePeriodMonths: number;
  isSubsidized: boolean;
}

export default function LoanInfoHeader({
  name,
  type,
  interestRate,
  monthlyPayment,
  gracePeriodMonths,
  isSubsidized,
}: LoanInfoHeaderProps) {
  return (
    <div className="bg-capital-blue/5 border border-capital-blue/20 rounded-xl p-4">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{name}</h3>
          <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold mt-1 ${
            type === 'federal' 
              ? 'bg-blue-100 text-blue-700' 
              : 'bg-purple-100 text-purple-700'
          }`}>
            {type === 'federal' ? 'Federal' : 'Private'}
          </span>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-capital-blue">
            {(interestRate * 100).toFixed(2)}%
          </div>
          <div className="text-xs text-gray-500">Interest Rate (APR)</div>
        </div>
      </div>
      
      <Separator className="h-px bg-gray-200 my-3" />
      
      <div className="grid grid-cols-3 gap-4">
        <div>
          <div className="text-sm font-semibold text-gray-900">${monthlyPayment.toFixed(0)}</div>
          <div className="text-xs text-gray-500">Monthly Payment</div>
        </div>
        <div>
          <div className="text-sm font-semibold text-gray-900">{gracePeriodMonths} months</div>
          <div className="text-xs text-gray-500">Grace Period</div>
        </div>
        <div>
          <div className={`text-sm font-semibold ${isSubsidized ? 'text-green-600' : 'text-orange-600'}`}>
            {isSubsidized ? 'Yes' : 'No'}
          </div>
          <div className="text-xs text-gray-500">Subsidized</div>
        </div>
      </div>
    </div>
  );
}

