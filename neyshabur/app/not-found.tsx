import Link from 'next/link';
import { Search, Phone } from 'lucide-react';
import { SiteLayout } from '@/components/site-layout';
import { services } from '@/lib/services';
import { brands } from '@/lib/brands';
import { blogPosts } from '@/lib/blog-posts';
import { siteConfig } from '@/lib/site-config';

export default function NotFound() {
  const allLinks = [
    ...services.map((s) => ({ name: s.title, href: `/services/${s.slug}` })),
    ...brands.map((b) => ({ name: `تعمیرات ${b.nameFa}`, href: `/brands/${b.slug}` })),
    ...blogPosts.slice(0, 5).map((p) => ({ name: p.title, href: `/blog/${p.slug}` })),
  ];

  return (
    <SiteLayout>
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
            <Search className="h-10 w-10 text-muted-foreground" />
          </div>
        </div>
        <h1 className="mb-4 text-4xl font-bold text-navy">۴۰۴</h1>
        <p className="mb-2 text-xl font-semibold">صفحه مورد نظر یافت نشد</p>
        <p className="mb-8 text-muted-foreground">
          متأسفانه صفحه‌ای که به دنبال آن بودید پیدا نشد. ممکن است آدرس را اشتباه
          وارد کرده باشید یا صفحه حذف شده باشد.
        </p>

        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="rounded-lg bg-turquoise px-6 py-3 font-semibold text-white transition hover:bg-turquoise-dark"
          >
            بازگشت به صفحه اصلی
          </Link>
          <a
            href={siteConfig.phoneUrl}
            className="flex items-center justify-center gap-2 rounded-lg border px-6 py-3 font-semibold transition hover:bg-muted"
          >
            <Phone className="h-4 w-4" />
            <span dir="ltr">{siteConfig.phone}</span>
          </a>
        </div>

        <div className="rounded-xl border p-6 text-right">
          <h2 className="mb-4 font-bold text-navy">صفحات محبوب</h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {allLinks.slice(0, 10).map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-turquoise"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
