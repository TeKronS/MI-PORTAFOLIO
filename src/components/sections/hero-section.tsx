'use client';

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";

const translations = {
    title: {
        en: "Simon Enrique Ramirez Ferrer",
        es: "Simon Enrique Ramirez Ferrer"
    },
    subtitle: {
        en: "Full-Stack Web Developer | Tekron Web Studio",
        es: "Desarrollador Web Full-Stack | Tekron Web Studio"
    },
    viewWork: {
        en: "View My Work",
        es: "Ver Mi Trabajo"
    },
    getInTouch: {
        en: "Get In Touch",
        es: "Ponte en Contacto"
    }
}

export function HeroSection() {
  const { language } = useLanguage();

  return (
    <section id="home" className="w-full min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto text-center px-4 py-24">
        <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-4">
          {translations.title[language]}
        </h1>
        <p className="text-lg md:text-2xl text-primary font-medium mb-8">
          {translations.subtitle[language]}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg">
            <a href="#projects">{translations.viewWork[language]}</a>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <a href="#contact">{translations.getInTouch[language]}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
