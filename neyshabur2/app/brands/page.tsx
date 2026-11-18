import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { SiteLayout } from '@/components/site-layout';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { ContactCTA } from '@/components/contact-cta';
import { brands } from '@/lib/brands';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { brandImageMap } from '@/lib/images';

export const metadata: Metadata = {
  title: 'تعمیرات تخصصی برندهای لوازم خانگی در نیشابور',
  description:
    'فهرست برندهای لوازم خانگی که توسط مرکز تعمیرات گلزاری در نیشابور تعمیر می‌شوند. تعمیرات سامسونگ، ال جی، بوش، دوو، اسنوا و سایر برندها.',
  alternates: { canonical: 'https://neyshabur-repair.ir/brands' },
};

export default function BrandsPage() {
  return (
    <SiteLayout>
      <div className="bg-muted/30 py-8">
        <div className="mx-auto max-w-7xl px-4">
          <Breadcrumbs items={[{ name: 'خانه', href: '/' }, { name: 'برندها' }]} />
          <h1 className="mt-4 text-3xl font-bold text-navy">
            تعمیرات تخصصی برندهای لوازم خانگی در نیشابور
          </h1>
          <p className="mt-2 max-w-3xl text-muted-foreground">
            مرکز تعمیرات تخصصی گلزاری در نیشابور، تعمیر لوازم خانگی برندهای معتبر
            داخلی و خارجی را توسط تکنسین‌های متخصص انجام می‌دهد. هر برند ویژگی‌های
            فنی خاص خود را دارد و تکنسین‌های ما با آگاهی از این تفاوت‌ها، تعمیر را
            به‌درستی انجام می‌دهند.
          </p>
          <p className="mt-2 text-sm text-amber-600">
            توجه: ما نمایندگی رسمی هیچ برند نیستیم. تعمیرات توسط تکنسین‌های متخصص
            انجام می‌شود.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((b) => (
            <Link key={b.slug} href={`/brands/${b.slug}`}>
              <Card className="group h-full overflow-hidden transition hover:shadow-lg hover:border-turquoise">
                {brandImageMap[b.slug] && (
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={brandImageMap[b.slug]}
                      alt={`تعمیر لوازم خانگی ${b.nameFa}`}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{b.nameFa}</CardTitle>
                    <span className="text-sm text-muted-foreground">{b.nameEn}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{b.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {b.appliances.slice(0, 4).map((a) => (
                      <span key={a} className="rounded-full bg-muted px-2.5 py-0.5 text-xs">
                        {a}
                      </span>
                    ))}
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-turquoise">
                    اطلاعات بیشتر <ChevronLeft className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <ContactCTA />
      </div>
    </SiteLayout>
  );
}
