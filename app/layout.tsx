import './globals.css';
import { ReduxProvider } from '@/redux/provider';
import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxProvider>
      <html lang='en'>
        <body>
          <Navbar />
          <main>{children}</main>
          <ToastContainer />
          <Footer />
        </body>
      </html>
    </ReduxProvider>
  );
}
