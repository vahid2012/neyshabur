'use client';

import { useState } from 'react';
import { Phone, Send, CheckCircle } from 'lucide-react';
import { SiteLayout } from '@/components/site-layout';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { siteConfig } from '@/lib/site-config';
import { services } from '@/lib/services';
import { brands } from '@/lib/brands';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    appliance: '',
    brand: '',
    problem: '',
    contactMethod: 'تماس تلفنی',
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast({
        title: 'خطا',
        description: 'لطفاً نام و شماره تماس را وارد کنید.',
        variant: 'destructive',
      });
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitted(true);
        toast({
          title: 'پیام شما ارسال شد',
          description: 'به‌زودی با شما تماس می‌گیریم.',
        });
        setForm({
          name: '',
          phone: '',
          appliance: '',
          brand: '',
          problem: '',
          contactMethod: 'تماس تلفنی',
        });
      } else {
        throw new Error('Failed to submit');
      }
    } catch {
      toast({
        title: 'خطا در ارسال',
        description: 'لطفاً مستقیماً تلفن تماس بگیرید.',
        variant: 'destructive',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SiteLayout>
      <div className="bg-muted/30 py-8">
        <div className="mx-auto max-w-7xl px-4">
          <Breadcrumbs items={[{ name: 'خانه', href: '/' }, { name: 'تماس با ما' }]} />
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="mb-6 text-3xl font-bold text-navy">تماس با ما</h1>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="rounded-xl bg-navy p-6 text-white">
              <h2 className="mb-4 text-xl font-bold">اطلاعات تماس</h2>
              <div className="space-y-4">
                <a
                  href={siteConfig.phoneUrl}
                  className="flex items-center gap-3 rounded-lg bg-white/10 p-4 transition hover:bg-white/20"
                >
                  <Phone className="h-6 w-6 text-turquoise-light" />
                  <div>
                    <div className="text-xs text-white/70">تماس فوری</div>
                    <div className="text-lg font-bold" dir="ltr">{siteConfig.phone}</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="rounded-xl border p-6">
              <h2 className="mb-3 font-bold text-navy">ساعات کاری</h2>
              <p className="text-sm text-muted-foreground">
                خدمات تعمیر در نیشابور در ساعات اداری ارائه می‌شود. برای تعمیرات
                اضطراری، تماس بگیرید تا در صورت امکان خدمات Same-day ارائه دهیم.
              </p>
            </div>

            <div className="rounded-xl border p-6">
              <h2 className="mb-3 font-bold text-navy">منطقه خدماتی</h2>
              <p className="text-sm text-muted-foreground">
                خدمات ما در شهر نیشابور ارائه می‌شود. برای مناطق اطراف نیشابور،
                پیش از رزرو تماس بگیرید تا امکان سرویس‌دهی تأیید شود.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-xl border p-6">
            <h2 className="mb-4 text-xl font-bold text-navy">فرم درخواست تعمیر</h2>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="mb-4 h-16 w-16 text-green-500" />
                <h3 className="mb-2 text-lg font-bold text-navy">پیام شما ارسال شد</h3>
                <p className="text-sm text-muted-foreground">
                  به‌زودی با شما تماس می‌گیریم. برای تماس فوری:
                </p>
                <a
                  href={siteConfig.phoneUrl}
                  className="mt-4 flex items-center gap-2 rounded-lg bg-turquoise px-5 py-2.5 font-semibold text-white"
                >
                  <Phone className="h-4 w-4" />
                  تماس فوری گلزاری
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">نام و نام خانوادگی *</Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="نام خود را وارد کنید"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">شماره تماس *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="09xxxxxxxxx"
                    required
                    dir="ltr"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="appliance">نوع دستگاه</Label>
                  <Select onValueChange={(v) => handleChange('appliance', v)}>
                    <SelectTrigger>
                      <SelectValue placeholder="انتخاب کنید" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((s) => (
                        <SelectItem key={s.slug} value={s.shortTitle}>
                          {s.shortTitle}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="brand">برند دستگاه</Label>
                  <Select onValueChange={(v) => handleChange('brand', v)}>
                    <SelectTrigger>
                      <SelectValue placeholder="انتخاب کنید" />
                    </SelectTrigger>
                    <SelectContent>
                      {brands.map((b) => (
                        <SelectItem key={b.slug} value={b.nameFa}>
                          {b.nameFa}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="problem">شرح مشکل</Label>
                  <Textarea
                    id="problem"
                    value={form.problem}
                    onChange={(e) => handleChange('problem', e.target.value)}
                    placeholder="مشکل دستگاه را شرح دهید"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactMethod">روش تماس ترجیحی</Label>
                  <Select
                    value={form.contactMethod}
                    onValueChange={(v) => handleChange('contactMethod', v)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="تماس تلفنی">تماس تلفنی</SelectItem>
                      <SelectItem value="پیامک">پیامک</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-turquoise hover:bg-turquoise-dark"
                  disabled={submitting}
                >
                  {submitting ? 'در حال ارسال...' : 'ارسال درخواست'}
                  <Send className="mr-2 h-4 w-4" />
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  با ارسال این فرم، شما با تماس توسط تیم گلزاری موافقت می‌کنید.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
