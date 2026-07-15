# tri-heal-demo

Standalone hackathon demo of Tri-Heal's therapist↔child↔parent live sync, implementing
Tiers 0-2 of the plan this was built from: breathing/boat + event-processing (rock-break)
games, real Firebase Auth (email/password) for therapist/parent, session codes for the
child, and the take-home assignment loop (therapist assigns → parent unlocks → home
session → reflection → therapist timeline with flagged keywords).

## Setup

1. Create a new Firebase project (separate from any existing Tri-Heal project — keeps this
   demo's writes isolated from real clinical data).
2. Enable **Realtime Database**, **Cloud Firestore**, and the **Email/Password** +
   **Anonymous** sign-in providers (Authentication → Sign-in method). Anonymous is used
   as a stand-in for the therapist's uid in the quick Tier-0-style demo flow at
   `/therapist/live` when reached without a patient context; the full flow (`/login` →
   `/therapist`) uses real email/password.
3. Deploy the security rules:
   - `database.rules.json` → Realtime Database → Rules tab.
   - `firestore.rules` → Firestore → Rules tab.
4. Copy `.env.local.example` to `.env.local` and fill in the client config (Project settings
   → General → your web app) and an Admin SDK service account key (Project settings →
   Service accounts → Generate new private key). Base64-encode the `private_key` field
   before pasting it into `FIREBASE_ADMIN_PRIVATE_KEY`.
5. `npm install && npm run dev`.

## Try it

**Quick sync demo (no login):**
- Open `/therapist/live` in one tab, click "Start Live Demo" (anonymous sign-in), pick a
  game, note the session code shown.
- Open `/child` in a second tab, enter the code, join.
- Hold the breathing button in either tab — heart, boat, and sync meter update live in both.
- For event processing: enter a fact → interpretation → tap Separate → watch the stone
  shatter in the child tab, narrated by the avatar guide.

**Full clinical + take-home loop:**
- `/login` → sign up as a therapist → `/therapist` → add a patient → open their chart →
  "Start Live Session" (now tied to that patient) → run a game → "Assign take-home" to
  queue a game for later and link a parent by email.
- Have the parent sign up at `/login` (role: parent) using the email you linked, then visit
  `/parent` → unlock the assigned game → "Start home session" → child joins on `/child`
  with the session id shown → play → "Finish session" → parent fills in a reflection.
- Back on the therapist's patient chart → "Timeline & analytics" shows completed
  activities plus flagged trigger-keyword chips pulled from any event-processing stones.

- Hit `/api/health/admin` to confirm Admin SDK credentials are wired correctly before a live
  demo.

## Deploying (Vercel)

1. `vercel link` (or import the repo from the Vercel dashboard) to create the project.
2. Add every var from `.env.local` via `vercel env add <name>` for Production/Preview, or
   paste them in the dashboard's Environment Variables screen. Double-check
   `FIREBASE_ADMIN_PRIVATE_KEY` stays base64-encoded — Vercel's env var handling can mangle
   raw multi-line PEM keys.
3. `vercel --prod` (or push to the linked branch) to deploy — the default `*.vercel.app`
   URL is enough for a hackathon demo.
4. **Custom domain (`demo.dev-spirit.com`), optional, do last:** in the Vercel project →
   Settings → Domains, add `demo.dev-spirit.com`. In dev-spirit.com's DNS provider, add the
   CNAME record Vercel shows (usually `demo` → `cname.vercel-dns.com`). DNS propagation and
   SSL issuance can take anywhere from minutes to a day — per the plan's board review, don't
   do this right before a live demo; present on the `*.vercel.app` URL if timing is tight.

## What's not built (explicitly out of scope for this demo)

Memory Lake / Tree Forest / Boat-on-water games (shown as locked tiles in the child game
picker), COPPA/HIPAA-grade audit logging, custom claims (role checks use a Firestore
`/users/{uid}.role` lookup instead — simpler, same effect for a demo), real device pairing
in parent onboarding.
