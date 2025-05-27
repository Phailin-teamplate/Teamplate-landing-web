// app/layout.tsx
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Noto_Sans_Lao } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });
const notoSansLao = Noto_Sans_Lao({ subsets: ["lao"] });
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Teamplate | Build With Power",
  description: "Modern web app powered by Next.js + Tailwind CSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className={`dark:bg-black ${inter.className} ${notoSansLao.className}`}>
        {children}
      </body>
    </html>
  );
}
