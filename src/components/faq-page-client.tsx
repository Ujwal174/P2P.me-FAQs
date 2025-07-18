"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

'use client';

import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Accordion } from '@/components/ui/accordion';
import { FaqItemComponent } from '@/components/faq-item';
import { Search, Info } from 'lucide-react';
import type { FaqItem, FaqCategory } from '@/lib/faq-data';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

interface FaqPageClientProps {
  allFaqs: FaqItem[];
  categories: FaqCategory[];
}

export default function FaqPageClient({ allFaqs, categories }: FaqPageClientProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaqs = useMemo(() => {
    if (!searchTerm) {
      return allFaqs;
    }
    const lowercasedTerm = searchTerm.toLowerCase();
    return allFaqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(lowercasedTerm) ||
        faq.answer.toLowerCase().includes(lowercasedTerm)
    );
  }, [searchTerm, allFaqs]);

  const groupedFaqs = useMemo(() => {
    return filteredFaqs.reduce((acc, faq) => {
      (acc[faq.category] = acc[faq.category] || []).push(faq);
      return acc;
    }, {} as Record<FaqCategory, FaqItem[]>);
  }, [filteredFaqs]);

  const hasResults = filteredFaqs.length > 0;

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Find answers to common questions about P2P.me. Can't find what you're looking for? Use the search bar below.
        </p>
      </section>

      <div className="max-w-3xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search questions..."
            className="pl-10 h-12 text-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search questions"
          />
        </div>
      </div>
      
      <main className="max-w-4xl mx-auto">
        {hasResults ? (
          categories.map((category) => {
            const faqsInCategory = groupedFaqs[category];
            if (!faqsInCategory || faqsInCategory.length === 0) {
              return null;
            }
            return (
              <div key={category} className="mb-10">
                <h2 className="text-2xl font-bold font-headline mb-4 border-b pb-2">
                  {category}
                </h2>
                <Accordion type="multiple" className="w-full">
                  {faqsInCategory.map((faq) => (
                    <FaqItemComponent key={faq.id} {...faq} />
                  ))}
                </Accordion>
              </div>
            );
          })
        ) : (
          <Alert className="max-w-md mx-auto">
            <Info className="h-4 w-4" />
            <AlertTitle>No Results Found</AlertTitle>
            <AlertDescription>
              Your search for "{searchTerm}" did not match any questions. Please try a different search term.
            </AlertDescription>
          </Alert>
        )}
      </main>
    </div>
  );
}
