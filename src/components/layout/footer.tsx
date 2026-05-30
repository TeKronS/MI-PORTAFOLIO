'use client';

import { Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import Image from 'next/image';

const translations = {
    rights: {
        en: "All rights reserved.",
        es: "Todos los derechos reservados."
    }
}

export function Footer() {
  const { language } = useLanguage();
  return (
    <footer className="w-full bg-secondary text-secondary-foreground border-t">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 px-4 py-12 md:px-6">
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3">
          <div className="flex items-center gap-3">
            <Image 
              src="/img/TeKron Web Studio Icon.png" 
              alt="TeKron Web Studio Logo" 
              width={32} 
              height={32} 
              className="grayscale hover:grayscale-0 transition-all"
            />
            <p className="font-bold font-headline text-lg">Tekron Web Studio</p>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Simon Enrique Ramirez Ferrer. {translations.rights[language]}</p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
