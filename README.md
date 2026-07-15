# tri-heal-demo

Interactive "At the Clinic" explainer for Tri-Heal: a static illustrated therapy-room
scene with six clickable hotspots (start session, child login, breathing, memory lake,
event processing, dashboard/home assignment), each opening a modal with a description
and a demo-video slot. Supports Hebrew (RTL, default) and English (LTR), with a
language-toggle button.

This is the only flow in the repo - the earlier therapist/child/parent live-sync demo
(Firebase Auth, Realtime Database, session codes, breathing/event-processing games) has
been removed. `/` redirects straight to `/explainer/at-the-clinic`.

## Setup

```
npm install
npm run dev
```

No environment variables or external services are required - everything is static
assets and client-side React state.

## Structure

- `src/app/explainer/at-the-clinic/page.tsx` - top-level page, owns language + active-modal
  state.
- `src/app/explainer/at-the-clinic/data.ts` - hotspot copy (Hebrew/English), positions,
  connector-line coordinates, and UI strings.
- `src/app/explainer/at-the-clinic/components/`
  - `clinic-scene.tsx` - the illustrated room, character/prop images, dashed connector
    lines, and hotspot buttons.
  - `hotspot-modal.tsx` - the click-through detail modal.
  - `lang-toggle.tsx` - the Hebrew/English switch button.
  - `rotate-prompt.tsx` - shown instead of the scene on small portrait screens (phones),
    asking the user to rotate to landscape.
- `public/explainer/` - background and character/device illustration assets.
- `public/tri-heal-logo.svg` - source logo; favicon and touch-icon PNGs were generated
  from it and live in `public/`.

## Responsive behavior

The layout is sized to fit the viewport height (`h-dvh`, no scroll) on landscape/desktop
screens, shrinking the header and hotspot labels further under ~520px of viewport height.
On small portrait screens (phones held upright, below the `md` breakpoint), the scene is
replaced by a rotate-device prompt; rotating to landscape reveals the interactive scene.

## Deploying (Vercel)

```
vercel link
vercel --prod
```

No environment variables to configure - the app has no backend dependencies.
