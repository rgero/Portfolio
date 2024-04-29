import supabase from "./supabase";

export const getProjects = async () => {
  const {data, error} = await supabase.from("projects").select("*");

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