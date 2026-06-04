/*
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";

export function HeroVideoSection() {
  return (
    <div className="relative px-6 mt-10">
      <div className="relative size-full shadow-xl rounded-2xl overflow-hidden">
        <HeroVideoDialog
          className="block dark:hidden"
          animationStyle="from-center"
          // ✅ just pass the normal YouTube URL
          videoSrc="https://www.youtube.com/watch?v=i3PqLmo61RY"
          thumbnailAlt="Hero Video"
        />
        <HeroVideoDialog
          className="hidden dark:block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/watch?v=i3PqLmo61RY"
          thumbnailAlt="Hero Video"
        />
      </div>
    </div>
  );
}
*/

// /src/components/sections/hero-video-section.tsx
"use client";

import { useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function toLoopingYouTubeEmbed(url: string) {
  try {
    const u = new URL(url);
    let id = "";

    if (u.hostname.includes("youtu.be")) id = u.pathname.replace("/", "");
    else if (u.searchParams.get("v")) id = u.searchParams.get("v") || "";
    else if (u.pathname.includes("/embed/")) id = u.pathname.split("/").pop() || "";

    if (!id) return url;

    const embed = new URL(`https://www.youtube.com/embed/${id}`);
    embed.searchParams.set("autoplay", "1");
    embed.searchParams.set("mute", "1");
    embed.searchParams.set("playsinline", "1");
    embed.searchParams.set("loop", "1");
    embed.searchParams.set("playlist", id);
    embed.searchParams.set("controls", "0");
    embed.searchParams.set("modestbranding", "1");
    embed.searchParams.set("rel", "0");

    return embed.toString();
  } catch {
    return url;
  }
}

export function HeroVideoSection() {
  const embedSrc = useMemo(
    () => toLoopingYouTubeEmbed("https://www.youtube.com/watch?v=i3PqLmo61RY"),
    []
  );

  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 0.08], [0.72, 1]);
const y = useTransform(scrollYProgress, [0, 0.08], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.08], [0.75, 1]);

  return (
    <div className="relative mt-10 px-6">
      <motion.div
        style={{ scale, y, opacity }}
        className="mx-auto w-full max-w-6xl origin-top"
      >
        <div className="relative size-full overflow-hidden rounded-2xl shadow-xl">
          <div className="relative isolate z-[1] aspect-video w-full overflow-hidden rounded-2xl border-2 border-white">
            <iframe
              title="Hero video"
              src={embedSrc}
              className="size-full"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}