import { readFile } from "fs/promises";
import path from "path";
import { MarkdownContent } from "@/components/ui/MarkdownContent";
import { SITE_NAME } from "@/lib/constants";

async function getHomeContent() {
  const file = path.join(process.cwd(), "src/content/home.md");
  return readFile(file, "utf-8");
}

export default async function HomePage() {
  const content = await getHomeContent();

  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        Welcome
      </p>
      <h1 className="mt-2 font-sans text-4xl font-bold tracking-tight text-text md:text-5xl">
        {SITE_NAME}
      </h1>
      <div className="mt-8 max-w-2xl">
        <MarkdownContent content={content} />
      </div>
      <div className="mt-12 flex flex-wrap gap-3">
        <a
          href="/projects"
          className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-bg transition hover:brightness-110"
        >
          View projects
        </a>
        <a
          href="/courses"
          className="rounded-lg border border-border px-5 py-2.5 text-sm text-text-muted transition hover:border-accent/50 hover:text-accent"
        >
          Browse courses
        </a>
      </div>
    </div>
  );
}
