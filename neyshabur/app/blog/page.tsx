import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ChevronLeft } from 'lucide-react';
import { SiteLayout } from '@/components/site-layout';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { ContactCTA } from '@/components/contact-cta';
import { blogPosts } from '@/lib/blog-posts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { blogImageMap } from '@/lib/images';

export const metadata: Metadata = {
  title: 'وبلاگ آموزشی تعمیر لوازم خانگی',
  description:
    'مقالات و راهنماهای کاربردی برای نگهداری، عیب‌یابی و تعمیر لوازم خانگی. آموزش‌های تخصصی توسط گلزاری.',
  alternates: { canonical: 'https://neyshabur-repair.ir/blog' },
};

export default function BlogPage() {
  const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

  return (
    <SiteLayout>
      <div className="bg-muted/30 py-8">
        <div className="mx-auto max-w-7xl px-4">
          <Breadcrumbs items={[{ name: 'خانه', href: '/' }, { name: 'وبلاگ' }]} />
          <h1 className="mt-4 text-3xl font-bold text-navy">وبلاگ آموزشی</h1>
          <p className="mt-2 max-w-3xl text-muted-foreground">
            راهنماهای کاربردی برای نگهداری، عیب‌یابی و تعمیر لوازم خانگی. مقالات
            تخصصی برای کمک به شما در مراقبت از لوازم خانگی خود.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-8 flex flex-wrap gap-2">
          <span className="rounded-full bg-turquoise px-4 py-1.5 text-sm font-semibold text-white">
            همه مقالات
          </span>
          {categories.map((cat) => (
            <span
              key={cat}
              className="rounded-full border px-4 py-1.5 text-sm font-medium"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="group h-full overflow-hidden transition hover:shadow-lg hover:border-turquoise">
                {blogImageMap[post.slug] && (
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={blogImageMap[post.slug]}
                      alt={post.title}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="font-semibold text-turquoise">{post.category}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-base group-hover:text-turquoise">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                  <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <ContactCTA />
      </div>
    </SiteLayout>
  );
}
