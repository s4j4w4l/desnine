import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Desnine Studio Logo",
  description: "Logo asset for Desnine Studio, a multi-disciplinary, independent design studio.",
  alternates: { canonical: "/logo" },
  robots: { index: false, follow: false },
};

export default function LogoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
