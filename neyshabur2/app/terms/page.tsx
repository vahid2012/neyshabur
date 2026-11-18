import type { Metadata } from 'next';
import { SiteLayout } from '@/components/site-layout';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: 'قوانین و شرایط - تعمیرات گلزاری',
  description: 'قوانین و شرایط استفاده از خدمات تعمیرات تخصصی لوازم خانگی گلزاری.',
  alternates: { canonical: 'https://neyshabur-repair.ir/terms' },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <SiteLayout>
      <div className="bg-muted/30 py-8">
        <div className="mx-auto max-w-7xl px-4">
          <Breadcrumbs items={[{ name: 'خانه', href: '/' }, { name: 'قوانین و شرایط' }]} />
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="mb-6 text-3xl font-bold text-navy">قوانین و شرایط</h1>

        <div className="space-y-6 leading-loose text-muted-foreground">
          <section>
            <h2 className="mb-2 text-xl font-bold text-navy">مقدمه</h2>
            <p>
              استفاده از خدمات تعمیرات تخصصی لوازم خانگی گلزاری به معنای پذیرش
              قوانین و شرایط زیر است.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-navy">خدمات</h2>
            <p>
              ما خدمات تعمیر لوازم خانگی را در نیشابور و مناطق تحت پوشش ارائه
              می‌دهیم. نوع و کیفیت خدمات بسته به نوع دستگاه و مشکل متفاوت است.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-navy">هزینه‌ها</h2>
            <p>
              هزینه تعمیر پس از عیب‌یابی به‌طور شفاف اعلام می‌شود. مشتری پیش از
              شروع تعمیر از هزینه کامل مطلع می‌شود. در صورت عدم تأیید مشتری،
              تعمیر انجام نمی‌شود.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-navy">ضمانت</h2>
            <p>
              ما برای تعمیرات انجام‌شده و قطعات تعویض‌شده ضمانت ارائه می‌دهیم.
              دوره ضمانت بسته به نوع تعمیر و قطعه متفاوت است و در زمان تحویل
              اعلام می‌شود. ضمانت شامل آسیب‌های ناشی از استفاده نادرست، حادثه یا
              نوسانات برق نمی‌شود.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-navy">مسئولیت‌ها</h2>
            <p>
              ما تلاش می‌کنیم خدمات باکیفیت ارائه دهیم، اما در مورد دستگاه‌هایی
              که آسیب جدی دارند یا قطعات آن‌ها در دسترس نیست، نمی‌توانیم تعمیر را
              تضمین کنیم. در چنین مواردی، هزینه عیب‌یابی دریافت می‌شود.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-navy">نمایندگی</h2>
            <p>
              ما نمایندگی رسمی هیچ برند سازنده لوازم خانگی نیستیم. خدمات ما
              تعمیرات تخصصی توسط تکنسین‌های متخصص است و هیچ ارتباط رسمی با
              شرکت‌های سازنده ندارد.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-navy">تغییر قوانین</h2>
            <p>
              ما حق تغییر قوانین و شرایط را برای خود محفوظ می‌داریم. تغییرات در
              همین صفحه منتشر می‌شوند.
            </p>
          </section>
        </div>
      </div>
    </SiteLayout>
  );
}
