import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Github, Link as LinkIcon } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: "project-1",
    title: "E-commerce Platform",
    description: "A full-featured e-commerce site built with Next.js, featuring product listings, a shopping cart, and a secure checkout process powered by Firebase.",
    technologies: ["Next.js", "React", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "#",
  },
  {
    id: "project-2",
    title: "Data Dashboard",
    description: "An interactive dashboard for visualizing complex data sets using React and GraphQL. Features real-time updates and customizable chart components.",
    technologies: ["React", "GraphQL", "TypeScript", "D3.js"],
    githubUrl: "https://github.com",
    liveUrl: "#",
  },
  {
    id: "project-3",
    title: "Portfolio Website",
    description: "This very portfolio, designed in Figma and developed with Next.js. A showcase of responsive design and modern web development practices.",
    technologies: ["Next.js", "Figma", "TypeScript", "Responsive Design"],
    githubUrl: "https://github.com",
    liveUrl: "#",
  },
];

export function ProjectsSection() {
    const projectImages = PlaceHolderImages;
  return (
    <section id="projects" className="w-full bg-secondary">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">My Work</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">Here are some of the projects I'm proud to have worked on.</p>
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
                        alt={project.title}
                        fill
                        className="object-cover"
                        data-ai-hint={image.imageHint}
                    />
                )}
              </div>
              <CardHeader>
                <CardTitle className="font-headline">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">{project.description}</p>
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
                    Live Demo
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
