import type { MediaItem, Project } from "@/lib/types";
import { supabase } from "@/lib/supabase";

const bucketUrl = process.env.NEXT_PUBLIC_SUPABASE_BUCKET_URL ?? "";
const baseImageURL = `${bucketUrl}/project_images/`;

function enrichMedia(media: MediaItem[]): MediaItem[] {
  return media.map((item) => ({
    type: item.type,
    src:
      item.type === "image" ? `${baseImageURL}${item.src}` : item.src,
  }));
}

export async function getProjects(): Promise<Project[]> {
  const { data, error } = await supabase.from("projects").select("*");

  if (error) {
    console.error(error);
    throw new Error("Projects cannot be loaded");
  }

  return [...data].sort((a, b) => a.displayOrder - b.displayOrder);
}

export async function getProjectById(id: string): Promise<Project | null> {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    console.error(error);
    throw new Error("Project cannot be loaded");
  }

  if (!data) return null;

  return {
    ...data,
    media: data.media?.length ? enrichMedia(data.media) : [],
  };
}
