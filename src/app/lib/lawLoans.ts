
export type lawLoans = {
    id: string; //short unique id
    name: string; //full name of lender

    yearEnacted: number; //year the legislation was enacted
    currentStatus: string; //whether the law is active, repealed, etc.
    president: string; //who the legislation was passed under

    keyProvisions: string[]; //key features of the loan (bullets)
    impact: string[]; //highlighted features

}
export const lawLoans: lawLoans[] = [
  {
    id: "1965-higher-education-act-hea",
    yearEnacted: 1965,
    name: "Higher Education Act (HEA)",
    president: "Lyndon B. Johnson",
    keyProvisions: [
      "Created federal student loan programs (e.g., Guaranteed Student Loans, later Stafford Loans)",
      "Established need-based grants (Pell Grants later under amendments)",
      "Expanded federal role in financing higher education",
    ],
    impact: [
      "Increased access to college for low- and middle-income students",
      "Introduced widespread borrowing as a way to fund education",
    ],
    currentStatus: "Reauthorized periodically; foundational law for federal aid programs",
  },
  {
    id: "HEA-Bankruptcy-Amendment",
    yearEnacted: 1976,
    name: "HEA Bankruptcy Amendment",
    president: "Ford",
    keyProvisions: [
      "Made federal student loans nondischargeable in bankruptcy for 5 years after entering repayment",
      "Introduced 'undue' hardship test for discharge",
    ],
    impact: [
      "Increased protections for borrowers in bankruptcy",
    ],
    currentStatus: "Active: further strengthened in 1991 and 2005",
  },
  {
    id: "1986-HEA-reauthorization",
    yearEnacted: 1986,
    name: "HEA Reauthorization",
    president: "Ronald Reagan",
    keyProvisions: [
      "Created funding stream for HBCUs",
      "Expamded federal support for minority-serving institutions",
    ],
    impact: [
      "Increased educational opportunities for underrepresented groups",
    ],
    currentStatus: "Active",
  },
  {
    id: "1992-higher-education-amendments",
    yearEnacted: 1992,
    name: "Higher Education Amendments",
    president: "George H.W. Bush",
    keyProvisions: [
      "Created unsubsidized Stafford Loans",
      "Expanded PLUS loan program",
      "Introduced income-contingent repayment option",
    ],
    impact: [
      "Allowed more borrowing regardless of financial need",
      "Introduced repayment options tied to income",
    ],
    currentStatus: "Unsubsidized loans remain common; repayment plans evolved over time",
  },
  {
    id: "1993-student-loan-reform-act",
    yearEnacted: 1993,
    name: "Student Loan Reform Act",
    president: "Bill Clinton",
    keyProvisions: [
      "Created Direct Loan program (federal government lends directly to students)",
      "Reduced reliance on private lenders (FFEL program)",
    ],
    impact: [
      "Reduce reliance on private lenders",
      "Began shift toward income-driven repayment options",
    ],
    currentStatus: "Active: Direct Loan program is now the primary federal loan system",
  },
  {
    id: "1998-higher-education-amendments",
    yearEnacted: 1998,
    name: "Higher Education Amendments",
    president: "Bill Clinton",
    keyProvisions: [
      "Introduced income-based repayment plans (early form)",
      "Allowed loan consolidation",
      "Expanded forgiveness for teachers",
    ],
    impact: [
      "Borrowers gained more repayment flexibility",
      "Created pathways to forgiveness for certain professions",
    ],
    currentStatus: "Active",
  },
  {
    id: "2005-bankruptcy-abuse-prevention-and-consumer-protection-act-bapcpa",
    yearEnacted: 2005,
    name: "Bankruptcy Abuse Prevention and Consumer Protection Act (BAPCPA)",
    president: "George W. Bush",
    keyProvisions: [
      "Extended bankruptcy nondischargeability period for PRIVATE student loans",
      "Expanded protections similar to federal loans",
    ],
    impact: [
      "Dramatically increased difficulty for borrowers to discharge private student loans in bankruptcy",
      "Removed bankruptcy safety net for all student debt",
    ],
    currentStatus: "Active: Highly controversial, ongoing reform efforts",
  },
  {
    id: "2007-college-cost-reduction-and-access-act-ccraa",
    yearEnacted: 2007,
    name: "College Cost Reduction and Access Act (CCRAA)",
    president: "George W. Bush",
    keyProvisions: [
      "Created Public Service Loan Forgiveness (PSLF)",
      "Introduced Income-Based Repayment (IBR)",
      "Reduced lender subsidies in FFEL",
    ],
    impact: [
      "Borrowers in public service gained a path to loan forgiveness",
      "Income-based repayment reduced monthly payments for low earners",
    ],
    currentStatus: "Active: PSLF operational but highly restrtive",
  },
  {
    id: "2008-higher-education-opportunity-act",
    yearEnacted: 2010,
    name: "Higher Education Opportunity Act",
    president: "George W. Bush",
    keyProvisions: [
      "HEA Reauthorization with new provisions",
      "Enhanced transparency requirements for loans",
      "Improved financial literacy programs",
    ],
    impact: [
      "Better informed borrowers",
      "Increased protections against predatory lending",
    ],
    currentStatus: "Active: Most recent full HEA reauthorization",
  },
  {
    id: "08/09-temporary-student-loan-programs",
    yearEnacted: 2008,
    name: "Temporary Student Loan Programs",
    president: "George W. Bush",
    keyProvisions: [
      "Emergency programs for Dept. of Education to purchase private loans during financial crisis",
      "Ensured continued loan availability during credit market collapse",
    ],
    impact: [
      "Maintained access to student loans during 2008 crisis",
      "Prevented disruption to student borrowing",
    ],
    currentStatus: "Expired: Response to Crisis",
  },
  {
    id: "2010-health-care-and-education-reconciliation-act",
    yearEnacted: 2010,
    name: "Health Care and Education Reconciliation Act",
    president: "Barack Obama",
    keyProvisions: [
      "Ended FFEL program; all federal loans shifted to Direct Loans",
      "Expanded Pell Grants and income-driven repayment options",
    ],
    impact: [
      "Federal government became sole originator of student loans",
      "Expanded aid and repayment flexibility",
    ],
    currentStatus: "Active: Direct Loan system remains in place as sole federal lending source",
  },
  {
    id: "Obama-admin-ibr-expansions",
    yearEnacted: 2012,
    name: "Obama Administration IBR Expansions",
    president: "Barack Obama",
    keyProvisions: [
      "Created Revised Pay As You Earn (REPAYE) plan: 10% income, 20-25 year forgiveness",
      "Made income-driven repayment more accessible",
    ],
    impact: [
      "More borrowers eligible",
      "Lowered monthly payments and reduced burden for many borrowers",
    ],
    currentStatus: "Active: REPAYE replaced by SAVE plan in 2023",
  },
  {
    id: "2020-cares-act-student-loan-relief",
    yearEnacted: 2020,
    name: "CARES Act Student Loan Relief",
    president: "Donald Trump",
    keyProvisions: [
      "Paused federal student loan payments and set interest to 0%",
      "Suspended collections on defaulted federal loans",
    ],
    impact: [
      "Provided temporary financial relief to borrowers during COVID-19",
      "Prevented interest accumulation during the pause",
    ],
    currentStatus: "Expired: Payments resumed October 2023",
  },
  {
    id: "2022-biden-administration-student-loan-forgiveness-plan",
    yearEnacted: 2022,
    name: "Biden Administration Student Loan Forgiveness Plan",
    president: "Joe Biden",
    keyProvisions: [
      "Proposed up to $10k/$20k forgiveness for eligible borrowers",
      "Expanded IDR reforms and PSLF improvements",
    ],
    impact: [
      "Forgiveness proposal faced legal challenges and was blocked by Supreme Court",
      "Other relief via IDR adjustments and PSLF processing improvements",
    ],
    currentStatus: "Eliminated: Trump admin ended SAVE via legal settlement",
  },
  {
    id: "2023-saving-on-a-valuable-education-save-plan",
    yearEnacted: 2023,
    name: "Saving on a Valuable Education (SAVE) Plan",
    president: "Joe Biden",
    keyProvisions: [
      "Replaced REPAYE with SAVE for eligible borrowers",
      "Lowered payment calculations and increased income protections",
      "Improved interest subsidy features to reduce negative amortization",
    ],
    impact: [
      "Reduced monthly payments for many borrowers",
      "Limited balance growth for some borrowers due to interest benefits",
    ],
    currentStatus: "Mixed: Some initiatives active, others blocked or ended by Trump admin",
  },
  {
    id: "2025-2026-bbb",
    yearEnacted: 2025,
    name: "Big Beautiful Bill (College Cost Reduction ActO",
    president: "Trump",
    keyProvisions: [
      "Eliminated SAVE, Grad PLUS loans, subsidized loans for new borrowers",
      "New borrowing caps: Annual and lifetime limits for graduate/Parent PLUS",
      "Restricted deferment/forbearance options",
      "Changed finacial aid formulas to reduce eligibility",
    ],
    impact: [
      "Longer time to forgiveness",
      "Higher monthly payments",
      "Stricter defgault consequences",
      "More difficult to pause payments"
    ],
    currentStatus: "Active: Implementing with major provisions to take effect July 1, 2026",
  },
];

