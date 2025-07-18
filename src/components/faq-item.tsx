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

  // Split by URLs and Telegram usernames
  const urlRegex = /(https?:\/\/[^\s<>"]+)/g;
  const usernameRegex = /(@[a-zA-Z0-9_]+)/g;
  
  // First split by URLs, then by usernames
  const parts = text.split(urlRegex);
  
  return (
    <div className="whitespace-pre-wrap font-outfit">
      {parts.map((part, index) => {
        // Check if this part is a URL
        if (part.match(urlRegex)) {
          return (
            <a
              key={index}
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline hover:no-underline transition-colors"
            >
              {part}
            </a>
          );
        }
        
        // Process this part for Telegram usernames
        const usernameParts = part.split(usernameRegex);
        
        return (
          <span key={index}>
            {usernameParts.map((usernamePart, usernameIndex) => {
              if (usernamePart.match(usernameRegex)) {
                return (
                  <span
                    key={usernameIndex}
                    className="inline-flex items-center gap-1 text-primary font-medium cursor-pointer hover:bg-primary/10 px-1 py-0.5 rounded transition-colors"
                    onClick={() => handleCopyUsername(usernamePart)}
                    title="Click to copy username"
                  >
                    {usernamePart}
                    {copiedUsername === usernamePart ? (
                      <Check className="h-3 w-3 text-green-500" />
                    ) : (
                      <Copy className="h-3 w-3 hover:text-primary/70" />
                    )}
                  </span>
                );
              }
              return usernamePart;
            })}
          </span>
        );
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
      <AccordionTrigger className="text-left font-medium hover:no-underline font-outfit">
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
            className="flex items-center gap-2 text-xs font-outfit"
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
