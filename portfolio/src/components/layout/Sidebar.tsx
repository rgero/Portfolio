"use client";

import { Code2, Gamepad2, PlayCircle, Share2 } from "lucide-react";
import {
  NAV_ITEMS,
  SITE_NAME,
  SITE_TAGLINE,
  SOCIAL_LINKS,
  profileImageUrl,
} from "@/lib/constants";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const iconMap = {
  github: Code2,
  linkedin: Share2,
  youtube: PlayCircle,
  itch: Gamepad2,
} as const;

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-64 shrink-0 flex-col border-r border-border bg-bg-elevated/80 backdrop-blur-md lg:h-screen lg:w-72">
      <div className="border-b border-border p-6 text-center">
        <Image
          src={profileImageUrl()}
          alt="Profile"
          width={80}
          height={80}
          className="mx-auto size-20 rounded-full border-2 border-accent/30 object-cover"
          priority
        />
        <p className="mt-4 font-sans text-xl font-bold tracking-tight text-accent">
          {SITE_NAME}
        </p>
        <p className="mt-1 text-xs text-text-muted">{SITE_TAGLINE}</p>
      </div>

      <nav className="flex-1 space-y-0.5 p-4" aria-label="Main">
        {NAV_ITEMS.map(({ href, label }) => {
          const active =
            href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                active
                  ? "bg-accent/15 text-accent"
                  : "text-text-muted hover:bg-bg-card hover:text-text"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-border p-4">
        {/* Adjusted gap-2 here to give the stacked items a bit more breathing room */}
        <div className="flex justify-center gap-2">
          {SOCIAL_LINKS.map(({ href, label, icon }) => {
            const Icon = iconMap[icon];
            return (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 rounded-lg p-2 text-text-muted transition hover:bg-accent/10 hover:text-accent min-w-14"
                aria-label={label}
              >
                <Icon className="size-5" />
                <span className="text-[10px] font-medium tracking-wide capitalize">
                  {label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </aside>
  );
}