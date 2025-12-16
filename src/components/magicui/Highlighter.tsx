"use client";

import { useEffect, useRef, useState } from "react";
import type React from "react";
import { annotate } from "rough-notation";

type AnnotationAction =
  | "highlight"
  | "underline"
  | "box"
  | "circle"
  | "strike-through"
  | "crossed-off"
  | "bracket";

interface HighlighterProps {
  children: React.ReactNode;
  action?: AnnotationAction;
  color?: string;
  strokeWidth?: number;
  animationDuration?: number;
  iterations?: number;
  padding?: number;
  multiline?: boolean;
  isView?: boolean; // if true: show only when in view
}

function useElementInView<T extends Element>(
  ref: React.RefObject<T | null>,
  opts?: { once?: boolean; rootMargin?: string }
) {
  const { once = true, rootMargin = "-10%" } = opts ?? {};
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (inView && once) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { root: null, rootMargin, threshold: 0.01 }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, once, rootMargin]);

  return inView;
}

export function Highlighter({
  children,
  action = "highlight",
  color = "#ffd1dc",
  strokeWidth = 1.5,
  animationDuration = 600,
  iterations = 2,
  padding = 2,
  multiline = true,
  isView = false,
}: HighlighterProps) {
  const elementRef = useRef<HTMLSpanElement | null>(null);
  const annotationRef = useRef<ReturnType<typeof annotate> | null>(null);

  const inView = useElementInView(elementRef, { once: true, rootMargin: "-10%" });
  const shouldShow = !isView || inView;

  useEffect(() => {
    if (!shouldShow) return;

    const el = elementRef.current;
    if (!el) return;

    if (annotationRef.current) {
      try {
        annotationRef.current.remove();
      } catch {}
      annotationRef.current = null;
    }

    const annotation = annotate(el, {
      type: action,
      color,
      strokeWidth,
      animationDuration,
      iterations,
      padding,
      multiline,
    });

    annotationRef.current = annotation;
    annotation.show();

    const ro = new ResizeObserver(() => {
      if (!annotationRef.current) return;
      annotationRef.current.hide();
      annotationRef.current.show();
    });

    ro.observe(el);

    return () => {
      ro.disconnect();
      if (annotationRef.current) {
        try {
          annotationRef.current.remove();
        } catch {}
        annotationRef.current = null;
      }
    };
  }, [
    shouldShow,
    action,
    color,
    strokeWidth,
    animationDuration,
    iterations,
    padding,
    multiline,
  ]);

  return (
    <span ref={elementRef} className="relative inline-block bg-transparent">
      {children}
    </span>
  );
}
