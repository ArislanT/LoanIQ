export type FederalLoanType = {
  id: string;
  name: string;

  targetBorrowers: string;   // display-only
  interestBehavior: string;      // general description
  additionalInfo: string;        // high-level, non-eligibility

  protections: string[];         // conceptual benefits
  keyFeatures: string[];        // specific features

  creditCheck: string;         // whether a credit check is performed
  loanLimits: string;        // description of loan limits

  notes?: string;
  website: string;
};
export const FEDERAL_LOANS: FederalLoanType[] = [
  {
    id: "direct_subsidized_loan",
    name: "Direct Subsidized Loan",
    targetBorrowers: "Undergraduate students",
    interestBehavior: "6.39%",
    additionalInfo: "Must complete FAFSA. Financial need required.",
    protections: [
      "Deferment/forbearance options may apply",
      "Possible interest subsidy during certain periods",
      "Fixed-rate terms (as listed)",
    ],
    keyFeatures: [
      "No interest while enrolled at least half-time",
      "6-month grace period after graduation",
      "Government covers interest during deferment",
    ],
    creditCheck: "No",
    loanLimits:
      "Freshmen: $3,500\nSophomores: $4,500\nJuniors+: $5,500\nAggregate: $23,000",
    notes:
      "Need-based federal loan where government pays interest while in school",
    website: "https://studentaid.gov/",
  },
  {
    id: "direct_unsubsidized_loan",
    name: "Direct Unsubsidized Loan",
    targetBorrowers: "Undergraduate & graduate students",
    interestBehavior: "6.39% (undergrad) / 7.04% (grad)",
    additionalInfo: "Must complete FAFSA. No financial need required.",
    protections: ["Fixed-rate terms (as listed)"],
    keyFeatures: [
      "Interest accrues immediately",
      "Available to most students",
      "6-month grace period",
    ],
    creditCheck: "No",
    loanLimits:
      "Undergrad: $5,500-$12,500/year\nGrad: $20,500/year\nAggregate: $57,500 (UG), $138,500 (Grad)",
    notes: "Federal loan available regardless of financial need",
    website: "https://studentaid.gov/",
  },
  {
    id: "parent_plus_loan",
    name: "Parent PLUS Loan",
    targetBorrowers: "Parents of dependent undergraduate students",
    interestBehavior: "8.94%",
    additionalInfo:
      "Parents can apply online. Loan origination fee: 4.228%.",
    protections: ["Fixed-rate terms (as listed)"],
    keyFeatures: [
      "Covers remaining cost of attendance",
      "Interest accrues immediately",
    ],
    creditCheck: "Yes",
    loanLimits: "Up to full cost of attendance minus other aid",
    notes: "Federal loan for parents to help pay for child's education",
    website: "https://studentaid.gov/app/launchPLUS.action",
  },
  {
    id: "grad_plus_loan",
    name: "Grad PLUS Loan",
    targetBorrowers: "Graduate/professional students",
    interestBehavior: "8.94%",
    additionalInfo:
      "Loan origination fee: 4.228%. Future limits change with policy.",
    protections: ["Fixed-rate terms (as listed)"],
    keyFeatures: [
      "Covers remaining graduate costs",
      "Credit check required",
      "Higher interest rate than unsubsidized",
    ],
    creditCheck: "Yes",
    loanLimits: "Up to full cost of attendance minus other aid",
    notes: "Federal loan for graduate students beyond standard limits",
    website: "https://studentaid.gov/app/launchPLUS.action",
  },
  {
    id: "direct_consolidation_loan",
    name: "Direct Consolidation Loan",
    targetBorrowers: "Borrowers with existing federal loans",
    interestBehavior: "Weighted average of loans (rounded up to nearest 1/8%)",
    additionalInfo: "Can make you eligible for certain forgiveness programs.",
    protections: [
      "Potential eligibility for forgiveness programs",
      "Consolidation can simplify repayment into one loan",
    ],
    keyFeatures: [
      "Single monthly payment",
      "Can extend repayment term",
      "May affect forgiveness eligibility",
    ],
    creditCheck: "No",
    loanLimits: "No new borrowing (Consolidates existing loans)",
    notes: "Combines multiple federal loans into one loan",
    website: "https://studentaid.gov/app/launchConsolidation.action",
  },
  {
    id: "state_institutional_loans_federal-affiliated",
    name: "State & Institutional Loans (Federal-Affiliated)",
    targetBorrowers:
      "Undergraduate & graduate students in specific states/institutions",
    interestBehavior: "3%-8% (Varies by program)",
    additionalInfo: "Examples: Texas B-On-Time Loan, Massachusetts No Interest Loan",
    protections: ["Potential eligibility for forgiveness programs"],
    keyFeatures: [
      "Often have competitive rates",
      "May have service requirements or residency restrictions",
      "Some offer loan forgiveness for in-state work",
    ],
    creditCheck: "Varies by program",
    loanLimits: "Varies by program - often $1,000-$20,000 per year",
    notes:
      "State-sponsored or school-specific loan programs that supplement federal aid",
    website: "Contact your school's financial aid office or state education agency",
  },
];
