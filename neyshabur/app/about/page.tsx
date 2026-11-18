import type { Metadata } from 'next';
import { Phone, MessageCircle, Award, ShieldCheck, Wrench, MapPin } from 'lucide-react';
import { SiteLayout } from '@/components/site-layout';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { ContactCTA } from '@/components/contact-cta';
import { siteConfig } from '@/lib/site-config';
import { services } from '@/lib/services';
import { brands } from '@/lib/brands';
import Image from 'next/image';
import { siteImages } from '@/lib/images';

export const metadata: Metadata = {
  title: 'درباره ما - تعمیرات تخصصی لوازم خانگی گلزاری',
  description:
    'درباره مرکز تعمیرات تخصصی لوازم خانگی گلزاری در نیشابور. خدمات تعمیر حرفه‌ای لوازم خانگی با تکنسین‌های متخصص.',
  alternates: { canonical: 'https://neyshabur-repair.ir/about' },
};

export default function AboutPage() {
  const stats = [
    { label: 'انواع لوازم خانگی', value: `${services.length}+` },
    { label: 'برندهای تحت پوشش', value: `${brands.length}` },
    { label: 'تکنسین متخصص', value: 'تیمی متخصص' },
    { label: 'محل خدمت', value: 'نیشابور' },
  ];

  return (
    <SiteLayout>
      <div className="bg-muted/30 py-8">
        <div className="mx-auto max-w-7xl px-4">
          <Breadcrumbs items={[{ name: 'خانه', href: '/' }, { name: 'درباره ما' }]} />
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-3xl font-bold text-navy">درباره تعمیرات گلزاری</h1>

        <div className="relative mb-8 h-64 overflow-hidden rounded-xl sm:h-80">
          <Image
            src={siteImages.technicianRepair}
            alt="تعمیرات تخصصی لوازم خانگی گلزاری"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="mb-8 space-y-4 leading-loose text-muted-foreground">
          <p>
            تعمیرات تخصصی لوازم خانگی گلزاری مرکزی است که خدمات تعمیر حرفه‌ای
            لوازم خانگی را در نیشابور و مناطق تحت پوشش ارائه می‌دهد. هدف ما
            ارائه خدمات تعمیر با کیفیت، سریع و قابل‌اعتماد به ساکنان نیشابور است.
          </p>
          <p>
            ما در گلزاری با تیمی از تکنسین‌های متخصص و باتجربه، تعمیر انواع لوازم
            خانگی شامل یخچال و فریزر، ماشین لباسشویی، ماشین ظرفشویی، تلویزیون،
            کولر گازی، اجاق گاز و فر، مایکروویو، جاروبرقی و لوازم برقی کوچک را
            انجام می‌دهیم. تعمیرات ما شامل برندهای معتبر داخلی و خارجی است.
          </p>
          <p>
            رویکرد ما در گلزاری مبتنی بر صداقت، شفافیت و کیفیت است. ما هزینه تعمیر
            را پیش از شروع کار به‌طور شفاف اعلام می‌کنیم، از قطعات اصلی و
            باکیفیت استفاده می‌کنیم و برای تعمیرات انجام‌شده ضمانت ارائه می‌دهیم.
          </p>
        </div>

        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border bg-card p-4 text-center">
              <div className="text-2xl font-bold text-turquoise">{s.value}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border p-6">
            <Award className="mb-3 h-8 w-8 text-turquoise" />
            <h2 className="mb-2 font-bold text-navy">تخصص و تجربه</h2>
            <p className="text-sm text-muted-foreground">
              تکنسین‌های ما دارای تخصص و تجربه در تعمیر انواع لوازم خانگی هستند
              و با تجهیزات تخصصی تعمیر را انجام می‌دهند.
            </p>
          </div>
          <div className="rounded-xl border p-6">
            <ShieldCheck className="mb-3 h-8 w-8 text-turquoise" />
            <h2 className="mb-2 font-bold text-navy">ضمانت تعمیر</h2>
            <p className="text-sm text-muted-foreground">
              ما برای تعمیرات انجام‌شده ضمانت ارائه می‌دهیم تا اطمینان شما از
              کیفیت کار تضمین شود.
            </p>
          </div>
          <div className="rounded-xl border p-6">
            <Wrench className="mb-3 h-8 w-8 text-turquoise" />
            <h2 className="mb-2 font-bold text-navy">قطعات اصلی</h2>
            <p className="text-sm text-muted-foreground">
              استفاده از قطعات اصلی و باکیفیت برای تضمین کیفیت تعمیر و افزایش عمر
              دستگاه.
            </p>
          </div>
          <div className="rounded-xl border p-6">
            <MapPin className="mb-3 h-8 w-8 text-turquoise" />
            <h2 className="mb-2 font-bold text-navy">خدمات در محل</h2>
            <p className="text-sm text-muted-foreground">
              تعمیر در محل مشتری در نیشابور و مناطق تحت پوشش بدون نیاز به
              جابجایی دستگاه.
            </p>
          </div>
        </div>

        <div className="mb-8 rounded-xl bg-muted/50 p-6">
          <h2 className="mb-3 font-bold text-navy">تعهد ما به مشتریان</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• ارائه خدمات تعمیر با کیفیت و حرفه‌ای</li>
            <li>• شفافیت کامل در هزینه‌ها</li>
            <li>• استفاده از قطعات اصلی و باکیفیت</li>
            <li>• ارائه ضمانت برای تعمیرات</li>
            <li>• خدمات در محل مشتری</li>
            <li>• احترام به وقت مشتری و خدمات به‌موقع</li>
            <li>• مشاوره صادقانه درباره تعمیر یا تعویض</li>
          </ul>
        </div>

        <div className="mb-8 rounded-lg border border-amber-200 bg-amber-50 p-6">
          <h2 className="mb-2 font-bold text-amber-800">توضیح مهم</h2>
          <p className="text-sm text-amber-700">
            ما نمایندگی رسمی هیچ برند سازنده لوازم خانگی نیستیم. خدمات ما
            تعمیرات تخصصی توسط تکنسین‌های متخصص است و هیچ ارتباط رسمی با
            شرکت‌های سازنده ندارد.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href={siteConfig.phoneUrl}
            className="flex items-center gap-2 rounded-lg bg-turquoise px-6 py-3 font-bold text-white transition hover:bg-turquoise-dark"
          >
            <Phone className="h-5 w-5" />
            <span dir="ltr">{siteConfig.phone}</span>
          </a>
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3 font-bold text-white transition hover:bg-green-600"
          >
            <MessageCircle className="h-5 w-5" />
            واتساپ
          </a>
        </div>

        <ContactCTA />
      </div>
    </SiteLayout>
  );
}
