import Link from 'next/link';
import { Project } from '../interfaces/Project';
import ProjectListItem from '@/components/projects/ProjectListItem';
import {getProjects} from '../../services/apiProjects'

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>

      <ul className="space-y-2">
        {projects.map((project: Project) => <ProjectListItem project={project} key={project.id}/>)}
      </ul>
    </main>
  );
}
