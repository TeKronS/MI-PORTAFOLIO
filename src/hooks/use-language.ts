"use client";

import { useContext } from 'react';
import { LanguageContext, LanguageContextType } from '@/components/language-provider';

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
