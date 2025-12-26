// ✅ Create this file: /src/components/LockPageTo2D.tsx
"use client";

import { useEffect } from "react";

export default function LockPageTo2D() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      html, body {
        perspective: none !important;
        transform-style: flat !important;
      }

      * {
        transform-style: flat !important;
        backface-visibility: hidden !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
}
