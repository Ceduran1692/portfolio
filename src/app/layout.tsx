import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const websiteUrl = 'https://cduran.com.ar';

export const metadata: Metadata = {
  metadataBase: new URL(websiteUrl),
  title: {
    default: 'Carlos Durán | Desarrollador de Software',
    template: '%s | Carlos Durán',
  },
  description: 'Desarrollo de software a medida. Sitios web, aplicaciones móviles y soluciones personalizadas.',
  keywords: ['desarrollador', 'software', 'web', 'mobile', 'programador', 'Argentina', 'Buenos Aires'],
  authors: [{ name: 'Carlos Durán', url: websiteUrl }],
  creator: 'Carlos Durán',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: websiteUrl,
    siteName: 'Carlos Durán Portfolio',
    title: 'Carlos Durán | Desarrollador de Software',
    description: 'Desarrollo de software a medida. Sitios web, aplicaciones móviles y soluciones personalizadas.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carlos Durán | Desarrollador de Software',
    description: 'Desarrollo de software a medida.',
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
  name: 'Carlos Durán',
  jobTitle: 'Desarrollador de Software',
  url: websiteUrl,
  sameAs: [
    'https://linkedin.com/in/carlos-duran',
    'https://github.com/Ceduran1692',
  ],
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