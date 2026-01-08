//metadata for different loans
export type PrivateLender = {
    id: string; //short unique id
    name: string; //full name of lender

    targetBorrowers: string; //description of target borrowers
    aprRange: string; //APR range description
    loanAmounts: string; //loan amount range description
    cosignerRequirement: string; //cosigner requirement description


    keyFeatures: string[]; //key features of the loan (bullets)
    notes?: string; //highlighted features (optional)

    website: string; //URL for more information
}
export const PRIVATE_LENDERS: PrivateLender[] = [
  {
    id: "sofi",
    name: "SoFi",
    targetBorrowers: "Borrowers seeking no fees & competitive rates",
    aprRange: "3.07% - 17.99% APR (variable & fixed)",
    loanAmounts: "$1,000 - 100% of school-certified costs",
    cosignerRequirement: "Depends on credit",
    keyFeatures: [
      "No origination fees",
      "No late fees",
      "Unemployment protection",
      "Career coaching",
      "0.25% autopay discount",
    ],
    notes: "Good Grades Rewards program available. Member benefits included.",
    website: "https://www.sofi.com/private-student-loans/",
  },
  {
    id: "sallie_mae",
    name: "Sallie Mae",
    targetBorrowers:
      "Undergrad, Grad, Trade, Certificate",
    aprRange: "2.74% - 17.99% APR",
    loanAmounts: "$1,000 - 100% of school-certified costs",
    cosignerRequirement: "Most students need one",
    keyFeatures: [
      "Multiple repayment options",
      "Non-degree programs supported",
      "Cosigner release available",
      "0.25% autopay discount",
      "Multi-year approval possible",
    ],
    notes: "One of few lenders for certificate/trade programs",
    website: "https://www.salliemae.com/student-loans/",
  },
  {
    id: "college_ave",
    name: "College Ave",
    targetBorrowers: "Flexible repayment options",
    aprRange: "2.74% - 17.99% APR",
    loanAmounts: "$1,000 - cost of attendance",
    cosignerRequirement: "Most students need one",
    keyFeatures: [
      "5-15 year loan terms",
      "4 repayment plan options",
      "Cosigner release available",
      "0.25% autopay discount",
      "Very flexible customization",
    ],
    notes: "Highly customizable repayment terms",
    website: "https://www.collegeavestudentloans.com/",
  },
  {
    id: "earnest",
    name: "Earnest",
    targetBorrowers: "Customizable terms & flexibility",
    aprRange: "2.74% - 17.99% APR",
    loanAmounts: "$1,000 - cost of attendance",
    cosignerRequirement: "Not always required",
    keyFeatures: [
      "Choose your own monthly payment",
      "Skip-a-payment option (subject to conditions)",
      "No fees",
      "0.25% autopay discount",
      "Flexible repayment timing",
    ],
    notes: "Strong borrower flexibility options",
    website: "https://www.earnest.com/student-loans",
  },
  {
    id: "ascent",
    name: "Ascent",
    targetBorrowers: "Students without cosigners",
    aprRange: "2.74% - 17.99% APR",
    loanAmounts: "$2,001 - cost of attendance",
    cosignerRequirement:
      "Not always - credit-based & outcomes-based options available",
    keyFeatures: [
      "No-cosigner options",
      "Cash back graduation reward (where applicable)",
      "Cosigner release available",
      "0.25% autopay discount",
      "Outcomes-based underwriting options",
    ],
    notes: "One of few non-cosigned options for independent students",
    website: "https://www.ascentfunding.com/",
  },
  {
    id: "citizens",
    name: "Citizens Bank",
    targetBorrowers: "Traditional Bank Option",
    aprRange: "Varies & fixed rates available",
    loanAmounts: "$1,000 - cost of attendance",
    cosignerRequirement: "Most students need one",
    keyFeatures: [
      "Multi-year approval",
      "Loyalty discount for existing customers",
      "Cosigner release available",
      "0.25% autopay discount",
      "No application/origination fees",
    ],
    notes: "Established bank with student loan options",
    website: "https://www.citizensbank.com/student-loans/",
  },
  {
    id: "lendkey",
    name: "LendKey",
    targetBorrowers: "Borrowers seeking credit union-backed loans",
    aprRange: "Fixed: 4.96% - 14.99% & Varaible: 5.99% - 14.99%",
    loanAmounts: "$5,000 - $250,000 (varies by state)",
    cosignerRequirement: "Varies by lender",
    keyFeatures: [
      "Connects borrowers with credit unions/community banks",
      "Considers GPA + credit",
      "No origination/application fees",
      "0.25% autopay discount (varies)",
      "5, 7, 10, 15, 20 year terms available",
    ],
    notes: "Must join credit union as member. Not avaliable in ME, NV, ND, RI, WV",
    website: "https://www.lendkey.com/",
  },
  {
    id: "risla",
    name: "RISLA (Rhode Island Student Loan Authority)",
    targetBorrowers: "Rhode Island residents or students attending RI schools",
    aprRange: "Fixed rates",
    loanAmounts: "$1,500 - Cost of Attendance",
    cosignerRequirement: "Most students need on",
    keyFeatures: [
      "Nonprofit/state-based lender",
      "Income-based repayment options (program-specific)",
      "No origination fees",
      "Multiple repayment plans",
      "Up to 15-year terms",
    ],
    notes: "State-affiliated nonprofit lender; check eligibility rules separately",
    website: "https://www.risla.com/",
  },
  {
    id: "mpower",
    name: "MPOWER Financing",
    targetBorrowers: "International & DACA students studying in US/Canada",
    aprRange: "6.99% - 15.49% (fixed only)",
    loanAmounts: "$2,001 - $50,000 per academic year",
    cosignerRequirement: "Not required",
    keyFeatures: [
      "Designed for international students",
      "No collateral needed",
      "6 month grace period",
      "Focus on underserved populations",
    ],
    notes: "International-focused lender; confirm school/program eligibility separately",
    website: "https://www.mpowerfinancing.com/",
  },
  {
    id: "prodigy_finance",
    name: "Prodigy Finance",
    targetBorrowers: "International graduate students",
    aprRange: "Varies starting at 8.34%",
    loanAmounts: "Up to $220,000 - covers up to 100% of costs",
    cosignerRequirement: "Not required",
    keyFeatures: [
      "International graduate focus",
      "Loans based on future earning potential (program-dependent)",
      "Supports select schools/programs",
      "Global borrower base",
    ],
    notes: "Not available in all US states",
    website: "https://prodigyfinance.com/",
  },
  {
    id: "laurel_road",
    name: "Laurel Road",
    targetBorrowers: "Healthcare professionals & students",
    aprRange: "Varies (check website)",
    loanAmounts: "$5,000+ for refinancing",
    cosignerRequirement: "Depends on credit profile",
    keyFeatures: [
      "Healthcare professional focus",
      "Refinancing options (where available)",
      "Bank-backed lending",
      "0.25% autopay discount",
    ],
    notes: "Popular for medical residents and fellows",
    website: "https://www.laurelroad.com/",
  },
  {
    id: "credible",
    name: "Credible (Marketplace)",
    targetBorrowers: "Comparing multiple lenders",
    aprRange: "Varies by lender",
    loanAmounts: "Varies by lender",
    cosignerRequirement: "Varies by lender",
    keyFeatures: [
      "Compares rate from multiple lenders",
      "No impact on credit score",
      "Quick pre-qualification",
    ],
    notes: "Aggregator/marketplace; terms depend on partner lender",
    website: "https://www.credible.com/",
  },
  {
    id: "edvest_wisconsin",
    name: "EdVest (Wisconsin)",
    targetBorrowers: "Wisconsin residents",
    aprRange: "Fixed rates (check website for current rates)",
    loanAmounts: "Varies by program",
    cosignerRequirement: "Varies by program",
    keyFeatures: [
      "STATE-SPONSORED LOAN PROGRAM for Wisconsin residents",
      "Lower rates for in-state students",
      "Multiple repayment options",
      "No fees structure",
      "Designed to supplement federal aid",
      "Focus on Wisconsin families",
    ],
    notes:
      "Wisconsin state program. Primarily known for 529 savings; refer to WI Dept of Financial Institutions for loan details.",
    website: "https://www.edvest.com/",
  },
];
