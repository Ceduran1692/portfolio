import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carlos Durán | Desarrollador de Software",
  description: "Desarrollo de software a medida. Sitios web, aplicaciones móviles y soluciones personalizadas.",
  keywords: ["desarrollador", "software", "web", "mobile", "programador"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-full flex flex-col font-sans antialiased text-gray-900">
        {children}
      </body>
    </html>
  );
}