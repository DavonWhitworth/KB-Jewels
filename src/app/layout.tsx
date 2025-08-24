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
  description: "Preminum Custom Jewellery by Kunj Bansal",
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
