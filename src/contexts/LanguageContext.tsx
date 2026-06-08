"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { translations, type Lang, type Translations } from "@/lib/translations";

type LanguageContextValue = {
  lang: Lang;
  t: Translations;
  toggle: () => void;
};

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  t: translations.en,
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("desnine-lang");
    if (stored === "en" || stored === "fr") setLang(stored);
  }, []);

  const toggle = () => {
    setLang((prev) => {
      const next: Lang = prev === "en" ? "fr" : "en";
      localStorage.setItem("desnine-lang", next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
