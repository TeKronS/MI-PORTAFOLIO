import { Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="w-full bg-secondary text-secondary-foreground">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-8 md:px-6">
        <div className="text-center sm:text-left">
          <p className="font-bold font-headline">Tekron Web Studio</p>
          <p className="text-sm">© {new Date().getFullYear()} Simon Enrique Ramirez Ferrer. All rights reserved.</p>
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
