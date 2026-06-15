'use client';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Github, Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/hooks/use-language";

const translations = {
    title: { en: "My Work", es: "Mi Trabajo" },
    description: { en: "Here are some of the projects I'm proud to have worked on.", es: "Estos son algunos de los proyectos en los que me enorgullece haber trabajado." },
    liveDemo: { en: "Live Demo", es: "Demo en Vivo" },
}

const projects = [
  {
    id: "fonemaster",
    title: { en: "FoneMaster - Smartphone Ecommerce", es: "FoneMaster - Ecommerce de Smartphones" },
    description: { 
      en: "A high-performance e-commerce platform specializing in next-generation smartphones. It features an interactive catalog that allows users to filter devices by complex technical specifications like RAM and network type (5G/4G).", 
      es: "Plataforma de comercio electrónico de alto rendimiento especializada en smartphones de última generación. Cuenta con un catálogo interactivo que permite filtrar dispositivos por especificaciones técnicas complejas como memoria RAM y tipo de red (5G/4G)." 
    },
    technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "ShadCN UI", "Lucide React", "Genkit"],
    githubUrl: "https://github.com/TeKronS/FoneMaster",
    liveUrl: "https://fone-master.vercel.app/",
  },
  {
    id: "gestor-rifas-pro",
    title: { en: "Raffle Admin Pro", es: "Gestor de Rifas Pro" },
    description: { 
      en: "A comprehensive platform for professional raffle and sweepstakes management. It automates ticket sales, real-time payment verification, and random number assignment. Features include role management for admins and employees, automatic financial summaries, and action auditing.", 
      es: "Una plataforma integral para la administración profesional de sorteos y rifas. Automatiza la venta de boletos, la verificación de pagos en tiempo real y la asignación aleatoria de números. Incluye gestión de roles para administradores y empleados, resúmenes financieros automáticos y auditoría de acciones." 
    },
    technologies: ["Next.js 15", "React", "TypeScript", "Firebase", "Tailwind CSS", "ShadCN UI", "Lucide Icons", "Zod", "React Hook Form"],
    githubUrl: "https://github.com/TeKronS/Gestor-de-Rifas",
    liveUrl: "https://gestor-de-rifas.vercel.app/",
  },
  {
    id: "multiprinttools",
    title: { en: "MultiPrintTools | Professional Reprography Suite", es: "MultiPrintTools | Suite Profesional de Reprografía" },
    description: { 
      en: "Digital toolkit for printing experts that automates technical mural grid creation, PDF management, and image optimization with guaranteed local processing.", 
      es: "Toolkit digital para expertos en impresión que automatiza la creación de cuadrículas técnicas para murales, gestión de PDFs y optimización de imágenes con procesamiento local garantizado." 
    },
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "jsPDF", "pdf-lib", "pdfjs-dist", "Lucide React", "Firebase", "Genkit"],
    githubUrl: "https://github.com/TeKronS/MultiPrintTools",
    liveUrl: "https://www.multiprinttools.com/",
  },
  {
    id: "nextshop",
    title: { en: "NextShop - E-commerce", es: "NextShop - E-commerce" },
    description: { 
      en: "A high-performance marketplace that combines minimalist design with robust features. It features an AI assistant for generating product descriptions, a real-time database for inventory and reviews, and a fully responsive interface optimized for conversion.", 
      es: "Un marketplace de alto rendimiento que combina un diseño minimalista con funcionalidades robustas. Cuenta con un asistente de IA para generar descripciones de productos, base de datos en tiempo real para inventario y reseñas, y una interfaz totalmente responsiva optimizada para la conversión." 
    },
    technologies: ["Next.js 15", "React 19", "TypeScript", "Firebase Firestore", "Firebase Authentication", "Google Genkit", "Tailwind CSS", "ShadCN UI", "Lucide Icons"],
    githubUrl: "https://github.com/TeKronS/NextShop",
    liveUrl: "https://next-shop-beta-eight.vercel.app/",
  },
  {
    id: "project-5",
    title: { en: "White-Label Professional Online Raffle Platform", es: "Plataforma Profesional de Rifas Online" },
    description: { en: "A comprehensive and scalable solution for raffle management. It enables automated ticket sales, bank payment reporting, and AI-powered ticket number verification. Designed to be rebranded in minutes for any business.", es: "Una solución integral y escalable para la gestión de sorteos. Permite la venta automatizada de tickets, el reporte de pagos bancarios y la verificación de números asignados mediante inteligencia artificial. Diseñada para ser personalizada en minutos para cualquier marca." },
    technologies: ["Next.js 15", "React", "Firebase (Firestore)", "Genkit (AI)", "Tailwind CSS", "ShadCN UI", "TypeScript", "Lucide Icons"],
    githubUrl: "https://github.com/TeKronS/RIFAS-CLIENTE",
    liveUrl: "https://rifas-cliente.vercel.app/",
  },
];

export function ProjectsSection() {
    const { language } = useLanguage();
    const projectImages = PlaceHolderImages;
  return (
    <section id="projects" className="w-full bg-secondary">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">{translations.title[language]}</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">{translations.description[language]}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
             const image = projectImages.find(img => img.id === project.id);
            return(
            <Card key={project.id} className="flex flex-col overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="aspect-video relative">
                {image && (
                     <Image
                        src={image.imageUrl}
                        alt={project.title[language]}
                        fill
                        className="object-cover"
                        data-ai-hint={image.imageHint || "web project"}
                    />
                )}
              </div>
              <CardHeader>
                <CardTitle className="font-headline">{project.title[language]}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">{project.description[language]}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github />
                    GitHub
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <LinkIcon />
                    {translations.liveDemo[language]}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          )})}
        </div>
      </div>
    </section>
  );
}
