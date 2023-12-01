import type { Metadata } from 'next';
import './globals.css';
import { ReduxProvider } from '@/redux/provider';
import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main>
          <ReduxProvider>{children}</ReduxProvider>
        </main>
        {/* <Footer /> -> rusak, benerin aja baru pake */}
      </body>
    </html>
  );
}
