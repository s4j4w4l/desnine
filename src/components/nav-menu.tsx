"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

export function NavMenu() {
  const pathname = usePathname();
  const { t } = useLang();

  const navs = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.services, href: "/services" },
    { name: t.nav.ourWork, href: "/work" },
    { name: "About", href: "/about" },
  ];
  const ref = useRef<HTMLUListElement>(null);
  const [bubble, setBubble] = useState({ left: 0, width: 0 });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const activeLink = ref.current?.querySelector(
      `a[href="${pathname}"]`
    )?.parentElement;

    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink;
      setBubble({ left: offsetLeft, width: offsetWidth });
      setReady(true);
    }
  }, [pathname]);

  return (
    <div className="flex-1 min-w-0 hidden md:flex items-center justify-center">
      <ul
        ref={ref}
        className="relative flex w-fit rounded-full h-11 px-2 items-center justify-center"
      >
        {navs.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li
              key={item.name}
              className={`z-10 cursor-pointer h-full flex items-center justify-center px-6 py-2 text-sm font-medium tracking-tight whitespace-nowrap transition-colors duration-200 ${
                isActive ? "text-primary" : "text-primary/60 hover:text-primary"
              }`}
            >
              <Link href={item.href}>{item.name}</Link>
            </li>
          );
        })}

        {ready && (
          <motion.li
            className="absolute my-1.5 rounded-full bg-accent/60 border border-border h-8"
            animate={{ left: bubble.left, width: bubble.width }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
      </ul>
    </div>
  );
}
