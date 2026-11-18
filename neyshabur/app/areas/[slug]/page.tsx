import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Phone, MessageCircle, ChevronLeft, MapPin, CheckCircle } from 'lucide-react';
import { SiteLayout } from '@/components/site-layout';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { ContactCTA } from '@/components/contact-cta';
import { serviceAreas } from '@/lib/areas';
import { services } from '@/lib/services';
import { brands } from '@/lib/brands';
import { siteConfig } from '@/lib/site-config';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from 'next/image';
import { siteImages } from '@/lib/images';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return serviceAreas.filter((a) => a.verified).map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const area = serviceAreas.find((a) => a.slug === params.slug && a.verified);
  if (!area) return {};
  return {
    title: `تعمیر لوازم خانگی در ${area.name} | گلزاری`,
    description: `تعمیرات تخصصی لوازم خانگی در ${area.name} توسط مرکز گلزاری. تعمیر یخچال، لباسشویی، ظرفشویی، تلویزیون و سایر لوازم خانگی.`,
    alternates: { canonical: `https://neyshabur-repair.ir/areas/${area.slug}` },
  };
}

function generateAreaContent(areaName: string): string {
  return `تعمیرات تخصصی لوازم خانگی گلزاری ارائه‌دهنده خدمات تعمیر همه‌گونه لوازم خانگی در ${areaName} و مناطق اطراف آن است. تکنسین‌های متخصص ما با تجهیزات تخصصی به محل شما در ${areaName} اعزام می‌شوند و تعمیر لوازم خانگی شما را با کیفیت بالا و استفاده از قطعات اصلی انجام می‌دهند.

## خدمات تعمیر لوازم خانگی در ${areaName}

 مرکز تعمیرات گلزاری در ${areaName} خدمات تعمیر انواع لوازم خانگی شامل یخچال و فریزر، ماشین لباسشویی، ماشین ظرفشویی، تلویزیون، کولر گازی، اجاق گاز و فر، مایکروویو، جاروبرقی و لوازم برقی کوچک را ارائه می‌دهد. تعمیرات توسط تکنسین‌های باتجربه و متخصص انجام می‌شود و برای تعمیرات انجام‌شده ضمانت ارائه می‌گردد.

### تعمیر یخچال و فریزر در ${areaName}

یخچال و فریزر از مهم‌ترین لوازم خانگی هستند که خرابی آن‌ها می‌تواند باعث فساد مواد غذایی و inconvenience شدنی شود. تکنسین‌های ما در گلزاری تعمیر یخچال و فریزر برندهای مختلف را در ${areaName} انجام می‌دهند. مشکلات رایج شامل خنک‌نکردن، برفک‌زدن، صدای غیرعادی و خرابی کمپرسور است.

### تعمیر ماشین لباسشویی در ${areaName}

ماشین لباسشویی از لوازم خانگی ضروری است که خرابی آن inconvenience قابل‌توجهی ایجاد می‌کند. ما تعمیر ماشین لباسشویی در ${areaName} شامل رفع عیب تخلیه‌نکردن، لرزش شدید، آبریزی، روشن‌نشدن و خطاهای الکترونیکی را انجام می‌دهیم.

### تعمیر ماشین ظرفشویی در ${areaName}

ماشین ظرفشویی از لوازم خانگی پرکاربرد است که خرابی آن باعث افزایش کار دستی می‌شود. تعمیر ماشین ظرفشویی در ${areaName} شامل رفع عیب شستشوی ناقص، تخلیه‌نکردن، صدای غیرعادی و خطاهای الکترونیکی است.

### تعمیر تلویزیون در ${areaName}

تلویزیون از لوازم خانگی مهم است که خرابی آن باعث اختلال در سرگرمی خانواده می‌شود. تعمیر تلویزیون در ${areaName} شامل رفع عیب روشن‌نشدن، خطوط روی صفحه، بدون تصویر، بدون صدا و مشکلات بک‌لایت است.

### تعمیر کولر گازی در ${areaName}

کولر گازی در فصول گرم سال حیاتی است. تعمیر کولر گازی در ${areaName} شامل رفع عیب خنک‌نکردن، شارژ گاز، نشتی، صدای غیرعادی و خرابی کمپرسور است.

### تعمیر اجاق گاز و فر در ${areaName}

اجاق گاز و فر از لوازم خانگی ضروری آشپزخانه هستند. تعمیر اجاق گاز و فر در ${areaName} شامل رفع عیب روشن‌نشدن شعله، خاموش‌شدن ناگهانی و خرابی سوزن است.

## چرا تعمیرات گلزاری در ${areaName}؟

### تکنسین متخصص

تکنسین‌های ما در گلزاری دارای تخصص و تجربه در تعمیر انواع لوازم خانگی هستند. هر تکنسین با تجهیزات تخصصی به محل شما در ${areaName} اعزام می‌شود و تعمیر را با کیفیت انجام می‌دهد.

### تعمیر در محل

یکی از مزیت‌های خدمات ما، تعمیر در محل مشتری در ${areaName} است. نیازی به جابجایی دستگاه نیست و تعمیر در خانه شما انجام می‌شود که این امر زمان و هزینه را کاهش می‌دهد.

### قطعات اصلی و باکیفیت

ما در گلزاری از قطعات اصلی و باکیفیت استفاده می‌کنیم تا کیفیت تعمیر تضمین شود. استفاده از قطعات نامرغب نه تنها کیفیت تعمیر را کاهش می‌دهد بلکه می‌تواند به دستگاه آسیب بیشتری برساند.

### ضمانت تعمیر

ما برای تعمیرات انجام‌شده ضمانت ارائه می‌دهیم. این ضمانت نشانگر اعتماد ما به کیفیت تعمیر و قطعات استفاده‌شده است.

### هزینه شفاف

هزینه تعمیر پس از عیب‌یابی دقیق به‌طور شفاف اعلام می‌شود. مشتری پیش از شروع تعمیر از هزینه کامل مطلع می‌شود و هیچ هزینه پنهانی وجود ندارد.

### خدمات سریع

ما در گلزاری تلاش می‌کنیم در کوتاه‌ترین زمان ممکن به مشتریان در ${areaName} خدمات ارائه دهیم. در موارد اضطراری، خدمات Same-day نیز ممکن است.

## برندهای قابل تعمیر در ${areaName}

ما تعمیر لوازم خانگی برندهای مختلفی را در ${areaName} انجام می‌دهیم شامل سامسونگ، ال جی، بوش، دوو، اسنوا، پاکشوما، هایسنس، بکو، ویرپول، الکترولوکس، هایر، پاناسونیک، تی سی ال و جی پلاس. هر برند ویژگی‌های فنی خاص خود را دارد و تکنسین ما با آگاهی از این تفاوت‌ها، تعمیر را به‌درستی انجام می‌دهد.

## نکات نگهداری لوازم خانگی

برای افزایش عمر لوازم خانگی و جلوگیری از خرابی‌های زودرس، نکات زیر را رعایت کنید:

- استفاده صحیح از دستگاه طبق دستورالعمل سازنده
- تمیز کردن دوره‌ای فیلترها و قطعات قابل‌دسترس
- عدم استفاده بیش‌ازحد ظرفیت دستگاه
- سرویس دوره‌ای توسط متخصص
- قطع برق دستگاه در زمان عدم استفاده طولانی‌مدت
- عدم قرار دادن دستگاه در محیط با رطوبت زیاد

## نحوه رزرو تعمیر در ${areaName}

برای رزرو تعمیر لوازم خانگی در ${areaName}، کافی است با شماره ${siteConfig.phone} تماس بگیرید یا از طریق واتساپ پیام دهید. تکنسین ما در زمان هماهنگ‌شده به محل شما اعزام می‌شود و تعمیر را انجام می‌دهد.

## نتیجه‌گیری

تعمیرات تخصصی لوازم خانگی گلزاری در ${areaName} با کیفیت بالا، قطعات اصلی و ضمانت انجام می‌شود. اگر لوازم خانگی شما در ${areaName} دچار مشکل شده است، با ما تماس بگیرید: ${siteConfig.phone}`;
}

