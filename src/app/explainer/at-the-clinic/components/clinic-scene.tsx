"use client";

import { SceneFrame } from "@/components/explainer/scene-frame";
import { assetPath } from "@/lib/asset-path";
import { CONNECTORS, HOTSPOTS } from "../data";
import type { Hotspot, Lang } from "../data";

const SCENE_IMAGES = [
  { src: "/explainer/office-background.png", alt: "Therapy clinic office background", className: "inset-0 h-full w-full object-cover" },
  { src: "/explainer/laptop.svg", alt: "Therapist laptop", className: "left-[7%] top-[46%] w-[16%]" },
  { src: "/explainer/therapist.png", alt: "Therapist", className: "left-[5%] top-[37%] w-[55%]" },
  { src: "/explainer/ipad.svg", alt: "Child tablet", className: "left-[42%] top-[46%] w-[20%]" },
  { src: "/explainer/child.png", alt: "Child", className: "left-[42%] top-[37%] w-[55%]" },
] as const;

export function ClinicScene({
  lang,
  dir,
  onSelect,
}: {
  lang: Lang;
  dir: "rtl" | "ltr";
  onSelect: (hotspot: Hotspot) => void;
}) {
  return (
    <SceneFrame>
      {/* eslint-disable @next/next/no-img-element -- static illustration assets, no next/image optimization needed */}
      {SCENE_IMAGES.map((img) => (
        <img key={img.src} src={assetPath(img.src)} alt={img.alt} className={`pointer-events-none absolute select-none ${img.className}`} />
      ))}
      {/* eslint-enable @next/next/no-img-element */}

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
    </SceneFrame>
  );
}
