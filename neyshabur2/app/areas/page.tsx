import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone } from 'lucide-react';
import { SiteLayout } from '@/components/site-layout';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { ContactCTA } from '@/components/contact-cta';
import { serviceAreas } from '@/lib/areas';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'مناطق تحت پوشش خدمات تعمیرات گلزاری در نیشابور',
  description:
    'فهرست مناطقی که خدمات تعمیر لوازم خانگی گلزاری در آن‌ها ارائه می‌شود. تعمیر در نیشابور و مناطق تحت پوشش.',
  alternates: { canonical: 'https://neyshabur-repair.ir/areas' },
};

export default function AreasPage() {
  return (
    <SiteLayout>
      <div className="bg-muted/30 py-8">
        <div className="mx-auto max-w-7xl px-4">
          <Breadcrumbs items={[{ name: 'خانه', href: '/' }, { name: 'مناطق تحت پوشش' }]} />
          <h1 className="mt-4 text-3xl font-bold text-navy">
            مناطق تحت پوشش خدمات تعمیرات گلزاری
          </h1>
          <p className="mt-2 max-w-3xl text-muted-foreground">
            مرکز تعمیرات تخصصی لوازم خانگی گلزاری در نیشابور و مناطق تحت پوشش
            خدمات ارائه می‌دهد. در ادامه فهرست مناطق تحت پوشش را مشاهده می‌کنید.
            برای مناطقی که در حال تأیید هستند، پیش از رزرو تماس بگیرید.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.map((area) => (
            <div
              key={area.slug}
              className="rounded-xl border p-6 transition hover:shadow-md"
            >
              <div className="mb-3 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-turquoise" />
                <h2 className="text-lg font-bold text-navy">{area.name}</h2>
                {area.verified ? (
                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-semibold text-green-700">
                    تأیید شده
                  </span>
                ) : (
                  <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-700">
                    در حال تأیید
                  </span>
                )}
              </div>
              <p className="mb-4 text-sm text-muted-foreground">{area.description}</p>
              {area.verified ? (
                <Link
                  href={`/areas/${area.slug}`}
                  className="text-sm font-semibold text-turquoise"
                >
                  اطلاعات بیشتر →
                </Link>
              ) : (
                <p className="text-xs text-amber-600">
                  برای تأیید پوشش این منطقه، تماس بگیرید.
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-6">
          <h2 className="mb-2 text-lg font-bold text-amber-800">
            مناطق در حال تأیید
          </h2>
          <p className="text-sm text-amber-700">
            برخی مناطق در حال تأیید هستند و تا تأیید مالک کسب‌وکار، صفحه اختصاصی
            آن‌ها منتشر نمی‌شود. این رویکرد برای جلوگیری از انتشار اطلاعات
            تأییدنشده و حفظ صداقت با مشتریان است. برای اطمینان از پوشش منطقه شما،
            با شماره <a href={siteConfig.phoneUrl} className="font-bold underline" dir="ltr">{siteConfig.phone}</a> تماس بگیرید.
          </p>
        </div>

        <ContactCTA />
      </div>
    </SiteLayout>
  );
}
