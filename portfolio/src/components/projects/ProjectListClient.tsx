"use client";

import { useMemo, useState } from "react";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { SearchInput } from "@/components/ui/SearchInput";
import type { Project } from "@/lib/types";

export function ProjectListClient({ projects }: { projects: Project[] }) {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const term = search.toLowerCase().trim();
    if (!term) return projects;
    return projects.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.tags.some((t) => t.toLowerCase().includes(term)),
    );
  }, [projects, search]);

  return (
    <>
      <SearchInput value={search} onChange={setSearch} />
      <div className="mt-6 grid gap-4">
        {filtered.length === 0 ? (
          <p className="text-sm text-text-muted">No projects match your search.</p>
        ) : (
          filtered.map((p) => (
            <PortfolioCard
              key={p.id}
              id={p.id}
              title={p.name}
              tags={p.tags}
              short={p.short}
              href={`/projects/${p.id}`}
            />
          ))
        )}
      </div>
    </>
  );
}
