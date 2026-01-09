'use client';

import { Separator } from 'radix-ui';
import { Layout } from '@/components/layout';
import { useLanguage } from '@/context/LanguageContext';
import { PageHeader, Card, StatusBadge } from '@/components/shared';
import { lawLoans } from '@/app/lib/lawLoans';

export default function Laws() {
  const { text } = useLanguage();
  
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6 py-8">
        <PageHeader 
          title="Student Loan Laws & Policies" 
          subtitle="Stay informed about regulations that affect your loans" 
        />
        
        <div className="space-y-4">
          {lawLoans.map((law, index) => (
            <Card key={law.id} padding="md" hover>
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1 pr-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{law.name}</h3>
                  <p className="text-sm text-gray-600">
                    {law.yearEnacted} • President {law.president}
                  </p>
                </div>
                <StatusBadge 
                  status={
                    law.currentStatus.toLowerCase().includes('expired') || 
                    law.currentStatus.toLowerCase().includes('eliminated') ||
                    law.currentStatus.toLowerCase().includes('mixed') ? 'changed' : 'active'
                  } 
                  label={law.currentStatus} 
                />
              </div>
              
              <div className="mb-4">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Key Provisions
                </p>
                <ul className="space-y-1">
                  {law.keyProvisions.map((provision, idx) => (
                    <li key={idx} className="text-gray-700 text-sm leading-relaxed flex">
                      <span className="text-capital-blue mr-2">•</span>
                      <span>{provision}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Separator.Root className="h-px bg-gray-200 my-4" />
              
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Impact
                </p>
                <ul className="space-y-1">
                  {law.impact.map((impactItem, idx) => (
                    <li key={idx} className="text-gray-700 text-sm leading-relaxed flex">
                      <span className="text-capital-blue mr-2">•</span>
                      <span>{impactItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
