import { Project } from '../interfaces/Project';
import {getProjects} from '../../services/apiProjects'

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>

      <ul className="space-y-2">
        {projects.map((project: Project) => (
          <li
            key={project.id}
            className="border p-3 rounded-lg"
          >
            <h2 className="text-xl font-semibold">{project.name}</h2>
          </li>
        ))}
      </ul>
    </main>
  );
}
