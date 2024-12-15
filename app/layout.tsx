import { Metadata } from 'next';
import localFont from 'next/font/local';
import Navbar from '../app/components/Navbar';
import './globals.css';
import favicon from '../app/public/favicon.ico'; // Explicit import for favicon

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Carelife Foundation',
  description: 'NGO, Charity, Support, Intervention programs, Nigeria,UK.',
  icons: {
    icon: favicon.src, // Use imported favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Use the imported favicon */}
        <link rel="icon" href={favicon.src} type="image/x-icon" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <div className="flex-grow">{children}</div>
      </body>
    </html>
  );
}





