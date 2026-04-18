import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="w-full bg-secondary">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="flex justify-center md:justify-start">
             <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-primary">
                <Image 
                    src="https://picsum.photos/seed/avatar/400/400"
                    alt="Simon Enrique Ramirez Ferrer"
                    fill
                    style={{ objectFit: 'cover' }}
                    data-ai-hint="professional portrait"
                />
            </div>
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-lg text-secondary-foreground/80 max-w-2xl mx-auto md:mx-0">
              <p>
                I am a passionate web developer from Venezuela with a strong foundation in modern web technologies. Under my personal brand, <span className="text-primary font-semibold">Tekron Web Studio</span>, I strive to create elegant, efficient, and user-friendly digital experiences.
              </p>
              <p>
                My journey into programming has equipped me with a diverse skill set, allowing me to tackle challenges across the full stack. I am deeply interested in building innovative solutions that solve real-world problems.
              </p>
              <p>
                As a native Spanish speaker, I am also proficient in English, especially for reading technical documentation and code, which is essential in our ever-evolving field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
