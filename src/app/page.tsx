'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { RadioGroup } from 'radix-ui';
import { useLanguage } from '@/context/LanguageContext';
import { Layout } from '@/components/layout';
import { ProgressBar, OptionCard } from '@/components/questionnaire';
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';

interface QuestionData {
  id: number;
  question: string;
  options: string[];
}

export default function Questionnaire() {
  const router = useRouter();
  const { text } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  
  const questions_text = text.questionnaire.questions;
  
  const questions: QuestionData[] = [
    {
      id: 1,
      question: questions_text.q1.title,
      options: [questions_text.q1.options.undergraduate, questions_text.q1.options.graduate, questions_text.q1.options.professional]
    },
    {
      id: 2,
      question: questions_text.q2.title,
      options: [questions_text.q2.options.federal, questions_text.q2.options.private, questions_text.q2.options.first]
    },
    {
      id: 3,
      question: questions_text.q3.title,
      options: [questions_text.q3.options.under5k, questions_text.q3.options['5to15k'], questions_text.q3.options['15to30k'], questions_text.q3.options.over30k]
    },
    {
      id: 4,
      question: questions_text.q4.title,
      options: [questions_text.q4.options.very, questions_text.q4.options.somewhat, questions_text.q4.options.not]
    },
    {
      id: 5,
      question: questions_text.q5.title,
      options: [questions_text.q5.options.thisSemester, questions_text.q5.options.withinYear, questions_text.q5.options.later]
    }
  ];
  
  const currentQuestion = questions[currentStep - 1];
  
  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      router.push('/loading');
    }
  };
  
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const selectAnswer = (answer: string) => {
    setAnswers({ ...answers, [currentStep]: answer });
  };
  
  return (
    <Layout showNav={false} showEnoChatbot={false}>
      {/* Progress Bar */}
      <ProgressBar currentStep={currentStep} totalSteps={5} />
      
      {/* Question Content */}
      <div className="flex-1 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 py-6">
          {currentStep > 1 && (
            <button
              onClick={handleBack}
              className="flex items-center gap-1.5 text-capital-blue font-medium text-sm mb-4 hover:text-capital-blue-dark transition-colors group"
            >
              <ArrowLeftIcon className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>{text.actions.back}</span>
            </button>
          )}
          
          <div className="mb-1 text-xs font-semibold text-capital-blue uppercase tracking-wide">
            {text.questionnaire.step} {currentStep} {text.questionnaire.of} 5
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 leading-tight">
            {currentQuestion.question}
          </h2>
          
          <RadioGroup.Root
            value={answers[currentStep] || ''}
            onValueChange={selectAnswer}
            className="space-y-2"
          >
            {currentQuestion.options.map((option, index) => (
              <OptionCard key={index} value={option}>
                {option}
              </OptionCard>
            ))}
          </RadioGroup.Root>
        </div>
      </div>
      
      {/* Bottom Button */}
      <div className="sticky bottom-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <div className="flex justify-end">
            <button
              onClick={handleNext}
              disabled={!answers[currentStep]}
              className="flex items-center gap-1.5 px-6 py-2.5 bg-capital-blue text-white rounded-lg font-semibold text-sm hover:bg-capital-blue-dark transition-all duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-capital-blue/20 shadow-sm"
            >
              {currentStep === 5 ? text.actions.complete : text.actions.next}
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
