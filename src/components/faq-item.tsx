'use client';

import { useState, useTransition } from 'react';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { LoaderCircle, Sparkles, AlertCircle } from 'lucide-react';
import { getSummary } from '@/app/actions';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';

interface FaqItemProps {
  id: string;
  question: string;
  answer: string;
}

export function FaqItemComponent({ id, question, answer }: FaqItemProps) {
  const [summary, setSummary] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleSummarize = async () => {
    setError(null);
    setSummary(null);

    startTransition(async () => {
      const result = await getSummary(answer);
      if (result.error) {
        setError(result.error);
        toast({
          variant: "destructive",
          title: "Summarization Error",
          description: result.error,
        })
      } else {
        setSummary(result.summary);
      }
    });
  };

  return (
    <AccordionItem value={id}>
      <AccordionTrigger className="text-left font-medium hover:no-underline">
        {question}
      </AccordionTrigger>
      <AccordionContent className="space-y-4 pt-2">
        <div className="prose prose-sm max-w-none text-foreground/80 whitespace-pre-wrap">{answer}</div>
        <div className="flex flex-col items-start gap-4">
          <Button onClick={handleSummarize} disabled={isPending} size="sm">
            {isPending ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              <Sparkles className="mr-2 h-4 w-4" />
            )}
            Summarize with AI
          </Button>

          {summary && !isPending && (
             <Alert>
               <Sparkles className="h-4 w-4" />
               <AlertTitle>AI Summary</AlertTitle>
               <AlertDescription>{summary}</AlertDescription>
             </Alert>
          )}

        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
