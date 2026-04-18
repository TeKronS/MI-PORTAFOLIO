"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { generateProjectSummary } from '@/ai/flows/generate-project-summary-flow';
import { useLanguage } from '@/hooks/use-language';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Wand2 } from 'lucide-react';

const aiFormSchema = z.object({
  keywords: z.string().min(3, 'Please provide some relevant keywords.'),
  technologies: z.string().min(2, 'Please list at least one technology.'),
  objectives: z.string().min(10, 'Please describe the project objectives in more detail.'),
});

const translations = {
    sectionTitle: { en: "AI Project Briefer", es: "Resumidor de Proyectos con IA" },
    sectionDescription: { en: "Leverage AI to craft the perfect project summary. This tool demonstrates my ability to integrate generative AI into applications.", es: "Aprovecha la IA para crear el resumen de proyecto perfecto. Esta herramienta demuestra mi capacidad para integrar IA generativa en aplicaciones." },
    cardTitle: { en: "Generate a Project Summary", es: "Generar un Resumen de Proyecto" },
    cardDescription: { en: "Enter your project details below.", es: "Introduce los detalles de tu proyecto a continuación." },
    keywordsLabel: { en: "Keywords (comma-separated)", es: "Palabras clave (separadas por comas)" },
    keywordsPlaceholder: { en: "e.g., e-commerce, real-time, data visualization", es: "ej., e-commerce, tiempo-real, visualización de datos" },
    technologiesLabel: { en: "Technologies (comma-separated)", es: "Tecnologías (separadas por comas)" },
    technologiesPlaceholder: { en: "e.g., Next.js, Firebase, GraphQL", es: "ej., Next.js, Firebase, GraphQL" },
    objectivesLabel: { en: "Project Objectives", es: "Objetivos del Proyecto" },
    objectivesPlaceholder: { en: "Describe the main goals and purpose of the project...", es: "Describe los principales objetivos y el propósito del proyecto..." },
    generateButton: { en: "Generate Summary", es: "Generar Resumen" },
    generatedSummaryTitle: { en: "Generated Summary:", es: "Resumen Generado:" },
    error: { en: "Failed to generate summary. Please try again.", es: "No se pudo generar el resumen. Por favor, inténtalo de nuevo." },
}

export function AiToolSection() {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { language } = useLanguage();

  const form = useForm<z.infer<typeof aiFormSchema>>({
    resolver: zodResolver(aiFormSchema),
    defaultValues: {
      keywords: '',
      technologies: '',
      objectives: '',
    },
  });

  async function onSubmit(values: z.infer<typeof aiFormSchema>) {
    setIsLoading(true);
    setSummary('');
    setError('');

    try {
      const input = {
        keywords: values.keywords.split(',').map((k) => k.trim()).filter(Boolean),
        technologies: values.technologies.split(',').map((t) => t.trim()).filter(Boolean),
        objectives: values.objectives,
      };
      const result = await generateProjectSummary(input);
      setSummary(result.summary);
    } catch (err) {
      console.error('Error generating summary:', err);
      setError(translations.error[language]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="ai-tool" className="w-full bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">{translations.sectionTitle[language]}</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            {translations.sectionDescription[language]}
          </p>
        </div>
        <Card className="max-w-3xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardHeader>
                <CardTitle>{translations.cardTitle[language]}</CardTitle>
                <CardDescription>{translations.cardDescription[language]}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="keywords"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{translations.keywordsLabel[language]}</FormLabel>
                      <FormControl>
                        <Input placeholder={translations.keywordsPlaceholder[language]} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="technologies"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{translations.technologiesLabel[language]}</FormLabel>
                      <FormControl>
                        <Input placeholder={translations.technologiesPlaceholder[language]} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="objectives"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{translations.objectivesLabel[language]}</FormLabel>
                      <FormControl>
                        <Textarea placeholder={translations.objectivesPlaceholder[language]} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <Wand2 />
                  )}
                  {translations.generateButton[language]}
                </Button>
              </CardFooter>
            </form>
          </Form>

          {(summary || error) && (
            <div className="p-6 border-t">
              <h4 className="font-semibold mb-2">{translations.generatedSummaryTitle[language]}</h4>
              {summary && <p className="text-muted-foreground bg-secondary p-4 rounded-md font-code">{summary}</p>}
              {error && <p className="text-destructive">{error}</p>}
            </div>
          )}
        </Card>
      </div>
    </section>
  );
}