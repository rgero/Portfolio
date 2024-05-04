import supabase from "./supabase";

const baseImageURL = `${import.meta.env.VITE_SUPABASE_BUCKET_URL}/project_images/`

export const getProjects = async (sortBy : { direction: string, field: string }) => {
  let query = supabase.from("projects").select("*");

  console.log(sortBy);

  if (sortBy)
  {
    query = query.order(sortBy.field, {ascending: sortBy.direction === "asc"})
  }

  const {data, error} = await query;

  if (error)
  {
      console.error(error);
      throw new Error("Projects cannot be loaded");
  }

  const responseData = [];
  for(let i = 0; i < data.length; i++)
  {
    const targetProject = data[i];
    for(let j = 0; j < targetProject.images.length; j++)
    {
      targetProject.images[j] = {src: `${baseImageURL}${targetProject.images[j]}`}
    }
    responseData.push(targetProject);
  }
  
  return responseData;
}