import supabase from "./supabase";

export const getProjects = async () => {
  const {data, error} = await supabase.from("projects").select("*");

  if (error)
  {
      console.error(error);
      throw new Error("Projects cannot be loaded");
  }

  return data;
}