"use client";

import Image from "next/image";
import { useState } from "react";
import { LANGUAGE_PLACEHOLDER, languageIconPath } from "@/lib/language-icons";

export function LanguageBadge({ tag }: { tag: string }) {
  const [src, setSrc] = useState(() => languageIconPath(tag));

  return (
    <div className="relative size-11 shrink-0 overflow-hidden rounded-lg border border-border bg-bg-elevated p-1.5">
      <Image
        src={src}
        alt={tag}
        width={32}
        height={32}
        className="size-full object-contain"
        onError={() => setSrc(LANGUAGE_PLACEHOLDER)}
      />
    </div>
  );
}
