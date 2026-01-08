// Supported languages
export type Language = 'en' | 'es';

// Legacy translations type (deprecated - use TranslationSchema from translations.ts)
export interface Translations {
  [key: string]: string;
}

// Language context provider type
export interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

