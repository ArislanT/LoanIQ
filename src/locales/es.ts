import { TranslationSchema } from '@/types';

export const es: TranslationSchema = {
  // App
  appName: 'LoanIQ+',
  
  // Navigation
  nav: {
    home: 'Inicio',
    loans: 'Préstamos',
    laws: 'Leyes',
  },
  
  // Common Actions
  actions: {
    next: 'Siguiente',
    back: 'Atrás',
    complete: 'Completar',
  },
  
  // Questionnaire
  questionnaire: {
    step: 'Paso',
    of: 'de',
    questions: {
      q1: {
        title: '¿Para qué estás estudiando?',
        options: {
          undergraduate: 'Pregrado',
          graduate: 'Posgrado / Maestría',
          professional: 'Profesional (Derecho / Med / MBA)',
        },
      },
      q2: {
        title: '¿Has solicitado préstamos estudiantiles antes?',
        options: {
          federal: 'Sí, préstamos federales',
          private: 'Sí, préstamos privados',
          first: 'No, este sería mi primer préstamo',
        },
      },
      q3: {
        title: '¿Cuánto necesitas aún para la escuela?',
        options: {
          under5k: 'Menos de $5,000',
          '5to15k': '$5,000–$15,000',
          '15to30k': '$15,000–$30,000',
          over30k: 'Más de $30,000',
        },
      },
      q4: {
        title: '¿Qué tan importante es un pago mensual estable?',
        options: {
          very: 'Muy importante (quiero previsibilidad)',
          somewhat: 'Algo importante',
          not: 'No importante (puedo manejar cambios)',
        },
      },
      q5: {
        title: '¿Cuándo necesitas el dinero?',
        options: {
          thisSemester: 'Este semestre',
          withinYear: 'Dentro del próximo año',
          later: 'Más adelante (más de un año)',
        },
      },
    },
  },
  
  // Loading Screen
  loading: {
    title: 'Encontrando préstamos para ti…',
    subtitle: 'Comparando interés, protecciones y costo a largo plazo',
  },
  
  // Results Page
  results: {
    title: 'Tus Opciones de Préstamo Personalizadas',
    subtitle: 'Según tus respuestas, estos son los mejores préstamos para ti',
    chatWithEno: 'Habla con Eno sobre estas opciones',
    proceedToLoans: 'Ver Todos los Detalles',
    topPick: 'Mejor Opción',
    goodFit: 'Buena Opción',
    recommendedLoans: [
      {
        name: 'Préstamo Directo Subsidiado',
        reason: 'Mejor para estudiantes de pregrado que necesitan dinero pronto. El gobierno paga tu interés.',
        interestRate: '5.50% Fijo',
        monthlyPayment: '$125/mes después de graduarte',
        tags: ['Federal', 'Sin interés mientras estudias', 'Menor riesgo'],
        isTopPick: true,
      },
      {
        name: 'Préstamo Directo No Subsidiado',
        reason: 'Disponible para todos los estudiantes. El interés se acumula inmediatamente.',
        interestRate: '6.50% Fijo',
        monthlyPayment: '$145/mes después de graduarte',
        tags: ['Federal', 'Sin verificación de crédito', 'Opciones basadas en ingresos'],
        isTopPick: false,
      },
      {
        name: 'Préstamo Federal PLUS',
        reason: 'Bueno para cubrir costos restantes. Límites más altos pero requiere verificación de crédito.',
        interestRate: '8.05% Fijo',
        monthlyPayment: '$185/mes',
        tags: ['Federal', 'Mayor límite de préstamo'],
        isTopPick: false,
      },
    ],
    suggestedQuestions: [
      '¿Cuál es la diferencia entre préstamos subsidiados y no subsidiados?',
      '¿Cuál préstamo es mejor si necesito dinero este semestre?',
      '¿Qué pasa si no puedo hacer un pago?',
    ],
  },
  
  // Dashboard
  dashboard: {
    paymentTracker: 'Seguimiento de Pagos',
    nextPaymentDue: 'Próximo pago:',
    paid: 'pagado',
    remaining: 'restante',
    paymentTimeline: 'Línea de Tiempo',
    quickActions: 'Acciones Rápidas',
    viewMyLoans: 'Ver mis préstamos',
    simulatePayment: 'Simular pago extra',
    askQuestion: 'Hacer pregunta',
    paymentHistory: 'Historial de pagos',
  },
  
  // Loans
  loans: {
    bestForYou: 'Mejor para ti porque',
    interestType: 'Tipo de Interés',
    interestRate: 'Tasa de Interés',
    monthlyPayment: 'Pago Mensual',
    fixed: 'Fijo',
    variable: 'Variable',
    federal: 'Federal',
    private: 'Privado',
    lowerRisk: 'Menor riesgo',
    incomeBasedOptions: 'Opciones basadas en ingresos',
    categories: {
      federal: 'Préstamos Federales',
      private: 'Préstamos Privados',
      parent: 'Préstamos para Padres',
    },
    riskLevels: {
      low: 'Bajo',
      medium: 'Medio',
      high: 'Alto',
    },
  },
  
  // Loan Detail Modal
  loanDetail: {
    whenInterestStarts: 'Cuándo Comienza el Interés',
    expectedPayoff: 'Pago Esperado',
    totalPaid: 'Total que Pagarás',
    whatHappensIf: 'Qué Pasa Si...',
    pros: 'Ventajas',
    cons: 'Desventajas',
    askLoanIQ: 'Preguntar a LoanIQ',
    compareLoans: 'Comparar con otro préstamo',
  },
  
  // Chat
  chat: {
    title: 'Asistente LoanIQ+',
    placeholder: 'Escribe tu pregunta...',
    welcome: '¡Hola! Estoy aquí para ayudarte a entender tus opciones de préstamo. ¡Pregúntame sobre las diferencias entre estos préstamos!',
  },
  
  // Laws Page
  laws: {
    whoItAffects: 'A Quién Afecta:',
    status: {
      active: 'Activo',
      upcoming: 'Próximo',
      changed: 'Cambiado',
    },
  },
};
