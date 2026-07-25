"use client";

import { useEffect, useState } from "react";
import { assetPath } from "@/lib/asset-path";
import type { Hotspot, Lang } from "./types";

export function HotspotModal({
  hotspot,
  lang,
  dir,
  videoSoonLabel,
  legendLabel = "מקרא",
  onClose,
}: {
  hotspot: Hotspot;
  lang: Lang;
  dir: "rtl" | "ltr";
  videoSoonLabel: string;
  legendLabel?: string;
  onClose: () => void;
}) {
  const hasLegend = Boolean(hotspot.legend?.length);

  const videoOptions =
    hotspot.videos ??
    (hotspot.video
      ? [{ src: hotspot.video, label: { he: "", en: "" } }]
      : []);

  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

  useEffect(() => {
    setSelectedVideoIndex(0);
  }, [hotspot.id]);

  const selectedVideo = videoOptions[selectedVideoIndex]?.src;
  const hasMultipleVideos = videoOptions.length > 1;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4 [@media(max-height:520px)]:p-2"
      onClick={onClose}
    >
      <div
        dir={dir}
        className={
          hasLegend
            ? "flex max-h-[calc(100dvh-2rem)] w-full max-w-4xl flex-col overflow-hidden rounded-3xl bg-white p-5 shadow-[0_30px_90px_rgba(0,0,0,0.28)] [@media(max-height:520px)]:max-h-[calc(100dvh-1rem)] [@media(max-height:520px)]:rounded-2xl [@media(max-height:520px)]:p-3"
            : "flex max-h-[calc(100dvh-2rem)] w-full max-w-[560px] flex-col overflow-hidden rounded-3xl bg-white p-6 shadow-[0_30px_90px_rgba(0,0,0,0.28)] [@media(max-height:520px)]:max-h-[calc(100dvh-1rem)] [@media(max-height:520px)]:rounded-2xl [@media(max-height:520px)]:p-3"
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex shrink-0 items-start justify-between gap-3">
          <div className="min-w-0">
            <h2 className="text-2xl font-bold [@media(max-height:520px)]:text-lg">{hotspot.title[lang]}</h2>
            <p className="mt-1 text-[#4a6a68] [@media(max-height:520px)]:hidden">{hotspot.text[lang]}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#eaf4f2] text-[#123B49] [@media(max-height:520px)]:h-8 [@media(max-height:520px)]:w-8"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {hasMultipleVideos ? (
          <div className="mt-4 flex shrink-0 flex-wrap gap-2 [@media(max-height:520px)]:mt-2">
            {videoOptions.map((video, index) => (
              <button
                key={video.src}
                type="button"
                onClick={() => setSelectedVideoIndex(index)}
                className={
                  index === selectedVideoIndex
                    ? "rounded-full bg-[#123B49] px-4 py-2 text-sm font-semibold text-white"
                    : "rounded-full bg-[#eaf4f2] px-4 py-2 text-sm font-semibold text-[#123B49] hover:bg-[#dcece9]"
                }
              >
                {video.label[lang]}
              </button>
            ))}
          </div>
        ) : null}

        <div
          className={
            hasLegend
              ? "mt-3 flex min-h-0 flex-1 flex-row items-stretch gap-3 [@media(max-height:520px)]:mt-2"
              : "mt-3 flex min-h-0 flex-1 flex-col [@media(max-height:520px)]:mt-2"
          }
        >
          <div
            className={
              hasLegend
                ? "min-w-0 flex-1 self-center overflow-hidden rounded-xl bg-[#0f2422]"
                : "w-full shrink-0 overflow-hidden rounded-xl bg-[#0f2422]"
            }
          >
            {selectedVideo ? (
              <video
                key={selectedVideo}
                className="aspect-video w-full"
                controls
                playsInline
                preload="metadata"
              >
                <source
                  src={assetPath(selectedVideo)}
                  type={selectedVideo.endsWith(".webm") ? "video/webm" : "video/mp4"}
                />
              </video>
            ) : (
              <div className="flex aspect-video w-full items-center justify-center text-sm text-white/70">
                {videoSoonLabel}
              </div>
            )}
          </div>

          {hasLegend && hotspot.legend ? (
            <section
              className="flex min-h-0 w-[46%] shrink-0 flex-col"
              aria-label={legendLabel}
            >
              <h3 className="mb-2 shrink-0 text-sm font-semibold tracking-wide text-[#123B49] [@media(max-height:520px)]:mb-1 [@media(max-height:520px)]:text-xs">
                {legendLabel}
              </h3>
              <ul className="grid min-h-0 flex-1 grid-cols-1 gap-y-2 overflow-y-auto px-1 sm:grid-cols-2 sm:gap-x-3">
                {hotspot.legend.map((item) => (
                  <li key={item.color} className="flex items-start gap-2">
                    <span
                      className="mt-1 h-3 w-3 shrink-0 rounded-sm"
                      style={{ backgroundColor: item.color }}
                      aria-hidden
                    />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold leading-tight text-[#123B49] [@media(max-height:520px)]:text-xs">
                        {item.label[lang]}
                      </p>
                      <p className="text-xs leading-snug text-[#4a6a68] [@media(max-height:520px)]:text-[11px] [@media(max-height:520px)]:leading-tight">
                        {item.description[lang]}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      </div>
    </div>
  );
}
