import FaqPageClient from '@/components/faq-page-client';
import { faqData, faqCategories } from '@/lib/faq-data';
import { PageHeader } from '@/components/page-header';
import { PageFooter } from '@/components/page-footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <PageHeader />
      <FaqPageClient allFaqs={faqData} categories={faqCategories} />
      <PageFooter />
    </div>
  );
}
