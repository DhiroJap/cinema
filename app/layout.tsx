import type { Metadata } from 'next';
import './globals.css';
import { ReduxProvider } from '@/redux/provider';
import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';

export const metadata: Metadata = {
  title: 'GALAXY CINEMA - Now Playing',
  description: 'Home Page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <ReduxProvider>{children}</ReduxProvider>
        <Footer />
      </body>
    </html>
  );
}
