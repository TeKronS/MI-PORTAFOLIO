import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Figma, GitMerge } from "lucide-react";
import { TechIcon } from "@/components/icons/tech-icons";

const skills = {
  "Languages & Frameworks": [
    { name: "JavaScript", icon: <TechIcon tech="javascript" /> },
    { name: "TypeScript", icon: <TechIcon tech="typescript" /> },
    { name: "React", icon: <TechIcon tech="react" /> },
    { name: "Next.js", icon: <TechIcon tech="nextjs" /> },
    { name: "HTML5", icon: <TechIcon tech="html" /> },
    { name: "CSS3", icon: <TechIcon tech="css" /> },
  ],
  "Databases & APIs": [
    { name: "Firebase", icon: <TechIcon tech="firebase" /> },
    { name: "MongoDB", icon: <TechIcon tech="mongodb" /> },
    { name: "GraphQL", icon: <TechIcon tech="graphql" /> },
  ],
  "Tools & Methodologies": [
    { name: "Git", icon: <GitMerge className="h-12 w-12 text-foreground" /> },
    { name: "Figma", icon: <Figma className="h-12 w-12 text-foreground" /> },
    { name: "Responsive Design", icon: (
      <svg className="h-12 w-12 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 21V5a2 2 0 00-2-2H7" />
      </svg>
    )},
  ],
};

const SkillCard = ({ name, icon }: { name: string, icon: React.ReactNode }) => (
  <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-card/50 transition-transform duration-300 hover:scale-105 hover:bg-accent">
    {icon}
    <p className="font-medium text-center">{name}</p>
  </div>
);

export function SkillsSection() {
  return (
    <section id="skills" className="w-full bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Skills & Proficiencies</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">A glimpse into the technologies and tools I use to bring ideas to life.</p>
        </div>
        <div className="space-y-12">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-2xl font-bold text-center mb-8 font-headline">{category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {items.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
