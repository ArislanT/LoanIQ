'use client';

import { Dialog, Separator, ScrollArea } from 'radix-ui';
import { useLanguage } from '@/context/LanguageContext';
import { LoanData } from '@/types';
import { Cross2Icon, CheckCircledIcon, ExclamationTriangleIcon } from '@radix-ui/react-icons';

interface LoanModalProps {
  loan: LoanData | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenChat: () => void;
}

export default function LoanModal({ loan, isOpen, onClose, onOpenChat }: LoanModalProps) {
  const { text } = useLanguage();
  
  if (!loan) return null;
  
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40 data-[state=open]:animate-fade-in" />
        <Dialog.Content className="fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-3xl max-h-[90vh] focus:outline-none data-[state=open]:animate-slide-up">
          {/* Handle */}
          <div className="flex justify-center pt-3 pb-2">
            <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
          </div>
          
          <ScrollArea.Root className="h-full overflow-hidden">
            <ScrollArea.Viewport className="h-full w-full">
              <div className="px-6 pb-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-6 pt-2">
                  <Dialog.Title className="text-2xl font-bold text-gray-900 pr-4">
                    {loan.name}
                  </Dialog.Title>
                  <Dialog.Close className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                    <Cross2Icon className="w-4 h-4" />
                  </Dialog.Close>
                </div>
                
                {/* Interest Rate */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    {text.loans.interestRate}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">{loan.interestRateDesc}</p>
                </div>
                
                <Separator.Root className="h-px bg-gray-200 my-6" />
                
                {/* When Interest Starts */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    {text.loanDetail.whenInterestStarts}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">{loan.interestStartDesc}</p>
                </div>
                
                <Separator.Root className="h-px bg-gray-200 my-6" />
                
                {/* Expected Payoff */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    {text.loanDetail.expectedPayoff}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">{loan.expectedPayoff}</p>
                </div>
                
                <Separator.Root className="h-px bg-gray-200 my-6" />
                
                {/* Total Paid */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    {text.loanDetail.totalPaid}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">{loan.totalPaid}</p>
                </div>
                
                <Separator.Root className="h-px bg-gray-200 my-6" />
                
                {/* What Happens If */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                    {text.loanDetail.whatHappensIf}
                  </h4>
                  <div className="space-y-3">
                    {loan.whatIf.map((item, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                        <p className="text-gray-700 leading-relaxed text-sm">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Separator.Root className="h-px bg-gray-200 my-6" />
                
                {/* Pros */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                    {text.loanDetail.pros}
                  </h4>
                  <div className="space-y-3">
                    {loan.pros.map((pro, index) => (
                      <div key={index} className="flex items-start gap-3 text-green-800 bg-green-50 rounded-lg p-3 border border-green-200">
                        <CheckCircledIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{pro}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Separator.Root className="h-px bg-gray-200 my-6" />
                
                {/* Cons */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                    {text.loanDetail.cons}
                  </h4>
                  <div className="space-y-3">
                    {loan.cons.map((con, index) => (
                      <div key={index} className="flex items-start gap-3 text-orange-700 bg-orange-50 rounded-lg p-3 border border-orange-200">
                        <ExclamationTriangleIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{con}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Actions */}
                <div className="space-y-3 pb-4">
                  <button
                    onClick={onOpenChat}
                    className="w-full bg-capital-blue text-white py-4 rounded-xl font-semibold text-base hover:bg-capital-blue-dark transition-all focus:outline-none focus:ring-4 focus:ring-capital-blue/20"
                  >
                    {text.loanDetail.askLoanIQ}
                  </button>
                  <button className="w-full border-2 border-capital-blue text-capital-blue py-4 rounded-xl font-semibold text-base hover:bg-blue-50 transition-all focus:outline-none focus:ring-4 focus:ring-capital-blue/20">
                    {text.loanDetail.compareLoans}
                  </button>
                </div>
              </div>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar orientation="vertical" className="w-2 bg-gray-100">
              <ScrollArea.Thumb className="bg-gray-400 rounded-full" />
            </ScrollArea.Scrollbar>
          </ScrollArea.Root>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
