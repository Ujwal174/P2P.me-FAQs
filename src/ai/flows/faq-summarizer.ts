'use server';

/**
 * @fileOverview A tool for summarizing FAQ entries.
 *
 * - faqSummarization - A function that summarizes the FAQ.
 * - FaqSummarizationInput - The input type for the faqSummarization function.
 * - FaqSummarizationOutput - The return type for the faqSummarization function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FaqSummarizationInputSchema = z.object({
  faqEntry: z.string().describe('The full text of the FAQ entry to summarize.'),
});
export type FaqSummarizationInput = z.infer<typeof FaqSummarizationInputSchema>;

const FaqSummarizationOutputSchema = z.object({
  summary: z.string().describe('A short, concise summary of the FAQ entry.'),
});
export type FaqSummarizationOutput = z.infer<typeof FaqSummarizationOutputSchema>;

export async function faqSummarization(input: FaqSummarizationInput): Promise<FaqSummarizationOutput> {
  return faqSummarizationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'faqSummarizationPrompt',
  input: {schema: FaqSummarizationInputSchema},
  output: {schema: FaqSummarizationOutputSchema},
  prompt: `Summarize the following FAQ entry in a concise manner:\n\n{{{faqEntry}}}`, 
});

const faqSummarizationFlow = ai.defineFlow(
  {
    name: 'faqSummarizationFlow',
    inputSchema: FaqSummarizationInputSchema,
    outputSchema: FaqSummarizationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
