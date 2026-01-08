export { en } from './en';
export { es } from './es';

// Re-export types from @/types for convenience
export type { TranslationSchema, RecommendedLoanData } from '@/types';

import { en } from './en';
import { es } from './es';

export const translations = {
  en,
  es,
};

export type Language = keyof typeof translations;
