'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Dialog } from 'radix-ui';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRightIcon, Cross2Icon } from '@radix-ui/react-icons';
import { Layout } from '@/components/layout';
import {
  RecommendedLoanCard,
  ChatMessage,
  TypingIndicator,
  SuggestedQuestions,
  ChatInput,
  EnoAvatar,
  FederalLoanCard,
  PrivateLoanCard,
  type Message,
} from '@/components/results';
import type { RecommendedLoanData } from '@/types';
import { FEDERAL_LOANS, type FederalLoanType } from '@/app/lib/federalLoans';
import { PRIVATE_LENDERS, type PrivateLender } from '@/app/lib/privateLenders';

export default function Results() {
  const router = useRouter();
  const { language, text } = useLanguage();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { type: 'bot', text: text.chat.welcome }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loanType, setLoanType] = useState<'federal' | 'private' | 'both'>('both');
  const [federalLoans, setFederalLoans] = useState<FederalLoanType[]>([]);
  const [privateLoans, setPrivateLoans] = useState<PrivateLender[]>([]);

  // Load loans based on user selection
  useEffect(() => {
    const storedLoanType = sessionStorage.getItem('loanType') as 'federal' | 'private' | 'both' | null;
    const selectedLoanType = storedLoanType || 'both';
    setLoanType(selectedLoanType);
    
    if (selectedLoanType === 'federal' || selectedLoanType === 'both') {
      setFederalLoans(FEDERAL_LOANS);
    }
    
    if (selectedLoanType === 'private' || selectedLoanType === 'both') {
      setPrivateLoans(PRIVATE_LENDERS);
    }
  }, []);

  const suggestedQuestions = text.results.suggestedQuestions;

  // send message to chatbot 
  const handleSend = async (messageText = inputValue) => {
    if (!messageText.trim() || isLoading) return;
    
    setMessages(prev => [...prev, { type: 'user', text: messageText }]);
    setInputValue('');
    setIsLoading(true);
    
    try {
      // Combine federal and private loans for context
      const allLoans = [
        ...federalLoans.map(l => ({ name: l.name, type: 'federal', rate: l.interestBehavior })),
        ...privateLoans.map(l => ({ name: l.name, type: 'private', rate: l.aprRange })),
      ];
      
      const response = await fetch('/api/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userQuestion: messageText,
          language,
          loans: allLoans,
        }),
      });
      
      const data = await response.json();
      
      if (data.success && data.explanation) {
        setMessages(prev => [...prev, { type: 'bot', text: data.explanation }]);
      } else {
        setMessages(prev => [...prev, { 
          type: 'bot', 
          text: language === 'en' 
            ? 'Sorry, I had trouble processing that. Please try again.'
            : 'Lo siento, tuve problemas procesando eso. Por favor intenta de nuevo.'
        }]);
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { 
        type: 'bot', 
        text: language === 'en' 
          ? 'Sorry, something went wrong. Please try again.'
          : 'Lo siento, algo salió mal. Por favor intenta de nuevo.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout showNav={false} showEnoChatbot={false}>
      <div className="px-4 py-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{text.results.title}</h1>
          <p className="text-gray-600 mb-6">{text.results.subtitle}</p>
         
          <div className="space-y-4 mb-6">
            {/* Federal Loans Section */}
            {federalLoans.length > 0 && (
              <>
                <h2 className="text-lg font-bold text-capital-blue mt-6 mb-3">Federal Loans</h2>
                {federalLoans.map((loan, index) => (
                  <FederalLoanCard
                    key={loan.id}
                    loan={loan}
                    isTopPick={index === 0 && loanType === 'federal'}
                    topPickLabel={text.results.topPick}
                  />
                ))}
              </>
            )}
            
            {/* Private Loans Section */}
            {privateLoans.length > 0 && (
              <>
                <h2 className="text-lg font-bold text-capital-blue mt-6 mb-3">Private Lenders</h2>
                {privateLoans.map((loan, index) => (
                  <PrivateLoanCard
                    key={loan.id}
                    loan={loan}
                    isTopPick={index === 0 && loanType === 'private'}
                    topPickLabel={text.results.topPick}
                  />
                ))}
              </>
            )}
          </div>

          {/* Chat with Eno button */}
          <button
            onClick={() => setIsChatOpen(true)}
            className="w-full flex items-center justify-center gap-3 bg-white border-2 border-capital-blue text-capital-blue py-3 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-all mb-4"
          >
            <EnoAvatar size="sm" />
            {text.results.chatWithEno}
          </button>

          {/* Proceed button */}
          <button
            onClick={() => router.push('/loans')}
            className="w-full flex items-center justify-center gap-2 bg-capital-blue text-white py-3 rounded-lg font-semibold text-sm hover:bg-capital-blue-dark transition-all"
          >
            {text.results.proceedToLoans}
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Chat Modal */}
      <Dialog.Root open={isChatOpen} onOpenChange={setIsChatOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
          <Dialog.Content className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-md md:h-[600px] bg-white rounded-xl z-50 flex flex-col overflow-hidden">
            {/* Chat Header */}
            <div className="bg-capital-blue text-white px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <EnoAvatar size="md" />
                <Dialog.Title className="font-semibold">{text.chat.title}</Dialog.Title>
              </div>
              <Dialog.Close className="hover:bg-white/10 rounded-full w-8 h-8 flex items-center justify-center">
                <Cross2Icon className="w-5 h-5" />
              </Dialog.Close>
            </div>

            {/* Messages - Scrollable */}
            <div className="flex-1 overflow-y-auto">
              <div className="px-4 py-4 space-y-3">
                {messages.map((message, index) => (
                  <ChatMessage key={index} message={message} />
                ))}
                {isLoading && <TypingIndicator />}
              </div>
            </div>

            {/* Suggested Questions */}
            {messages.length === 1 && (
              <SuggestedQuestions
                questions={suggestedQuestions}
                onSelect={handleSend}
              />
            )}

            {/* Input */}
            <ChatInput
              value={inputValue}
              onChange={setInputValue}
              onSend={() => handleSend()}
              placeholder={text.chat.placeholder}
              disabled={isLoading}
            />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </Layout>
  );
}
