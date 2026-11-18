import './globals.css';
import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';

const vazirmatn = Vazirmatn({
  subsets: ['arabic', 'latin'],
  variable: '--font-vazirmatn',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://neyshabur-repair.ir'),
  title: {
    default: 'تعمیرات تخصصی لوازم خانگی گلزاری در نیشابور',
    template: '%s | تعمیرات گلزاری نیشابور',
  },
  description:
    'تعمیرات تخصصی لوازم خانگی در نیشابور؛ تعمیر یخچال، لباسشویی، ظرفشویی، تلویزیون، کولر گازی، اجاق گاز و سایر لوازم خانگی با خدمات حرفه‌ای و تخصصی. تماس: 09350844349',
  keywords: [
    'تعمیر لوازم خانگی نیشابور',
    'تعمیر یخچال نیشابور',
    'تعمیر لباسشویی نیشابور',
    'تعمیرات گلزاری',
    'تعمیر ظرفشویی نیشابور',
    'تعمیر تلویزیون نیشابور',
    'تعمیر کولر گازی نیشابور',
  ],
  authors: [{ name: 'گلزاری' }],
  creator: 'گلزاری',
  openGraph: {
    type: 'website',
    locale: 'fa_IR',
    url: 'https://neyshabur-repair.ir',
    siteName: 'تعمیرات تخصصی لوازم خانگی گلزاری',
    title: 'تعمیرات تخصصی لوازم خانگی گلزاری در نیشابور',
    description:
      'تعمیرات تخصصی لوازم خانگی در نیشابور و مناطق تحت پوشش. تعمیر یخچال، لباسشویی، ظرفشویی، تلویزیون و سایر appliances.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تعمیرات تخصصی لوازم خانگی گلزاری در نیشابور',
    description: 'تعمیرات تخصصی لوازم خانگی در نیشابور و مناطق تحت پوشش',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta
          name="google-site-verification"
          content="HZhP16ZXMP1qQeVXUf_xJIkXcuoiUpikfcwn81kEf4c"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'تعمیرات تخصصی لوازم خانگی گلزاری',
              telephone: '+989350844349',
              url: 'https://neyshabur-repair.ir',
              areaServed: 'نیشابور، خراسان رضوی، ایران',
              description:
                'تعمیرات تخصصی لوازم خانگی در نیشابور و مناطق تحت پوشش',
              priceRange: '$$',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+989350844349',
                contactType: 'customer service',
                availableLanguage: ['Persian'],
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'تعمیرات تخصصی لوازم خانگی گلزاری',
              url: 'https://neyshabur-repair.ir',
              inLanguage: 'fa-IR',
            }),
          }}
        />
      </head>
      <body className={vazirmatn.variable}>
        <div className="font-sans">{children}</div>
      </body>
    </html>
  );
}
