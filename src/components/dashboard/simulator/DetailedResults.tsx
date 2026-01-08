'use client';

import { Separator } from '@radix-ui/react-separator';

interface DetailedResultsProps {
  baseline: {
    monthlyPayment: number;
    totalCost: number;
    totalInterest: number;
    monthsToPayoff: number;
  };
  scenario: {
    monthlyPayment: number;
    totalCost: number;
    totalInterest: number;
    monthsToPayoff: number;
  };
  delta: {
    months: number;
    interest: number;
  };
}

export default function DetailedResults({ baseline, scenario, delta }: DetailedResultsProps) {
  return (
    <div className="bg-white border-2 border-capital-blue/30 rounded-xl p-5 space-y-4">
      <h4 className="text-lg font-bold text-gray-900">Your Results</h4>
      
      <Separator className="h-px bg-gray-200" />
      
      {/* Comparison Grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* Baseline Column */}
        <div className="space-y-3">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Baseline Plan</div>
          <div className="space-y-2">
            <StatCard
              label="Monthly Payment"
              value={`$${baseline.monthlyPayment.toFixed(0)}`}
              variant="baseline"
            />
            <StatCard
              label="Total Cost"
              value={`$${baseline.totalCost.toFixed(0)}`}
              variant="baseline"
            />
            <StatCard
              label="Total Interest"
              value={`$${baseline.totalInterest.toFixed(0)}`}
              variant="baseline"
            />
            <StatCard
              label="Months to Pay Off"
              value={`${baseline.monthsToPayoff} months`}
              variant="baseline"
            />
          </div>
        </div>

        {/* Scenario Column */}
        <div className="space-y-3">
          <div className="text-xs font-semibold text-capital-blue uppercase tracking-wide">With Your Choice</div>
          <div className="space-y-2">
            <StatCard
              label="Monthly Payment"
              value={`$${scenario.monthlyPayment.toFixed(0)}`}
              variant="scenario"
            />
            <StatCard
              label="Total Cost"
              value={`$${scenario.totalCost.toFixed(0)}`}
              variant="scenario"
            />
            <StatCard
              label="Total Interest"
              value={`$${scenario.totalInterest.toFixed(0)}`}
              variant="scenario"
            />
            <StatCard
              label="Months to Pay Off"
              value={`${scenario.monthsToPayoff} months`}
              variant="scenario"
            />
          </div>
        </div>
      </div>

      <Separator className="h-px bg-gray-200" />

      {/* Impact Summary */}
      <div className={`p-4 rounded-lg border-2 ${
        delta.months < 0 
          ? 'bg-green-50 border-green-300' 
          : 'bg-red-50 border-red-300'
      }`}>
        <div className={`text-sm font-semibold mb-2 ${
          delta.months < 0 ? 'text-green-800' : 'text-red-800'
        }`}>Impact</div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <div className="text-xs text-gray-600">Time Difference</div>
            <div className={`text-xl font-bold ${
              delta.months < 0 ? 'text-green-700' : 'text-red-700'
            }`}>
              {delta.months < 0 ? '' : '+'}{delta.months} months
            </div>
          </div>
          <div>
            <div className="text-xs text-gray-600">Interest Difference</div>
            <div className={`text-xl font-bold ${
              delta.interest < 0 ? 'text-green-700' : 'text-red-700'
            }`}>
              {delta.interest < 0 ? '-' : '+'}${Math.abs(delta.interest).toFixed(0)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, variant }: { label: string; value: string; variant: 'baseline' | 'scenario' }) {
  const baseClasses = "rounded-lg p-3";
  const variantClasses = variant === 'baseline' 
    ? "bg-gray-50"
    : "bg-capital-blue/5 border border-capital-blue/20";
  const valueClasses = variant === 'baseline'
    ? "text-gray-900"
    : "text-capital-blue";

  return (
    <div className={`${baseClasses} ${variantClasses}`}>
      <div className="text-sm text-gray-600">{label}</div>
      <div className={`text-lg font-bold ${valueClasses}`}>{value}</div>
    </div>
  );
}


