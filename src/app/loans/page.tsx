'use client';

import { useState } from 'react';
import { Layout, ChatOverlay } from '@/components/layout';
import { SectionHeader } from '@/components/loans';
import { PageHeader } from '@/components/shared';
import { FederalLoanCard, PrivateLoanCard } from '@/components/results';
import { useLanguage } from '@/context/LanguageContext';
import { FEDERAL_LOANS } from '@/app/lib/federalLoans';
import { PRIVATE_LENDERS } from '@/app/lib/privateLenders';

export default function Loans() {
  const { text } = useLanguage();
  
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Page Header */}
        <PageHeader 
          title={text.loans.title} 
          subtitle={text.loans.subtitle} 
        />
        
        {/* Federal Loans Section */}
        <div className="mb-10">
          <SectionHeader
            title={text.loans.categories.federal}
            subtitle="Government-backed loans with flexible repayment"
          />
          <div className="space-y-4">
            {FEDERAL_LOANS.map((loan) => (
              <FederalLoanCard key={loan.id} loan={loan} />
            ))}
          </div>
        </div>
        
        {/* Private Lenders Section */}
        <div className="mb-10">
          <SectionHeader
            title={text.loans.categories.private}
            subtitle="Private lenders with competitive rates"
          />
          <div className="space-y-4">
            {PRIVATE_LENDERS.map((loan) => (
              <PrivateLoanCard key={loan.id} loan={loan} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
