import Link from 'next/link';
import { Phone } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export function ContactCTA({
  title = 'برای تعمیر لوازم خانگی خود نیاز به کمک دارید؟',
  description = 'همین حالا تماس بگیرید تا تکنسین متخصص ما به شما کمک کند.',
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="gradient-hero my-12 rounded-2xl p-8 text-center text-white shadow-lg">
      <h2 className="mb-2 text-2xl font-bold">{title}</h2>
      <p className="mb-6 text-white/90">{description}</p>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href={siteConfig.phoneUrl}
          className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-navy shadow-md transition hover:scale-105"
        >
          <Phone className="h-5 w-5" />
          <span dir="ltr">{siteConfig.phone}</span>
        </a>
        <Link
          href="/contact"
          className="flex items-center gap-2 rounded-lg border-2 border-white px-6 py-3 font-bold text-white transition hover:bg-white hover:text-navy"
        >
          فرم تماس
        </Link>
      </div>
    </div>
  );
}
