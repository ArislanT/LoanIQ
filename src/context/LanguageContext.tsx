import { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { translations, Language, TranslationKeys } from '../locales';

// ============================================
// Types
// ============================================

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  text: TranslationKeys;  // All translated text strings
}

interface LanguageProviderProps {
  children: ReactNode;
  defaultLanguage?: Language;
}

// ============================================
// Context
// ============================================

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// ============================================
// Provider
// ============================================

export function LanguageProvider({ children, defaultLanguage = 'en' }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => (prev === 'en' ? 'es' : 'en'));
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);

  // Get current translations based on selected language
  const text = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, text }}>
      {children}
    </LanguageContext.Provider>
  );
}

// ============================================
// Hook
// ============================================

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// ============================================
// Usage Examples (for reference)
// ============================================
/*

// In a component:
import { useLanguage } from '../context/LanguageContext';

function MyComponent() {
  const { text, language, toggleLanguage } = useLanguage();
  
  return (
    <div>
      <h1>{text.appName}</h1>
      <p>{text.questionnaire.questions.q1.title}</p>
      <button onClick={toggleLanguage}>
        {language === 'en' ? 'ES' : 'EN'}
      </button>
    </div>
  );
}

// Accessing nested translations:
text.nav.home                           // "Home" or "Inicio"
text.questionnaire.questions.q1.title   // Question text
text.loans.categories.federal           // "Federal Loans" or "Préstamos Federales"
text.laws.status.active                 // "Active" or "Activo"

*/