export default function AreaPage({ params }: Props) {
  const area = serviceAreas.find((a) => a.slug === params.slug && a.verified);
  if (!area) notFound();

  const content = generateAreaContent(area.name);

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `تعمیر لوازم خانگی در ${area.name}`,
    description: `تعمیرات تخصصی لوازم خانگی در ${area.name} توسط مرکز گلزاری`,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      telephone: siteConfig.phoneIntl,
      areaServed: area.name,
    },
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
        currentList.push(line.slice(2));
      } else if (line.trim()) {
        flushList(i);
        elements.push(
          <p key={i} className="mb-4 leading-loose text-muted-foreground">{line}</p>
        );
      }
    });
    flushList(999);
    return elements;
  };

  return (
    <SiteLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      <div className="bg-muted/30 py-8">
        <div className="mx-auto max-w-7xl px-4">
          <Breadcrumbs
            items={[
              { name: 'خانه', href: '/' },
              { name: 'مناطق تحت پوشش', href: '/areas' },
              { name: area.name },
            ]}
          />
        </div>
      </div>

      <article className="mx-auto max-w-4xl px-4 py-8">
        <div className="mb-4 flex items-center gap-3">
          <MapPin className="h-8 w-8 text-turquoise" />
          <h1 className="text-3xl font-bold text-navy">
            تعمیر لوازم خانگی در {area.name}
          </h1>
        </div>
        <p className="mb-6 text-lg text-muted-foreground">{area.description}</p>

        <div className="relative mb-8 h-64 overflow-hidden rounded-xl sm:h-80">
          <Image
            src={siteImages.neyshabur}
            alt={`تعمیر لوازم خانگی در ${area.name}`}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="mb-8 flex flex-wrap gap-4">
          <a
            href={siteConfig.phoneUrl}
            className="flex items-center gap-2 rounded-lg bg-turquoise px-5 py-2.5 font-semibold text-white transition hover:bg-turquoise-dark"
          >
            <Phone className="h-4 w-4" />
            <span dir="ltr">{siteConfig.phone}</span>
          </a>
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-green-500 px-5 py-2.5 font-semibold text-white transition hover:bg-green-600"
          >
            <MessageCircle className="h-4 w-4" />
            واتساپ
          </a>
        </div>

        <div className="prose-persian max-w-none">{renderContent()}</div>

        {/* Services Grid */}
        <section className="my-8">
          <h2 className="mb-4 text-2xl font-bold text-navy">خدمات تعمیر در {area.name}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {services.slice(0, 6).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="flex items-center justify-between rounded-lg border p-4 transition hover:border-turquoise hover:shadow-sm"
              >
                <span className="text-sm font-medium">{s.shortTitle}</span>
                <ChevronLeft className="h-4 w-4 text-turquoise" />
              </Link>
            ))}
          </div>
        </section>

        {/* Brands */}
        <section className="my-8">
          <h2 className="mb-4 text-2xl font-bold text-navy">برندهای قابل تعمیر در {area.name}</h2>
          <div className="flex flex-wrap gap-2">
            {brands.slice(0, 10).map((b) => (
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
          title={`در ${area.name} هستید و لوازم خانگی شما نیاز به تعمیر دارد؟`}
          description="همین حالا تماس بگیرید تا تکنسین متخصص ما به شما کمک کند."
        />
      </article>
    </SiteLayout>
  );
}
