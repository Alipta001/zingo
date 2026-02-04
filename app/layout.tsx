import type { Metadata } from "next";
import Providers from "@/redux/store/provider";
import StyleLoader from "@/component/StyleLoader/StyleLoader";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Zingo - Order Food Online",
  description: "Discover and order food from best restaurants near you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        {/* Preload fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Ensure CSS is loaded before content */}
        <style dangerouslySetInnerHTML={{__html: `
          html { background: #fff; }
          body { margin: 0; padding: 0; }
        `}} />
      </head>
      <body className="antialiased bg-white">
        <StyleLoader />
        <Providers>
          {children}
          <Toaster 
            position="top-right" 
            richColors 
            closeButton 
            duration={4000} 
          />
        </Providers>
      </body>
    </html>
  );
}
