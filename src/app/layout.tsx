import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnalyticsClient from "./AnalyticsClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Facebook Ad Copy Generator - Free AI Ad Creator',
  description: 'Generate high-converting Facebook ads in seconds using AI. Get 3 ad copy variations instantly. Free and easy to use.',
  other: {
    'google-adsense-account': 'ca-pub-5719148036677435',
  },
  keywords: [
    'AI Facebook Ads',
    'Ad Copy Generator',
    'Facebook Ad Generator',
    'AI Ad Tool',
    'Generate Facebook Ads',
    'Marketing AI',
    'Ad Copy AI Generator'
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'Facebook Ad AI Generator' }],
  openGraph: {
    title: 'Facebook Ad AI Generator - Free AI Ad Creator',
    description: 'Generate high-converting Facebook ads in seconds using AI. Get 3 ad copy variations instantly. Free and easy to use.',
    url: 'https://facebook-ai-add-generator.vercel.app/',
    siteName: 'AI Facebook Ad Generator',
    images: [
      {
        url: 'https://facebook-ai-add-generator.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI Facebook Ad Generator',
      },
    ],
    type: 'website',
  },
  verification: {
    google: 'vlnXuDM7pVrvexOl_qIMhvVZCPr0HlAgB5GmdOo2Wd8',
  },
} satisfies Metadata;



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <AnalyticsClient />
        {children}
      </body>
    </html>
  );
}
