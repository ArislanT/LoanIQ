'use client';

import type { FederalLoanType } from '@/app/lib/federalLoans';

interface FederalLoanCardProps {
  loan: FederalLoanType;
  isTopPick?: boolean;
  topPickLabel?: string;
}

export default function FederalLoanCard({ loan, isTopPick = false, topPickLabel }: FederalLoanCardProps) {
  return (
    <div className={`bg-white rounded-xl p-4 ${isTopPick ? 'border-2 border-capital-blue shadow-lg' : 'border border-gray-200'}`}>
      {isTopPick && topPickLabel && (
        <div className="bg-capital-blue text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
          {topPickLabel}
        </div>
      )}
      
      <h3 className="text-lg font-bold text-gray-900 mb-2">{loan.name}</h3>
      
      <div className="space-y-3 mb-4">
        <div>
          <div className="text-xs text-gray-500 font-semibold">Interest Rate</div>
          <div className="text-sm font-semibold text-capital-blue">{loan.interestBehavior}</div>
        </div>
        
        <div>
          <div className="text-xs text-gray-500 font-semibold">Target Borrowers</div>
          <div className="text-sm text-gray-700">{loan.targetBorrowers}</div>
        </div>
        
        <div>
          <div className="text-xs text-gray-500 font-semibold">Loan Limits</div>
          <div className="text-sm text-gray-700 whitespace-pre-line">{loan.loanLimits}</div>
        </div>
        
        <div>
          <div className="text-xs text-gray-500 font-semibold">Credit Check Required</div>
          <div className={`text-sm font-semibold ${loan.creditCheck === 'No' ? 'text-green-600' : 'text-orange-600'}`}>
            {loan.creditCheck}
          </div>
        </div>
      </div>
      
      {loan.keyFeatures && loan.keyFeatures.length > 0 && (
        <div className="mb-3">
          <div className="text-xs text-gray-500 font-semibold mb-2">Key Features</div>
          <ul className="space-y-1">
            {loan.keyFeatures.map((feature, idx) => (
              <li key={idx} className="text-sm text-gray-700 flex items-start">
                <span className="text-capital-blue mr-2">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {loan.notes && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
          <div className="text-xs font-semibold text-blue-800">{loan.notes}</div>
        </div>
      )}
      
      <a
        href={loan.website}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center bg-capital-blue text-white py-2 rounded-lg font-semibold text-sm hover:bg-capital-blue-dark transition-all"
      >
        Learn More
      </a>
    </div>
  );
}

