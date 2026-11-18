'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ChevronDown, Wrench } from 'lucide-react';
import { services } from '@/lib/services';
import { brands } from '@/lib/brands';
import { siteConfig } from '@/lib/site-config';
import { Logo, HeaderPhone } from '@/components/logo';
import { Button } from '@/components/ui/button';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'خانه' },
    { href: '/services', label: 'خدمات تعمیر', hasDropdown: true, type: 'services' as const },
    { href: '/brands', label: 'برندها', hasDropdown: true, type: 'brands' as const },
    { href: '/areas', label: 'مناطق تحت پوشش' },
    { href: '/blog', label: 'وبلاگ' },
    { href: '/about', label: 'درباره ما' },
    { href: '/contact', label: 'تماس با ما' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-md'
            : 'bg-white/95 backdrop-blur shadow-sm'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 items-center justify-between gap-4">
            <Logo />

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => {
                    if (link.type === 'services') setServicesOpen(true);
                    if (link.type === 'brands') setBrandsOpen(true);
                  }}
                  onMouseLeave={() => {
                    if (link.type === 'services') setServicesOpen(false);
                    if (link.type === 'brands') setBrandsOpen(false);
                  }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground transition hover:text-turquoise"
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <ChevronDown className="h-3 w-3" />
                    )}
                  </Link>

                  {link.type === 'services' && servicesOpen && (
                    <div className="absolute top-full right-0 z-50 w-72 rounded-lg border bg-white p-2 shadow-xl">
                      {services.slice(0, 8).map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="block rounded-md px-3 py-2 text-sm text-foreground transition hover:bg-muted hover:text-turquoise"
                        >
                          {s.title}
                        </Link>
                      ))}
                      <Link
                        href="/services"
                        className="block rounded-md px-3 py-2 text-sm font-semibold text-turquoise transition hover:bg-muted"
                      >
                        همه خدمات تعمیر ←
                      </Link>
                    </div>
                  )}

                  {link.type === 'brands' && brandsOpen && (
                    <div className="absolute top-full right-0 z-50 w-72 rounded-lg border bg-white p-2 shadow-xl">
                      {brands.slice(0, 8).map((b) => (
                        <Link
                          key={b.slug}
                          href={`/brands/${b.slug}`}
                          className="block rounded-md px-3 py-2 text-sm text-foreground transition hover:bg-muted hover:text-turquoise"
                        >
                          تعمیرات {b.nameFa} در نیشابور
                        </Link>
                      ))}
                      <Link
                        href="/brands"
                        className="block rounded-md px-3 py-2 text-sm font-semibold text-turquoise transition hover:bg-muted"
                      >
                        همه برندها ←
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden lg:block">
              <HeaderPhone />
            </div>

            <button
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-border"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="منو"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-0 right-0 h-full w-80 max-w-[85vw] overflow-y-auto bg-white p-4 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <Logo />
              <button
                onClick={() => setMobileOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-lg border"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition hover:bg-muted"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-4 border-t pt-4">
              <p className="mb-2 text-xs font-semibold text-muted-foreground">
                خدمات تعمیر
              </p>
              <div className="flex flex-col gap-1">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="rounded-lg px-3 py-2 text-sm text-foreground transition hover:bg-muted"
                  >
                    {s.shortTitle}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-4 border-t pt-4">
              <p className="mb-2 text-xs font-semibold text-muted-foreground">
                برندها
              </p>
              <div className="flex flex-wrap gap-2">
                {brands.map((b) => (
                  <Link
                    key={b.slug}
                    href={`/brands/${b.slug}`}
                    className="rounded-full bg-muted px-3 py-1 text-xs font-medium transition hover:bg-turquoise hover:text-white"
                  >
                    {b.nameFa}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-6 border-t pt-4">
              <a
                href={siteConfig.phoneUrl}
                className="flex items-center justify-center gap-2 rounded-lg bg-turquoise px-4 py-3 text-white font-semibold"
              >
                <Phone className="h-4 w-4" />
                <span dir="ltr">{siteConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
