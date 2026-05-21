import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { personalInfo, socialLinks, websiteUrl } from '@/lib/env';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(websiteUrl),
  title: {
    default: `${personalInfo.name} | ${personalInfo.title}`,
    template: `%s | ${personalInfo.name}`,
  },
  description: personalInfo.description,
  keywords: ['desarrollador', 'software', 'web', 'mobile', 'programador', 'Argentina', 'Buenos Aires'],
  authors: [{ name: personalInfo.name, url: websiteUrl }],
  creator: personalInfo.name,
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: websiteUrl,
    siteName: `${personalInfo.name} Portfolio`,
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: personalInfo.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: personalInfo.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const schemaOrgData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: personalInfo.name,
  jobTitle: personalInfo.title,
  url: websiteUrl,
  sameAs: socialLinks.map((link) => link.url),
  knowsAbout: ['Web Development', 'Mobile Development', 'Software Architecture'],
  address: { '@type': 'PostalAddress', addressLocality: 'Buenos Aires', addressCountry: 'AR' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-lg"
        >
          Saltar al contenido principal
        </a>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgData) }}
        />

        {children}
      </body>
    </html>
  );
}