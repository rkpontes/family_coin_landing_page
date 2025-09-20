import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";

import "@/styles/globals.css";

import { ThemeProvider } from "@/components/layout/theme-provider";
import { siteConfig } from "@/config/site";
import { defaultLocale, isLocale } from "@/lib/i18n";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  }
};

export const viewport: Viewport = {
  themeColor: "#E3F3FF"
};

interface RootLayoutProps {
  children: React.ReactNode;
  params?: { locale?: string };
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  const localeValue = params?.locale;
  const activeLocale = localeValue && isLocale(localeValue) ? localeValue : defaultLocale;

  return (
    <html lang={activeLocale.replace("_", "-")} suppressHydrationWarning>
      <body className={`${poppins.variable} min-h-screen bg-background font-sans text-foreground`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
