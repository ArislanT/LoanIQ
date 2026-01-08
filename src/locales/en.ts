import { TranslationSchema } from '@/types';

export const en: TranslationSchema = {
  // App
  appName: 'LoanIQ+',
  
  // Navigation
  nav: {
    home: 'Home',
    loans: 'Loans',
    laws: 'Laws',
  },
  
  // Common Actions
  actions: {
    next: 'Next',
    back: 'Back',
    complete: 'Complete',
  },
  
  // Questionnaire
  questionnaire: {
    step: 'Step',
    of: 'of',
    questions: {
      q1: {
        title: 'What are you studying for?',
        options: {
          undergraduate: 'Undergraduate',
          graduate: 'Graduate / Master\'s',
          professional: 'Professional (Law / Med / MBA)',
        },
      },
      q2: {
        title: 'Have you taken out student loans before?',
        options: {
          federal: 'Yes, federal loans',
          private: 'Yes, private loans',
          first: 'No, this would be my first loan',
        },
      },
      q3: {
        title: 'How much do you still need for school?',
        options: {
          under5k: 'Less than $5,000',
          '5to15k': '$5,000–$15,000',
          '15to30k': '$15,000–$30,000',
          over30k: 'More than $30,000',
        },
      },
      q4: {
        title: 'How important is a stable monthly payment?',
        options: {
          very: 'Very important (I want predictability)',
          somewhat: 'Somewhat important',
          not: 'Not important (I can handle changes)',
        },
      },
      q5: {
        title: 'When do you need the money?',
        options: {
          thisSemester: 'This semester',
          withinYear: 'Within the next year',
          later: 'Later (more than a year from now)',
        },
      },
    },
  },
  
  // Loading Screen
  loading: {
    title: 'Finding loans that fit you…',
    subtitle: 'Comparing interest, protections, and long-term cost',
  },
  
  // Results Page
  results: {
    title: 'Your Personalized Loan Options',
    subtitle: 'Based on your answers, here are the best loans for you',
    chatWithEno: 'Chat with Eno about these options',
    proceedToLoans: 'View All Loan Details',
    topPick: 'Top Pick',
    goodFit: 'Good Fit',
    recommendedLoans: [
      {
        name: 'Direct Subsidized Loan',
        reason: 'Best for undergrads who need money soon. The government pays your interest while in school.',
        interestRate: '5.50% Fixed',
        monthlyPayment: '$125/mo after graduation',
        tags: ['Federal', 'No interest while in school', 'Lower risk'],
        isTopPick: true,
      },
      {
        name: 'Direct Unsubsidized Loan',
        reason: 'Available to all students regardless of financial need. Interest accrues immediately.',
        interestRate: '6.50% Fixed',
        monthlyPayment: '$145/mo after graduation',
        tags: ['Federal', 'No credit check', 'Income-based options'],
        isTopPick: false,
      },
      {
        name: 'Federal PLUS Loan',
        reason: 'Good for covering remaining costs after other federal aid. Higher limits but requires credit check.',
        interestRate: '8.05% Fixed',
        monthlyPayment: '$185/mo',
        tags: ['Federal', 'Higher borrowing limit'],
        isTopPick: false,
      },
    ],
    suggestedQuestions: [
      'What\'s the difference between subsidized and unsubsidized loans?',
      'Which loan is best if I need money this semester?',
      'What happens if I can\'t make a payment?',
    ],
  },
  
  // Dashboard
  dashboard: {
    paymentTracker: 'Payment Tracker',
    nextPaymentDue: 'Next payment due:',
    paid: 'paid',
    remaining: 'remaining',
    paymentTimeline: 'Payment Timeline',
    quickActions: 'Quick Actions',
    viewMyLoans: 'View my loans',
    simulatePayment: 'Simulate extra payment',
    askQuestion: 'Ask a question',
    paymentHistory: 'Payment history',
  },
  
  // Loans
  loans: {
    bestForYou: 'Best for you because',
    interestType: 'Interest Type',
    interestRate: 'Interest Rate',
    monthlyPayment: 'Monthly Payment',
    fixed: 'Fixed',
    variable: 'Variable',
    federal: 'Federal',
    private: 'Private',
    lowerRisk: 'Lower risk',
    incomeBasedOptions: 'Income-based options',
    categories: {
      federal: 'Federal Loans',
      private: 'Private Loans',
      parent: 'Parent / Family Loans',
    },
    riskLevels: {
      low: 'Low',
      medium: 'Medium',
      high: 'High',
    },
  },
  
  // Loan Detail Modal
  loanDetail: {
    whenInterestStarts: 'When Interest Starts',
    expectedPayoff: 'Expected Payoff',
    totalPaid: 'Total You\'ll Pay',
    whatHappensIf: 'What Happens If...',
    pros: 'Pros',
    cons: 'Cons',
    askLoanIQ: 'Ask LoanIQ',
    compareLoans: 'Compare with another loan',
  },
  
  // Chat
  chat: {
    title: 'LoanIQ+ Assistant',
    placeholder: 'Type your question...',
    welcome: 'Hi! I\'m here to help you understand your loan options. Ask me anything about the differences between these loans!',
  },
  
  // Laws Page
  laws: {
    whoItAffects: 'Who It Affects:',
    status: {
      active: 'Active',
      upcoming: 'Upcoming',
      changed: 'Changed',
    },
  },
};
