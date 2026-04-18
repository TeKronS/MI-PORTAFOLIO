import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="home" className="w-full min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto text-center px-4 py-24">
        <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-4">
          Simon Enrique Ramirez Ferrer
        </h1>
        <p className="text-lg md:text-2xl text-primary font-medium mb-8">
          Full-Stack Web Developer | Tekron Web Studio
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg">
            <a href="#projects">View My Work</a>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
