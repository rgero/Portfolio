import { SUPABASE_BUCKET_URL } from '@env';
import supabase from "./supabase";

const baseImageURL = `${SUPABASE_BUCKET_URL}/course_images/`

export const getCourses = async () => {
  let query = supabase.from("courses").select("*");
  const {data, error} = await query;

  if (error)
  {
      console.error(error);
      throw new Error("Courses cannot be loaded");
  }

  // Sort by displayOrder
  data.sort((a, b) => a.displayOrder - b.displayOrder);
  return data;
}

export const getCourseById = async (id) => {
  let query = supabase.from("courses").select("*").eq("id", id);
  const {data, error} = await query;

  if (error)
  {
      console.error(error);
      throw new Error("Course cannot be loaded");
  }

  let targetCourse = data[0];
  if (targetCourse.media)
  {
    for(let j = 0; j < targetCourse.media.length; j++)
      {
        targetCourse.media[j] = {
          type: `${targetCourse.media[j].type}`,
          src: targetCourse.media[j].type === "image" ? `${baseImageURL}${targetCourse.media[j].src}` : `${targetCourse.media[j].src}`
        }
    }
  }

  return targetCourse;
}