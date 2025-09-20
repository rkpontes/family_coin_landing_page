import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { locales, getDictionary, isLocale, type Locale } from "@/lib/i18n";

interface PricingPageProps {
  params: { locale: string };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function PricingPage({ params }: PricingPageProps) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale as Locale;
  const messages = getDictionary(locale);

  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center gap-6 py-20 text-center">
      <span className="rounded-full bg-brand-100 px-3 py-1 text-sm font-semibold text-brand-700">
        {messages.pricing.badge}
      </span>
      <h1 className="text-4xl font-bold text-slate-900">{messages.pricing.heading}</h1>
      <p className="max-w-2xl text-lg text-slate-600">{messages.pricing.description}</p>
      <Button asChild size="lg">
        <Link href={`/${locale}`}>{messages.pricing.back}</Link>
      </Button>
    </div>
  );
}
