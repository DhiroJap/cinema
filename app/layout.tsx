import './globals.css';
import { ReduxProvider } from '@/redux/provider';
import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';

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
        <Footer />
      </body>
    </html>
  );
}
