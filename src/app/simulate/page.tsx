'use client';

import { Layout } from '@/components/layout';
import { useLanguage } from '@/context/LanguageContext';
import { Card } from '@/components/shared';
import { PaymentSimulator } from '@/components/dashboard';

// Calculate monthly payment using loan engine formula
function calcMonthlyPayment(principal: number, apr: number, termMonths: number): number {
  const r = apr / 12;
  if (r === 0) return principal / termMonths;
  return (principal * r) / (1 - Math.pow(1 + r, -termMonths));
}

export default function SimulatePage() {
  const { text } = useLanguage();

  // Loan parameters based on Direct Subsidized Loan
  const principal = 35650;
  const interestRate = 0.055; // 5.5% APR
  const termMonths = 120; // 10 year standard repayment
  const currentPaid = 12450;

  // Calculate actual monthly payment using loanEngine formula
  const monthlyPayment = calcMonthlyPayment(principal, interestRate, termMonths);

  // Loan info for display
  const loanInfo = {
    name: 'Direct Subsidized Loan',
    type: 'federal' as const,
    interestRate: interestRate,
    isSubsidized: true,
    monthlyPayment: monthlyPayment,
    gracePeriodMonths: 6,
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{text.dashboard.simulator.title}</h1>
        <p className="text-gray-600 mb-6">See how different payment choices affect your loan</p>

        <Card>
          <PaymentSimulator
            loanInfo={loanInfo}
            principal={principal}
            termMonths={termMonths}
            initialPaid={currentPaid}
            labels={{
              title: text.dashboard.simulator.title,
              payExtra: text.dashboard.simulator.payExtra,
              payMinimum: text.dashboard.simulator.payMinimum,
              missPayment: text.dashboard.simulator.missPayment,
              paid: text.dashboard.paid,
              remaining: text.dashboard.remaining,
              reset: text.dashboard.simulator.reset,
            }}
          />
        </Card>
      </div>
    </Layout>
  );
}

