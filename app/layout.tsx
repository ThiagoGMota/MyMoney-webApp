import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { onest } from "./fonts";
import NavBarLP from "./components/landing-page/navbar";

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

export const metadata: Metadata = {
  title: "MyMoney App",
  description: "Seu gerenciador financeiro pessoal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${onest.className} antialiased bg-[#0B0D1B] px-4`}
      >
        <nav className="mb-16 h-16 fixed top-0 left-0 w-full px-4 bg-[#0B0D1B] z-50">
        <NavBarLP/>
        </nav>
        <main className="md:mt-48 mt-32">
        {children}
        </main>
      </body>
    </html>
  );
}
