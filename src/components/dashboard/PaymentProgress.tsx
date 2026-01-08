'use client';

interface PaymentProgressProps {
  paidAmount: string;
  remainingAmount: string;
  percentage: number;
  paidLabel: string;
  remainingLabel: string;
}

// payment progress component
export default function PaymentProgress({ 
  paidAmount, 
  remainingAmount, 
  percentage,
  paidLabel,
  remainingLabel
}: PaymentProgressProps) {
  return (
    <div className="relative">
      <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all duration-1000" 
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="flex justify-between text-sm font-medium text-gray-700 mt-3">
        <span>{paidAmount} {paidLabel}</span>
        <span className="text-gray-500">{percentage}%</span>
        <span>{remainingAmount} {remainingLabel}</span>
      </div>
    </div>
  );
}
