import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Playfair_Display } from 'next/font/google'
import "./globals.css";
import Provider from "../components/providers/Provider"

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter' 
})

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair' 
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elendu Franklin | A Fullstack Developer based in Nigeria",
  description: "Nextjs, React, Javascript, Tailwind CSS, Supabase, AuthO",
  themeColor: '#000000', // optional, improves color matching
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="snap-y snap-mandatory scroll-smooth ">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${playfair.variable} font-display antialiased border-box bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300`}
      >
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
