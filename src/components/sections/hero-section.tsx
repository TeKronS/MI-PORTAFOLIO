'use client';

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import Image from "next/image";

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
    <section id="home" className="w-full min-h-[calc(100vh-80px)] flex items-center justify-center bg-background overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6">
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight">
              {translations.title[language]}
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium">
              {translations.subtitle[language]}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href="#projects">{translations.viewWork[language]}</a>
              </Button>
              <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
                <a href="#contact">{translations.getInTouch[language]}</a>
              </Button>
            </div>
          </div>
          
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-[600px] aspect-[1024/806] rounded-2xl overflow-hidden shadow-2xl border border-border bg-card">
              <Image 
                src="/img/Portada TeKron Web Studio.png"
                alt="TeKron Web Studio Portada"
                width={1024}
                height={806}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
            </div>
            
            {/* Elementos decorativos de fondo */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-3xl rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
