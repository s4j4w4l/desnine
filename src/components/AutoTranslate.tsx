"use client";

import GoogleTranslate, { LANGUAGES } from "next-google-translate-widget";
import "next-google-translate-widget/styles";

const langs = LANGUAGES.filter((l) =>
  ["en", "fr"].includes(l.value)
);

export default function AutoTranslate() {
  return (
    <div className="fixed right-6 top-6 z-50">
      <GoogleTranslate pageLanguage="en" languages={langs} />
    </div>
  );
}