import Link from 'next/link';
import { Phone, MapPin, Wrench, Mail } from 'lucide-react';
import { services } from '@/lib/services';
import { brands } from '@/lib/brands';
import { siteConfig, externalLinks } from '@/lib/site-config';
import { Logo } from '@/components/logo';

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo light />
            <p className="text-sm leading-relaxed text-white/80">
              {siteConfig.description}
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={siteConfig.phoneUrl}
                className="flex items-center gap-2 text-sm text-white/90 transition hover:text-turquoise-light"
              >
                <Phone className="h-4 w-4 text-turquoise" />
                <span dir="ltr">{siteConfig.phone}</span>
              </a>
              <div className="flex items-center gap-2 text-sm text-white/90">
                <MapPin className="h-4 w-4 text-turquoise" />
                {siteConfig.city}، {siteConfig.province}
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold text-turquoise-light">
              خدمات تعمیر
            </h3>
            <ul className="space-y-2">
              {services.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-white/80 transition hover:text-turquoise-light"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm font-semibold text-turquoise-light"
                >
                  همه خدمات ←
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold text-turquoise-light">
              برندهای تحت پوشش
            </h3>
            <div className="flex flex-wrap gap-2">
              {brands.slice(0, 10).map((b) => (
                <Link
                  key={b.slug}
                  href={`/brands/${b.slug}`}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 transition hover:bg-turquoise hover:text-white"
                >
                  {b.nameFa}
                </Link>
              ))}
            </div>
            <Link
              href="/brands"
              className="mt-3 inline-block text-sm font-semibold text-turquoise-light"
            >
              همه برندها ←
            </Link>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold text-turquoise-light">
              صفحات مهم
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-white/80 transition hover:text-turquoise-light">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/80 transition hover:text-turquoise-light">
                  تماس با ما
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-white/80 transition hover:text-turquoise-light">
                  سوالات متداول
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-white/80 transition hover:text-turquoise-light">
                  وبلاگ آموزشی
                </Link>
              </li>
              <li>
                <Link href="/areas" className="text-sm text-white/80 transition hover:text-turquoise-light">
                  مناطق تحت پوشش
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-white/80 transition hover:text-turquoise-light">
                  حریم خصوصی
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-white/80 transition hover:text-turquoise-light">
                  قوانین و شرایط
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6">
          <h3 className="mb-3 text-sm font-bold text-turquoise-light">
            منابع و وب‌سایت‌های مرتبط
          </h3>
          <div className="flex flex-col gap-2">
            {externalLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-sm text-white/70 transition hover:text-turquoise-light"
              >
                {link.anchor}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} {siteConfig.name}. تمامی حقوق محفوظ است.
          </p>
          <p className="mt-1 text-xs text-white/50">
            {siteConfig.city}، {siteConfig.province}، {siteConfig.country}
          </p>
        </div>
      </div>
    </footer>
  );
}
