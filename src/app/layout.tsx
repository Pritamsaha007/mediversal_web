import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Foooter from "./components/Foooter";
import Banner from "./components/Banner";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mediversal | Trust-Transparency-Care",
  description:
    "Mediversal is a trusted online pharmacy and lab test provider, ensuring transparency and care in every service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} antialiased`}>
        <Header />
        {children}
        <Banner />
        <Foooter />
      </body>
    </html>
  );
}
