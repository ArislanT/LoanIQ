// Types for recommended loans in results page
export interface RecommendedLoanData {
  name: string;
  reason: string;
  interestRate: string;
  monthlyPayment: string;
  tags: string[];
  isTopPick: boolean;
}

// Full translation structure interface for i18n
export interface TranslationSchema {
  appName: string;
  
  nav: {
    home: string;
    loans: string;
    laws: string;
  };
  
  actions: {
    next: string;
    back: string;
    complete: string;
  };
  
  questionnaire: {
    step: string;
    of: string;
    questions: {
      q1: {
        title: string;
        options: {
          undergraduate: string;
          graduate: string;
          professional: string;
        };
      };
      q2: {
        title: string;
        options: {
          federal: string;
          private: string;
          first: string;
        };
      };
      q3: {
        title: string;
        options: {
          under5k: string;
          '5to15k': string;
          '15to30k': string;
          over30k: string;
        };
      };
      q4: {
        title: string;
        options: {
          very: string;
          somewhat: string;
          not: string;
        };
      };
      q5: {
        title: string;
        options: {
          thisSemester: string;
          withinYear: string;
          later: string;
        };
      };
    };
  };
  
  loading: {
    title: string;
    subtitle: string;
  };
  
  results: {
    title: string;
    subtitle: string;
    chatWithEno: string;
    proceedToLoans: string;
    topPick: string;
    goodFit: string;
    recommendedLoans: RecommendedLoanData[];
    suggestedQuestions: string[];
  };
  
  dashboard: {
    paymentTracker: string;
    nextPaymentDue: string;
    paid: string;
    remaining: string;
    paymentTimeline: string;
    quickActions: string;
    viewMyLoans: string;
    simulatePayment: string;
    askQuestion: string;
    paymentHistory: string;
    simulator: {
      title: string;
      payExtra: string;
      payMinimum: string;
      missPayment: string;
      reset: string;
    };
  };
  
  loans: {
    bestForYou: string;
    interestType: string;
    interestRate: string;
    monthlyPayment: string;
    fixed: string;
    variable: string;
    federal: string;
    private: string;
    lowerRisk: string;
    incomeBasedOptions: string;
    categories: {
      federal: string;
      private: string;
      parent: string;
    };
    riskLevels: {
      low: string;
      medium: string;
      high: string;
    };
  };
  
  loanDetail: {
    whenInterestStarts: string;
    expectedPayoff: string;
    totalPaid: string;
    whatHappensIf: string;
    pros: string;
    cons: string;
    askLoanIQ: string;
    compareLoans: string;
  };
  
  chat: {
    title: string;
    placeholder: string;
    welcome: string;
  };
  
  laws: {
    whoItAffects: string;
    status: {
      active: string;
      upcoming: string;
      changed: string;
    };
  };
}

