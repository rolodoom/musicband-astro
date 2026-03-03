import { SITE_CONFIG } from "@/config/site";
import es from "./es-ES.json";
import en from "./en-US.json";

const translations = {
  "es-ES": es,
  "en-US": en,
};

// SOLUCIÓN: cast a keyof translations
const current =
  translations[SITE_CONFIG.locale as keyof typeof translations] ?? es;

export function t(key: string) {
  return current[key as keyof typeof current] ?? key;
}
