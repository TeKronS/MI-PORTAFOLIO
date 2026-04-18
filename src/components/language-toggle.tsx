"use client"

import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <Button variant="ghost" onClick={toggleLanguage} className="font-medium w-10">
      {language === 'en' ? 'ES' : 'EN'}
    </Button>
  )
}
