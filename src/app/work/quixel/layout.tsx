import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quixel - Brand Identity Case Study",
  description:
    "Corporate identity for Quixel, blending innovation and realism across 3D assets and creative tools. A case study by Desnine Studio.",
  openGraph: {
    title: "Quixel - Brand Identity Case Study | Desnine Studio",
    description:
      "Corporate identity for Quixel, blending innovation and realism across 3D assets and creative tools.",
  },
};

export default function QuixelLayout({ children }: { children: React.ReactNode }) {
  return children;
}
