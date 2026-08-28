import React from "react";
import Link from "next/link";

interface LogoProps {
  showSlogan?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function EduZoriLogo({ showSlogan = false, className = "", size = "md" }: LogoProps) {
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  };

  const textSizes = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-4xl",
  };

  return (
    <Link href="/" className={`inline-flex flex-col group transition-transform hover:scale-[1.02] ${className}`}>
      <div className="flex items-center gap-2.5">
        {/* House with heart & sun mascot SVG */}
        <div className={`relative flex items-center justify-center ${iconSizes[size]}`}>
          {/* Smiling Sun */}
          <div className="absolute -top-2 -right-2 w-5 h-5 bg-sunYellow rounded-full flex items-center justify-center shadow-sm animate-pulse">
            <span className="text-[9px]">☀️</span>
          </div>
          
          {/* House icon with soft sage roof */}
          <svg viewBox="0 0 40 40" fill="none" className="w-full h-full drop-shadow-sm">
            {/* Sage Roof */}
            <path
              d="M20 5L5 18H10V33C10 34.6569 11.3431 36 13 36H27C28.6569 36 30 34.6569 30 33V18H35L20 5Z"
              fill="#FFFDF9"
              stroke="#A8C5A1"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            {/* Coral Heart inside House */}
            <path
              d="M20 25C20 25 15 21 15 18C15 16.3431 16.3431 15 18 15C19.05 15 19.95 15.54 20.45 16.35C20.95 15.54 21.85 15 22.9 15C24.5569 15 25.9 16.3431 25.9 18C25.9 21 20.9 25 20.9 25H20Z"
              fill="#FF8F7E"
            />
            {/* Tiny Flower */}
            <circle cx="12" cy="30" r="2" fill="#FFD776" />
          </svg>
        </div>

        {/* Brand Text */}
        <div className="flex flex-col">
          <span className={`font-heading font-extrabold tracking-tight ${textSizes[size]}`}>
            <span className="text-sage">Edu</span>
            <span className="text-coral">Zori</span>
          </span>
        </div>
      </div>

      {showSlogan && (
        <span className="text-[11px] font-medium text-taupe tracking-wide uppercase mt-0.5 pl-1">
          MAI PUȚIN TIMP CU HÂRTIILLE. MAI MULT TIMP LA GRUPĂ.
        </span>
      )}
    </Link>
  );
}
