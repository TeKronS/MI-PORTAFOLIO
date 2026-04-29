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
    id: "project-5",
    title: { en: "White-Label Professional Online Raffle Platform", es: "Plataforma Profesional de Rifas Online" },
    description: { en: "A comprehensive and scalable solution for raffle management. It enables automated ticket sales, bank payment reporting, and AI-powered ticket number verification. Designed to be rebranded in minutes for any business.", es: "Una solución integral y escalable para la gestión de sorteos. Permite la venta automatizada de tickets, el reporte de pagos bancarios y la verificación de números asignados mediante inteligencia artificial. Diseñada para ser personalizada en minutos para cualquier marca." },
    technologies: ["Next.js 15", "React", "Firebase (Firestore)", "Genkit (AI)", "Tailwind CSS", "ShadCN UI", "TypeScript", "Lucide Icons"],
    githubUrl: "https://github.com/TeKronS/RIFAS-CLIENTE",
    liveUrl: "https://rifas-cliente.vercel.app/",
  },
  {
    id: "project-4",
    title: { en: "Raffle Admin Pro", es: "Gestor de Rifas Pro" },
    description: { en: "A professional platform for the comprehensive management of raffles and prize drawings. It allows creating detailed raffles, verifying customer payments in real-time, automatically assigning tickets, and managing user roles (administrators and employees) for secure and efficient task delegation.", es: "Plataforma profesional para la gestión integral de rifas y sorteos. Permite crear rifas, verificar pagos de clientes en tiempo real, asignar tickets automáticamente y gestionar roles de usuario (administradores y empleados) para una delegación de tareas segura y eficiente." },
    technologies: ["Next.js", "React", "TypeScript", "Firebase (Firestore & Authentication)", "ShadCN UI", "Tailwind CSS", "Zod", "React Hook Form"],
    githubUrl: "https://github.com/TeKronS/Gestor-de-Rifas",
    liveUrl: "https://gestor-de-rifas.vercel.app/",
  },
  {
    id: "project-1",
    title: { en: "E-commerce Platform", es: "Plataforma de E-commerce" },
    description: { en: "A full-featured e-commerce site built with Next.js, featuring product listings, a shopping cart, and a secure checkout process powered by Firebase.", es: "Un sitio de comercio electrónico con todas las funciones creado con Next.js, que incluye listados de productos, un carrito de compras y un proceso de pago seguro con Firebase." },
    technologies: ["Next.js", "React", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "#",
  },
  {
    id: "project-2",
    title: { en: "Data Dashboard", es: "Dashboard de Datos" },
    description: { en: "An interactive dashboard for visualizing complex data sets using React and GraphQL. Features real-time updates and customizable chart components.", es: "Un dashboard interactivo para visualizar conjuntos de datos complejos usando React y GraphQL. Cuenta con actualizaciones en tiempo real y componentes de gráficos personalizables." },
    technologies: ["React", "GraphQL", "TypeScript", "D3.js"],
    githubUrl: "https://github.com",
    liveUrl: "#",
  },
  {
    id: "project-3",
    title: { en: "Portfolio Website", es: "Sitio Web de Portafolio" },
    description: { en: "This very portfolio, designed in Figma and developed with Next.js. A showcase of responsive design and modern web development practices.", es: "Este mismo portafolio, diseñado en Figma y desarrollado con Next.js. Una muestra de diseño responsivo y prácticas modernas de desarrollo web." },
    technologies: ["Next.js", "Figma", "TypeScript", "Responsive Design"],
    githubUrl: "https://github.com",
    liveUrl: "#",
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
          {projects.map((project, index) => {
             const image = projectImages.find(img => img.id === project.id) || projectImages[index];
            return(
            <Card key={project.id} className="flex flex-col overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="aspect-video relative">
                {image && (
                     <Image
                        src={image.imageUrl}
                        alt={project.title[language]}
                        fill
                        className="object-cover"
                        data-ai-hint={image.imageHint}
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
