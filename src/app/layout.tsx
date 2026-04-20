import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Cookie from "@/components/Cookie";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { BrandingProvider } from "@/components/BrandingContext";

export const metadata: Metadata = {
  title: "Coin99 | Token Universe",
  description: "Build, Launch, and Trade in the Coin99 Ecosystem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" 
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col font-metropolis font-medium">
        <ThemeProvider>
          <BrandingProvider>
            <ThemeToggle /> 
            <Navbar />
            {children}
            <Cookie />
          </BrandingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
