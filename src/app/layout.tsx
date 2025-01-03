import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LightDarkToggle from "@/components/LightDarkToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
          <header className="p-4">
            <LightDarkToggle />
          </header>
          <main
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
