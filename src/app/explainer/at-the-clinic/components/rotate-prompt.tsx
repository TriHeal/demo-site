"use client";

import { Smartphone } from "lucide-react";
import type { Lang } from "../data";

export function RotatePrompt({ lang }: { lang: Lang }) {
  return (
    <div className="hidden h-full flex-col items-center justify-center bg-gradient-to-b from-[#eaf6f3] via-[#f7fbfa] to-[#f7fbfa] p-6 text-center max-md:portrait:flex">
      <div className="flex w-full max-w-xs flex-col items-center gap-5 rounded-[28px] bg-white px-7 py-9 shadow-[0_18px_60px_rgba(18,59,73,0.12)]">
        {/* eslint-disable-next-line @next/next/no-img-element -- static logo asset */}
        <img src="/tri-heal-logo.svg" alt="Tri-Heal logo" className="h-14 w-auto object-contain" />

        <div className="grid h-16 w-16 place-items-center rounded-full bg-[#eaf6f3]">
          <Smartphone
            className="h-8 w-8 animate-[tiltPhone_2.4s_ease-in-out_infinite] text-[#168B8F]"
            strokeWidth={1.75}
          />
        </div>

        <div className="space-y-1.5">
          <p className="text-lg font-bold text-[#123B49]">
            {lang === "he" ? "סובבו את המכשיר לרוחב" : "Rotate your device to landscape"}
          </p>
          <p className="text-sm leading-relaxed text-[#4a6a68]">
            {lang === "he"
              ? "כדי לצפות בתהליך בצורה הטובה ביותר, החזיקו את הטלפון לרוחב."
              : "For the best view of the interactive flow, hold your phone sideways."}
          </p>
        </div>
      </div>
    </div>
  );
}
