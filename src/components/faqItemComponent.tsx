'use client';

import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Copy, Check } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface FaqItemProps {
  id: string;
  question: string;
  answer: string;
}

// Simple regex to find URLs in text
const urlRegex = /(https?:\/\/[^\s]+)/g;
// Regex to find Telegram usernames
const telegramUsernameRegex = /(@[a-zA-Z0-9_]+)/g;

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

  // Split by both URLs and Telegram usernames
  const parts = text.split(/((https?:\/\/[^\s]+)|(@[a-zA-Z0-9_]+))/g);

  return (
    <>
      {parts.map((part, i) => {
        if (part?.match(urlRegex)) {
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
        if (part?.match(telegramUsernameRegex)) {
          return (
            <span
              key={i}
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
    </>
  );
};

export function FaqItemComponent({ id, question, answer }: FaqItemProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyAnswer = async () => {
    try {
      await navigator.clipboard.writeText(answer);
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