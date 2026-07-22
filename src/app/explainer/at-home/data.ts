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
    badge: { he: "היער שלנו", en: "Our Forest" },
    title: { he: "סרטון היער שלנו", en: "Our Forest video" },
    text: {
      he: "הורה וילד/ה משחקים יחד ב'היער שלנו' בטאבלט - זמן איכות מובנה שממשיך את הטיפול הביתה.",
      en: "Parent and child play through the Our Forest activity together on the tablet - structured quality time that carries the therapy home.",
    },
    x: 63,
    y: 20,
    video: "/explainer-home/videos/forst.webm",
    legend: [
      {
        color: "#6FAFB0",
        label: { he: "נשימה משותפת", en: "Shared breathing" },
        description: {
          he: "קחו דקה לתרגל ביחד נשימה",
          en: "Take a minute to practice breathing together",
        },
      },
      {
        color: "#7FAE7B",
        label: { he: "התגברות", en: "Overcoming" },
        description: {
          he: "ספרו על מקרה שדרש מכם/ן התגברות",
          en: "Tell about a time that required you to overcome something",
        },
      },
      {
        color: "#9B82C8",
        label: { he: "שיתוף רגש", en: "Sharing emotion" },
        description: {
          he: "ביחרו רגש שחשתם/ן היום",
          en: "Choose an emotion you felt today",
        },
      },
      {
        color: "#7FAED4",
        label: { he: "שיתוף", en: "Sharing" },
        description: {
          he: "ספרו על משהו שקרה לכם/ן היום",
          en: "Tell about something that happened to you today",
        },
      },
      {
        color: "#A88C74",
        label: { he: "רגע ביחד", en: "Moment together" },
        description: {
          he: "אם מתאים לכם/ן בקשו חיבוק",
          en: "If it feels right, ask for a hug",
        },
      },
      {
        color: "#C9877A",
        label: { he: "זיכרון טוב", en: "Good memory" },
        description: {
          he: "היזכרו ברגע משותף וטוב",
          en: "Recall a shared good moment",
        },
      },
      {
        color: "#D7BD59",
        label: { he: "תיקוף", en: "Validation" },
        description: {
          he: "תן/י חיזוק חיובי על משהו שקרה היום",
          en: "Offer positive reinforcement about something that happened today",
        },
      },
      {
        color: "#D99A5B",
        label: { he: "פירוק אירוע", en: "Event unpacking" },
        description: {
          he: "נסו להבין ביחד משהו שקרה היום",
          en: "Try to understand together something that happened today",
        },
      },
    ],
  },
];

export const CONNECTORS: Connector[] = [
  { from: { x: 22, y: 18 }, to: { x: 45, y: 40 } }, // 1: view assignment -> parent
  { from: { x: 63, y: 20 }, to: { x: 52, y: 55 } }, // 2: our forest -> tablet
];

export const STRINGS: Record<"he" | "en", { subtitle: string; videoSoon: string; swapTo: string; legend: string }> = {
  he: {
    subtitle: "לחצו על הנקודות הממוספרות כדי לחקור את התהליך",
    videoSoon: "סרטון הדגמה בקרוב",
    swapTo: "English",
    legend: "מקרא",
  },
  en: {
    subtitle: "Click the numbered points to explore the flow",
    videoSoon: "Demo video coming soon",
    swapTo: "עברית",
    legend: "Legend",
  },
};
