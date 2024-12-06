import type { Metadata } from "next";
import "./globals.css";
import { Caveat, Sour_Gummy } from 'next/font/google';
import Header from "./components/Header";
// import Header from "./components/Header";

// const sourGummy = Sour_Gummy({
//   subsets: ['latin'],
//   weight: ['400', '700'],
// });

const caveat = Caveat({
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
      <body className={`${caveat.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
