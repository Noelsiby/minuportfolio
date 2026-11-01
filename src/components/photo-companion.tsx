"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { usePreloader } from "./preloader";
import { useMediaQuery } from "@/hooks/use-media-query";

// Minu's photo follows the visitor down the page, changing shape in every
// section after the hero: a glowing avatar beside the keyboard,
// a polaroid next to the experience timeline, a graduate in credentials...

type SectionId =
  | "hero"
  | "skills"
  | "experience"
  | "projects"
  | "credentials"
  | "contact";

const SECTION_IDS: SectionId[] = [
  "hero",
  "skills",
  "experience",
  "projects",
  "credentials",
  "contact",
];

type Look = {
  left: string;
  top: string;
  width: number;
  height: number;
  radius: string;
  rotate: number;
  polaroid?: boolean;
  bubble?: string;
  // which side of the photo the speech bubble sits on
  bubbleSide?: "left" | "right" | "below";
  cap?: boolean;
  hidden?: boolean;
};

const ARCH = "999px 999px 22px 22px";
const CIRCLE = "999px 999px 999px 999px";
const POLAROID = "4px 4px 4px 4px";

const DESKTOP: Record<SectionId, Look> = {
  // the hero has its own big portrait, so the companion waits there unseen
  hero: {
    left: "70vw",
    top: "40vh",
    width: 128,
    height: 128,
    radius: CIRCLE,
    rotate: 0,
    hidden: true,
  },
  skills: {
    left: "6vw",
    top: "66vh",
    width: 128,
    height: 128,
    radius: CIRCLE,
    rotate: 0,
    bubble: "Tap a key — that's my toolkit ✨",
    bubbleSide: "right",
  },
  experience: {
    left: "81vw",
    top: "30vh",
    width: 190,
    height: 236,
    radius: POLAROID,
    rotate: 6,
    polaroid: true,
  },
  projects: {
    left: "4vw",
    top: "70vh",
    width: 112,
    height: 112,
    radius: CIRCLE,
    rotate: -4,
    bubble: "Click a card to see how I built it 👀",
    bubbleSide: "right",
  },
  credentials: {
    left: "3.5vw",
    top: "34vh",
    width: 120,
    height: 120,
    radius: CIRCLE,
    rotate: 0,
    cap: true,
    bubble: "MCA in progress 🎓",
    bubbleSide: "below",
  },
  contact: {
    left: "60vw",
    top: "75vh",
    width: 112,
    height: 112,
    radius: CIRCLE,
    rotate: 3,
    bubble: "Let's work together 💌",
    bubbleSide: "right",
  },
};

const MOBILE: Record<SectionId, Look> = {
  hero: { left: "80vw", top: "84vh", width: 58, height: 58, radius: CIRCLE, rotate: 0, hidden: true },
  skills: { left: "80vw", top: "84vh", width: 58, height: 58, radius: CIRCLE, rotate: 0 },
  experience: { left: "79vw", top: "82vh", width: 62, height: 76, radius: POLAROID, rotate: 6, polaroid: true },
  projects: { left: "80vw", top: "84vh", width: 58, height: 58, radius: CIRCLE, rotate: -4 },
  credentials: { left: "80vw", top: "84vh", width: 58, height: 58, radius: CIRCLE, rotate: 0, cap: true },
  contact: { left: "80vw", top: "84vh", width: 58, height: 58, radius: CIRCLE, rotate: 0 },
};

