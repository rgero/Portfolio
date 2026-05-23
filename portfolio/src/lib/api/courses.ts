import type { Course, MediaItem } from "@/lib/types";
import { supabase } from "@/lib/supabase";

const bucketUrl = process.env.NEXT_PUBLIC_SUPABASE_BUCKET_URL ?? "";
const baseImageURL = `${bucketUrl}/course_images/`;

function enrichMedia(media: MediaItem[]): MediaItem[] {
  return media.map((item) => ({
    type: item.type,
    src:
      item.type === "image" ? `${baseImageURL}${item.src}` : item.src,
  }));
}

export async function getCourses(): Promise<Course[]> {
  const { data, error } = await supabase.from("courses").select("*");

  if (error) {
    console.error(error);
    throw new Error("Courses cannot be loaded");
  }

  return [...data].sort((a, b) => a.displayOrder - b.displayOrder);
}

export async function getCourseById(id: string): Promise<Course | null> {
  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    console.error(error);
    throw new Error("Course cannot be loaded");
  }

  if (!data) return null;

  return {
    ...data,
    media: data.media?.length ? enrichMedia(data.media) : [],
  };
}
