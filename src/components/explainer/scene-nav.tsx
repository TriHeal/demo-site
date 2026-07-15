"use client";

import Link from "next/link";
import { Home } from "lucide-react";
import type { Lang } from "./types";

const MAIN_PAGE_LABEL: Record<Lang, string> = { he: "עמוד הבית", en: "Main page" };

const SCENES = [
  { href: "/explainer/at-the-clinic", label: { he: "בקליניקה", en: "At the Clinic" } },
  { href: "/explainer/at-home", label: { he: "בבית", en: "At Home" } },
] as const;

export function SceneNav({
  lang,
  current,
}: {
  lang: Lang;
  current?: (typeof SCENES)[number]["href"];
}) {
  const onMainPage = current === undefined;
  return (
    <nav className="flex shrink-0 items-center gap-1.5 rounded-full bg-white/70 p-1 text-sm shadow-[0_2px_10px_rgba(18,59,73,0.08)] [@media(max-height:520px)]:gap-1 [@media(max-height:520px)]:p-0.5 [@media(max-height:520px)]:text-xs">
      <Link
        href="/explainer"
        aria-label={MAIN_PAGE_LABEL[lang]}
        title={MAIN_PAGE_LABEL[lang]}
        aria-current={onMainPage ? "page" : undefined}
        className={
          onMainPage
            ? "grid h-8 w-8 place-items-center rounded-full bg-[#168B8F] text-white [@media(max-height:520px)]:h-6 [@media(max-height:520px)]:w-6"
            : "grid h-8 w-8 place-items-center rounded-full text-[#0F6F73] hover:bg-[#eaf6f3] [@media(max-height:520px)]:h-6 [@media(max-height:520px)]:w-6"
        }
      >
        <Home className="h-4 w-4 [@media(max-height:520px)]:h-3 [@media(max-height:520px)]:w-3" strokeWidth={1.75} />
      </Link>
      <div className="h-4 w-px shrink-0 bg-[#0F6F73]/20" />
      {SCENES.map((scene) => {
        const isActive = scene.href === current;
        return (
          <Link
            key={scene.href}
            href={scene.href}
            aria-current={isActive ? "page" : undefined}
            className={
              isActive
                ? "rounded-full bg-[#168B8F] px-3.5 py-1.5 font-semibold text-white [@media(max-height:520px)]:px-2.5 [@media(max-height:520px)]:py-1"
                : "rounded-full px-3.5 py-1.5 font-medium text-[#0F6F73] hover:bg-[#eaf6f3] [@media(max-height:520px)]:px-2.5 [@media(max-height:520px)]:py-1"
            }
          >
            {scene.label[lang]}
          </Link>
        );
      })}
    </nav>
  );
}
