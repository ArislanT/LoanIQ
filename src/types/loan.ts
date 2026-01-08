// Loan detail data structure
export interface LoanData {
  name: string;
  reason: string;
  interestType: string;
  monthlyPayment: string;
  tags: string[];
  interestRateDesc: string;
  interestStartDesc: string;
  expectedPayoff: string;
  totalPaid: string;
  whatIf: Array<{
    title: string;
    description: string;
  }>;
  pros: string[];
  cons: string[];
}

