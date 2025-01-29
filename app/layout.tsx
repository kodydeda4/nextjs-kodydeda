import Footer from "@/app/_components/Footer";
import Navbar from "@/app/_components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import './/globals.css';
import Head from "next/head";

export const metadata: Metadata = {
  title: "Kody Deda",
  description: " iOS Developer",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Kody Deda</title>
        <meta name="title" content="Kody Deda" />
        <meta name="description" content=" iOS Developer" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kodydeda.vercel.app/" />
        <meta property="og:title" content="Kody Deda" />
        <meta property="og:description" content=" iOS Developer" />
        <meta property="og:image" content="/metadata.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://kodydeda.vercel.app/" />
        <meta property="twitter:title" content="Kody Deda" />
        <meta property="twitter:description" content=" iOS Developer" />
        <meta property="twitter:image" content="/metadata.png" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <>
            {/* <Navbar /> */}
            {children}
            <Footer />
          </>
        </ThemeProvider>
      </body>
    </html>
  );
}


