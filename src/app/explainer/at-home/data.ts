import type { Connector, Hotspot } from "@/components/explainer/types";

export type { Lang, Hotspot, Point } from "@/components/explainer/types";

export const HOTSPOTS: Hotspot[] = [
  {
    id: 1,
    badge: { he: "צפייה במטלה", en: "View assignment" },
    title: { he: "צפייה במטלה", en: "View the assignment" },
    text: {
      he: "ההורה פותח את המטלה שהמטפל שלח כדי להכין את המפגש המשותף עם הילד/ה.",
      en: "The parent opens the assignment the therapist sent, to prepare the shared moment with their child.",
    },
    x: 22,
    y: 18,
  },
  {
    id: 2,
    badge: { he: "יער הקשר", en: "Bonding Forest" },
    title: { he: "סרטון יער הקשר", en: "Bonding Forest video" },
    text: {
      he: "הורה וילד/ה משחקים יחד ב'יער הקשר' בטאבלט - זמן איכות מובנה שממשיך את הטיפול הביתה.",
      en: "Parent and child play through the Bonding Forest activity together on the tablet - structured quality time that carries the therapy home.",
    },
    x: 63,
    y: 20,
  },
];

export const CONNECTORS: Connector[] = [
  { from: { x: 22, y: 18 }, to: { x: 45, y: 40 } }, // 1: view assignment -> parent
  { from: { x: 63, y: 20 }, to: { x: 52, y: 55 } }, // 2: bonding forest -> tablet
];

export const STRINGS: Record<"he" | "en", { subtitle: string; videoSoon: string; swapTo: string }> = {
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
