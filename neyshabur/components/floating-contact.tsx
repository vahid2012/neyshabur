'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export function FloatingContact() {
  return (
    <>
      <a
        href={siteConfig.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-110 hover:bg-green-600"
        aria-label="واتساپ"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex h-4 w-4 rounded-full bg-green-500"></span>
        </span>
      </a>

      <a
        href={siteConfig.phoneUrl}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-turquoise text-white shadow-lg transition hover:scale-110 hover:bg-turquoise-dark"
        aria-label={`تماس: ${siteConfig.phone}`}
      >
        <Phone className="h-7 w-7" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-turquoise opacity-75"></span>
          <span className="relative inline-flex h-4 w-4 rounded-full bg-turquoise"></span>
        </span>
      </a>

      <div className="fixed bottom-0 left-0 right-0 z-30 flex items-center justify-between gap-2 border-t bg-white px-4 py-2 shadow-lg md:hidden">
        <a
          href={siteConfig.phoneUrl}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-turquoise py-2.5 text-white font-semibold"
        >
          <Phone className="h-4 w-4" />
          <span dir="ltr" className="text-sm">{siteConfig.phone}</span>
        </a>
        <a
          href={siteConfig.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-lg bg-green-500 px-4 py-2.5 text-white font-semibold"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="text-sm">واتساپ</span>
        </a>
      </div>
    </>
  );
}
