import axios from "axios";

const backendURL = "http://localhost:9000" //import.meta.env.VITE_BACKEND_URL;

export const getProjects = async () => {
  const projectURL = backendURL + "/projects";

  const response = await axios.get(projectURL);
  if (response.status != 200)
  {
    throw new Error("Error getting projects");
  }

  return response.data;
}