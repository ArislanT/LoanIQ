'use client';

import { Card, TagChip } from '@/components/shared';
import { RecommendedLoanData } from '@/types';

interface RecommendedLoanCardProps {
  loan: RecommendedLoanData;
  topPickLabel: string;
  interestRateLabel: string;
  monthlyPaymentLabel: string;
}

export default function RecommendedLoanCard({
  loan,
  topPickLabel,
  interestRateLabel,
  monthlyPaymentLabel,
}: RecommendedLoanCardProps) {
  return (
    <Card
      padding="md"
      className={loan.isTopPick ? 'border-capital-blue ring-2 ring-capital-blue/20' : ''}
    >
      {loan.isTopPick && (
        <span className="inline-block px-2 py-0.5 bg-capital-blue text-white text-xs font-bold rounded mb-3">
          {topPickLabel}
        </span>
      )}
      <h3 className="text-lg font-bold text-gray-900 mb-2">{loan.name}</h3>
      <p className="text-sm text-gray-600 mb-4">{loan.reason}</p>
      
      <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-gray-100">
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase mb-1">{interestRateLabel}</p>
          <p className="text-sm font-bold text-gray-900">{loan.interestRate}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase mb-1">{monthlyPaymentLabel}</p>
          <p className="text-sm font-bold text-gray-900">{loan.monthlyPayment}</p>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {loan.tags.map((tag, idx) => (
          <TagChip key={idx} label={tag} variant="primary" />
        ))}
      </div>
    </Card>
  );
}
