export type Lang = "he" | "en";

export type LegendItem = {
  color: string;
  label: Record<Lang, string>;
  description: Record<Lang, string>;
};

export type HotspotVideo = {
  src: string;
  label: Record<Lang, string>;
};

export type Hotspot = {
  id: number;
  badge: Record<Lang, string>;
  title: Record<Lang, string>;
  text: Record<Lang, string>;
  x: number;
  y: number;
  /** Single video, used by hotspots that have one demo */
  video?: string;

  /** Multiple selectable videos for the same hotspot */
  videos?: HotspotVideo[];
  /** Color key shown under the video (e.g. Our Forest activity cards) */
  legend?: LegendItem[];
};

export type Point = { x: number; y: number };

export type Connector = { from: Point; to: Point };
