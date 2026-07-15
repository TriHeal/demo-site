import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "At Home",
  description: "Parent and child, together at home - the take-home assignment and the Bonding Forest activity.",
};

export default function AtHomeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
