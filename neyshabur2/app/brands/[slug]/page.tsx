import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Phone, ChevronLeft, CheckCircle, Info } from 'lucide-react';
import { SiteLayout } from '@/components/site-layout';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { ContactCTA } from '@/components/contact-cta';
import { brands, Brand } from '@/lib/brands';
import { services } from '@/lib/services';
import { siteConfig } from '@/lib/site-config';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { brandImageMap } from '@/lib/images';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const brand = brands.find((b) => b.slug === params.slug);
  if (!brand) return {};
  return {
    title: `تعمیرات تخصصی لوازم خانگی ${brand.nameFa} در نیشابور`,
    description: brand.description,
    alternates: { canonical: `https://neyshabur-repair.ir/brands/${brand.slug}` },
    openGraph: {
      title: `تعمیرات تخصصی لوازم خانگی ${brand.nameFa} در نیشابور`,
      description: brand.description,
    },
  };
}

function generateBrandContent(brand: Brand): string {
  return `مرکز تعمیرات تخصصی گلزاری در نیشابور ارائه‌دهنده خدمات تعمیر لوازم خانگی برند ${brand.nameFa} (${brand.nameEn}) است. تکنسین‌های متخصص ما با دانش فنی و تجربه عملی، تعمیر انواع لوازم خانگی ${brand.nameFa} را با کیفیت بالا و استفاده از قطعات اصلی انجام می‌دهند.

## معرفی خدمات تعمیر ${brand.nameFa} در نیشابور

برند ${brand.nameFa} یکی از برندهای شناخته‌شده در بازار لوازم خانگی ایران است که محصولات متنوعی ارائه می‌دهد. مرکز تعمیرات گلزاری در نیشابور، تعمیر انواع لوازم خانگی ${brand.nameFa} را شامل ${brand.appliances.join('، ')} انجام می‌دهد.

### تعمیرات تخصصی لوازم خانگی ${brand.nameFa}

تعمیر لوازم خانگی ${brand.nameFa} نیازمند شناخت ویژگی‌های فنی محصولات این برند است. هر برند دارای طراحی، قطعات و سیستم‌های کنترلی خاص خود است. تکنسین‌های ما در گلزاری با آگاهی کامل از مشخصات فنی محصولات ${brand.nameFa}، قادر به عیب‌یابی و تعمیر دقیق دستگاه‌های این برند هستند.

### قطعات و لوازم یدکی ${brand.nameFa}

یکی از چالش‌های تعمیر لوازم خانگی، دسترسی به قطعات اصلی و باکیفیت است. ما در گلزاری تلاش می‌کنیم از قطعات اصلی ${brand.nameFa} استفاده کنیم تا کیفیت تعمیر تضمین شود. در مواردی که قطعه اصلی در دسترس نباشد، از قطعات باکیفیت جایگزین استفاده می‌کنیم که با مشخصات فنی دستگاه سازگار هستند.

### فرآیند تعمیر لوازم خانگی ${brand.nameFa}

فرآیند تعمیر در گلزاری شامل مراحل زیر است:

1. تماس مشتری و دریافت اطلاعات اولیه درباره مشکل دستگاه
2. اعزام تکنسین به محل مشتری در نیشابور
3. عیب‌یابی دقیق دستگاه توسط تکنسین متخصص
4. اعلام هزینه تعمیر به مشتری
5. انجام تعمیر پس از تأیید مشتری
6. تست عملکرد دستگاه پس از تعمیر
7. ارائه ضمانت برای تعمیر انجام‌شده

### عیب‌یابی تخصصی ${brand.nameFa}

عیب‌یابی لوازم خانگی ${brand.nameFa} نیازمند تجهیزات تخصصی و دانش فنی است. تکنسین‌های ما با استفاده از مولتی‌متر دیجیتال، تجهیزات تست گاز، و ابزارهای تخصصی دیگر، علت خرابی را به‌دقت تشخیص می‌دهند. اطلاعات دقیق عیب‌یابی به مشتری ارائه می‌شود تا تصمیم آگاهانه درباره تعمیر بگیرد.

### تعمیر در محل

یکی از مزیت‌های خدمات تعمیر گلزاری، ارائه سرویس در محل مشتری در نیشابور است. این بدان معناست که نیازی به جابجایی دستگاه ${brand.nameFa} به مرکز تعمیرات نیست و تعمیر در خانه شما انجام می‌شود. این ویژگی نه تنها زمان و هزینه جابجایی را کاهش می‌دهد بلکه از آسیب احتمالی در هنگام جابجایی نیز جلوگیری می‌کند.

### ضمانت تعمیر

ما در گلزاری برای تعمیرات انجام‌شده ضمانت ارائه می‌دهیم. این ضمانت نشانگر اعتماد ما به کیفیت تعمیر و قطعات استفاده‌شده است. در صورت بروز مشکل در دوره ضمانت، تعمیر مجدد بدون هزینه انجام می‌شود.

### هزینه تعمیر ${brand.nameFa}

هزینه تعمیر لوازم خانگی ${brand.nameFa} بسته به نوع خرابی، قطعه مورد‌نیاز و مدل دستگاه متفاوت است. ما هزینه تعمیر را پس از عیب‌یابی دقیق به‌طور شفاف اعلام می‌کنیم. مشتری پیش از شروع تعمیر از هزینه کامل مطلع می‌شود و هیچ هزینه پنهانی وجود ندارد.

### نکات نگهداری لوازم خانگی ${brand.nameFa}

برای افزایش عمر لوازم خانگی ${brand.nameFa} و جلوگیری از خرابی‌های زودرس، نکات زیر را رعایت کنید:

- استفاده صحیح از دستگاه طبق دستورالعمل سازنده
- عدم استفاده بیش‌ازحد ظرفیت دستگاه
- تمیز کردن دوره‌ای فیلترها و قطعات قابل‌دسترس
- عدم قرار دادن دستگاه در محیط با رطوبت زیاد
- سرویس دوره‌ای توسط متخصص
- قطع برق دستگاه در زمان عدم استفاده طولانی‌مدت

### انتخاب بین تعمیر و تعویض

هنگام خرابی لوازم خانگی ${brand.nameFa}، تصمیم بین تعمیر و تعویض مهم است. عوامل مؤثر شامل سن دستگاه، هزینه تعمیر، شدت خرابی و دسترسی قطعات است. تکنسین ما پس از عیب‌یابی، مشاوره صادقانه درباره اقتصادی‌بودن تعمیر یا تعویض ارائه می‌دهد.

### سرویس دوره‌ای ${brand.nameFa}

سرویس دوره‌ای لوازم خانگی ${brand.nameFa} می‌تواند از خرابی‌های ناگهانی جلوگیری کند و عمر دستگاه را افزایش دهد. سرویس دوره‌ای شامل بررسی عملکرد دستگاه، تمیز کردن قطعات داخلی، بررسی اتصالات و تنظیم پارامترها است. توصیه می‌شود سالی یک‌بار دستگاه‌های خانگی خود را سرویس کنید.

### تعمیرات اضطراری

در مواردی که دستگاه ${brand.nameFa} شما به‌طور ناگهانی خراب می‌شود و استفاده از آن ضروری است، خدمات تعمیر اضطراری گلزاری در نیشابور در دسترس است. با ما تماس بگیرید تا در کوتاه‌ترین زمان ممکن به شما خدمات ارائه دهیم.

### چرا گلزاری برای تعمیر ${brand.nameFa}؟

- تکنسین‌های متخصص و باتجربه
- استفاده از قطعات اصلی و باکیفیت
- ارائه ضمانت برای تعمیرات
- خدمات در محل مشتری
- هزینه شفاف و بدون هزینه پنهانی
- خدمات سریع و به‌موقع
- مشاوره صادقانه درباره تعمیر یا تعویض

### نتیجه‌گیری

تعمیرات تخصصی لوازم خانگی ${brand.nameFa} در نیشابور توسط مرکز گلزاری با کیفیت بالا، قطعات اصلی و ضمانت انجام می‌شود. اگر لوازم خانگی ${brand.nameFa} شما دچار مشکل شده است، با ما تماس بگیرید: ${siteConfig.phone}`;
}

