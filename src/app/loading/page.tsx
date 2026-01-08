'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { GlobeIcon, ReloadIcon } from '@radix-ui/react-icons';

export default function Loading() {
  const router = useRouter();
  const { language, toggleLanguage, text } = useLanguage();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/results');
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [router]);
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Navigation - Compact */}
      <nav className="bg-capital-blue border-b border-capital-blue-dark">
        <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-lg font-bold tracking-tight">
              <span className="text-white">Loan</span>
              <span className="text-capital-red">IQ+</span>
            </h1>
          </div>
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded text-xs font-semibold text-white transition-colors border border-white/20"
          >
            <GlobeIcon className="w-3.5 h-3.5" />
            <span>{language.toUpperCase()}</span>
            <span className="text-white/50">|</span>
            <span className="text-white/70">{language === 'en' ? 'ES' : 'EN'}</span>
          </button>
        </div>
      </nav>
      
      {/* Loading Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-16 bg-gray-50">
        <div className="max-w-md w-full bg-white rounded-xl border border-gray-200 shadow-capital-lg p-12 text-center">
          {/* Professional Spinner with Radix Icon */}
          <div className="w-24 h-24 mx-auto mb-8 flex items-center justify-center">
            <ReloadIcon className="w-16 h-16 text-capital-blue animate-spin" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            {text.loading.title}
          </h2>
          
          <p className="text-base text-gray-600 leading-relaxed">
            {text.loading.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}


