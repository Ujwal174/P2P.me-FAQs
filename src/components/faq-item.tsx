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

  // If the text contains HTML (like <a> tags), render it as HTML first
  if (text.includes('<a') || text.includes('href')) {
    // Parse HTML and add copy functionality to Telegram usernames
    const parts = text.split(/(@[a-zA-Z0-9_]+)/g);

    return (
      <div>
        {parts.map((part, index) => {
          // Check if this part is a Telegram username and not inside HTML tags
          if (part.match(/^@[a-zA-Z0-9_]+$/) && !text.substring(0, text.indexOf(part)).includes('<a')) {
            return (
              <span
                key={index}
                className="inline-flex items-center gap-1 text-primary font-medium cursor-pointer hover:bg-primary/10 px-1 py-0.5 rounded transition-colors"
                onClick={() => handleCopyUsername(part)}
                title="Click to copy username"
              >
                {part}
                {copiedUsername === part ? (
                  <Check className="h-3 w-3 text-green-500" />
                ) : (
                  <Copy className="h-3 w-3 hover:text-primary/70" />
                )}
              </span>
            );
          }
          // For HTML content and regular text, render as HTML
          return <span key={index} dangerouslySetInnerHTML={{ __html: part }} />;
        })}
      </div>
    );
  }

  // For plain text, process normally
  const parts = text.split(/(@[a-zA-Z0-9_]+)/g);

  return (
    <div className="whitespace-pre-wrap">
      {parts.map((part, index) => {
        if (part.match(/^@[a-zA-Z0-9_]+$/)) {
          return (
            <span
              key={index}
              className="inline-flex items-center gap-1 text-primary font-medium cursor-pointer hover:bg-primary/10 px-1 py-0.5 rounded transition-colors"
              onClick={() => handleCopyUsername(part)}
              title="Click to copy username"
            >
              {part}
              {copiedUsername === part ? (
                <Check className="h-3 w-3 text-green-500" />
              ) : (
                <Copy className="h-3 w-3 hover:text-primary/70" />
              )}
            </span>
          );
        }
        return part;
      })}
    </div>
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
        <div className="prose prose-sm max-w-none text-foreground/80">
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
