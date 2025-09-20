import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Poppins } from "next/font/google";

import "@/styles/globals.css";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { siteConfig } from "@/config/site";
import { defaultLocale, getDictionary, isLocale, type Locale } from "@/lib/i18n";

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
  params: { locale?: string };
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  const localeValue = params.locale ?? defaultLocale;

  if (!isLocale(localeValue)) {
    notFound();
  }

  const locale = localeValue as Locale;
  const messages = getDictionary(locale);

  return (
    <html lang={locale.replace("_", "-")} suppressHydrationWarning>
      <body className={`${poppins.variable} min-h-screen bg-background font-sans text-foreground`}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header locale={locale} messages={messages} />
            <main className="flex-1">{children}</main>
            <Footer locale={locale} messages={messages} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
