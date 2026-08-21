import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branding, Web, Content, Packaging",
  description: "Service information from Desnine Studio, a multi-disciplinary, independent design studio.",
  alternates: { canonical: "/sub" },
  robots: { index: false, follow: false },
};

export default function SubLayout({ children }: { children: React.ReactNode }) {
  return children;
}
