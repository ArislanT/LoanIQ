'use client';

import { useLanguage } from '@/context/LanguageContext';
import { LoanData } from '@/types';

interface LoanCardProps {
  loan: LoanData;
  onClick: () => void;
}

export default function LoanCard({ loan, onClick }: LoanCardProps) {
  const { text } = useLanguage();
  
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-capital-lg transition-all duration-200 cursor-pointer group"
    >
      <h3 className="text-xl font-bold text-gray-900 group-hover:text-capital-blue transition-colors mb-3">{loan.name}</h3>
      
      <p className="text-gray-700 mb-5 leading-relaxed text-sm">{loan.reason}</p>
      
      <div className="grid grid-cols-2 gap-4 mb-5 pb-5 border-b border-gray-100">
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
            {text.loans.interestType}
          </p>
          <p className="text-base font-bold text-gray-900">{loan.interestType}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
            {text.loans.monthlyPayment}
          </p>
          <p className="text-base font-bold text-gray-900">{loan.monthlyPayment}</p>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {loan.tags.map((tag, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-md text-xs font-semibold border ${
              tag.includes('Federal') || tag.includes('federal')
                ? 'bg-green-50 text-green-800 border-green-200'
                : tag.toLowerCase().includes('risk') || tag.toLowerCase().includes('riesgo')
                ? 'bg-yellow-50 text-yellow-800 border-yellow-200'
                : 'bg-blue-50 text-blue-800 border-blue-200'
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
