import { MetadataRoute } from 'next';
import { services } from '@/lib/services';
import { brands } from '@/lib/brands';
import { serviceAreas } from '@/lib/areas';
import { blogPosts } from '@/lib/blog-posts';
import { siteConfig } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/brands`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/areas`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  const brandPages: MetadataRoute.Sitemap = brands.map((b) => ({
    url: `${base}/brands/${b.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  const areaPages: MetadataRoute.Sitemap = serviceAreas
    .filter((a) => a.verified)
    .map((a) => ({
      url: `${base}/areas/${a.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.updated),
    changeFrequency: 'monthly',
    priority: 0.65,
  }));

  return [...staticPages, ...servicePages, ...brandPages, ...areaPages, ...blogPages];
}
