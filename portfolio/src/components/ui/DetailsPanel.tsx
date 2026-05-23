import { ExternalLink, FolderGit2 } from "lucide-react";

type DetailsPanelProps = {
  repo?: string;
  website?: string;
  tags: string[];
};

export function DetailsPanel({ repo, website, tags }: DetailsPanelProps) {
  if (!repo && !website) return null;

  return (
    <aside className="rounded-xl border border-border bg-bg-elevated p-5 lg:sticky lg:top-8">
      <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-text-muted">
        Links
      </h2>
      <ul className="mt-4 space-y-2">
        {repo ? (
          <li>
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-accent transition hover:bg-accent/10"
            >
              <FolderGit2 className="size-4" />
              Repository
              <ExternalLink className="ml-auto size-3.5 opacity-60" />
            </a>
          </li>
        ) : null}
        {website ? (
          <li>
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-accent transition hover:bg-accent/10"
            >
              <ExternalLink className="size-4" />
              Website
              <ExternalLink className="ml-auto size-3.5 opacity-60" />
            </a>
          </li>
        ) : null}
      </ul>
      {tags.length > 0 ? (
        <div className="mt-6 border-t border-border pt-4">
          <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
            Tags
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-bg px-2 py-0.5 font-mono text-xs text-tertiary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ) : null}
    </aside>
  );
}
