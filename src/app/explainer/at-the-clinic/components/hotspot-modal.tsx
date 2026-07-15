"use client";

import type { Hotspot, Lang } from "../data";

export function HotspotModal({
  hotspot,
  lang,
  dir,
  videoSoonLabel,
  onClose,
}: {
  hotspot: Hotspot;
  lang: Lang;
  dir: "rtl" | "ltr";
  videoSoonLabel: string;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-6" onClick={onClose}>
      <div
        dir={dir}
        className="w-full max-w-[560px] rounded-3xl bg-white p-7 shadow-[0_30px_90px_rgba(0,0,0,0.28)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <h2 className="text-2xl font-bold">{hotspot.title[lang]}</h2>
          <button
            type="button"
            onClick={onClose}
            className="grid h-9 w-9 place-items-center rounded-full bg-[#eaf4f2] text-[#123B49]"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <p className="mt-2 text-[#4a6a68]">{hotspot.text[lang]}</p>
        <div className="mt-4 flex aspect-video items-center justify-center rounded-xl bg-[#0f2422] text-sm text-white/70">
          {videoSoonLabel}
        </div>
      </div>
    </div>
  );
}
