import type { Hotspot, Lang, Point } from "@/components/explainer/types";

export type { Lang, Hotspot, Point } from "@/components/explainer/types";

export const HOTSPOTS: Hotspot[] = [
  {
    id: 1,
    badge: { he: "פתיחת מפגש", en: "Start session" },
    title: { he: "פתיחת מפגש", en: "Start session" },
    text: {
      he: "המטפל פותח מפגש משותף ומקצה את התרגול הרלוונטי.",
      en: "The therapist starts a shared session and assigns the relevant practice.",
    },
    x: 25,
    y: 35,
    video: "/explainer/videos/start-session.mp4",
  },
  {
    id: 2,
    badge: { he: "כניסת הילד/ה", en: "Child login" },
    title: { he: "כניסת הילד/ה", en: "Child login" },
    text: {
      he: "הילד/ה נכנס/ת למפגש בטאבלט בתהליך פשוט ומודרך.",
      en: "The child enters the session on the tablet using a simple, guided flow.",
    },
    x: 70,
    y: 37,
    videos: [
      {
        src: "/explainer/videos/child-login.mp4",
        label: { he: "כניסה למשחק", en: "Game login" },
      },
      {
        src: "/explainer/videos/change-avatar.mp4",
        label: { he: "בחירת אווטאר", en: "Choose avatar" },
      },
    ],
  },
  {
    id: 3,
    badge: { he: "נשימות", en: "Breathing" },
    title: { he: "נשימות", en: "Breathing" },
    text: {
      he: "נשימה מסונכרנת עוזרת לילד/ה להירגע דרך אינטראקציה דמוית משחק.",
      en: "Synchronized breathing helps the child regulate through a game-like interaction.",
    },
    x: 41,
    y: 26,
    video: "/explainer/videos/breathing.mp4",
  },
  {
    id: 4,
    badge: { he: "אגם הזיכרון", en: "Memory Lake" },
    title: { he: "אגם הזיכרון", en: "Memory Lake" },
    text: {
      he: "מרחב חזותי בטוח לעבודת זיכרון מודרכת ולרפלקציה רגשית.",
      en: "A safe visual space for guided memory work and emotional reflection.",
    },
    x: 52,
    y: 24,
    videos: [
      {
        src: "/explainer/videos/memory-lake-dashboard.mp4",
        label: { he: "מסך המטפל", en: "Therapist dashboard" },
      },
      {
        src: "/explainer/videos/memory-lake-tablet.mp4",
        label: { he: "מסך הילד", en: "Child tablet" },
      },
    ],
  },
  
  {
    id: 5,
    badge: { he: "עיבוד אירועים", en: "Event processing" },
    title: { he: "עיבוד אירועים", en: "Event processing" },
    text: {
      he: "המטפל מלווה את הילד/ה בהפרדה בין עובדות, פרשנויות ורגשות.",
      en: "The therapist guides the child through separating facts, interpretations, and feelings.",
    },
    x: 63,
    y: 26,
    videos: [
      {
        src: "/explainer/videos/event-processing-dashboard.mp4",
        label: { he: "מסך המטפל", en: "Therapist dashboard" },
      },
      {
        src: "/explainer/videos/event-processing-game.mp4",
        label: { he: "מסך הילד", en: "Child game" },
      },
    ],
  },
  {
    id: 6,
    badge: { he: "לוח בקרה", en: "Dashboard" },
    title: { he: "לוח בקרה ומטלת בית", en: "Dashboard and home assignment" },
    text: {
      he: "המטפל סוקר התקדמות ושולח תרגול בית ממוקד להורה ולילד/ה.",
      en: "The therapist reviews progress and sends a focused home practice to the parent and child.",
    },
    x: 26,
    y: 58,
    video: "/explainer/videos/therapist-dashboard.mp4",
  },
];

export const CONNECTORS: { from: Point; to: Point }[] = [
  { from: { x: 25, y: 35 }, to: { x: 18, y: 49 } }, // 1: start session -> laptop
  { from: { x: 26, y: 58 }, to: { x: 15, y: 53 } }, // 6: dashboard -> laptop
  { from: { x: 70, y: 37 }, to: { x: 71, y: 47 } }, // 2: child login -> child
  { from: { x: 41, y: 26 }, to: { x: 52, y: 50 } }, // 3: breathing -> tablet
  { from: { x: 52, y: 24 }, to: { x: 52, y: 46 } }, // 4: memory lake -> tablet
  { from: { x: 63, y: 26 }, to: { x: 52, y: 50 } }, // 5: event processing -> tablet
];

export const STRINGS: Record<Lang, { subtitle: string; videoSoon: string; swapTo: string }> = {
  he: {
    subtitle: "לחצו על הנקודות הממוספרות כדי לחקור את התהליך",
    videoSoon: "סרטון הדגמה בקרוב",
    swapTo: "English",
  },
  en: {
    subtitle: "Click the numbered points to explore the flow",
    videoSoon: "Demo video coming soon",
    swapTo: "עברית",
  },
};
