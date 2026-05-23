import { notFound } from "next/navigation";
import { DetailView } from "@/components/detail/DetailView";
import { getProjectById } from "@/lib/api/projects";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const project = await getProjectById(id);
  return { title: project?.name ?? "Project" };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  let project;
  try {
    project = await getProjectById(id);
  } catch {
    return (
      <p className="text-text-muted">
        Unable to load this project. Check your Supabase configuration.
      </p>
    );
  }

  if (!project) notFound();

  return (
    <DetailView
      item={project}
      backHref="/projects"
      backLabel="All projects"
    />
  );
}
