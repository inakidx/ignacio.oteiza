import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Sour_Gummy } from 'next/font/google';
import Header from "./components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const sourGummy = Sour_Gummy({
  weight: ['400', '700'], // Especifica los pesos que necesitas
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
      <body className={`${sourGummy.className} antialiased`}>
        {/* <Header /> */}
        {children}
      </body>
      {/* <Footer /> */}
    </html>
  );
}
