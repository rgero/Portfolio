"use client";

import { useMemo, useState } from "react";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { SearchInput } from "@/components/ui/SearchInput";
import type { Course } from "@/lib/types";

function CourseSection({
  title,
  courses,
}: {
  title: string;
  courses: Course[];
}) {
  if (!courses.length) return null;

  return (
    <section className="mt-10">
      <h2 className="font-sans text-xl font-semibold text-tertiary">{title}</h2>
      <div className="mt-4 grid gap-4">
        {courses.map((c) => (
          <PortfolioCard
            key={c.id}
            id={c.id}
            title={c.name}
            tags={c.tags}
            short={c.short}
            href={`/courses/${c.id}`}
          />
        ))}
      </div>
    </section>
  );
}

export function CourseListClient({ courses }: { courses: Course[] }) {
  const [search, setSearch] = useState("");

  const { inProgress, completed } = useMemo(() => {
    const term = search.toLowerCase().trim();
    const matches = (c: Course) => {
      if (!term) return true;
      return (
        c.name.toLowerCase().includes(term) ||
        c.tags.some((t) => t.toLowerCase().includes(term))
      );
    };

    const filtered = courses.filter(matches);
    return {
      inProgress: filtered.filter((c) => c.status !== 1),
      completed: filtered.filter((c) => c.status === 1),
    };
  }, [courses, search]);

  const empty = inProgress.length === 0 && completed.length === 0;

  return (
    <>
      <SearchInput value={search} onChange={setSearch} />
      {empty ? (
        <p className="mt-6 text-sm text-text-muted">
          No courses match your search.
        </p>
      ) : (
        <>
          <CourseSection title="In progress" courses={inProgress} />
          <CourseSection title="Completed" courses={completed} />
        </>
      )}
    </>
  );
}
