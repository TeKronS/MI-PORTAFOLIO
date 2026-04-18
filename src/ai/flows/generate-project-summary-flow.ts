'use server';
/**
 * @fileOverview A Genkit flow for generating concise and impactful project summaries.
 *
 * - generateProjectSummary - A function that generates a project summary based on provided details.
 * - GenerateProjectSummaryInput - The input type for the generateProjectSummary function.
 * - GenerateProjectSummaryOutput - The return type for the generateProjectSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectSummaryInputSchema = z.object({
  keywords: z.array(z.string()).describe('Key terms or themes related to the project.'),
  technologies: z
    .array(z.string())
    .describe('Technologies, languages, and frameworks used in the project.'),
  objectives: z
    .string()
    .describe('The main goals and objectives that the project aimed to achieve.'),
});
export type GenerateProjectSummaryInput = z.infer<
  typeof GenerateProjectSummaryInputSchema
>;

const GenerateProjectSummaryOutputSchema = z.object({
  summary: z.string().describe('A concise and impactful summary of the project.'),
});
export type GenerateProjectSummaryOutput = z.infer<
  typeof GenerateProjectSummaryOutputSchema
>;

export async function generateProjectSummary(
  input: GenerateProjectSummaryInput
): Promise<GenerateProjectSummaryOutput> {
  return generateProjectSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectSummaryPrompt',
  input: {schema: GenerateProjectSummaryInputSchema},
  output: {schema: GenerateProjectSummaryOutputSchema},
  prompt: `You are an AI assistant specialized in writing concise and impactful project summaries for developer portfolios.

Generate a professional and engaging project summary based on the following details:

Keywords: {{#each keywords}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
Technologies: {{#each technologies}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
Objectives: {{{objectives}}}

The summary should highlight the project's purpose, the technologies used, and the value delivered. Keep it to 2-3 sentences, focusing on impact and key achievements.`,
});

const generateProjectSummaryFlow = ai.defineFlow(
  {
    name: 'generateProjectSummaryFlow',
    inputSchema: GenerateProjectSummaryInputSchema,
    outputSchema: GenerateProjectSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
