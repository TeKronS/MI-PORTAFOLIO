'use client';

import Image from "next/image";
import { useLanguage } from "@/hooks/use-language";

const translations = {
  title: {
    en: "About Me",
    es: "Sobre Mí"
  },
  p1_start: {
    en: "I am a passionate web developer from Venezuela with a strong foundation in modern web technologies. Under my personal brand, ",
    es: "Soy un apasionado desarrollador web de Venezuela con una sólida base en tecnologías web modernas. Bajo mi marca personal, "
  },
  p1_end: {
    en: ", I strive to create elegant, efficient, and user-friendly digital experiences.",
    es: ", me esfuerzo por crear experiencias digitales elegantes, eficientes y fáciles de usar."
  },
  p2: {
    en: "My journey into programming has equipped me with a diverse skill set, allowing me to tackle challenges across the full stack. I am deeply interested in building innovative solutions that solve real-world problems.",
    es: "Mi incursión en la programación me ha dotado de un conjunto de habilidades diversas, lo que me permite afrontar retos en todo el stack. Estoy profundamente interesado en construir soluciones innovadoras que resuelvan problemas del mundo real."
  },
  p3: {
    en: "As a native Spanish speaker, I am also proficient in English, especially for reading technical documentation and code, which is essential in our ever-evolving field.",
    es: "Como hablante nativo de español, también domino el inglés, especialmente para leer documentación técnica y código, lo cual es esencial en nuestro campo en constante evolución."
  }
}

export function AboutSection() {
  const { language } = useLanguage();
  return (
    <section id="about" className="w-full bg-secondary">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="flex justify-center md:justify-start">
             <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-primary bg-background">
                <Image 
                    src="/img/TeKron Web Studio Icon.png"
                    alt="TeKron Web Studio Icon"
                    fill
                    className="p-4 object-contain"
                />
            </div>
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">{translations.title[language]}</h2>
            <div className="space-y-4 text-lg text-secondary-foreground/80 max-w-2xl mx-auto md:mx-0">
              <p>
                {translations.p1_start[language]}
                <span className="text-primary font-semibold">Tekron Web Studio</span>
                {translations.p1_end[language]}
              </p>
              <p>
                {translations.p2[language]}
              </p>
              <p>
                {translations.p3[language]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
