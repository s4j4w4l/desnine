"use client";

import { siteConfig } from "@/lib/config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface NavItem {
  name: string;
  href: string;
}

const navs: NavItem[] = siteConfig.nav.links;

export function NavMenu() {
  const pathname = usePathname();
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
    <div className="w-full hidden md:block">
      <ul
        ref={ref}
        className="relative mx-auto flex w-fit rounded-full h-11 px-2 items-center justify-center"
      >
        {navs.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li
              key={item.name}
              className={`z-10 cursor-pointer h-full flex items-center justify-center px-4 py-2 text-sm font-medium tracking-tight transition-colors duration-200 ${
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
