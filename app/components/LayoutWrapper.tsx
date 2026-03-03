'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';

const NO_NAV_ROUTES = ['/rate-card'];

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showNav = !NO_NAV_ROUTES.some(route => pathname.startsWith(route));

  return (
    <>
      {showNav && <Header />}
      <main className="min-h-screen">{children}</main>
      {showNav && <Footer />}
    </>
  );
}
