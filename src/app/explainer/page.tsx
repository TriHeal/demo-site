"use client";

import { useState } from "react";
import Link from "next/link";
import { LangToggle } from "@/components/explainer/lang-toggle";
import { RotatePrompt } from "@/components/explainer/rotate-prompt";
import { SceneNav } from "@/components/explainer/scene-nav";
import type { Lang } from "@/components/explainer/types";

const SCENES = [
  {
    href: "/explainer/at-the-clinic",
    title: { he: "בקליניקה", en: "At the Clinic" },
    description: {
      he: "מטפל וילד/ה, במפגש - פתיחה, נשימות, אגם הזיכרון, עיבוד אירועים, לוח בקרה.",
      en: "Therapist and child, in session - start, breathing, memory lake, event processing, dashboard.",
    },
  },
  {
    href: "/explainer/at-home",
    title: { he: "בבית", en: "At Home" },
    description: {
      he: "הורה וילד/ה, יחד בבית - מטלת הבית ופעילות יער הקשר.",
      en: "Parent and child, together at home - the take-home assignment and the Bonding Forest activity.",
    },
    image: "/explainer-home/living-room-background.png",
  },
] as const;

const STRINGS: Record<Lang, { subtitle: string; swapTo: string }> = {
  he: { subtitle: "בחרו סצנה לחקור", swapTo: "English" },
  en: { subtitle: "Choose a scene to explore", swapTo: "עברית" },
};

export default function ExplainerHome() {
  const [lang, setLang] = useState<Lang>("he");
  const dir = lang === "he" ? "rtl" : "ltr";
  const s = STRINGS[lang];

  return (
    <div dir={dir} className="h-dvh overflow-hidden bg-[#f7fbfa] text-[#123B49]">
      {/* Small-screen portrait: block the layout (which needs landscape width to
          fit without scrolling) behind a rotate-device prompt instead of letting
          it overflow into a scroll. */}
      <div className="flex h-full max-md:portrait:hidden flex-col p-4 [@media(max-height:520px)]:p-2">
        <div className="mb-1 flex shrink-0 items-center justify-between [@media(max-height:520px)]:mb-0">
          <SceneNav lang={lang} />
          <LangToggle label={s.swapTo} onToggle={() => setLang(lang === "he" ? "en" : "he")} />
        </div>

        <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-4 text-center [@media(max-height:520px)]:gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element -- static logo asset */}
          <img
            src="/tri-heal-logo.svg"
            alt="Tri-Heal logo"
            className="h-20 w-auto shrink-0 object-contain [@media(max-height:520px)]:h-10"
          />
          <p className="shrink-0 text-[#4a6a68] [@media(max-height:520px)]:hidden">{s.subtitle}</p>

          <div className="grid w-full max-w-3xl min-h-0 shrink grid-cols-1 gap-4 sm:grid-cols-2">
            {SCENES.map((scene) => (
              <Link
                key={scene.href}
                href={scene.href}
                className="group flex max-h-[55dvh] flex-col overflow-hidden rounded-[24px] bg-white text-start transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(18,59,73,0.18)]"
              >
                <div className="relative aspect-[3/2] shrink overflow-hidden transition group-hover:scale-105">
                  {/* eslint-disable @next/next/no-img-element -- static illustration preview */}
                  {"image" in scene ? (
                    <img src={scene.image} alt={scene.title[lang]} className="h-full w-full object-cover" />
                  ) : (
                    <>
                      <img
                        src="/explainer/office-background.png"
                        alt=""
                        className="absolute inset-0 h-full w-full select-none object-cover"
                      />
                      <img
                        src="/explainer/therapist.png"
                        alt=""
                        className="absolute left-[5%] top-[37%] w-[55%] select-none"
                      />
                      <img
                        src="/explainer/child.png"
                        alt=""
                        className="absolute left-[42%] top-[37%] w-[55%] select-none"
                      />
                    </>
                  )}
                  {/* eslint-enable @next/next/no-img-element */}
                </div>
                <div className="shrink-0 p-4 [@media(max-height:520px)]:p-2">
                  <h2 className="text-lg font-bold text-[#123B49] [@media(max-height:520px)]:text-sm">
                    {scene.title[lang]}
                  </h2>
                  <p className="mt-1 text-sm text-[#4a6a68] [@media(max-height:520px)]:hidden">
                    {scene.description[lang]}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <RotatePrompt lang={lang} />
    </div>
  );
}
