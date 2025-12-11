import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Epic Aura by Sunajo | AI Powered College Event Management Platform',
  description:
    'Epic Aura is Sunajo’s intelligent event management platform built for colleges to streamline student engagement, club promotions, streak tracking, AI assisted workflows, and inter-college event discovery.',

  keywords: [
    // Core product SEO
    'Epic Aura',
    'Sunajo Epic Aura',
    'AI event management platform',
    'college event management system',
    'student engagement tool',
    'club management platform',
    'inter college events platform',
    'college event automation',
    'campus engagement solution',
    'AI powered streak tracking',
    'student participation analytics',

    // Brand based
    'Sunajo Technologies',
    'Sunajo products',
    'Sunajo AI solutions',

    // Intent keywords
    'best event management software for colleges',
    'student engagement platform India',
    'AI tools for campus events',
    'college club management software',
  ],

  authors: [{ name: 'Sunajo Technologies', url: 'https://sunajo.com' }],
  creator: 'Sunajo',
  publisher: 'Sunajo Technologies',

  openGraph: {
    title: 'Epic Aura by Sunajo | Smarter AI Event Management for Colleges',
    description:
      'Manage campus events, student promotions, club operations, streaks and inter-college opportunities with Epic Aura, an AI powered platform by Sunajo.',
    url: 'https://sunajo.com/epic-aura',
    siteName: 'Sunajo',
    locale: 'en_IN',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Epic Aura by Sunajo | AI Event Management Platform',
    description:
      'Epic Aura helps colleges automate events, boost engagement, manage clubs and recommend the best opportunities using AI.',
    creator: '@sunajo_official',
  },

  metadataBase: new URL('https://sunajo.com'),

  alternates: {
    canonical: 'https://sunajo.com/epic-aura',
  },

  icons: {
    icon: '/sunajo_icon.png',
    shortcut: '/sunajo_icon.png',
    apple: '/sunajo_icon.png',
  },

  category: 'education technology',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/sunajo_icon.png" sizes="any" />
        <link rel="icon" type="image/png" href="/sunajo_icon.png" sizes="192x192" />
        <link rel="icon" type="image/png" href="/sunajo_icon.png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/sunajo_icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
