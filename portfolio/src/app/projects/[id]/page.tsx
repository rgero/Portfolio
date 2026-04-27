import { getProjectById, getProjects } from "@/services/apiProjects";

import Markdown from "react-markdown";
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
      <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
      <Markdown>
        {project.description}
      </Markdown>
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
