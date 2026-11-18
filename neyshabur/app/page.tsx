import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  MessageCircle,
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
  ShieldCheck,
  Clock,
  Award,
  MapPin,
  ChevronLeft,
} from 'lucide-react';
import { SiteLayout } from '@/components/site-layout';
import { ContactCTA } from '@/components/contact-cta';
import { services } from '@/lib/services';
import { brands } from '@/lib/brands';
import { serviceAreas, verifiedAreas } from '@/lib/areas';
import { blogPosts } from '@/lib/blog-posts';
import { siteConfig, faqs } from '@/lib/site-config';
import { serviceImageMap, blogImageMap, siteImages } from '@/lib/images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'تعمیرات تخصصی لوازم خانگی گلزاری در نیشابور',
  description:
    'تعمیرات تخصصی لوازم خانگی در نیشابور؛ تعمیر یخچال، لباسشویی، ظرفشویی، تلویزیون، کولر گازی، اجاق گاز و سایر لوازم خانگی توسط تکنسین‌های متخصص. تماس: 09350844349',
  alternates: { canonical: 'https://neyshabur-repair.ir' },
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

const features = [
  {
    icon: Award,
    title: 'تکنسین متخصص',
    desc: 'تعمیر توسط تکنسین‌های باتجربه و متخصص',
  },
  {
    icon: ShieldCheck,
    title: 'ضمانت تعمیر',
    desc: 'ارائه ضمانت برای تعمیرات انجام‌شده',
  },
  {
    icon: Clock,
    title: 'خدمات سریع',
    desc: 'تعمیر در محل در کوتاه‌ترین زمان',
  },
  {
    icon: Wrench,
    title: 'قطعات اصلی',
    desc: 'استفاده از قطعات اصلی و باکیفیت',
  },
];

export default function HomePage() {
  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="gradient-hero relative overflow-hidden py-20 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
                <MapPin className="h-4 w-4" />
                خدماتی مطمئن در نیشابور و مناطق تحت پوشش
              </div>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                تعمیرات تخصصی لوازم خانگی گلزاری در نیشابور
              </h1>
              <p className="text-lg leading-relaxed text-white/90">
                مرکز تخصصی تعمیر یخچال، لباسشویی، ظرفشویی، تلویزیون، کولر گازی،
                اجاق گاز و سایر لوازم خانگی در نیشابور. خدمات حرفه‌ای با قطعات
                اصلی و ضمانت تعمیر.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={siteConfig.phoneUrl}
                  className="flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-navy shadow-lg transition hover:scale-105"
                >
                  <Phone className="h-5 w-5" />
                  <span dir="ltr">{siteConfig.phone}</span>
                </a>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-green-500 px-6 py-3 font-bold text-white shadow-lg transition hover:scale-105"
                >
                  <MessageCircle className="h-5 w-5" />
                  واتساپ
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={siteImages.heroRepair}
                  alt="تعمیرکار متخصص لوازم خانگی در حال کار"
                  width={600}
                  height={500}
                  priority
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                <div className="absolute bottom-4 right-4 left-4 rounded-xl bg-white/95 p-4 backdrop-blur">
                  <p className="text-sm font-bold text-navy">تعمیر حرفه‌ای در محل شما</p>
                  <p className="text-xs text-muted-foreground">نیشابور و مناطق تحت پوشش</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <Card key={f.title} className="border-turquoise/20 text-center">
              <CardContent className="pt-6">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-turquoise/10">
                  <f.icon className="h-6 w-6 text-turquoise" />
                </div>
                <h3 className="mb-1 font-bold text-navy">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-navy">خدمات تعمیر لوازم خانگی</h2>
          <p className="mt-2 text-muted-foreground">
            تعمیرات تخصصی انواع لوازم خانگی در نیشابور
          </p>
        </div>
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
                        width={400}
                        height={200}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
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
      </section>

      {/* Brands Section */}
      <section className="bg-muted/50 py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-navy">برندهای تحت پوشش</h2>
            <p className="mt-2 text-muted-foreground">
              تعمیرات تخصصی لوازم خانگی برندهای معتبر در نیشابور
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
            {brands.map((b) => (
              <Link
                key={b.slug}
                href={`/brands/${b.slug}`}
                className="group rounded-xl border bg-white p-4 text-center transition hover:border-turquoise hover:shadow-md"
              >
                <div className="text-sm font-bold text-navy transition group-hover:text-turquoise">
                  {b.nameFa}
                </div>
                <div className="text-xs text-muted-foreground">{b.nameEn}</div>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/brands"
              className="inline-flex items-center gap-1 text-sm font-semibold text-turquoise"
            >
              همه برندها <ChevronLeft className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-navy">مناطق تحت پوشش</h2>
          <p className="mt-2 text-muted-foreground">
            مناطقی که خدمات تعمیر گلزاری در آن‌ها ارائه می‌شود
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {serviceAreas.map((area) => (
            <Link
              key={area.slug}
              href={area.verified ? `/areas/${area.slug}` : '/areas'}
              className="group rounded-xl border p-4 transition hover:border-turquoise hover:shadow-md"
            >
              <div className="mb-2 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-turquoise" />
                <span className="font-bold text-navy">{area.name}</span>
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
              <p className="text-xs text-muted-foreground">{area.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Blog Preview */}
      <section className="bg-muted/50 py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold text-navy">وبلاگ آموزشی</h2>
              <p className="mt-2 text-muted-foreground">
                راهنماهای کاربردی برای نگهداری و عیب‌یابی لوازم خانگی
              </p>
            </div>
            <Link
              href="/blog"
              className="hidden items-center gap-1 text-sm font-semibold text-turquoise sm:inline-flex"
            >
              همه مقالات <ChevronLeft className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 6).map((post) => {
              const blogImg = blogImageMap[post.slug];
              return (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="group h-full overflow-hidden transition hover:shadow-lg hover:border-turquoise">
                  {blogImg && (
                    <div className="relative h-36 overflow-hidden">
                      <Image
                        src={blogImg}
                        alt={post.title}
                        width={400}
                        height={200}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                    </div>
                  )}
                  <CardHeader>
                    <span className="text-xs font-semibold text-turquoise">
                      {post.category}
                    </span>
                    <CardTitle className="text-base group-hover:text-turquoise">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                    <span className="mt-3 inline-block text-xs text-muted-foreground">
                      {post.readTime} مطالعه
                    </span>
                  </CardContent>
                </Card>
              </Link>
              );
            })}
          </div>
          <div className="mt-6 text-center sm:hidden">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm font-semibold text-turquoise"
            >
              همه مقالات <ChevronLeft className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto max-w-3xl px-4 py-12">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-navy">سوالات متداول</h2>
          <p className="mt-2 text-muted-foreground">
            پاسخ به سوالات رایج درباره خدمات تعمیر لوازم خانگی
          </p>
        </div>
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
      </section>

      <div className="mx-auto max-w-7xl px-4">
        <ContactCTA />
      </div>
    </SiteLayout>
  );
}
