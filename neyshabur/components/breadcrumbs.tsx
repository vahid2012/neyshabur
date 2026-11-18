import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export type Crumb = { name: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.href ? `https://neyshabur-repair.ir${item.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="مسیر ناوبری"
        className="flex items-center gap-1 text-sm text-muted-foreground"
      >
        {items.map((item, index) => (
          <span key={index} className="flex items-center gap-1">
            {item.href ? (
              <Link
                href={item.href}
                className="transition hover:text-turquoise"
              >
                {item.name}
              </Link>
            ) : (
              <span className="font-medium text-foreground">{item.name}</span>
            )}
            {index < items.length - 1 && (
              <ChevronLeft className="h-4 w-4" />
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
