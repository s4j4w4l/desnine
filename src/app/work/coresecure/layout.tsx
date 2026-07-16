import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Core Secure - Brand Identity Case Study",
  description:
    "Brand identity for Core Secure, a leader in Web3 infrastructure for corporate operations. A case study by Desnine Studio.",
  openGraph: {
    title: "Core Secure - Brand Identity Case Study | Desnine Studio",
    description:
      "Brand identity for Core Secure, a leader in Web3 infrastructure for corporate operations.",
  },
};

export default function CoreSecureLayout({ children }: { children: React.ReactNode }) {
  return children;
}
