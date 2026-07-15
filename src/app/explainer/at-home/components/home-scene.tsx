"use client";

import { assetPath } from "@/lib/asset-path";
import { CONNECTORS, HOTSPOTS } from "../data";
import type { Hotspot, Lang } from "../data";

export function HomeScene({
  lang,
  dir,
  onSelect,
}: {
  lang: Lang;
  dir: "rtl" | "ltr";
  onSelect: (hotspot: Hotspot) => void;
}) {
  return (
    <main className="relative mx-auto aspect-[3/2] max-h-full min-h-0 w-full max-w-[1440px] flex-1 overflow-hidden rounded-[28px] bg-white shadow-[0_18px_60px_rgba(18,59,73,0.15)]">
      {/* eslint-disable-next-line @next/next/no-img-element -- static illustration asset */}
      <img
        src={assetPath("/explainer-home/living-room-background.png")}
        alt="Parent and child at home, sitting together with a tablet"
        className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
      />

      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full">
        {CONNECTORS.map((c, i) => (
          <line
            key={i}
            x1={c.from.x}
            y1={c.from.y}
            x2={c.to.x}
            y2={c.to.y}
            stroke="#123B49"
            strokeWidth={0.18}
            strokeDasharray="1.4 1.1"
            strokeLinecap="round"
            opacity={0.55}
          />
        ))}
      </svg>

      {HOTSPOTS.map((h) => (
        <button
          key={h.id}
          type="button"
          onClick={() => onSelect(h)}
          dir={dir}
          className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
          style={{ left: `${h.x}%`, top: `${h.y}%` }}
        >
          <span className="grid h-11 w-11 place-items-center rounded-full border-4 border-white/90 bg-[#168B8F] text-xl font-extrabold text-white shadow-[0_4px_14px_rgba(0,0,0,0.18)] transition hover:scale-108 [@media(max-height:520px)]:h-7 [@media(max-height:520px)]:w-7 [@media(max-height:520px)]:border-2 [@media(max-height:520px)]:text-sm">
            {h.id}
          </span>
          <span className="mt-2 min-w-[130px] rounded-2xl bg-white px-3.5 py-2.5 text-center text-sm font-bold shadow-[0_8px_24px_rgba(18,59,73,0.16)] max-[800px]:hidden [@media(max-height:520px)]:hidden">
            {h.badge[lang]}
          </span>
        </button>
      ))}
    </main>
  );
}
