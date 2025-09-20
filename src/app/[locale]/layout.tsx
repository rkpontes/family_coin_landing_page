import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { defaultLocale, getDictionary, isLocale, type Locale } from "@/lib/i18n";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const localeValue = params.locale ?? defaultLocale;

  if (!isLocale(localeValue)) {
    notFound();
  }

  const locale = localeValue as Locale;
  const messages = getDictionary(locale);

  return (
    <div className="flex min-h-screen flex-col">
      <Header locale={locale} messages={messages} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} messages={messages} />
    </div>
  );
}
