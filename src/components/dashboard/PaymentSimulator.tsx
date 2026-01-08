'use client';

import { useState } from 'react';
import { Separator } from '@radix-ui/react-separator';
import {
  LoanInfoHeader,
  PaymentProgressBar,
  FeedbackMessage,
  DetailedResults,
  ExtraPaymentInput,
  ScenarioButtons,
} from './simulator';

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
  const [detailedResults, setDetailedResults] = useState<{
    baseline: { monthlyPayment: number; totalCost: number; totalInterest: number; monthsToPayoff: number };
    scenario: { monthlyPayment: number; totalCost: number; totalInterest: number; monthsToPayoff: number };
    delta: { months: number; interest: number };
  } | null>(null);

  const percentage = Math.round((paidAmount / principal) * 100);
  const remainingAmount = principal - paidAmount;

  const simulatePayment = async (scenario: Scenario) => {
    setIsLoading(true);
    setMessage(null);

    try {
      // Map UI scenario to engine scenario type
      let engineScenario;
      switch (scenario) {
        case 'PAY_EXTRA':
          engineScenario = { type: 'PAY_EXTRA', extraMonthly: extraAmount };
          break;
        case 'PAY_MINIMUM':
          engineScenario = { type: 'MIN_ONLY' };
          break;
        case 'MISS_PAYMENT':
          engineScenario = { type: 'MISS_ONE' };
          break;
        default:
          throw new Error('Invalid scenario');
      }

      // Call scenario API
      const response = await fetch('/api/scenario', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          principal: principal - paidAmount, // Remaining principal
          apr: loanInfo.interestRate,
          termMonths,
          scenario: engineScenario,
        }),
      });

      const data = await response.json();

      if (data.error) {
        setMessage(data.error);
        setMessageType('error');
        return;
      }

      // Calculate new paid amount and message based on scenario
      let newPaidAmount = paidAmount;
      let msg = '';

      switch (scenario) {
        case 'PAY_EXTRA':
          const totalPayment = data.baseline.monthlyPayment + extraAmount;
          newPaidAmount = paidAmount + totalPayment;
          msg = `Paid $${extraAmount.toFixed(0)} extra (total: $${totalPayment.toFixed(0)}). You'll save $${Math.abs(data.delta.interest).toFixed(0)} in interest and pay off ${Math.abs(data.delta.months)} months sooner!`;
          break;

        case 'PAY_MINIMUM':
          newPaidAmount = paidAmount + data.baseline.monthlyPayment;
          msg = `Minimum payment of $${data.baseline.monthlyPayment.toFixed(0)} applied. On track with your payment plan.`;
          break;

        case 'MISS_PAYMENT':
          const monthlyInterest = (principal - paidAmount) * (loanInfo.interestRate / 12);
          newPaidAmount = Math.max(0, paidAmount - monthlyInterest);
          msg = `Missed payment! $${monthlyInterest.toFixed(0)} in interest added. This adds ${data.delta.months} months and $${data.delta.interest.toFixed(0)} extra interest.`;
          break;
      }

      // Ensure paid amount stays within bounds
      newPaidAmount = Math.max(0, Math.min(newPaidAmount, principal));
      setPaidAmount(newPaidAmount);
      setMessage(msg);
      setMessageType(
        scenario === 'MISS_PAYMENT' ? 'error' : 
        scenario === 'PAY_EXTRA' ? 'success' : 'warning'
      );
      
      // Store detailed results
      setDetailedResults({
        baseline: data.baseline,
        scenario: data.scenario,
        delta: data.delta,
      });
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
    setDetailedResults(null);
  };

  return (
    <div className="space-y-6">
      {/* Loan Info Header */}
      <LoanInfoHeader
        name={loanInfo.name}
        type={loanInfo.type}
        interestRate={loanInfo.interestRate}
        monthlyPayment={loanInfo.monthlyPayment}
        gracePeriodMonths={loanInfo.gracePeriodMonths}
        isSubsidized={loanInfo.isSubsidized}
      />

      <Separator className="h-px bg-gray-200" />

      <PaymentProgressBar
        paidAmount={paidAmount}
        remainingAmount={remainingAmount}
        percentage={percentage}
        labels={{ paid: labels.paid, remaining: labels.remaining }}
      />

    
      <FeedbackMessage message={message} type={messageType} />
     
      {detailedResults && (
        <DetailedResults
          baseline={detailedResults.baseline}
          scenario={detailedResults.scenario}
          delta={detailedResults.delta}
        />
      )}

    
      <ExtraPaymentInput
        value={extraAmount}
        onChange={setExtraAmount}
        onSubmit={() => simulatePayment('PAY_EXTRA')}
        isLoading={isLoading}
        isDisabled={paidAmount >= principal}
        label="Extra payment amount"
        buttonLabel={labels.payExtra}
      />

    
      <ScenarioButtons
        onPayMinimum={() => simulatePayment('PAY_MINIMUM')}
        onMissPayment={() => simulatePayment('MISS_PAYMENT')}
        isLoading={isLoading}
        isPayMinimumDisabled={paidAmount >= principal}
        isMissPaymentDisabled={paidAmount <= 0}
        labels={{ payMinimum: labels.payMinimum, missPayment: labels.missPayment }}
      />

     
      <div className="h-8">
        {paidAmount !== initialPaid && (
          <button
            onClick={handleReset}
            className="w-full text-sm text-gray-500 hover:text-gray-700 font-medium underline transition-colors"
          >
            {labels.reset}
          </button>
        )}
      </div>
    </div>
  );
}
