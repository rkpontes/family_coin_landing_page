import { en } from "@/locales/en";
import { es } from "@/locales/es";
import { pt } from "@/locales/pt";
import type { Messages } from "@/locales/types";

export const locales = ["pt", "en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt";

const dictionaries: Record<Locale, Messages> = {
  pt: pt,
  en: en,
  es: es
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDictionary(locale: Locale): Messages {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
