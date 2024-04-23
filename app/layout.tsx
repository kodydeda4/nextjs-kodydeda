import './/globals.css'
import type { Metadata } from "next";
import Link from "next/link";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/Navbar"

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
          "min-h-screen bg-background font-sans antialiased",
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
          </>
        </ThemeProvider>
      </body>
    </html>
  );
}


