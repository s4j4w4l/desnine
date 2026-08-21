import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the privacy policy for Desnine Studio, a multi-disciplinary, independent design studio, including how website and form data is handled.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | Desnine Studio",
    description: "How Desnine Studio collects, uses, protects, and retains website and form information.",
    url: "/privacy-policy",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Desnine Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Desnine Studio",
    description: "How Desnine Studio handles and protects website and form information.",
    images: ["/opengraph-image"],
  },
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
