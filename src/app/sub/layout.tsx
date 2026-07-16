import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Desnine",
  robots: { index: false, follow: false },
};

export default function SubLayout({ children }: { children: React.ReactNode }) {
  return children;
}
