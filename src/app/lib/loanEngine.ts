//Deterministic loan math engine (just math)

//loan input parameters
export type LoanInput = {
    principal: number; // PV
    apr: number; // Annual Percentage Rate (0.06 for 6%)
    termMonths: number; // n amoount of months for loan (5 years = 60 months, etc)
    payment?: number; // opitional PMT instead 
};
//loan calculation results
export type LoanResult = {
    monthlyPayment: number; // 
    totalCost: number; // Total paid over life of loan
    totalInterest: number; // Total interest paid over life of loan (totalCost - principal)
    monthsToPayoff: number; // number of months to payoff loan
};
//contextual scenarios for loan payoff
export type ScenarioType = 
| {type: "MIN_ONLY"}
| {type: "MISS_ONE"}
| {type: "PAY_EXTRA", extraMonthly: number}; 

//round to 2 decimal places for better looks
function round2(x: number) {
    return Number(x.toFixed(2));
}
//ensures user input is valid
function validateInput(input: LoanInput) {
  if (!Number.isFinite(input.principal) || input.principal <= 0) throw new Error("principal must be > 0");
  if (!Number.isFinite(input.apr) || input.apr < 0) throw new Error("apr must be >= 0");
  if (!Number.isFinite(input.termMonths) || input.termMonths <= 0) throw new Error("termMonths must be > 0");
  if (input.payment !== undefined && (!Number.isFinite(input.payment) || input.payment <= 0)) {
    throw new Error("payment must be > 0 when provided");
  }
}
//calculate PMT given PV, APR, and n from user
export function calcMonthlyPayment(PV: number, apr: number, n: number): number {
    const r = apr / 12; // monthly interest rate
    if (r === 0) return PV / n; // no interest case
    return (PV * r) / (1 - Math.pow(1 + r, -n));
}
//
export function calculateLoan(input: LoanInput): LoanResult {
  validateInput(input);

  const r = input.apr / 12; // monthly interest rate
  const pmt =
    input.payment ?? calcMonthlyPayment(input.principal, input.apr, input.termMonths);

  // If payment can't cover first month's interest, it will never amortize
  const firstMonthInterest = input.principal * r;
  if (r > 0 && pmt <= firstMonthInterest) {
    return {
      monthlyPayment: round2(pmt),
      totalInterest: Number.POSITIVE_INFINITY,
      totalCost: Number.POSITIVE_INFINITY,
      monthsToPayoff: Number.POSITIVE_INFINITY,
    };
  }

  // amortization loop
  let balance = input.principal;
  let totalInterest = 0;
  let months = 0;

  while (balance > 0 && months < 1200) {
    const interest = balance * r;
    totalInterest += interest;
    balance = balance + interest - pmt;
    months++;
  }

  return {
    monthlyPayment: round2(pmt),
    totalInterest: round2(totalInterest),
    totalCost: round2(input.principal + totalInterest),
    monthsToPayoff: months,
  };
}

export function applyScenario(input: LoanInput, scenario: ScenarioType) {
    const baseline = calculateLoan(input);

  if (!Number.isFinite(baseline.monthsToPayoff)) {
    return { baseline, scenario: baseline, delta: { months: 0, interest: 0 } };
  }

  let modified: LoanInput = { ...input };

  if (scenario.type === "PAY_EXTRA") {
    const extra = scenario.extraMonthly;
    if (!Number.isFinite(extra) || extra <= 0) throw new Error("extraMonthly must be > 0");
    modified.payment = baseline.monthlyPayment + extra;
  } else if (scenario.type === "MIN_ONLY") {
    modified.payment = baseline.monthlyPayment;
  } else if (scenario.type === "MISS_ONE") {
    const r = input.apr / 12;
    modified.principal = input.principal * (1 + r); // simple missed payment model
  }

  const scenarioResult = calculateLoan(modified);

  if (!Number.isFinite(scenarioResult.monthsToPayoff)) {
    return {
      baseline,
      scenario: scenarioResult,
      delta: { months: Number.POSITIVE_INFINITY, interest: Number.POSITIVE_INFINITY },
    };
  }
return {
    baseline,
    scenario: scenarioResult,
    delta: {
      months: scenarioResult.monthsToPayoff - baseline.monthsToPayoff,
      interest: round2(scenarioResult.totalInterest - baseline.totalInterest),
    },
  };
}
