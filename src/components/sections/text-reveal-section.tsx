"use client";

import { TextReveal } from "@/components/magicui/text-reveal";
import { useLang } from "@/contexts/LanguageContext";

export default function TextRevealSection() {
  const { t } = useLang();

  return (
    <TextReveal buttonLabel={t.textRevealCta}>
      {t.textReveal}
    </TextReveal>
  );
}
