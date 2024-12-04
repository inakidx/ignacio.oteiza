import type { Metadata } from "next";
import "./globals.css";
import { Sour_Gummy } from 'next/font/google';
// import Header from "./components/Header";

const sourGummy = Sour_Gummy({
  subsets: ['latin'], // Define el subconjunto de caracteres
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
