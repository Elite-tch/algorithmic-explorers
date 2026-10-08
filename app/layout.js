import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/navbar";
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
  title: "Algorithmic Explorers",
  description: " A modern technology academy and services platform where users can explore courses and cohorts, register and make payments, access their student dashboard, revisit class recordings, submit assignments, and manage their learning experience. The platform also showcases workshops, technology services, and previously built products.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pb-24 md:pb-0">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
