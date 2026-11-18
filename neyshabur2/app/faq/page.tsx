import type { Metadata } from 'next';
import { SiteLayout } from '@/components/site-layout';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { ContactCTA } from '@/components/contact-cta';
import { faqs } from '@/lib/site-config';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'سوالات متداول - تعمیرات گلزاری',
  description:
    'پاسخ به سوالات متداول درباره خدمات تعمیر لوازم خانگی گلزاری در نیشابور.',
  alternates: { canonical: 'https://neyshabur-repair.ir/faq' },
};

export default function FAQPage() {
  return (
    <SiteLayout>
      <div className="bg-muted/30 py-8">
        <div className="mx-auto max-w-7xl px-4">
          <Breadcrumbs items={[{ name: 'خانه', href: '/' }, { name: 'سوالات متداول' }]} />
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="mb-6 text-3xl font-bold text-navy">سوالات متداول</h1>
        <p className="mb-8 text-muted-foreground">
          پاسخ به سوالات رایج درباره خدمات تعمیر لوازم خانگی گلزاری در نیشابور.
        </p>

        <Accordion type="single" collapsible>
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-right">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-right text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
            }),
          }}
        />

        <ContactCTA />
      </div>
    </SiteLayout>
  );
}
