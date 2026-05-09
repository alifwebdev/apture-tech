import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: { default: "AptureTech — Web & App Design Agency", template: "%s | AptureTech" },
  description: "AptureTech — Premium web & app design and development agency.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('apture-theme');if(t==='light')document.documentElement.classList.add('light');}catch(e){}})();` }} />
        {/* Barlow Condensed (bold display) + Inter (body) — exact Finibus font stack */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,400;0,600;0,700;0,800;0,900;1,700;1,800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
