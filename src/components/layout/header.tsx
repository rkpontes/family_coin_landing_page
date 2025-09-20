import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { Messages } from "@/locales/types";
import { Button } from "@/components/ui/button";
// import { ThemeToggle } from "@/components/layout/theme-toggle";
import logoImage from "@/assets/icon.png";

interface HeaderProps {
  locale: Locale;
  messages: Messages;
}

export function Header({ locale, messages }: HeaderProps) {
  const localizedNav = [
    { label: messages.navigation.home, href: `/${locale}` },
    { label: messages.navigation.features, href: `/${locale}#features` },
    { label: messages.navigation.pricing, href: `/${locale}/${siteConfig.links.pricing}` },
    { label: messages.navigation.privacy, href: `/${locale}/${siteConfig.links.privacy}` }
  ];

  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-100/70 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-6">
        <Link href={`/${locale}`} className="flex items-center gap-2 text-lg font-semibold text-slate-900">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-sm">
            <Image
              src={logoImage}
              alt="FamilyCoin logo"
              width={40}
              height={40}
              className="h-9 w-9"
              priority
            />
          </span>
          <div className="flex flex-col leading-tight">
            <span>{siteConfig.name}</span>
            <span className="text-xs font-normal text-slate-500">{messages.navigation.tagline}</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {localizedNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium text-slate-600 transition hover:text-slate-900",
                link.href.includes("#") && "scroll-smooth"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {/* <ThemeToggle /> */}
          <Button asChild size="sm">
            <Link href={`/${locale}/${siteConfig.links.pricing}`}>{messages.navigation.cta}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
