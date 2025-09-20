"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";

import type { Locale } from "@/lib/i18n";

interface LocaleOption {
  value: string;
  label: string;
}

interface LocaleSwitcherProps {
  locale: Locale;
  label: string;
  options: LocaleOption[];
}

export function LocaleSwitcher({ locale, label, options }: LocaleSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = React.useTransition();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value;

    if (nextLocale === locale) {
      return;
    }

    const supportedLocales = new Set(options.map((option) => option.value));

    if (!supportedLocales.has(nextLocale)) {
      return;
    }

    const segments = pathname
      .split("/")
      .filter(Boolean);

    if (segments.length > 0 && supportedLocales.has(segments[0])) {
      segments[0] = nextLocale;
    } else {
      segments.unshift(nextLocale);
    }

    const nextPath = `/${segments.join("/")}` || "/";

    startTransition(() => {
      router.push(nextPath);
    });
  };

  return (
    <label className="flex items-center gap-2 text-sm text-slate-600">
      <span className="font-medium text-slate-500">{label}</span>
      <select
        className="rounded-md border border-slate-200 bg-white px-2 py-1 text-sm text-slate-600 shadow-sm transition focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200 disabled:cursor-not-allowed disabled:opacity-70"
        value={locale}
        onChange={handleChange}
        disabled={isPending}
        aria-label={label}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
