import { getProjectById, getProjects } from "@/services/apiProjects";

import { Project } from "@/app/interfaces/Project";

interface SingleProjectPageProps {
  params: {
    id: string;
  };
}

const SingleProjectPage = async ({ params }: SingleProjectPageProps) => {
  const { id } = await params;

  const project: Project = await getProjectById(id);

  return (
    <main>
      {project.name}
    </main>
  );
};

export default SingleProjectPage;

export async function generateStaticParams() {
  const response = await getProjects();
  return response.map((project) => ({
    id: project.id.toString(),
  }));
}
