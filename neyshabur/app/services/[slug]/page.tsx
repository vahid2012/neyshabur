import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Phone, ChevronLeft, CheckCircle } from 'lucide-react';
import { SiteLayout } from '@/components/site-layout';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { ContactCTA } from '@/components/contact-cta';
import { services } from '@/lib/services';
import { brands } from '@/lib/brands';
import { blogPosts } from '@/lib/blog-posts';
import { siteConfig } from '@/lib/site-config';
import { generateServiceContent } from '@/lib/content-generator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { serviceImageMap, serviceSecondaryImageMap } from '@/lib/images';
import { blogImageMap } from '@/lib/images';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `https://neyshabur-repair.ir/services/${service.slug}` },
    openGraph: {
      title: service.title,
      description: service.description,
      url: `https://neyshabur-repair.ir/services/${service.slug}`,
    },
  };
}

export default function ServicePage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const content = generateServiceContent(service);
  const relatedBrands = brands.slice(0, 6);
  const relatedPosts = blogPosts
    .filter((p) => p.category === service.shortTitle || p.category.includes(service.shortTitle))
    .slice(0, 3);
  const fallbackPosts = blogPosts.slice(0, 3);
  const postsToShow = relatedPosts.length > 0 ? relatedPosts : fallbackPosts;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      telephone: siteConfig.phoneIntl,
      areaServed: 'نیشابور',
    },
    serviceType: 'تعمیر لوازم خانگی',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const renderContent = () => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let currentList: string[] = [];

    const flushList = (key: number) => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`ul-${key}`} className="mb-4 list-disc space-y-1 pr-6 text-muted-foreground">
            {currentList.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        );
        currentList = [];
      }
    };

    lines.forEach((line, i) => {
      if (line.startsWith('# ')) {
        flushList(i);
        elements.push(<h1 key={i} className="sr-only">{line.slice(2)}</h1>);
      } else if (line.startsWith('## ')) {
        flushList(i);
        elements.push(<h2 key={i} className="mt-8 mb-3 text-xl font-bold text-navy">{line.slice(3)}</h2>);
      } else if (line.startsWith('### ')) {
        flushList(i);
        elements.push(<h3 key={i} className="mt-6 mb-2 text-lg font-semibold text-navy-light">{line.slice(4)}</h3>);
      } else if (line.startsWith('- ')) {
        const itemText = line
          .slice(2)
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-turquoise underline">$1</a>');
        currentList.push(itemText);
      } else if (line.match(/^\d+\.\s/)) {
        const itemText = line.replace(/^\d+\.\s/, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        currentList.push(itemText);
      } else if (line.trim()) {
        flushList(i);
        const paraText = line
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-turquoise underline">$1</a>');
        elements.push(
          <p key={i} className="mb-4 leading-loose text-muted-foreground" dangerouslySetInnerHTML={{ __html: paraText }} />
        );
      }
    });
    flushList(999);
    return elements;
  };

  return (
    <SiteLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-muted/30 py-8">
        <div className="mx-auto max-w-7xl px-4">
          <Breadcrumbs
            items={[
              { name: 'خانه', href: '/' },
              { name: 'خدمات تعمیر', href: '/services' },
              { name: service.shortTitle },
            ]}
          />
        </div>
      </div>

      <article className="mx-auto max-w-4xl px-4 py-8">
        <h1 className="mb-4 text-3xl font-bold text-navy">{service.title}</h1>
        <p className="mb-6 text-lg text-muted-foreground">{service.description}</p>

        {serviceImageMap[service.slug] && (
          <div className="relative mb-8 h-64 overflow-hidden rounded-xl sm:h-80">
            <Image
              src={serviceImageMap[service.slug]}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="mb-8 flex flex-wrap gap-4">
          <a
            href={siteConfig.phoneUrl}
            className="flex items-center gap-2 rounded-lg bg-turquoise px-5 py-2.5 font-semibold text-white transition hover:bg-turquoise-dark"
          >
            <Phone className="h-4 w-4" />
            تماس فوری گلزاری
          </a>
        </div>

        <div className="prose-persian max-w-none">{renderContent()}</div>

        {/* Features highlight */}
        <div className="my-8 grid gap-4 sm:grid-cols-2">
          {[
            'تشخیص دقیق و حرفه‌ای عیب',
            'استفاده از قطعات اصلی',
            'ضمانت برای تعمیرات انجام‌شده',
            'خدمات تعمیر در محل مشتری',
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-lg border p-4">
              <CheckCircle className="h-5 w-5 shrink-0 text-turquoise" />
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>

        {serviceSecondaryImageMap[service.slug] && (
          <div className="relative my-8 h-56 overflow-hidden rounded-xl sm:h-64">
            <Image
              src={serviceSecondaryImageMap[service.slug]}
              alt={`${service.title} - تعمیر تخصصی`}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* FAQs */}
        <section className="my-8">
          <h2 className="mb-4 text-2xl font-bold text-navy">سوالات متداول</h2>
          <Accordion type="single" collapsible>
            {service.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-right">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-right text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Related Brands */}
        <section className="my-8">
          <h2 className="mb-4 text-2xl font-bold text-navy">برندهای قابل تعمیر</h2>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
            {relatedBrands.map((b) => (
              <Link
                key={b.slug}
                href={`/brands/${b.slug}`}
                className="rounded-lg border p-3 text-center transition hover:border-turquoise hover:shadow-sm"
              >
                <div className="text-sm font-bold text-navy">{b.nameFa}</div>
                <div className="text-[10px] text-muted-foreground">{b.nameEn}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* Related Articles */}
        <section className="my-8">
          <h2 className="mb-4 text-2xl font-bold text-navy">مقالات مرتبط</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {postsToShow.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="group h-full overflow-hidden transition hover:shadow-md hover:border-turquoise">
                  {blogImageMap[post.slug] && (
                    <div className="relative h-28 overflow-hidden">
                      <Image
                        src={blogImageMap[post.slug]}
                        alt={post.title}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <span className="text-xs font-semibold text-turquoise">{post.category}</span>
                    <CardTitle className="text-sm group-hover:text-turquoise">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Other Services */}
        <section className="my-8">
          <h2 className="mb-4 text-2xl font-bold text-navy">سایر خدمات تعمیر</h2>
          <div className="flex flex-wrap gap-2">
            {services
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="rounded-full border px-4 py-2 text-sm font-medium transition hover:border-turquoise hover:text-turquoise"
                >
                  {s.shortTitle}
                </Link>
              ))}
          </div>
        </section>

        <ContactCTA
          title={`${service.shortTitle} شما نیاز به تعمیر دارد؟`}
          description="همین حالا تماس بگیرید تا تکنسین متخصص ما به شما کمک کند."
        />
      </article>
    </SiteLayout>
  );
}
