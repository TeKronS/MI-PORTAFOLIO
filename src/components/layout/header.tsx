"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/hooks/use-language';
import { ThemeToggle } from '@/components/theme-toggle';
import { LanguageToggle } from '@/components/language-toggle';
import Image from 'next/image';

const navLinkTranslations = {
  about: { en: 'About', es: 'Sobre mí' },
  skills: { en: 'Skills', es: 'Habilidades' },
  projects: { en: 'Projects', es: 'Proyectos' },
  contact: { en: 'Contact', es: 'Contacto' },
};

const navLinks = [
  { href: '#about', key: 'about' as const },
  { href: '#skills', key: 'skills' as const },
  { href: '#projects', key: 'projects' as const },
  { href: '#contact', key: 'contact' as const },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      (isScrolled || isMenuOpen) ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <a href="#home" className="flex items-center gap-3 transition-colors hover:text-primary group">
          <Image 
            src="/img/TeKron Web Studio Icon.png" 
            alt="TeKron Web Studio Logo" 
            width={48} 
            height={48} 
            className="h-10 w-auto transition-transform group-hover:scale-110"
          />
          <span className="text-xl font-bold font-headline hidden sm:inline-block">
            Tekron Web Studio
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="font-medium text-foreground/80 transition-colors hover:text-primary">
              {navLinkTranslations[link.key][language]}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <div className="hidden md:flex items-center gap-1">
             <LanguageToggle />
             <ThemeToggle />
          </div>
          <div className="md:hidden">
            <Button onClick={toggleMenu} variant="ghost" size="icon">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full md:hidden bg-background border-b border-border shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col items-center gap-2 p-4">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)} 
                className="w-full text-center py-3 font-medium text-foreground/80 transition-colors hover:text-primary rounded-md hover:bg-accent"
              >
                {navLinkTranslations[link.key][language]}
              </a>
            ))}
          </nav>
          <div className="border-t p-4 flex justify-center items-center gap-4">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
