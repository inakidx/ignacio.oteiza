import type { Metadata } from "next";
import "./globals.css";
import { Ubuntu } from 'next/font/google';
import { Suspense } from "react";


const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "CV web of Ignacio Oteiza",
  description: "Page about Ignacio Oteiza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${ubuntu.className} antialiased`}>

        <Suspense fallback={<p>Cargando...</p>}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
