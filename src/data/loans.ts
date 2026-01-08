import { LoanData, Language } from '../types';

export const loansData: Record<Language, {
  federal: LoanData[];
  private: LoanData[];
  parent: LoanData[];
}> = {
  en: {
    federal: [
      {
        name: 'Federal Direct Subsidized Loan',
        reason: 'Best for you because you\'re an undergraduate and the government pays interest while you\'re in school.',
        interestType: 'Fixed',
        monthlyPayment: '~$185',
        tags: ['Federal', 'Lower risk', 'Income-based options'],
        interestRateDesc: '4.99% fixed — This means your rate never changes. You\'ll always pay the same percentage.',
        interestStartDesc: 'After you graduate or drop below half-time enrollment. The government covers it while you\'re in school.',
        expectedPayoff: 'Paid off by 2038 (10-year standard plan)',
        totalPaid: '~$22,200 (if you borrow $18,000)',
        whatIf: [
          {
            title: 'You miss a payment:',
            description: 'Your loan becomes delinquent. After 90 days, it\'s reported to credit agencies and can hurt your credit score.'
          },
          {
            title: 'You leave school early:',
            description: 'You have a 6-month grace period before payments start. Interest begins immediately on unsubsidized loans.'
          }
        ],
        pros: [
          'Government pays interest while in school',
          'Income-driven repayment options available',
          'Potential for loan forgiveness after 20-25 years'
        ],
        cons: [
          'Annual and lifetime borrowing limits',
          'Only available to undergraduate students with financial need'
        ]
      },
      {
        name: 'Federal Direct Unsubsidized Loan',
        reason: 'Good option if subsidized loans don\'t cover your full need. Interest starts right away.',
        interestType: 'Fixed',
        monthlyPayment: '~$210',
        tags: ['Federal', 'Flexible repayment'],
        interestRateDesc: '4.99% fixed — Consistent rate throughout the life of the loan.',
        interestStartDesc: 'Interest accrues from the day the loan is disbursed, even while you\'re in school.',
        expectedPayoff: 'Paid off by 2038 (10-year standard plan)',
        totalPaid: '~$25,200 (if you borrow $20,000)',
        whatIf: [
          {
            title: 'You miss a payment:',
            description: 'Delinquency is reported after 90 days, affecting your credit score.'
          },
          {
            title: 'You leave school early:',
            description: '6-month grace period before repayment begins, but interest continues to accrue.'
          }
        ],
        pros: [
          'Available to all students regardless of financial need',
          'Flexible repayment plans available',
          'Can defer payments while in school'
        ],
        cons: [
          'Interest accrues while you\'re in school',
          'Higher total cost than subsidized loans'
        ]
      },
      {
        name: 'Federal PLUS Loan',
        reason: 'For graduate students or parents. Higher borrowing limits but requires credit check.',
        interestType: 'Fixed',
        monthlyPayment: '~$320',
        tags: ['Federal', 'Credit check required'],
        interestRateDesc: '7.54% fixed — Higher rate than other federal loans.',
        interestStartDesc: 'Interest begins accruing immediately upon disbursement.',
        expectedPayoff: 'Paid off by 2038 (10-year standard plan)',
        totalPaid: '~$38,400 (if you borrow $30,000)',
        whatIf: [
          {
            title: 'You miss a payment:',
            description: 'Reported to credit bureaus after 90 days, significantly impacting credit.'
          },
          {
            title: 'You leave school early:',
            description: 'Repayment begins immediately unless you request deferment.'
          }
        ],
        pros: [
          'Can borrow up to the full cost of attendance',
          'Fixed interest rate provides predictability',
          'Deferment options available'
        ],
        cons: [
          'Requires credit check',
          'Higher interest rate than other federal loans',
          'Interest accrues immediately'
        ]
      }
    ],
    private: [
      {
        name: 'Private Fixed-Rate Loan',
        reason: 'Can help if federal loans aren\'t enough. Rate depends on your credit score.',
        interestType: 'Fixed',
        monthlyPayment: '~$245',
        tags: ['Private', 'Credit-based'],
        interestRateDesc: '5.5%-12% fixed — Rate varies based on creditworthiness. Better credit = lower rate.',
        interestStartDesc: 'Interest typically begins accruing immediately.',
        expectedPayoff: 'Paid off by 2036 (10-year term)',
        totalPaid: '~$29,400 (if you borrow $23,000 at 7%)',
        whatIf: [
          {
            title: 'You miss a payment:',
            description: 'Reported quickly to credit bureaus, often within 30 days.'
          },
          {
            title: 'You leave school early:',
            description: 'Payments typically start immediately. Limited deferment options.'
          }
        ],
        pros: [
          'Predictable monthly payments',
          'Can cover full cost of attendance',
          'May offer lower rates for excellent credit'
        ],
        cons: [
          'Fewer repayment protections than federal loans',
          'Requires good credit or cosigner',
          'No income-driven repayment plans'
        ]
      },
      {
        name: 'Private Variable-Rate Loan',
        reason: 'Lower initial rate but can change over time based on market conditions.',
        interestType: 'Variable',
        monthlyPayment: '~$220',
        tags: ['Private', 'Rate can change'],
        interestRateDesc: '3.5%-10% variable — Rate adjusts with market indexes, typically quarterly or annually.',
        interestStartDesc: 'Interest accrues from disbursement.',
        expectedPayoff: 'Paid off by 2036 (10-year term, rate dependent)',
        totalPaid: '~$26,000-35,000 (varies with rate changes)',
        whatIf: [
          {
            title: 'You miss a payment:',
            description: 'Credit impact starts quickly, often within 30 days.'
          },
          {
            title: 'Rates increase:',
            description: 'Your monthly payment will increase, potentially making it harder to afford.'
          }
        ],
        pros: [
          'Lower initial interest rate',
          'Potential savings if rates stay low',
          'Can refinance to fixed rate later'
        ],
        cons: [
          'Payment amount can increase unexpectedly',
          'Less predictable budgeting',
          'Limited protections compared to federal loans'
        ]
      }
    ],
    parent: [
      {
        name: 'Parent PLUS Loan',
        reason: 'Federal loan borrowed by parents to help pay for student expenses.',
        interestType: 'Fixed',
        monthlyPayment: '~$340',
        tags: ['Federal', 'Parent loan'],
        interestRateDesc: '7.54% fixed — Same rate for all borrowers who qualify.',
        interestStartDesc: 'Interest begins immediately when loan is disbursed.',
        expectedPayoff: 'Paid off by 2038 (10-year standard plan)',
        totalPaid: '~$40,800 (if parents borrow $32,000)',
        whatIf: [
          {
            title: 'Parent misses a payment:',
            description: 'Affects parent\'s credit score. Student is not liable for parent PLUS loans.'
          },
          {
            title: 'Student leaves school:',
            description: 'Parent is still responsible for full loan amount.'
          }
        ],
        pros: [
          'Student not responsible for repayment',
          'Can cover full cost of attendance',
          'Federal loan protections available'
        ],
        cons: [
          'Parent must qualify creditwise',
          'Higher interest rate',
          'Parents responsible even if student doesn\'t graduate'
        ]
      }
    ]
  },
  es: {
    federal: [
      {
        name: 'Préstamo Federal Directo Subsidiado',
        reason: 'Mejor para ti porque eres estudiante de pregrado y el gobierno paga el interés mientras estudias.',
        interestType: 'Fijo',
        monthlyPayment: '~$185',
        tags: ['Federal', 'Menor riesgo', 'Opciones basadas en ingresos'],
        interestRateDesc: '4.99% fija — Esto significa que tu tasa nunca cambia. Siempre pagarás el mismo porcentaje.',
        interestStartDesc: 'Después de graduarte o dejar de estar inscrito a tiempo completo. El gobierno lo cubre mientras estudias.',
        expectedPayoff: 'Pagado para 2038 (plan estándar de 10 años)',
        totalPaid: '~$22,200 (si pides prestado $18,000)',
        whatIf: [
          {
            title: 'Pierdes un pago:',
            description: 'Tu préstamo se vuelve moroso. Después de 90 días, se reporta a agencias de crédito y puede dañar tu puntaje.'
          },
          {
            title: 'Dejas la escuela antes:',
            description: 'Tienes un período de gracia de 6 meses antes de que comiencen los pagos.'
          }
        ],
        pros: [
          'El gobierno paga el interés mientras estudias',
          'Opciones de pago basadas en ingresos disponibles',
          'Potencial de perdón de préstamo después de 20-25 años'
        ],
        cons: [
          'Límites anuales y de por vida',
          'Solo disponible para estudiantes de pregrado con necesidad financiera'
        ]
      },
      {
        name: 'Préstamo Federal Directo No Subsidiado',
        reason: 'Buena opción si los préstamos subsidiados no cubren tu necesidad total. El interés comienza de inmediato.',
        interestType: 'Fijo',
        monthlyPayment: '~$210',
        tags: ['Federal', 'Reembolso flexible'],
        interestRateDesc: '4.99% fija — Tasa consistente durante la vida del préstamo.',
        interestStartDesc: 'El interés se acumula desde el día en que se desembolsa el préstamo.',
        expectedPayoff: 'Pagado para 2038 (plan estándar de 10 años)',
        totalPaid: '~$25,200 (si pides prestado $20,000)',
        whatIf: [
          {
            title: 'Pierdes un pago:',
            description: 'La morosidad se reporta después de 90 días, afectando tu puntaje de crédito.'
          },
          {
            title: 'Dejas la escuela antes:',
            description: 'Período de gracia de 6 meses antes del reembolso, pero el interés continúa acumulándose.'
          }
        ],
        pros: [
          'Disponible para todos los estudiantes',
          'Planes de pago flexibles disponibles',
          'Puedes diferir pagos mientras estudias'
        ],
        cons: [
          'El interés se acumula mientras estudias',
          'Costo total más alto que préstamos subsidiados'
        ]
      },
      {
        name: 'Préstamo PLUS Federal',
        reason: 'Para estudiantes de posgrado o padres. Límites más altos pero requiere verificación de crédito.',
        interestType: 'Fijo',
        monthlyPayment: '~$320',
        tags: ['Federal', 'Requiere verificación de crédito'],
        interestRateDesc: '7.54% fija — Tasa más alta que otros préstamos federales.',
        interestStartDesc: 'El interés comienza a acumularse inmediatamente.',
        expectedPayoff: 'Pagado para 2038 (plan estándar de 10 años)',
        totalPaid: '~$38,400 (si pides prestado $30,000)',
        whatIf: [
          {
            title: 'Pierdes un pago:',
            description: 'Reportado a agencias de crédito después de 90 días.'
          },
          {
            title: 'Dejas la escuela antes:',
            description: 'El pago comienza inmediatamente a menos que solicites aplazamiento.'
          }
        ],
        pros: [
          'Puedes pedir prestado hasta el costo total',
          'Tasa fija proporciona previsibilidad',
          'Opciones de aplazamiento disponibles'
        ],
        cons: [
          'Requiere verificación de crédito',
          'Tasa de interés más alta',
          'El interés se acumula inmediatamente'
        ]
      }
    ],
    private: [
      {
        name: 'Préstamo Privado de Tasa Fija',
        reason: 'Puede ayudar si los préstamos federales no son suficientes. La tasa depende de tu crédito.',
        interestType: 'Fijo',
        monthlyPayment: '~$245',
        tags: ['Privado', 'Basado en crédito'],
        interestRateDesc: '5.5%-12% fija — La tasa varía según el crédito. Mejor crédito = tasa más baja.',
        interestStartDesc: 'El interés generalmente comienza a acumularse inmediatamente.',
        expectedPayoff: 'Pagado para 2036 (término de 10 años)',
        totalPaid: '~$29,400 (si pides prestado $23,000 al 7%)',
        whatIf: [
          {
            title: 'Pierdes un pago:',
            description: 'Reportado rápidamente a agencias de crédito, a menudo dentro de 30 días.'
          },
          {
            title: 'Dejas la escuela antes:',
            description: 'Los pagos generalmente comienzan inmediatamente.'
          }
        ],
        pros: [
          'Pagos mensuales predecibles',
          'Puede cubrir el costo total',
          'Puede ofrecer tasas más bajas para crédito excelente'
        ],
        cons: [
          'Menos protecciones que préstamos federales',
          'Requiere buen crédito o cosignatario',
          'Sin planes de pago basados en ingresos'
        ]
      },
      {
        name: 'Préstamo Privado de Tasa Variable',
        reason: 'Tasa inicial más baja pero puede cambiar con el tiempo.',
        interestType: 'Variable',
        monthlyPayment: '~$220',
        tags: ['Privado', 'La tasa puede cambiar'],
        interestRateDesc: '3.5%-10% variable — La tasa se ajusta con índices de mercado.',
        interestStartDesc: 'El interés se acumula desde el desembolso.',
        expectedPayoff: 'Pagado para 2036 (término de 10 años)',
        totalPaid: '~$26,000-35,000 (varía con cambios de tasa)',
        whatIf: [
          {
            title: 'Pierdes un pago:',
            description: 'Impacto de crédito comienza rápidamente.'
          },
          {
            title: 'Las tasas aumentan:',
            description: 'Tu pago mensual aumentará.'
          }
        ],
        pros: [
          'Tasa de interés inicial más baja',
          'Ahorros potenciales si las tasas se mantienen bajas',
          'Puedes refinanciar a tasa fija después'
        ],
        cons: [
          'El monto del pago puede aumentar inesperadamente',
          'Presupuesto menos predecible',
          'Protecciones limitadas'
        ]
      }
    ],
    parent: [
      {
        name: 'Préstamo PLUS para Padres',
        reason: 'Préstamo federal solicitado por padres para gastos estudiantiles.',
        interestType: 'Fijo',
        monthlyPayment: '~$340',
        tags: ['Federal', 'Préstamo para padres'],
        interestRateDesc: '7.54% fija — Misma tasa para todos los que califican.',
        interestStartDesc: 'El interés comienza inmediatamente.',
        expectedPayoff: 'Pagado para 2038 (plan estándar de 10 años)',
        totalPaid: '~$40,800 (si los padres piden prestado $32,000)',
        whatIf: [
          {
            title: 'El padre pierde un pago:',
            description: 'Afecta el puntaje de crédito del padre.'
          },
          {
            title: 'El estudiante deja la escuela:',
            description: 'El padre sigue siendo responsable del monto total.'
          }
        ],
        pros: [
          'El estudiante no es responsable del reembolso',
          'Puede cubrir el costo total',
          'Protecciones federales disponibles'
        ],
        cons: [
          'El padre debe calificar crediticiamente',
          'Tasa de interés más alta',
          'Los padres son responsables incluso si el estudiante no se gradúa'
        ]
      }
    ]
  }
};

