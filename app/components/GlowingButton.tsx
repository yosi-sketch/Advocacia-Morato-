"use client";

import type { ReactNode } from "react";

interface GlowingButtonProps {
  children: ReactNode;
  href?: string;
  target?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?:
    | "gold"
    | "emerald"
    | "dark"
    | "champagne"
    | "outline"
    | "white"
    | "navy"
    | "ruby";
}

export default function GlowingButton({
  children,
  href,
  target,
  onClick,
  className = "",
  size = "md",
  variant = "gold",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-[10px] tracking-[0.14em]",
    md: "px-6 py-3.5 text-xs tracking-[0.14em]",
    lg: "px-8 py-4 text-xs tracking-[0.15em]",
  }[size];

  // Haute Horlogerie styling tailored to Carvalho & Perígolo's Rose-Bronze & Metallic Copper palette
  const variantClasses = {
    // Primary Signature: Rose-Bronze / Copper Metallic with Specular Inset & Luminous Glow
    gold:
      "relative border border-[#fdeade]/85 bg-gradient-to-r from-[#964239] via-[#fab599] to-[#964239] text-[#0b0708] font-black tracking-[0.14em] " +
      "shadow-[0_6px_22px_-2px_rgba(201,106,86,0.45),inset_0_1px_1.5px_rgba(255,255,255,0.85),inset_0_-1px_1.5px_rgba(0,0,0,0.3)] " +
      "hover:-translate-y-0.5 hover:from-[#c96a56] hover:via-[#fff5f0] hover:to-[#c96a56] " +
      "hover:shadow-[0_10px_32px_-2px_rgba(228,142,120,0.7),inset_0_1px_2px_rgba(255,255,255,1)] " +
      "hover:border-[#ffffff] active:translate-y-0 active:shadow-[0_3px_12px_rgba(201,106,86,0.4)]",

    // Deep Forest Emerald Luxury with Rose-Copper Metallic Frame
    emerald:
      "relative border border-[#e48e78]/70 bg-gradient-to-r from-[#0a2315] via-[#133924] to-[#0a2315] text-[#fbf6f4] font-bold tracking-[0.14em] " +
      "shadow-[0_6px_20px_-2px_rgba(10,35,21,0.6),inset_0_1px_1px_rgba(250,181,153,0.5),inset_0_-1px_1px_rgba(0,0,0,0.4)] " +
      "hover:-translate-y-0.5 hover:border-[#fdeade] hover:from-[#0f301e] hover:via-[#194a2f] hover:to-[#0f301e] " +
      "hover:shadow-[0_10px_28px_-2px_rgba(19,57,36,0.7),0_0_20px_rgba(228,142,120,0.25)]",

    champagne:
      "relative border border-[#fab599] bg-gradient-to-r from-[#6e2524] via-[#c96a56] to-[#6e2524] text-[#fbf6f4] font-bold tracking-[0.14em] " +
      "shadow-[0_6px_20px_-2px_rgba(201,106,86,0.35),inset_0_1px_1px_rgba(255,255,255,0.5)] " +
      "hover:-translate-y-0.5 hover:from-[#964239] hover:via-[#e48e78] hover:to-[#964239] hover:shadow-[0_10px_28px_rgba(228,142,120,0.5)]",

    // Obsidian Noir Surface with Precision Rose-Bronze Rim & Top Shimmer
    dark:
      "relative border border-[#c96a56]/40 bg-[#130c0e] text-[#fbf6f4] font-bold tracking-[0.13em] " +
      "shadow-[0_6px_20px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.08)] " +
      "hover:-translate-y-0.5 hover:bg-[#1a1013] hover:border-[#e48e78] hover:text-white " +
      "hover:shadow-[0_8px_25px_rgba(228,142,120,0.25)]",

    // Outline with Rose-Bronze Accent & Glassmorphism
    outline:
      "relative border border-[#c96a56]/60 bg-[#0b0708]/60 backdrop-blur-md text-[#fab599] font-bold tracking-[0.13em] " +
      "shadow-[0_4px_16px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)] " +
      "hover:-translate-y-0.5 hover:border-[#fdeade] hover:bg-[#c96a56]/15 hover:text-white " +
      "hover:shadow-[0_6px_20px_rgba(228,142,120,0.25)]",

    white:
      "border border-[#ede2dd]/20 bg-white/10 text-white backdrop-blur-md shadow-sm hover:-translate-y-0.5 hover:bg-white/15 hover:border-white/40",
    navy:
      "border border-[#c96a56]/60 bg-gradient-to-r from-[#130c0e] via-[#1a1013] to-[#130c0e] text-[#fbf6f4] font-bold shadow-md shadow-black/60 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-lg hover:border-[#e48e78]",
    ruby:
      "border border-red-500/50 bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white font-bold shadow-md hover:-translate-y-0.5 hover:brightness-110",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2.5 rounded-lg font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#e48e78] select-none text-center cursor-pointer " +
    sizeClasses +
    " " +
    variantClasses +
    " " +
    className;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
