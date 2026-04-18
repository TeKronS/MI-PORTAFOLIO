"use client"

import { useEffect } from 'react';
import { useLanguage } from '@/hooks/use-language';

export function HtmlLangUpdater() {
  const { language } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return null;
}
