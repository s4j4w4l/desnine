import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mavo - Brand Identity Case Study",
  description:
    "Brand identity for Mavo, a financial management app built to simplify money control for individuals and businesses. A case study by Desnine Studio.",
  openGraph: {
    title: "Mavo - Brand Identity Case Study | Desnine Studio",
    description:
      "Brand identity for Mavo, a financial management app built to simplify money control for individuals and businesses.",
  },
};

export default function MavoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
