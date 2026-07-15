import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "At the Clinic",
  description: "Therapist and child, in session - start, breathing, memory lake, event processing, dashboard.",
};

export default function AtTheClinicLayout({ children }: { children: React.ReactNode }) {
  return children;
}
