import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Greenly - Brand Identity Case Study",
  description:
    "Brand identity for Greenly, an ecological alliance driving environmental protection and green innovation. A case study by Desnine Studio.",
  openGraph: {
    title: "Greenly - Brand Identity Case Study | Desnine Studio",
    description:
      "Brand identity for Greenly, an ecological alliance driving environmental protection and green innovation.",
  },
};

export default function GreenlyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
