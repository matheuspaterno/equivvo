"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  fadeRangePx?: number;
};

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

export default function HeroLogo({
  src,
  alt,
  className,
  sizes,
  fadeRangePx = 280,
}: Props) {
  const [progress, setProgress] = useState(0);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    let rafId: number | null = null;

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        const y = window.scrollY || 0;
        setProgress(clamp(y / fadeRangePx, 0, 1));
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, [fadeRangePx, prefersReducedMotion]);

  const opacity = prefersReducedMotion ? 1 : 1 - progress;
  const translateY = prefersReducedMotion ? 0 : -progress * 10;

  return (
    <div
      className={className}
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        willChange: prefersReducedMotion ? undefined : "opacity, transform",
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="object-contain"
        sizes={sizes}
      />
    </div>
  );
}
