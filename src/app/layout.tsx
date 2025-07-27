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
  verification: {
    google: 'vlnXuDM7pVrvexOl_qIMhvVZCPr0HlAgB5GmdOo2Wd8',
  }
}

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
