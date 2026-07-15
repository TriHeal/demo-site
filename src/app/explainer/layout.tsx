import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Choose a Scene",
    template: "%s · Tri-Heal",
  },
  description: "Pick a scene to explore: a clinic session or a take-home moment at home.",
};

export default function ExplainerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
