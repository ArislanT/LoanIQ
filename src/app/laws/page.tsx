'use client';

import { Separator } from 'radix-ui';
import { Layout } from '@/components/layout';
import { useLanguage } from '@/context/LanguageContext';
import { LawData, Language } from '@/types';
import { PageHeader, Card, StatusBadge, TagChip } from '@/components/shared';

export default function Laws() {
  const { language, text } = useLanguage();
  
  const lawsData: Record<Language, LawData[]> = {
    en: [
      {
        name: 'Federal Loan Cap Update',
        description: 'Sets new maximum amounts students can borrow from federal programs each year.',
        affects: ['Undergrads', 'Graduates'],
        status: 'active'
      },
      {
        name: 'Repayment Plan Consolidation Act',
        description: 'Combines several income-driven repayment options into one simplified plan.',
        affects: ['All Borrowers'],
        status: 'upcoming'
      },
      {
        name: 'Borrower Protection Reform',
        description: 'Expands forgiveness options for students whose schools closed or misled them.',
        affects: ['Undergrads', 'For-profit students'],
        status: 'changed'
      },
      {
        name: 'Interest Rate Adjustment Policy',
        description: 'Federal loan interest rates now adjust annually based on treasury bond rates.',
        affects: ['All Federal Borrowers'],
        status: 'active'
      },
      {
        name: 'Public Service Loan Forgiveness Update',
        description: 'Temporary waiver allows more borrowers to qualify for loan forgiveness through public service.',
        affects: ['Public Sector Workers', 'Graduates'],
        status: 'changed'
      }
    ],
    es: [
      {
        name: 'Actualización de Límite Federal',
        description: 'Establece nuevos montos máximos que los estudiantes pueden pedir prestado de programas federales cada año.',
        affects: ['Pregrado', 'Posgrado'],
        status: 'active'
      },
      {
        name: 'Ley de Consolidación de Planes',
        description: 'Combina varias opciones de pago basadas en ingresos en un plan simplificado.',
        affects: ['Todos los Prestatarios'],
        status: 'upcoming'
      },
      {
        name: 'Reforma de Protección al Prestatario',
        description: 'Amplía opciones de perdón para estudiantes cuyas escuelas cerraron o los engañaron.',
        affects: ['Pregrado', 'Estudiantes con fines de lucro'],
        status: 'changed'
      },
      {
        name: 'Política de Ajuste de Tasa',
        description: 'Las tasas de interés de préstamos federales ahora se ajustan anualmente según las tasas de bonos del tesoro.',
        affects: ['Todos los Prestatarios Federales'],
        status: 'active'
      },
      {
        name: 'Actualización de Perdón por Servicio',
        description: 'Exención temporal permite que más prestatarios califiquen para perdón de préstamos a través de servicio público.',
        affects: ['Trabajadores Públicos', 'Posgrado'],
        status: 'changed'
      }
    ]
  };
  
  const currentLaws = lawsData[language];
  
  const getStatusText = (status: 'active' | 'upcoming' | 'changed'): string => {
    return text.laws.status[status];
  };
  
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6 py-8">
        <PageHeader 
          title="Student Loan Laws & Policies" 
          subtitle="Stay informed about regulations that affect your loans" 
        />
        
        <div className="space-y-4">
          {currentLaws.map((law, index) => (
            <Card key={index} padding="md" hover>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900 flex-1 pr-4">{law.name}</h3>
                <StatusBadge status={law.status} label={getStatusText(law.status)} />
              </div>
              
              <p className="text-gray-700 mb-5 leading-relaxed">{law.description}</p>
              
              <Separator.Root className="h-px bg-gray-200 my-4" />
              
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                {text.laws.whoItAffects}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {law.affects.map((group, idx) => (
                  <TagChip key={idx} label={group} variant="primary" />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
