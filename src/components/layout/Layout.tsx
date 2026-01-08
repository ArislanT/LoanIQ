'use client';

import { ReactNode, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { HomeIcon, ReaderIcon, FileTextIcon, GlobeIcon } from '@radix-ui/react-icons';
import ChatOverlay from './ChatOverlay';

interface LayoutProps {
  children: ReactNode;
  showNav?: boolean;
}

export default function Layout({ children, showNav = true }: LayoutProps) {
  const { language, toggleLanguage, text } = useLanguage();
  const pathname = usePathname();
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  const isActive = (path: string) => pathname === path;
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <nav className="bg-capital-blue border-b border-capital-blue-dark sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <Link href="/dashboard" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <Image
              src="/images/Loan IQ + logo.png"
              alt="LoanIQ+ Logo"
              width={36}
              height={36}
              className="object-contain"
            />
            <span className="text-lg font-bold tracking-tight">
              <span className="text-white">Loan</span>
              <span className="text-capital-red">IQ+</span>
            </span>
          </Link>
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
      
      {/* Main Content */}
      <main className="flex-1 pb-16">
        {children}
      </main>
      
      {/* Sticky Chatbot Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-16 right-3 z-40 w-14 h-14 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 overflow-hidden border border-gray-200 bg-white p-2"
        aria-label="Open chat with Eno"
      >
        <Image
          src="/images/eno.png"
          alt="Eno Assistant"
          width={40}
          height={40}
          className="w-full h-full object-contain"
        />
      </button>
      
      {/* Chat Overlay */}
      <ChatOverlay isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      
      {/* Bottom Navigation - Compact Footer Nav */}
      {showNav && (
        <nav className="bg-white border-t border-gray-200 fixed bottom-0 left-0 right-0 z-50 shadow-lg">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-around">
              <Link
                href="/dashboard"
                className={`flex-1 flex flex-col items-center gap-1 py-2 transition-all ${
                  isActive('/dashboard') 
                    ? 'text-capital-blue bg-blue-50 border-t-2 border-capital-blue' 
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                <HomeIcon className={`w-5 h-5 ${isActive('/dashboard') ? 'scale-110' : ''}`} />
                <span className="text-[10px] font-semibold">{text.nav.home}</span>
              </Link>
              
              <Link
                href="/loans"
                className={`flex-1 flex flex-col items-center gap-1 py-2 transition-all ${
                  isActive('/loans') 
                    ? 'text-capital-blue bg-blue-50 border-t-2 border-capital-blue' 
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                <ReaderIcon className={`w-5 h-5 ${isActive('/loans') ? 'scale-110' : ''}`} />
                <span className="text-[10px] font-semibold">{text.nav.loans}</span>
              </Link>
              
              <Link
                href="/laws"
                className={`flex-1 flex flex-col items-center gap-1 py-2 transition-all ${
                  isActive('/laws') 
                    ? 'text-capital-blue bg-blue-50 border-t-2 border-capital-blue' 
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                <FileTextIcon className={`w-5 h-5 ${isActive('/laws') ? 'scale-110' : ''}`} />
                <span className="text-[10px] font-semibold">{text.nav.laws}</span>
              </Link>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}
