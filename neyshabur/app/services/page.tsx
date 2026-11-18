import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronLeft,
  Wrench,
  Refrigerator,
  WashingMachine,
  Soup,
  Tv,
  AirVent,
  Flame,
  Microwave,
  Wind,
  Plug,
  Thermometer,
  Droplets,
} from 'lucide-react';
import { SiteLayout } from '@/components/site-layout';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { ContactCTA } from '@/components/contact-cta';
import { services } from '@/lib/services';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { serviceImageMap } from '@/lib/images';

export const metadata: Metadata = {
  title: 'خدمات تعمیر لوازم خانگی در نیشابور',
  description:
    'فهرست کامل خدمات تعمیر لوازم خانگی در نیشابور؛ تعمیر یخچال، لباسشویی، ظرفشویی، تلویزیون، کولر گازی، اجاق گاز و سایر لوازم خانگی.',
  alternates: { canonical: 'https://neyshabur-repair.ir/services' },
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Refrigerator,
  WashingMachine,
  Soup,
  Tv,
  AirVent,
  Flame,
  Microwave,
  Wind,
  Plug,
  Wrench,
  Thermometer,
  Droplets,
};

export default function ServicesPage() {
  return (
    <SiteLayout>
      <div className="bg-muted/30 py-8">
        <div className="mx-auto max-w-7xl px-4">
          <Breadcrumbs items={[{ name: 'خانه', href: '/' }, { name: 'خدمات تعمیر' }]} />
          <h1 className="mt-4 text-3xl font-bold text-navy">
            خدمات تعمیر لوازم خانگی در نیشابور
          </h1>
          <p className="mt-2 max-w-3xl text-muted-foreground">
            مرکز تخصصی تعمیرات گلزاری ارائه‌دهنده خدمات تعمیر انواع لوازم خانگی
            در نیشابور و مناطق تحت پوشش است. تعمیرات توسط تکنسین‌های متخصص و با
            استفاده از قطعات اصلی انجام می‌شود.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = iconMap[s.icon] || Wrench;
            const img = serviceImageMap[s.slug];
            return (
              <Link key={s.slug} href={`/services/${s.slug}`}>
                <Card className="group h-full overflow-hidden transition hover:shadow-lg hover:border-turquoise">
                  {img && (
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={img}
                        alt={s.title}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                      <div className="absolute bottom-2 right-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white/90">
                        <Icon className="h-5 w-5 text-navy" />
                      </div>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-lg">{s.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{s.description}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-turquoise">
                      اطلاعات بیشتر <ChevronLeft className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        <ContactCTA
          title="نوع دستگاه خود را پیدا نکردید؟"
          description="با ما تماس بگیرید تا بهترین راهنمایی را دریافت کنید."
        />
      </div>
    </SiteLayout>
  );
}
