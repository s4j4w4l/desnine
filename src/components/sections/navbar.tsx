"use client";

import { Icons } from "@/components/icons";
import { NavMenu } from "@/components/nav-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { useLang } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { ChevronLeft, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useScroll, type Variants } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/config";

const INITIAL_WIDTH = "70rem";
const MAX_WIDTH = "920px";

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const drawerVariants: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 15, stiffness: 200, staggerChildren: 0.03 },
  },
  exit: { opacity: 0, y: 100, transition: { duration: 0.1 } },
};

const drawerMenuContainerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
const drawerMenuVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

function LangToggle({ mobile = false }: { mobile?: boolean }) {
  const { lang, toggle } = useLang();

  if (mobile) {
    return (
      <button
        type="button"
        onClick={toggle}
        className="w-full bg-secondary text-primary-foreground dark:text-secondary-foreground border border-white/[0.12] px-6 py-3 rounded-md text-sm font-semibold hover:bg-secondary/90 transition-all duration-300 flex items-center justify-center gap-2"
      >
        <span className={lang === "en" ? "opacity-100" : "opacity-40"}>EN</span>
        <span className="opacity-30">/</span>
        <span className={lang === "fr" ? "opacity-100" : "opacity-40"}>FR</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="hidden md:flex h-8 items-center gap-1 px-3 rounded-full border border-border bg-accent text-sm font-medium tracking-wide transition-colors hover:bg-accent/80"
      aria-label="Toggle language"
    >
      <span className={lang === "en" ? "text-primary" : "text-muted-foreground"}>EN</span>
      <span className="text-muted-foreground/40 mx-0.5">/</span>
      <span className={lang === "fr" ? "text-primary" : "text-muted-foreground"}>FR</span>
    </button>
  );
}

export function Navbar() {
  const { scrollY } = useScroll();
  const { t } = useLang();
  const pathname = usePathname();
  const router = useRouter();
  const isCaseStudy = ["/work/marche_main", "/work/biotasup"].includes(pathname);

  const [hasScrolled, setHasScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = siteConfig.nav.links.map((item) => item.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => setHasScrolled(latest > 10));
    return unsubscribe;
  }, [scrollY]);

  const navLinks = [
    { id: 1, name: t.nav.home, href: "/" },
    { id: 2, name: t.nav.services, href: "/services" },
    { id: 3, name: t.nav.ourWork, href: "/work" },
  ];

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);
  const handleOverlayClick = () => setIsDrawerOpen(false);

  if (isCaseStudy) {
    return (
      <header className="fixed inset-x-0 top-3 z-50 mx-4 flex justify-center md:mx-auto">
        <div className="w-full max-w-7xl rounded-2xl border border-white/20 bg-black/25 px-4 shadow-lg backdrop-blur-xl md:px-6">
          <div className="flex min-h-14 items-center justify-between gap-3 py-2">
            <button
              type="button"
              onClick={() => router.back()}
              className="inline-flex items-center gap-2 text-sm font-medium text-white transition-opacity hover:opacity-75 md:text-base"
              aria-label={t.workCase.goBack}
            >
              <ChevronLeft aria-hidden="true" className="size-4" />
              {t.workCase.goBack}
            </button>

            <div className="flex shrink-0 items-center gap-2 md:gap-3">
              <LangToggle />
              <Link
                className="inline-flex h-9 items-center justify-center rounded-full border border-white/[0.18] bg-white/10 px-4 text-sm font-medium text-white shadow-sm backdrop-blur-md transition-colors hover:bg-white/18"
                href="/contact"
              >
                {t.nav.contact}
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header
      className={cn(
        "z-50 flex justify-center transition-all duration-300",
        "sticky mx-4 md:mx-0",
        hasScrolled ? "top-6" : "top-4 mx-0",
      )}
    >
      <motion.div
        initial={{ width: INITIAL_WIDTH }}
        animate={{ width: hasScrolled ? MAX_WIDTH : INITIAL_WIDTH }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div
          className={cn(
            "mx-auto max-w-7xl rounded-2xl transition-all duration-300 xl:px-0",
            hasScrolled
              ? "px-2 border border-border backdrop-blur-lg bg-background/75"
              : "shadow-none px-7",
          )}
        >
          <div className="flex h-[56px] items-center justify-between p-4">
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <Icons.logo className="size-7 md:size-10" />
              <p className="text-lg font-semibold text-primary whitespace-nowrap">
                Desnine Studio
              </p>
            </Link>

            <NavMenu />

            <div className="flex flex-row items-center gap-2 md:gap-3 shrink-0">
              <LangToggle />

              <Link
                className="bg-secondary h-8 hidden md:flex items-center justify-center text-sm font-normal tracking-wide rounded-full text-primary-foreground dark:text-secondary-foreground w-fit px-4 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] border border-white/[0.12]"
                href="/contact"
              >
                {t.nav.contact}
              </Link>

              <ThemeToggle />

              <button
                className="md:hidden border border-border size-8 rounded-md cursor-pointer flex items-center justify-center"
                onClick={toggleDrawer}
              >
                {isDrawerOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={overlayVariants}
              transition={{ duration: 0.2 }}
              onClick={handleOverlayClick}
            />

            <motion.div
              className="fixed inset-x-0 w-[95%] mx-auto bottom-3 bg-background border border-border p-4 rounded-xl shadow-lg"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={drawerVariants}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <Link href="/" className="flex items-center gap-3">
                    <Icons.logo className="size-7 md:size-10" />
                    <p className="text-lg font-semibold text-primary">Desnine</p>
                  </Link>
                  <button
                    onClick={toggleDrawer}
                    className="border border-border rounded-md p-1 cursor-pointer"
                  >
                    <X className="size-5" />
                  </button>
                </div>

                <motion.ul
                  className="flex flex-col text-sm mb-2 border border-border rounded-md"
                  variants={drawerMenuContainerVariants}
                >
                  <AnimatePresence>
                    {navLinks.map((item) => (
                      <motion.li
                        key={item.id}
                        className="p-2.5 border-b border-border last:border-b-0"
                        variants={drawerMenuVariants}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsDrawerOpen(false)}
                          className={`underline-offset-4 hover:text-primary/80 transition-colors ${
                            activeSection === item.href.substring(1)
                              ? "text-primary font-medium"
                              : "text-primary/60"
                          }`}
                        >
                          {item.name}
                        </Link>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </motion.ul>

                <motion.div className="w-full" variants={drawerMenuVariants}>
                  <LangToggle mobile />
                </motion.div>

                <motion.div className="w-full" variants={drawerMenuVariants}>
                  <Link
                    href="/contact"
                    onClick={() => setIsDrawerOpen(false)}
                    className="w-full bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-md font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-secondary/20 hover:border-secondary/40 flex items-center justify-center"
                  >
                    {t.nav.contact}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
