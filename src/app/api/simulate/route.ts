import { NextRequest } from 'next/server';
import { applyScenario, calculateLoan, LoanInput, ScenarioType } from '@/app/lib/loanEngine';

// Payment simulation endpoint using loanEngine math
// Handles: PAY_EXTRA, MIN_ONLY, MISS_ONE scenarios

type SimulateRequest = {
  principal: number;      
  apr: number;            
  termMonths: number;     
  currentPaid: number;   
  scenario: 'PAY_EXTRA' | 'PAY_MINIMUM' | 'MISS_PAYMENT';
  extraAmount?: number;  
};

export async function POST(req: NextRequest) {
  try {
    const body: SimulateRequest = await req.json();
    const { principal, apr, termMonths, currentPaid, scenario, extraAmount = 100 } = body;

    const loanInput: LoanInput = {
      principal,
      apr,
      termMonths,
    };

    let engineScenario: ScenarioType;
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
        return Response.json({ error: 'Invalid scenario type' }, { status: 400 });
    }

  
    const baseline = calculateLoan(loanInput);
    
    // Apply scenario to see the impact
    const scenarioResult = applyScenario(loanInput, engineScenario);

    // Calculate new paid amount based on scenario
    let newPaidAmount = currentPaid;
    let message = '';

    switch (scenario) {
      case 'PAY_EXTRA':
        const totalPayment = baseline.monthlyPayment + extraAmount;
        newPaidAmount = currentPaid + totalPayment;
        message = `Paid $${extraAmount.toFixed(0)} extra (total: $${totalPayment.toFixed(0)}). You'll save $${Math.abs(scenarioResult.delta.interest).toFixed(0)} in interest and pay off ${Math.abs(scenarioResult.delta.months)} months sooner!`;
        break;

      case 'PAY_MINIMUM':
        newPaidAmount = currentPaid + baseline.monthlyPayment;
        message = `Minimum payment of $${baseline.monthlyPayment.toFixed(0)} applied. On track with your payment plan.`;
        break;

      case 'MISS_PAYMENT':
        const monthlyInterest = (principal - currentPaid) * (apr / 12);
        newPaidAmount = Math.max(0, currentPaid - monthlyInterest);
        message = `Missed payment! $${monthlyInterest.toFixed(0)} in interest added. This adds ${scenarioResult.delta.months} months and $${scenarioResult.delta.interest.toFixed(0)} extra interest.`;
        break;
    }

    newPaidAmount = Math.max(0, Math.min(newPaidAmount, principal));
    const newRemainingAmount = principal - newPaidAmount;
    const percentage = Math.round((newPaidAmount / principal) * 100);

    return Response.json({
      success: true,
      newPaidAmount: Math.round(newPaidAmount),
      newRemainingAmount: Math.round(newRemainingAmount),
      percentage,
      message,
      baseline: {
        monthlyPayment: baseline.monthlyPayment,
        totalCost: baseline.totalCost,
        totalInterest: baseline.totalInterest,
        monthsToPayoff: baseline.monthsToPayoff,
      },
      scenarioResult: {
        monthlyPayment: scenarioResult.scenario.monthlyPayment,
        totalCost: scenarioResult.scenario.totalCost,
        totalInterest: scenarioResult.scenario.totalInterest,
        monthsToPayoff: scenarioResult.scenario.monthsToPayoff,
      },
      impact: {
        monthsChanged: scenarioResult.delta.months,
        interestDelta: scenarioResult.delta.interest,
      },
    });
  } catch (error: unknown) {
    console.error('Simulation error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to simulate payment';
    return Response.json({ error: errorMessage }, { status: 500 });
  }
}
