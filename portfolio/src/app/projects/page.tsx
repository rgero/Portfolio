import { ProjectListClient } from "@/components/projects/ProjectListClient";
import { PageHeader } from "@/components/layout/PageHeader";
import { getProjects } from "@/lib/api/projects";

export const metadata = {
  title: "Projects",
};

export default async function ProjectsPage() {
  let projects;
  try {
    projects = await getProjects();
  } catch {
    return (
      <p className="text-text-muted">
        Unable to load projects. Check your Supabase configuration.
      </p>
    );
  }

  return (
    <>
      <PageHeader
        title="Projects"
        description="Side projects, experiments, and creative builds."
      />
      <ProjectListClient projects={projects} />
    </>
  );
}
