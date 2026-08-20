import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Core Secure - Brand Identity Case Study",
  description:
    "Brand identity for Core Secure, a leader in Web3 infrastructure for corporate operations. A case study by Desnine Studio.",
  alternates: { canonical: "/work/coresecure" },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Core Secure - Brand Identity Case Study | Desnine Studio",
    description:
      "Brand identity for Core Secure, a leader in Web3 infrastructure for corporate operations.",
    url: "/work/coresecure",
  },
};

export default function CoreSecureLayout({ children }: { children: React.ReactNode }) {
  return children;
}
