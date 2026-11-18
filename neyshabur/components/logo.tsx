import Link from 'next/link';
import { Phone, Wrench } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2 shrink-0">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-lg ${
          light ? 'bg-white text-navy' : 'bg-navy text-white'
        }`}
      >
        <Wrench className="h-5 w-5" />
      </div>
      <div className="flex flex-col">
        <span
          className={`text-lg font-bold leading-tight ${
            light ? 'text-white' : 'text-navy'
          }`}
        >
          گلزاری
        </span>
        <span
          className={`text-[10px] leading-tight ${
            light ? 'text-turquoise-light' : 'text-turquoise'
          }`}
        >
          تعمیرات تخصصی لوازم خانگی
        </span>
      </div>
    </Link>
  );
}

export function HeaderPhone() {
  return (
    <div className="flex items-center gap-3">
      <a
        href={siteConfig.phoneUrl}
        className="flex items-center gap-2 rounded-lg bg-turquoise px-4 py-2 text-white font-semibold transition hover:bg-turquoise-dark"
        aria-label={`تماس: ${siteConfig.phone}`}
      >
        <Phone className="h-4 w-4" />
        <span className="text-sm">
          تماس فوری گلزاری
        </span>
      </a>
    </div>
  );
}
