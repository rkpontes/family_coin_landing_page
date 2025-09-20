import Link from "next/link";

import { siteConfig } from "@/config/site";
import type { Locale } from "@/lib/i18n";
import type { Messages } from "@/locales/types";

interface FooterProps {
  locale: Locale;
  messages: Messages;
}

export function Footer({ locale, messages }: FooterProps) {
  return (
    <footer className="border-t border-slate-100 bg-white/80 py-8 text-sm text-slate-500">
      <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. {messages.footer.rights}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link href={`/${locale}/${siteConfig.links.privacy}`} className="hover:text-slate-900">
            {messages.footer.privacy}
          </Link>
          <Link href={`/${locale}/${siteConfig.links.pricing}`} className="hover:text-slate-900">
            {messages.footer.pricing}
          </Link>
          <Link href={siteConfig.links.support} className="hover:text-slate-900">
            {messages.footer.support}
          </Link>
        </div>
      </div>
    </footer>
  );
}
