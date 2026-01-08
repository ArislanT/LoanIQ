'use client';

import { useState } from 'react';
import { Layout, ChatOverlay } from '@/components/layout';
import { LoanCard, LoanModal, SectionHeader } from '@/components/loans';
import { PageHeader } from '@/components/shared';
import { useLanguage } from '@/context/LanguageContext';
import { loansData } from '@/data/loans';
import { LoanData } from '@/types';
import { LockClosedIcon, InfoCircledIcon, PersonIcon } from '@radix-ui/react-icons';

export default function Loans() {
  const { language, text } = useLanguage();
  const [selectedLoan, setSelectedLoan] = useState<LoanData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  const currentLoans = loansData[language];
  
  const openLoanDetail = (loan: LoanData) => {
    setSelectedLoan(loan);
    setIsModalOpen(true);
  };
  
  const handleOpenChat = () => {
    setIsModalOpen(false);
    setIsChatOpen(true);
  };
  
  return (
    <>
      <Layout>
        <div className="max-w-6xl mx-auto px-6 py-8">
          {/* Page Header */}
          <PageHeader 
            title="Browse Loan Options" 
            subtitle="Compare federal, private, and parent loan programs" 
          />
          
          {/* Federal Loans Section */}
          <div className="mb-10">
            <SectionHeader
              icon={<LockClosedIcon className="w-5 h-5" />}
              iconBgColor="bg-green-100"
              iconColor="text-green-700"
              title={text.loans.categories.federal}
              subtitle="Government-backed loans with flexible repayment"
            />
            <div className="space-y-4">
              {currentLoans.federal.map((loan, index) => (
                <LoanCard key={index} loan={loan} onClick={() => openLoanDetail(loan)} />
              ))}
            </div>
          </div>
          
          {/* Private Loans Section */}
          <div className="mb-10">
            <SectionHeader
              icon={<InfoCircledIcon className="w-5 h-5" />}
              iconBgColor="bg-blue-100"
              iconColor="text-blue-700"
              title={text.loans.categories.private}
              subtitle="Bank-issued loans based on creditworthiness"
            />
            <div className="space-y-4">
              {currentLoans.private.map((loan, index) => (
                <LoanCard key={index} loan={loan} onClick={() => openLoanDetail(loan)} />
              ))}
            </div>
          </div>
          
          {/* Parent Loans Section */}
          <div className="mb-10">
            <SectionHeader
              icon={<PersonIcon className="w-5 h-5" />}
              iconBgColor="bg-purple-100"
              iconColor="text-purple-700"
              title={text.loans.categories.parent}
              subtitle="Loans taken out by parents for student expenses"
            />
            <div className="space-y-4">
              {currentLoans.parent.map((loan, index) => (
                <LoanCard key={index} loan={loan} onClick={() => openLoanDetail(loan)} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
      
      <LoanModal 
        loan={selectedLoan} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        onOpenChat={handleOpenChat}
      />
      
      <ChatOverlay isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
}
