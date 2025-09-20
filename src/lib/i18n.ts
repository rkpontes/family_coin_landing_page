import { enUS } from "@/locales/en_US";
import { esES } from "@/locales/es_ES";
import { ptBR } from "@/locales/pt_BR";
import type { Messages } from "@/locales/types";

export const locales = ["pt_BR", "en_US", "es_ES"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt_BR";

const dictionaries: Record<Locale, Messages> = {
  pt_BR: ptBR,
  en_US: enUS,
  es_ES: esES
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDictionary(locale: Locale): Messages {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
