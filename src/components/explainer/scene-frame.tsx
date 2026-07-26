import type { ReactNode } from "react";

/**
 * Fits a 3:2 scene inside the remaining viewport without breaking aspect-ratio.
 *
 * Plain `aspect-[3/2] w-full max-h-full` keeps width at 100% when height is
 * clamped, so the box becomes flatter than 3:2. The background then
 * object-cover-crops while overlays stay at %-of-box — making props (tablet)
 * look like they float off the furniture. Size both axes from the container.
 */
export function SceneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-0 w-full flex-1 items-center justify-center [container-type:size]">
      <div
        className="relative overflow-hidden rounded-[28px] bg-white shadow-[0_18px_60px_rgba(18,59,73,0.15)]"
        style={{
          aspectRatio: "3 / 2",
          width: "min(100cqw, 1440px, calc(100cqh * 3 / 2))",
          height: "min(100cqh, calc(min(100cqw, 1440px) * 2 / 3))",
        }}
      >
        {children}
      </div>
    </div>
  );
}
