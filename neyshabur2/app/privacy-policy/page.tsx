import type { Metadata } from 'next';
import { SiteLayout } from '@/components/site-layout';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: 'حریم خصوصی - تعمیرات گلزاری',
  description: 'سیاست حریم خصوصی وب‌سایت تعمیرات تخصصی لوازم خانگی گلزاری.',
  alternates: { canonical: 'https://neyshabur-repair.ir/privacy-policy' },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <SiteLayout>
      <div className="bg-muted/30 py-8">
        <div className="mx-auto max-w-7xl px-4">
          <Breadcrumbs items={[{ name: 'خانه', href: '/' }, { name: 'حریم خصوصی' }]} />
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="mb-6 text-3xl font-bold text-navy">سیاست حریم خصوصی</h1>

        <div className="space-y-6 leading-loose text-muted-foreground">
          <section>
            <h2 className="mb-2 text-xl font-bold text-navy">مقدمه</h2>
            <p>
              وب‌سایت تعمیرات تخصصی لوازم خانگی گلزاری متعهد به حفاظت از حریم
              خصوصی کاربران است. این سیاست توضیح می‌دهد که چه اطلاعاتی از شما
              جمع‌آوری می‌شود و چگونه استفاده می‌گردد.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-navy">اطلاعات جمع‌آوری‌شده</h2>
            <p>
              ما اطلاعاتی که شما از طریق فرم تماس به ما ارائه می‌دهید شامل نام،
              شماره تماس، نوع دستگاه، برند و شرح مشکل را جمع‌آوری می‌کنیم. این
              اطلاعات صرفاً برای ارائه خدمات تعمیر و تماس با شما استفاده می‌شود.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-navy">استفاده از اطلاعات</h2>
            <p>
              اطلاعات شما برای موارد زیر استفاده می‌شود:
            </p>
            <ul className="list-disc space-y-1 pr-6 mt-2">
              <li>تماس با شما برای هماهنگی تعمیر</li>
              <li>ارائه خدمات تعمیر</li>
              <li>پاسخ به سوالات شما</li>
              <li>بهبود خدمات ما</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-navy">اشتراک‌گذاری اطلاعات</h2>
            <p>
              ما اطلاعات شما را به هیچ شخص یا شرکت ثالثی نمی‌فروشیم یا به اشتراک
              نمی‌گذاریم، مگر در مواردی که قانوناً الزامی باشد.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-navy">کوکی‌ها</h2>
            <p>
              وب‌سایت ما ممکن است از کوکی‌ها برای بهبود تجربه کاربری استفاده کند.
              کوکی‌ها اطلاعات شخصی شما را ذخیره نمی‌کنند.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-navy">حقوق شما</h2>
            <p>
              شما حق دارید به اطلاعاتی که درباره شما نزد ما وجود دارد دسترسی
              داشته باشید و در صورت درخواست، آن‌ها را حذف کنیم.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-navy">تماس با ما</h2>
            <p>
              در صورت داشتن سوال درباره حریم خصوصی، با شماره 09350844349 تماس
              بگیرید.
            </p>
          </section>
        </div>
      </div>
    </SiteLayout>
  );
}
