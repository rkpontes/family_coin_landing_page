import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CTA } from "@/components/blocks/cta";
import { Features } from "@/components/blocks/features";
import { Hero } from "@/components/blocks/hero";
import { locales, getDictionary, isLocale, type Locale } from "@/lib/i18n";

interface PageProps {
  params: { locale: string };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  if (!isLocale(params.locale)) {
    return {};
  }

  const messages = getDictionary(params.locale);

  return {
    title: messages.metadata.title,
    description: messages.metadata.description,
    openGraph: {
      title: messages.metadata.title,
      description: messages.metadata.description
    },
    twitter: {
      title: messages.metadata.title,
      description: messages.metadata.description
    }
  };
}

export default function LandingPage({ params }: PageProps) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale as Locale;
  const messages = getDictionary(locale);

  return (
    <>
      <Hero messages={messages.hero} storeMessages={messages.store} />
      <Features messages={messages.features} />
      <CTA
        messages={messages.cta}
        storeMessages={messages.store}
        waitlistMessages={messages.waitlist}
      />
    </>
  );
}
