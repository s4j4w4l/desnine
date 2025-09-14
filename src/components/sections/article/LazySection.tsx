"use client";

import { useEffect, useRef, useState } from "react";

export default function LazySection({
  children,
  minHeight = 0,
  rootMargin = "200px",
}: {
  children: React.ReactNode;
  minHeight?: number | string;
  rootMargin?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShow(true);
          obs.disconnect();
        }
      },
      { rootMargin }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [show, rootMargin]);

  return <div ref={ref} style={show ? undefined : { minHeight }}>{show ? children : null}</div>;
}
