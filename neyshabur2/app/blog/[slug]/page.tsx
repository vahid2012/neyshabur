import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, User, Phone, ChevronLeft } from 'lucide-react';
import { SiteLayout } from '@/components/site-layout';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { ContactCTA } from '@/components/contact-cta';
import { blogPosts } from '@/lib/blog-posts';
import { services } from '@/lib/services';
import { siteConfig } from '@/lib/site-config';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { blogImageMap } from '@/lib/images';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://neyshabur-repair.ir/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updated,
      authors: [post.author],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);
  const fallbackPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const postsToShow = relatedPosts.length > 0 ? relatedPosts : fallbackPosts;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.updated,
    author: { '@type': 'Person', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      telephone: siteConfig.phoneIntl,
    },
  };

  const renderContent = () => {
    const lines = post.content.split('\n');
    const elements: React.ReactNode[] = [];

    lines.forEach((line, i) => {
      if (line.startsWith('## ')) {
        elements.push(<h2 key={i} className="mt-8 mb-3 text-xl font-bold text-navy">{line.slice(3)}</h2>);
      } else if (line.startsWith('### ')) {
        elements.push(<h3 key={i} className="mt-6 mb-2 text-lg font-semibold text-navy-light">{line.slice(4)}</h3>);
      } else if (line.startsWith('- ')) {
        elements.push(
          <li key={i} className="mb-1 list-disc pr-6 text-muted-foreground">{line.slice(2)}</li>
        );
      } else if (line.match(/^\d+\.\s/)) {
        elements.push(
          <li key={i} className="mb-2 list-decimal pr-6 text-muted-foreground" dangerouslySetInnerHTML={{ __html: line.replace(/^\d+\.\s/, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
        );
      } else if (line.trim()) {
        elements.push(
          <p key={i} className="mb-4 leading-loose text-muted-foreground" dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
        );
      }
    });

    // Wrap consecutive list items in ul
    const result: React.ReactNode[] = [];
    let listBuffer: React.ReactNode[] = [];

    elements.forEach((el, i) => {
      if (el && typeof el === 'object' && 'props' in el && el.props.className?.includes('list-')) {
        listBuffer.push(el);
      } else {
        if (listBuffer.length > 0) {
          result.push(<ul key={`ul-${i}`} className="mb-4 space-y-1 pr-4">{listBuffer}</ul>);
          listBuffer = [];
        }
        result.push(el);
      }
    });
    if (listBuffer.length > 0) {
      result.push(<ul key="ul-end" className="mb-4 space-y-1 pr-4">{listBuffer}</ul>);
    }
    return result;
  };

  return (
    <SiteLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="bg-muted/30 py-8">
        <div className="mx-auto max-w-7xl px-4">
          <Breadcrumbs
            items={[
              { name: 'خانه', href: '/' },
              { name: 'وبلاگ', href: '/blog' },
              { name: post.title.slice(0, 30) + '...' },
            ]}
          />
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-4 py-8">
        <span className="text-sm font-semibold text-turquoise">{post.category}</span>
        <h1 className="mt-2 mb-4 text-3xl font-bold text-navy">{post.title}</h1>

        <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <User className="h-4 w-4" /> {post.author}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" /> {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" /> {post.readTime}
          </span>
        </div>

        {blogImageMap[post.slug] && (
          <div className="relative mb-6 h-56 overflow-hidden rounded-xl sm:h-72">
            <Image
              src={blogImageMap[post.slug]}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <p className="mb-6 border-r-4 border-turquoise pr-4 text-lg italic text-muted-foreground">
          {post.excerpt}
        </p>

        <div className="prose-persian max-w-none">{renderContent()}</div>

        {/* CTA */}
        <div className="my-8 rounded-xl bg-navy p-6 text-center text-white">
          <h3 className="mb-2 text-xl font-bold">نیاز به تعمیر حرفه‌ای دارید؟</h3>
          <p className="mb-4 text-white/90">با گلزاری در نیشابور تماس بگیرید.</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href={siteConfig.phoneUrl}
              className="flex items-center justify-center gap-2 rounded-lg bg-turquoise px-5 py-2.5 font-semibold text-white"
            >
              <Phone className="h-4 w-4" /> تماس فوری گلزاری
            </a>
          </div>
        </div>

        {/* Related Services */}
        <section className="my-8">
          <h2 className="mb-4 text-2xl font-bold text-navy">خدمات مرتبط</h2>
          <div className="flex flex-wrap gap-2">
            {services.slice(0, 6).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="rounded-full border px-4 py-2 text-sm font-medium transition hover:border-turquoise hover:text-turquoise"
              >
                {s.shortTitle}
              </Link>
            ))}
          </div>
        </section>

        {/* Related Posts */}
        <section className="my-8">
          <h2 className="mb-4 text-2xl font-bold text-navy">مقالات مرتبط</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {postsToShow.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`}>
                <Card className="group h-full overflow-hidden transition hover:shadow-md hover:border-turquoise">
                  {blogImageMap[p.slug] && (
                    <div className="relative h-28 overflow-hidden">
                      <Image
                        src={blogImageMap[p.slug]}
                        alt={p.title}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <span className="text-xs font-semibold text-turquoise">{p.category}</span>
                    <CardTitle className="text-sm group-hover:text-turquoise">{p.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground">{p.excerpt}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </SiteLayout>
  );
}
