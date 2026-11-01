"use client";

import React from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";

// Editorial hero portrait: Minu's studio cutout standing in a glowing
// rose-gold arch, her head breaking out of the frame, with floating glass
// badges carrying real numbers from her work.

type Chip = {
  icon: string;
  label: string;
  sub: string;
  // badges sit low, on her shoulders, so they never cover her face
  className: string;
  compactClassName: string;
  delay: number;
  float: number;
};

const CHIPS: Chip[] = [
  {
    icon: "🎯",
    label: "80% accuracy",
    sub: "churn prediction model",
    className: "right-[-6%] top-[74%]",
    compactClassName: "right-[-30%] top-[78%]",
    delay: 2.1,
    float: 4.2,
  },
  {
    icon: "🐍",
    label: "Python · SQL",
    sub: "7,043 records analysed",
    className: "left-[-14%] top-[56%]",
    compactClassName: "left-[-30%] top-[52%]",
    delay: 2.3,
    float: 3.9,
  },
];

const HeroPortrait = ({ compact = false }: { compact?: boolean }) => {
  const reduceMotion = useReducedMotion();

  // gentle 3D tilt that follows the cursor
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 80, damping: 18 });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), { stiffness: 80, damping: 18 });
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      className={cn(
        "relative mx-auto select-none",
        compact ? "w-[190px] h-[250px]" : "w-[min(30vw,400px)] aspect-[4/5.2]"
      )}
      style={{ perspective: 1000 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        {/* ambient glow */}
        <motion.div
          className="absolute -inset-[12%] rounded-full bg-[radial-gradient(circle_at_50%_55%,rgba(232,180,160,0.35),rgba(192,132,151,0.12)_45%,transparent_70%)] blur-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.6 }}
        />

        {/* offset outline arch, drifting slightly */}
        <motion.div
          className="absolute inset-x-[6%] top-[14%] bottom-0 rounded-t-full border border-[#e8b4a0]/50"
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={
            reduceMotion
              ? { opacity: 1, x: 14, y: -14 }
              : { opacity: 1, x: [14, 20, 14], y: [-14, -20, -14] }
          }
          transition={{
            opacity: { duration: 1, delay: 1 },
            x: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
          }}
        />

        {/* the filled arch "studio backdrop" */}
        <motion.div
          className="absolute inset-x-[6%] top-[14%] bottom-0 rounded-t-full overflow-hidden"
          style={{
            background:
              "radial-gradient(circle at 50% 38%, #d8a596 0%, #9d6276 38%, #4a2140 72%, #24101f 100%)",
          }}
          initial={{ opacity: 0, scaleY: 0.2, transformOrigin: "bottom" }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 1.1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* soft studio light sweep */}
          {!reduceMotion && (
            <motion.div
              className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12"
              initial={{ x: "-120%" }}
              animate={{ x: "260%" }}
              transition={{ duration: 2.4, delay: 2.2, repeat: Infinity, repeatDelay: 6 }}
            />
          )}
        </motion.div>

        {/* thin rose-gold rim on the arch */}
        <motion.div
          className="absolute inset-x-[6%] top-[14%] bottom-0 rounded-t-full ring-1 ring-inset ring-[#f3dcc0]/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        />

        {/* Minu — rises into the frame, head breaking out of the arch */}
        <motion.img
          src="/assets/minu-headshot-cutout.webp"
          alt="Minu Mukesh K"
          draggable={false}
          className="absolute left-1/2 bottom-0 w-[98%] max-w-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)]"
          style={{ x: "-50%", translateZ: 40 }}
          initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* fade her into the page at the bottom */}
        <div className="absolute inset-x-0 -bottom-px h-[16%] bg-gradient-to-t from-background to-transparent pointer-events-none" />

        {/* floating glass badges */}
        {CHIPS.map((chip) => (
          <motion.div
            key={chip.label}
            className={cn("absolute", compact ? chip.compactClassName : chip.className)}
            style={{ translateZ: 80 }}
            initial={{ opacity: 0, scale: 0.6, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 160, damping: 14, delay: chip.delay }}
          >
            <motion.div
              className={cn(
                "flex items-center gap-2 rounded-2xl border border-[#e8b4a0]/30",
                "bg-[#1a0f1c]/70 backdrop-blur-md shadow-xl shadow-black/40",
                compact ? "px-2.5 py-1.5" : "px-2.5 py-1.5 xl:px-3.5 xl:py-2.5"
              )}
              animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: chip.float, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className={compact ? "text-base" : "text-base xl:text-xl"}>{chip.icon}</span>
              <span className="flex flex-col leading-tight">
                <span className={cn("font-semibold text-[#f3dcc0]", compact ? "text-[11px]" : "text-[11px] xl:text-sm")}>
                  {chip.label}
                </span>
                <span className={cn("text-[#c9a9b4]", compact ? "text-[9px]" : "text-[9px] xl:text-[11px]")}>
                  {chip.sub}
                </span>
              </span>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default HeroPortrait;
