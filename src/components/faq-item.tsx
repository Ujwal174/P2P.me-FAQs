'use client';

import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface FaqItemProps {
  id: string;
  question: string;
  answer: string;
}

// Regex to find standalone Telegram usernames (not already in HTML)
const telegramUsernameRegex = /@[a-zA-Z0-9_]+/g;

const LinkifiedText = ({ text }: { text: string }) => {
  const [copiedUsername, setCopiedUsername] = useState<string | null>(null);

  const handleCopyUsername = async (username: string) => {
    try {
      await navigator.clipboard.writeText(username);
      setCopiedUsername(username);
      setTimeout(() => setCopiedUsername(null), 2000);
    } catch (err) {
      console.error('Failed to copy username:', err);
    }
  };

  // Split text by lines first to handle each line separately
  const lines = text.split('\n');

  return (
    <>
      {lines.map((line, lineIndex) => (
        <div key={lineIndex}>
          {line.split(' ').map((word, wordIndex) => {
            // Check if this word is a Telegram username
            if (word.match(telegramUsernameRegex) && !line.includes('<a') && !line.includes('href')) {
              return (
                <span key={wordIndex}>
                  <span
                    className="inline-flex items-center gap-1 text-primary font-medium cursor-pointer hover:bg-primary/10 px-1 py-0.5 rounded transition-colors"
                    onClick={() => handleCopyUsername(word)}
                    title="Click to copy username"
                  >
                    {word}
                    {copiedUsername === word ? (
                      <Check className="h-3 w-3 text-green-500" />
                    ) : (
                      <Copy className="h-3 w-3 hover:text-primary/70" />
                    )}
                  </span>
                  {wordIndex < line.split(' ').length - 1 ? ' ' : ''}
                </span>
              );
            }
            // For regular words and HTML content, render as-is
            return (
              <span
                key={wordIndex}
                dangerouslySetInnerHTML={{
                  __html: word + (wordIndex < line.split(' ').length - 1 ? ' ' : ''),
                }}
              />
            );
          })}
          {lineIndex < lines.length - 1 && <br />}
        </div>
      ))}
    </>
  );
};

export function FaqItemComponent({ id, question, answer }: FaqItemProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyAnswer = async () => {
    try {
      // Remove HTML tags for clean text copy
      const plainText = answer.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ');
      await navigator.clipboard.writeText(plainText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy answer:', err);
    }
  };

  return (
    <AccordionItem value={id}>
      <AccordionTrigger className="text-left font-medium hover:no-underline">
        {question}
      </AccordionTrigger>
      <AccordionContent className="space-y-4 pt-2">
        <div className="prose prose-sm max-w-none text-foreground/80 whitespace-pre-wrap">
          <LinkifiedText text={answer} />
        </div>
        <div className="flex justify-end">
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopyAnswer}
            className="flex items-center gap-2 text-xs"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" />
                Copy Answer
              </>
            )}
          </Button>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
