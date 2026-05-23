import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LanguageBadge } from "@/components/ui/LanguageBadge";

type PortfolioCardProps = {
  id: string;
  title: string;
  tags: string[];
  short: string;
  href: string;
};

export function PortfolioCard({
  id,
  title,
  tags,
  short,
  href,
}: PortfolioCardProps) {
  const primaryTag = tags[0] ?? "project";

  return (
    <article
      id={id}
      className="group relative overflow-hidden rounded-xl border border-border bg-bg-card p-5 transition hover:border-accent/40 hover:shadow-[0_0_24px_var(--accent-glow)]"
    >
      <div className="flex gap-4">
        <Link href={href} className="shrink-0" tabIndex={-1}>
          <LanguageBadge tag={primaryTag} />
        </Link>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <Link href={href} className="group/title">
              <h3 className="font-sans text-lg font-semibold text-accent transition group-hover/title:underline">
                {title}
              </h3>
            </Link>
            <Link
              href={href}
              className="shrink-0 rounded-md p-1 text-text-muted transition hover:bg-accent/10 hover:text-accent"
              aria-label={`View ${title}`}
            >
              <ArrowUpRight className="size-5" />
            </Link>
          </div>
          <p className="mt-1 font-mono text-xs text-text-muted">
            {tags.join(" · ")}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            {short}
          </p>
        </div>
      </div>
    </article>
  );
}