// The section whose top has passed the middle of the viewport is "active".
function useActiveSection(): SectionId {
  const [active, setActive] = useState<SectionId>("hero");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const middle = window.innerHeight * 0.5;
      let current: SectionId = "hero";
      for (const id of SECTION_IDS) {
        const el =
          document.getElementById(id) ?? document.getElementById(`${id}-section`);
        if (!el) continue;
        const section = el.closest("section") ?? el;
        if (section.getBoundingClientRect().top <= middle) current = id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return active;
}

const SPARKLES = [
  { x: -18, y: -10, size: 16, delay: 0 },
  { x: 1.05, y: 0.15, size: 12, delay: 0.12 },
  { x: 0.85, y: 1.02, size: 14, delay: 0.24 },
];

const PhotoCompanion = () => {
  const { isLoading } = usePreloader();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const reduceMotion = useReducedMotion();
  const active = useActiveSection();

  const look = (isDesktop ? DESKTOP : MOBILE)[active];
  const morph = reduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 70, damping: 16, mass: 0.9 };
  const pad = look.polaroid ? (isDesktop ? 10 : 4) : 0;
  const captionSpace = look.polaroid ? (isDesktop ? 34 : 10) : 0;

  if (isLoading) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed z-[40] pointer-events-none"
      initial={{ opacity: 0, scale: 0.6, filter: "blur(12px)" }}
      animate={{
        opacity: look.hidden ? 0 : 1,
        scale: look.hidden ? 0.6 : 1,
        filter: look.hidden ? "blur(12px)" : "blur(0px)",
        left: look.left,
        top: look.top,
        width: look.width,
        height: look.height,
        rotate: look.rotate,
      }}
      transition={{
        ...morph,
        opacity: { duration: 0.6 },
        scale: { duration: 0.6 },
        filter: { duration: 0.6 },
      }}
    >
      {/* soft rose glow behind the photo */}
      <motion.div
        className="absolute -inset-6 rounded-full bg-[#e8b4a0]/20 blur-2xl"
        animate={{ opacity: look.polaroid ? 0 : 1 }}
      />

      {/* spinning rose-gold halo */}
      <motion.div
        className="absolute -inset-[3px] rose-halo"
        animate={{ borderRadius: look.radius, opacity: look.polaroid ? 0 : 1 }}
        transition={morph}
      />

      {/* the frame: transparent for arch/circle, ivory paper for the polaroid */}
      <motion.div
        className={
          "absolute inset-0 overflow-hidden shadow-2xl shadow-black/50 " +
          (look.hidden ? "pointer-events-none" : "pointer-events-auto")
        }
        animate={{
          borderRadius: look.radius,
          backgroundColor: look.polaroid ? "#fbf6ef" : "rgba(251,246,239,0)",
          paddingTop: pad,
          paddingLeft: pad,
          paddingRight: pad,
          paddingBottom: pad + captionSpace,
        }}
        whileHover={reduceMotion ? undefined : { scale: 1.04 }}
        transition={morph}
      >
        <motion.div
          className="relative w-full h-full overflow-hidden"
          animate={{ borderRadius: look.polaroid ? POLAROID : look.radius }}
          transition={morph}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/minu-headshot-studio.webp"
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: "55% 16%" }}
            draggable={false}
          />
          {/* warm champagne wash so the photo sits in the palette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#3b1830]/40 via-transparent to-[#f3dcc0]/10 mix-blend-soft-light" />
        </motion.div>

        <AnimatePresence>
          {look.polaroid && isDesktop && (
            <motion.p
              key="caption"
              className="absolute bottom-2 left-0 right-0 text-center font-display italic text-[15px] text-[#3b1830]"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.35 } }}
              exit={{ opacity: 0 }}
            >
              always learning ✍️
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* graduation cap for the credentials section */}
      <AnimatePresence>
        {look.cap && (
          <motion.svg
            key="cap"
            viewBox="0 0 64 44"
            className="absolute left-1/2 -top-[30%] drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]"
            style={{ width: look.width * 0.62 }}
            initial={{ opacity: 0, y: -40, x: "-50%", rotate: -30 }}
            animate={{ opacity: 1, y: 0, x: "-50%", rotate: -12 }}
            exit={{ opacity: 0, y: -30, rotate: 20 }}
            transition={{ type: "spring", stiffness: 180, damping: 12, delay: 0.3 }}
          >
            <defs>
              <linearGradient id="cap-rose" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f3dcc0" />
                <stop offset="55%" stopColor="#e8b4a0" />
                <stop offset="100%" stopColor="#c08497" />
              </linearGradient>
            </defs>
            {/* skull cap */}
            <path d="M16 20 v12 c0 4 32 4 32 0 v-12 z" fill="#2a1428" stroke="url(#cap-rose)" strokeWidth="1.5" />
            {/* mortarboard */}
            <path d="M32 4 L62 16 L32 28 L2 16 Z" fill="url(#cap-rose)" />
            {/* tassel */}
            <path d="M32 16 L52 22 V34" fill="none" stroke="#f3dcc0" strokeWidth="1.6" />
            <circle cx="52" cy="36" r="2.6" fill="#f3dcc0" />
          </motion.svg>
        )}
      </AnimatePresence>

      {/* sparkle burst every time the photo changes section */}
      {!reduceMotion &&
        SPARKLES.map((s, i) => (
          <motion.span
            key={`${active}-${i}`}
            className="absolute text-[#f3dcc0] drop-shadow-[0_0_6px_rgba(232,180,160,0.9)]"
            style={{
              left: s.x < 0 ? s.x : `${s.x * 100}%`,
              top: s.y < 0 ? s.y : `${s.y * 100}%`,
              fontSize: s.size,
            }}
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1.3, 0], rotate: 90 }}
            transition={{ duration: 1.1, delay: 0.5 + s.delay, ease: "easeOut" }}
          >
            ✦
          </motion.span>
        ))}

      {/* speech bubble — outer div places it, inner one animates */}
      <AnimatePresence mode="wait">
        {look.bubble && isDesktop && (
          <div
            key={active}
            className={
              "absolute " +
              (look.bubbleSide === "right"
                ? "left-[calc(100%+18px)] top-1/2 -translate-y-1/2"
                : look.bubbleSide === "left"
                  ? "right-[calc(100%+18px)] top-1/2 -translate-y-1/2"
                  : "left-1/2 -translate-x-1/2 top-[calc(100%+16px)]")
            }
          >
            <motion.div
              className={
                "whitespace-nowrap rounded-2xl border border-[#e8b4a0]/40 bg-[#1a0f1c]/80 " +
                "backdrop-blur-md px-4 py-2 text-sm text-[#f3dcc0] shadow-lg"
              }
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, transition: { delay: 0.55, duration: 0.35 } }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.15 } }}
            >
              {look.bubble}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PhotoCompanion;
