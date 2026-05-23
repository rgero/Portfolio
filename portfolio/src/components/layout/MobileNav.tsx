"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, FileText, FolderKanban, Home } from "lucide-react";

const items = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/courses", label: "Courses", icon: BookOpen },
  { href: "/resume", label: "Resume", icon: FileText },
] as const;

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 flex border-t border-border bg-bg-elevated/95 backdrop-blur-md lg:hidden"
      aria-label="Mobile"
    >
      {items.map(({ href, label, icon: Icon }) => {
        const active =
          href === "/" ? pathname === "/" : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            className={`flex flex-1 flex-col items-center gap-0.5 py-2 text-xs ${
              active ? "text-accent" : "text-text-muted"
            }`}
          >
            <Icon className="size-5" />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
