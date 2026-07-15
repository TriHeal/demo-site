"use client";

import { useState } from "react";
import { ClinicScene } from "./components/clinic-scene";
import { HotspotModal } from "./components/hotspot-modal";
import { LangToggle } from "./components/lang-toggle";
import { RotatePrompt } from "./components/rotate-prompt";
import { STRINGS } from "./data";
import type { Hotspot, Lang } from "./data";

export default function AtTheClinicPage() {
  const [active, setActive] = useState<Hotspot | null>(null);
  const [lang, setLang] = useState<Lang>("he");
  const dir = lang === "he" ? "rtl" : "ltr";
  const s = STRINGS[lang];

  return (
    <div dir={dir} className="h-dvh overflow-hidden bg-[#f7fbfa] text-[#123B49]">
      {/* Small-screen portrait: block the layout (which needs landscape width to
          fit without scrolling) behind a rotate-device prompt instead of letting
          it overflow into a scroll. */}
      <div className="flex h-full max-md:portrait:hidden flex-col p-4 [@media(max-height:520px)]:p-2">
        <LangToggle label={s.swapTo} onToggle={() => setLang(lang === "he" ? "en" : "he")} />

        <header className="mb-2 shrink-0 text-center [@media(max-height:520px)]:mb-1">
          {/* eslint-disable-next-line @next/next/no-img-element -- static logo asset */}
          <img
            src="/tri-heal-logo.svg"
            alt="Tri-Heal logo"
            className="mx-auto h-24 w-auto object-contain [@media(max-height:520px)]:h-10"
          />
          <p className="mt-1 text-base opacity-75 [@media(max-height:520px)]:hidden">{s.subtitle}</p>
        </header>

        <ClinicScene lang={lang} dir={dir} onSelect={setActive} />
      </div>

      <RotatePrompt lang={lang} />

      {active && (
        <HotspotModal
          hotspot={active}
          lang={lang}
          dir={dir}
          videoSoonLabel={s.videoSoon}
          onClose={() => setActive(null)}
        />
      )}
    </div>
  );
}
