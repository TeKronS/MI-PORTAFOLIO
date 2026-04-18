"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { generateProjectSummary } from '@/ai/flows/generate-project-summary-flow';

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

export function AiToolSection() {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

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
      setError('Failed to generate summary. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="ai-tool" className="w-full bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">AI Project Briefer</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Leverage AI to craft the perfect project summary. This tool demonstrates my ability to integrate generative AI into applications.
          </p>
        </div>
        <Card className="max-w-3xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardHeader>
                <CardTitle>Generate a Project Summary</CardTitle>
                <CardDescription>Enter your project details below.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="keywords"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Keywords (comma-separated)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., e-commerce, real-time, data visualization" {...field} />
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
                      <FormLabel>Technologies (comma-separated)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Next.js, Firebase, GraphQL" {...field} />
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
                      <FormLabel>Project Objectives</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Describe the main goals and purpose of the project..." {...field} />
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
                  Generate Summary
                </Button>
              </CardFooter>
            </form>
          </Form>

          {(summary || error) && (
            <div className="p-6 border-t">
              <h4 className="font-semibold mb-2">Generated Summary:</h4>
              {summary && <p className="text-muted-foreground bg-secondary p-4 rounded-md font-code">{summary}</p>}
              {error && <p className="text-destructive">{error}</p>}
            </div>
          )}
        </Card>
      </div>
    </section>
  );
}
