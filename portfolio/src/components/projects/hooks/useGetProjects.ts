import { Project } from "../../../interfaces/Project";
import { getProjects } from "../../../services/apiProjects";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export interface ProjectResponse
{
  isLoading: boolean,
  projects: Project[],
  error: Error | null,
  refetch: () => void
}

export const useGetProjects = (): ProjectResponse => {
  const [searchParams] = useSearchParams();

  // SORT
  const sortByRaw = searchParams.get('sortBy') || 'name-asc';
  const [field, direction] = sortByRaw.split('-');
  const sortBy = {field, direction}

  const {isLoading, data: projects = [], error, refetch} = useQuery({queryKey: ["projects", sortBy], queryFn: ()=> getProjects(sortBy)});
  return { isLoading, projects, error, refetch};
}