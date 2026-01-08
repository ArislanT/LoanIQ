'use client';

import { useState } from 'react';
import { PlusCircledIcon, MinusCircledIcon, CrossCircledIcon } from '@radix-ui/react-icons';

interface LoanInfo {
  name: string;
  type: 'federal' | 'private';
  interestRate: number;      // APR as decimal (e.g., 0.055 for 5.5%)
  isSubsidized: boolean;     // Government pays interest while in school
  monthlyPayment: number;    // Calculated monthly payment
  gracePeriodMonths: number; // Months before repayment starts
}

interface PaymentSimulatorProps {
  // Loan info for display
  loanInfo: LoanInfo;
  // Loan parameters for the engine
  principal: number;      // Total loan amount
  termMonths: number;     // Loan term in months
  initialPaid: number;    // Starting paid amount
  labels: {
    title: string;
    payExtra: string;
    payMinimum: string;
    missPayment: string;
    paid: string;
    remaining: string;
    reset: string;
  };
}

type Scenario = 'PAY_EXTRA' | 'PAY_MINIMUM' | 'MISS_PAYMENT';

export default function PaymentSimulator({
  loanInfo,
  principal,
  termMonths,
  initialPaid,
  labels,
}: PaymentSimulatorProps) {
  const [paidAmount, setPaidAmount] = useState(initialPaid);
  const [extraAmount, setExtraAmount] = useState(100);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<'success' | 'warning' | 'error'>('success');

  const percentage = Math.round((paidAmount / principal) * 100);
  const remainingAmount = principal - paidAmount;

  const simulatePayment = async (scenario: Scenario) => {
    setIsLoading(true);
    setMessage(null);

    try {
      const response = await fetch('/api/simulate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          principal,
          apr: loanInfo.interestRate,
          termMonths,
          currentPaid: paidAmount,
          scenario,
          extraAmount: extraAmount,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setPaidAmount(data.newPaidAmount);
        setMessage(data.message);
        setMessageType(
          scenario === 'MISS_PAYMENT' ? 'error' : 
          scenario === 'PAY_EXTRA' ? 'success' : 'warning'
        );
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.');
        setMessageType('error');
      }
    } catch (error) {
      console.error('Simulation error:', error);
      setMessage('Failed to simulate. Please try again.');
      setMessageType('error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setPaidAmount(initialPaid);
    setMessage(null);
  };

  return (
    <div className="space-y-6">
      {/* Loan Info Header */}
      <div className="bg-capital-blue/5 border border-capital-blue/20 rounded-xl p-4">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-bold text-gray-900">{loanInfo.name}</h3>
            <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold mt-1 ${
              loanInfo.type === 'federal' 
                ? 'bg-blue-100 text-blue-700' 
                : 'bg-purple-100 text-purple-700'
            }`}>
              {loanInfo.type === 'federal' ? 'Federal' : 'Private'}
            </span>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-capital-blue">
              {(loanInfo.interestRate * 100).toFixed(2)}%
            </div>
            <div className="text-xs text-gray-500">Interest Rate (APR)</div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 pt-3 border-t border-gray-200">
          <div>
            <div className="text-sm font-semibold text-gray-900">${loanInfo.monthlyPayment.toFixed(0)}</div>
            <div className="text-xs text-gray-500">Monthly Payment</div>
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900">{loanInfo.gracePeriodMonths} months</div>
            <div className="text-xs text-gray-500">Grace Period</div>
          </div>
          <div>
            <div className={`text-sm font-semibold ${loanInfo.isSubsidized ? 'text-green-600' : 'text-orange-600'}`}>
              {loanInfo.isSubsidized ? 'Yes' : 'No'}
            </div>
            <div className="text-xs text-gray-500">Subsidized</div>
          </div>
        </div>
      </div>

      {/* Progress Bar - Capital One red to blue */}
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

      {/* Feedback Message - fixed height to prevent layout shift */}
      <div className="min-h-[52px]">
        {message && (
          <div className={`p-3 rounded-lg text-sm font-medium ${
            messageType === 'success' ? 'bg-green-50 text-green-800 border border-green-200' :
            messageType === 'warning' ? 'bg-yellow-50 text-yellow-800 border border-yellow-200' :
            'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {message}
          </div>
        )}
      </div>

      {/* Extra Payment Input */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-4">
        <label className="block text-sm font-semibold text-green-800 mb-2">
          Extra payment amount
        </label>
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">$</span>
            <input
              type="text"
              inputMode="numeric"
              value={extraAmount}
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9]/g, '');
                setExtraAmount(value === '' ? 0 : parseInt(value, 10));
              }}
              className="w-full pl-7 pr-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg font-semibold"
            />
          </div>
          <button
            onClick={() => simulatePayment('PAY_EXTRA')}
            disabled={isLoading || paidAmount >= principal || extraAmount <= 0}
            className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <PlusCircledIcon className="w-5 h-5" />
            {labels.payExtra}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => simulatePayment('PAY_MINIMUM')}
          disabled={isLoading || paidAmount >= principal}
          className="flex items-center justify-center gap-2 p-4 bg-blue-50 hover:bg-blue-100 border-2 border-blue-200 hover:border-blue-400 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <MinusCircledIcon className="w-5 h-5 text-white" />
          </div>
          <span className="text-sm font-semibold text-blue-700">{labels.payMinimum}</span>
        </button>

        <button
          onClick={() => simulatePayment('MISS_PAYMENT')}
          disabled={isLoading || paidAmount <= 0}
          className="flex items-center justify-center gap-2 p-4 bg-red-50 hover:bg-red-100 border-2 border-red-200 hover:border-red-400 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
            <CrossCircledIcon className="w-5 h-5 text-white" />
          </div>
          <span className="text-sm font-semibold text-red-700">{labels.missPayment}</span>
        </button>
      </div>

      {/* Reset button - fixed height container */}
      <div className="h-8">
        {paidAmount !== initialPaid && (
          <button
            onClick={handleReset}
            className="w-full text-sm text-gray-500 hover:text-gray-700 font-medium underline"
          >
            {labels.reset}
          </button>
        )}
      </div>
    </div>
  );
}
