import Footer from "@/app/_components/Footer";
import Navbar from "@/app/_components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import './/globals.css';

export const metadata: Metadata = {
  title: "Kody Deda",
  description: "iOS Developer",
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
            <Navbar />
            {children}
            <Footer />
          </>
        </ThemeProvider>
      </body>
    </html>
  );
}


