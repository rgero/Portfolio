import { Project } from "../../../interfaces/Project";
import { getProjects } from "../../../services/apiProjects";
import { useQuery } from "@tanstack/react-query";

export interface ProjectResponse
{
  isLoading: boolean,
  projects: Project[],
  error: Error | null,
  refetch: () => void
}

export const useGetProjects = (): ProjectResponse => {
  const {isLoading, data: projects = [], error, refetch} = useQuery({queryKey: ["projects"], queryFn: ()=> getProjects()});
  return { isLoading, projects, error, refetch};
}