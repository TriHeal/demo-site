"use client";

import { Languages } from "lucide-react";

export function LangToggle({ label, onToggle }: { label: string; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex items-center gap-2 rounded-full border border-[#0F6F73] px-4 py-2 text-sm font-medium text-[#0F6F73] [@media(max-height:520px)]:px-2.5 [@media(max-height:520px)]:py-1 [@media(max-height:520px)]:text-xs"
    >
      <Languages className="h-4 w-4 [@media(max-height:520px)]:h-3 [@media(max-height:520px)]:w-3" strokeWidth={1.75} />
      {label}
    </button>
  );
}