export default function BrandPage({ params }: Props) {
  const brand = brands.find((b) => b.slug === params.slug);
  if (!brand) notFound();

  const content = generateBrandContent(brand);
  const brandServices = services.filter((s) =>
    brand.appliances.some((a) => s.shortTitle.includes(a) || a.includes(s.shortTitle))
  );
  const fallbackServices = services.slice(0, 5);
  const servicesToShow = brandServices.length > 0 ? brandServices : fallbackServices;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `تعمیرات تخصصی لوازم خانگی ${brand.nameFa} در نیشابور`,
    description: brand.description,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      telephone: siteConfig.phoneIntl,
      areaServed: 'نیشابور',
    },
    brand: { '@type': 'Brand', name: brand.nameEn },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: brand.faqs.map((f) => ({
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
      if (line.startsWith('## ')) {
        flushList(i);
        elements.push(<h2 key={i} className="mt-8 mb-3 text-xl font-bold text-navy">{line.slice(3)}</h2>);
      } else if (line.startsWith('### ')) {
        flushList(i);
        elements.push(<h3 key={i} className="mt-6 mb-2 text-lg font-semibold text-navy">{line.slice(4)}</h3>);
      } else if (line.startsWith('- ')) {
        const itemText = line.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        currentList.push(itemText);
      } else if (line.match(/^\d+\.\s/)) {
        const itemText = line.replace(/^\d+\.\s/, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        currentList.push(itemText);
      } else if (line.trim()) {
        flushList(i);
        const paraText = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
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
              { name: 'برندها', href: '/brands' },
              { name: brand.nameFa },
            ]}
          />
        </div>
      </div>

      <article className="mx-auto max-w-4xl px-4 py-8">
        <h1 className="mb-4 text-3xl font-bold text-navy">
          تعمیرات تخصصی لوازم خانگی {brand.nameFa} در نیشابور
        </h1>
        <p className="mb-6 text-lg text-muted-foreground">{brand.description}</p>

        {brandImageMap[brand.slug] && (
          <div className="relative mb-8 h-64 overflow-hidden rounded-xl sm:h-80">
            <Image
              src={brandImageMap[brand.slug]}
              alt={`تعمیر لوازم خانگی ${brand.nameFa}`}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="mb-6 flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4">
          <Info className="h-5 w-5 shrink-0 text-amber-600" />
          <p className="text-sm text-amber-800">
            توجه: ما نمایندگی رسمی برند {brand.nameFa} نیستیم. این خدمات تعمیرات
            تخصصی توسط تکنسین‌های متخصص گلزاری انجام می‌شود و هیچ ارتباطی با
            شرکت {brand.nameEn} ندارد.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-4">
          <a
            href={siteConfig.phoneUrl}
            className="flex items-center gap-2 rounded-lg bg-turquoise px-5 py-2.5 font-semibold text-white transition hover:bg-turquoise-dark"
          >
            <Phone className="h-4 w-4" />
            تماس فوری گلزاری
          </a>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {brand.appliances.map((a) => (
            <span key={a} className="rounded-full bg-turquoise/10 px-4 py-1.5 text-sm font-medium text-turquoise">
              {a}
            </span>
          ))}
        </div>

        <div className="prose-persian max-w-none">{renderContent()}</div>

        {/* FAQs */}
        <section className="my-8">
          <h2 className="mb-4 text-2xl font-bold text-navy">سوالات متداول</h2>
          <Accordion type="single" collapsible>
            {brand.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-right">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-right text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Related Services */}
        <section className="my-8">
          <h2 className="mb-4 text-2xl font-bold text-navy">خدمات تعمیر مرتبط</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {servicesToShow.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="flex items-center justify-between rounded-lg border p-4 transition hover:border-turquoise hover:shadow-sm"
              >
                <span className="text-sm font-medium">{s.title}</span>
                <ChevronLeft className="h-4 w-4 text-turquoise" />
              </Link>
            ))}
          </div>
        </section>

        {/* Other Brands */}
        <section className="my-8">
          <h2 className="mb-4 text-2xl font-bold text-navy">برندهای دیگر</h2>
          <div className="flex flex-wrap gap-2">
            {brands
              .filter((b) => b.slug !== brand.slug)
              .map((b) => (
                <Link
                  key={b.slug}
                  href={`/brands/${b.slug}`}
                  className="rounded-full border px-4 py-2 text-sm font-medium transition hover:border-turquoise hover:text-turquoise"
                >
                  {b.nameFa}
                </Link>
              ))}
          </div>
        </section>

        <ContactCTA
          title={`لوازم خانگی ${brand.nameFa} شما نیاز به تعمیر دارد؟`}
          description="همین حالا تماس بگیرید تا تکنسین متخصص ما به شما کمک کند."
        />
      </article>
    </SiteLayout>
  );
}
