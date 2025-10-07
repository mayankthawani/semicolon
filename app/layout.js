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
  title: "Semicolon 11.0",
  description: "Code. Collaborate. Conquer.",
  metadataBase: new URL('https://your-domain.com'), // Replace with your actual domain
  openGraph: {
    type: 'website',
    title: "Semicolon 11.0",
    description: "Code. Collaborate. Conquer.",
    siteName: 'Semicolon 11.0',
    images: [
      {
        url: '/hack-logo.png',
        width: 800,
        height: 600,
        alt: 'Semicolon 11.0 Logo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Semicolon 11.0",
    description: "Code. Collaborate. Conquer.",
    images: ['/hack-logo.png'],
  },
  icons: {
    icon: [
      {
        url: '/hack-logo.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/hack-logo.png',
        sizes: '192x192',
        type: 'image/png',
      }
    ],
    shortcut: '/hack-logo.png',
    apple: '/hack-logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
