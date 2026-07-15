export type Lang = "he" | "en";

export type Hotspot = {
  id: number;
  badge: Record<Lang, string>;
  title: Record<Lang, string>;
  text: Record<Lang, string>;
  x: number;
  y: number;
};

export type Point = { x: number; y: number };

export type Connector = { from: Point; to: Point };
