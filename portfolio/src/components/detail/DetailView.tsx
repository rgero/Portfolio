import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MarkdownContent } from "@/components/ui/MarkdownContent";
import { DetailsPanel } from "@/components/ui/DetailsPanel";
import { MediaCarousel } from "@/components/ui/MediaCarousel";
import type { PortfolioItem } from "@/lib/types";

type DetailViewProps = {
  item: PortfolioItem;
  backHref: string;
  backLabel: string;
};

export function DetailView({ item, backHref, backLabel }: DetailViewProps) {
  const hasDetails = Boolean(item.repo || item.website);

  return (
    <article>
      <Link
        href={backHref}
        className="mb-6 inline-flex items-center gap-2 text-sm text-text-muted transition hover:text-accent"
      >
        <ArrowLeft className="size-4" />
        {backLabel}
      </Link>

      <h1 className="font-sans text-3xl font-bold text-text md:text-4xl">
        {item.name}
      </h1>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_240px]">
        <div className="min-w-0">
          <MarkdownContent content={item.description} />
          {item.media.length > 0 ? (
            <MediaCarousel media={item.media} />
          ) : null}
        </div>
        {hasDetails ? (
          <DetailsPanel
            repo={item.repo}
            website={item.website}
            tags={item.tags}
          />
        ) : null}
      </div>
    </article>
  );
}
