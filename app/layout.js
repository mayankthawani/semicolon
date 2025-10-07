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
  ttitle: "Semicolon 11.0",
description: "Code. Collaborate. Conquer.",
openGraph: {
  title: "Semicolon 11.0",
  description: "Code. Collaborate. Conquer.",
  images: ["/hack-logo.png"], // Add your event image here in /public
},
icons: {
  icon: "/hack-logo.png",
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
