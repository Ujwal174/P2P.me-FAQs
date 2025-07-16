'use server';

import { faqSummarization } from '@/ai/flows/faq-summarizer';

export async function getSummary(faqEntry: string) {
  if (!faqEntry) {
    return { summary: null, error: 'No content to summarize.' };
  }
  try {
    const result = await faqSummarization({ faqEntry });
    return { summary: result.summary, error: null };
  } catch (e) {
    console.error('Summarization failed:', e);
    return { summary: null, error: 'Failed to generate summary. Please try again.' };
  }
}
