import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Box } from "@mui/material";
import { NotificationProvider } from "../components/layout/NotificationContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KB Jewels",
  description: "Premium Custom Jewellery by Kunj Bansal",
  keywords: "custom jewellery, engagement rings, wedding rings, bespoke jewelry, KB Jewels, Kunj Bansal, premium custom jewellery",
  authors: [{ name: "Kunj Bansal" }],
  creator: "Kunj Bansal",
  publisher: "KB Jewels",
  robots: "index, follow",
  alternates: {
    canonical: 'https://kb-jewels.com',
  },
  other: {
    'language': 'English',
    'geo.region': 'IN',
    'geo.country': 'India',
    'geo.placename': 'India',
  },
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'KB Jewels',
    description: 'Premium Custom Jewellery by Kunj Bansal',
    type: 'website',
    url: 'https://kb-jewels.com',
    siteName: 'KB Jewels',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'KB Jewels - Premium Custom Jewellery',
      }
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KB Jewels',
    description: 'Premium Custom Jewellery by Kunj Bansal',
    images: ['/og-image.png'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#D4AF37', // Your accent color
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <NotificationProvider>
          <Navbar />
          <Box sx={{ pt: { xs: 12, sm: 16 } }} /> {/* Spacer for fixed navbar */}
          <Box sx={{ flex: 1 }}> {/* This makes the content area expand to fill available space */}
            {children}
          </Box>
          <Footer />
        </NotificationProvider>
      </body>
    </html>
  );
}
