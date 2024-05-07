import type { Metadata } from 'next';
import './ui/global.css';
import { inter, lusitana } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: 'Acme Dashboard',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${lusitana.className} antialiased container`}>{children}</body>
    </html>
  );
}
