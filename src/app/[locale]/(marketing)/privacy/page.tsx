import Link from "next/link";
import { notFound } from "next/navigation";

import { locales, getDictionary, isLocale, type Locale } from "@/lib/i18n";

interface PrivacyPageProps {
  params: { locale: string };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function PrivacyPage({ params }: PrivacyPageProps) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale as Locale;
  const messages = getDictionary(locale);

  return (
    <div className="container prose prose-slate py-16">
      <h1>{messages.privacy.title}</h1>
      <p>{messages.privacy.intro}</p>
      <h2>{messages.privacy.dataHeading}</h2>
      <p>{messages.privacy.dataDescription}</p>
      <h2>{messages.privacy.contactHeading}</h2>
      <p>
        {messages.privacy.contactDescription}{" "}
        <Link href="mailto:hello@familycoin.app">hello@familycoin.app</Link>.
      </p>
    </div>
  );
}
