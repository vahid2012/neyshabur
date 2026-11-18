import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FloatingContact } from '@/components/floating-contact';

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen pb-16 md:pb-0">{children}</main>
      <Footer />
      <FloatingContact />
    </>
  );
}
