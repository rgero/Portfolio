import supabase from "./supabase";

export const getProjects = async (sortBy) => {
  let query = supabase.from("projects").select("*");

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
      targetProject.images[j] = {src: targetProject.images[j]}
    }
    responseData.push(targetProject);
  }
  
  return responseData;
}