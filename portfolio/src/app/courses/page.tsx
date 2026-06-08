import { CourseListClient } from "@/components/courses/CourseListClient";
import { MarkdownContent } from "@/components/ui/MarkdownContent";
import { PageHeader } from "@/components/layout/PageHeader";
import { getCourses } from "@/lib/api/courses";
import path from "path";
import { readFile } from "fs/promises";

export const revalidate = 1800; // Revalidate every 30 minutes

export const metadata = {
  title: "Courses",
};

async function getIntro() {
  const file = path.join(process.cwd(), "src/content/courses-intro.md");
  return readFile(file, "utf-8");
}

export default async function CoursesPage() {
  const intro = await getIntro();
  let courses;
  try {
    courses = await getCourses();
  } catch {
    return (
      <p className="text-text-muted">
        Unable to load courses. Check your Supabase configuration.
      </p>
    );
  }

  return (
    <>
      <PageHeader title="Courses" />
      <div className="mb-8 max-w-2xl">
        <MarkdownContent content={intro} />
      </div>
      <CourseListClient courses={courses} />
    </>
  );
}
