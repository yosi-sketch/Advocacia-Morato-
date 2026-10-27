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

  // Haute Horlogerie styling tailored to Morato Advocacia's Imperial Emerald & Metallic Gold palette
  const variantClasses = {
    // Primary Signature: Polished Imperial Metallic Gold with Specular Inset & Luminous Glow
    gold:
      "relative border border-[#f5e3b5]/85 bg-gradient-to-r from-[#705018] via-[#dfba6a] to-[#705018] text-[#071510] font-black tracking-[0.14em] " +
      "shadow-[0_6px_22px_-2px_rgba(212,175,55,0.45),inset_0_1px_1.5px_rgba(255,255,255,0.85),inset_0_-1px_1.5px_rgba(0,0,0,0.3)] " +
      "hover:-translate-y-0.5 hover:from-[#c59a3f] hover:via-[#fff8e7] hover:to-[#c59a3f] " +
      "hover:shadow-[0_10px_32px_-2px_rgba(223,186,106,0.7),inset_0_1px_2px_rgba(255,255,255,1)] " +
      "hover:border-[#ffffff] active:translate-y-0 active:shadow-[0_3px_12px_rgba(212,175,55,0.4)]",

    // Deep Forest Emerald Luxury with Imperial Gold Metallic Frame
    emerald:
      "relative border border-[#dfba6a]/70 bg-gradient-to-r from-[#071f16] via-[#144532] to-[#071f16] text-[#fbfaf6] font-bold tracking-[0.14em] " +
      "shadow-[0_6px_20px_-2px_rgba(7,31,22,0.6),inset_0_1px_1px_rgba(223,186,106,0.5),inset_0_-1px_1px_rgba(0,0,0,0.4)] " +
      "hover:-translate-y-0.5 hover:border-[#f5e3b5] hover:from-[#0f3526] hover:via-[#1d6d4c] hover:to-[#0f3526] " +
      "hover:shadow-[0_10px_28px_-2px_rgba(23,87,61,0.7),0_0_20px_rgba(223,186,106,0.25)]",

    champagne:
      "relative border border-[#dfba6a] bg-gradient-to-r from-[#422e0b] via-[#c59a3f] to-[#422e0b] text-[#fbfaf6] font-bold tracking-[0.14em] " +
      "shadow-[0_6px_20px_-2px_rgba(212,175,55,0.35),inset_0_1px_1px_rgba(255,255,255,0.5)] " +
      "hover:-translate-y-0.5 hover:from-[#705018] hover:via-[#e8ce8c] hover:to-[#705018] hover:shadow-[0_10px_28px_rgba(223,186,106,0.5)]",

    // Emerald Noir Surface with Precision Gold Rim & Top Shimmer
    dark:
      "relative border border-[#c59a3f]/40 bg-[#0d211a] text-[#fbfaf6] font-bold tracking-[0.13em] " +
      "shadow-[0_6px_20px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.08)] " +
      "hover:-translate-y-0.5 hover:bg-[#122b22] hover:border-[#dfba6a] hover:text-white " +
      "hover:shadow-[0_8px_25px_rgba(223,186,106,0.25)]",

    // Outline with Gold Accent & Glassmorphism
    outline:
      "relative border border-[#c59a3f]/60 bg-[#071510]/60 backdrop-blur-md text-[#dfba6a] font-bold tracking-[0.13em] " +
      "shadow-[0_4px_16px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)] " +
      "hover:-translate-y-0.5 hover:border-[#f5e3b5] hover:bg-[#c59a3f]/15 hover:text-white " +
      "hover:shadow-[0_6px_20px_rgba(223,186,106,0.25)]",

    white:
      "border border-[#f0ede4]/20 bg-white/10 text-white backdrop-blur-md shadow-sm hover:-translate-y-0.5 hover:bg-white/15 hover:border-white/40",
    navy:
      "border border-[#c59a3f]/60 bg-gradient-to-r from-[#0d211a] via-[#122b22] to-[#0d211a] text-[#fbfaf6] font-bold shadow-md shadow-black/60 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-lg hover:border-[#dfba6a]",
    ruby:
      "border border-red-500/50 bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white font-bold shadow-md hover:-translate-y-0.5 hover:brightness-110",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2.5 rounded-lg font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#dfba6a] select-none text-center cursor-pointer " +
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
