import { SUPABASE_BUCKET_URL } from '@env';
import supabase from "./supabase";

const baseImageURL = `${SUPABASE_BUCKET_URL}/project_images/`

export const getProjects = async () => {
  let query = supabase.from("projects").select("*");
  const {data, error} = await query;

  if (error)
  {
      console.error(error);
      throw new Error("Projects cannot be loaded");
  }

  // Sort by displayOrder
  data.sort((a, b) => a.displayOrder - b.displayOrder);
  return data;
}

export const getProjectById = async (id) => {
  let query = supabase.from("projects").select("*").eq("id", id);
  const {data, error} = await query;

  if (error)
  {
      console.error(error);
      throw new Error("Project cannot be loaded");
  }

  let targetProject = data[0];
  for(let j = 0; j < targetProject.media.length; j++)
    {
      targetProject.media[j] = {
        type: `${targetProject.media[j].type}`,
        src: targetProject.media[j].type === "image" ? `${baseImageURL}${targetProject.media[j].src}` : `${targetProject.media[j].src}`
      }
  }

  return targetProject;
}