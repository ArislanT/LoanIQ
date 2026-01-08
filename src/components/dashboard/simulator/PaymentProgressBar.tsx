'use client';

interface PaymentProgressBarProps {
  paidAmount: number;
  remainingAmount: number;
  percentage: number;
  labels: {
    paid: string;
    remaining: string;
  };
}

export default function PaymentProgressBar({
  paidAmount,
  remainingAmount,
  percentage,
  labels,
}: PaymentProgressBarProps) {
  return (
    <div>
      <div className="h-6 bg-gray-200 rounded-full overflow-hidden shadow-inner">
        <div
          className={`h-full rounded-full transition-[width] duration-700 ease-out ${
            percentage >= 75 ? 'bg-capital-blue' :
            percentage >= 50 ? 'bg-gradient-to-r from-capital-red to-capital-blue' :
            percentage >= 25 ? 'bg-gradient-to-r from-capital-red to-capital-red/70' :
            'bg-capital-red'
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      
      <div className="flex justify-between items-center mt-3">
        <div className="text-sm">
          <span className="font-bold text-green-600">${paidAmount.toLocaleString()}</span>
          <span className="text-gray-500 ml-1">{labels.paid}</span>
        </div>
        <div className="text-lg font-bold text-capital-blue">{percentage}%</div>
        <div className="text-sm text-right">
          <span className="font-bold text-gray-700">${remainingAmount.toLocaleString()}</span>
          <span className="text-gray-500 ml-1">{labels.remaining}</span>
        </div>
      </div>
    </div>
  );
}

