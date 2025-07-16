'use client';

import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';

interface FaqItemProps {
  id: string;
  question: string;
  answer: string;
}

// Simple regex to find URLs in text
const urlRegex = /(https?:\/\/[^\s]+)/g;

const LinkifiedText = ({ text }: { text: string }) => {
  const parts = text.split(urlRegex);

  return (
    <>
      {parts.map((part, i) => {
        if (part.match(urlRegex)) {
          return (
            <Link
              key={i}
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {part}
            </Link>
          );
        }
        return part;
      })}
    </>
  );
};

export function FaqItemComponent({ id, question, answer }: FaqItemProps) {
  return (
    <AccordionItem value={id}>
      <AccordionTrigger className="text-left font-medium hover:no-underline">
        {question}
      </AccordionTrigger>
      <AccordionContent className="space-y-4 pt-2">
        <div className="prose prose-sm max-w-none text-foreground/80 whitespace-pre-wrap">
          <LinkifiedText text={answer} />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
