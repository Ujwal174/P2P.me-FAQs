'use client';

import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface FaqItemProps {
  id: string;
  question: string;
  answer: string;
}

export function FaqItemComponent({ id, question, answer }: FaqItemProps) {
  return (
    <AccordionItem value={id}>
      <AccordionTrigger className="text-left font-medium hover:no-underline">
        {question}
      </AccordionTrigger>
      <AccordionContent className="space-y-4 pt-2">
        <div className="prose prose-sm max-w-none text-foreground/80 whitespace-pre-wrap">{answer}</div>
      </AccordionContent>
    </AccordionItem>
  );
}
