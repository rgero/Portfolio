import { DetailView } from "@/components/detail/DetailView";
import { getCourseById } from "@/lib/api/courses";
import { notFound } from "next/navigation";

export const revalidate = 1800; // Revalidate every 30 minutes

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const course = await getCourseById(id);
  return { title: course?.name ?? "Course" };
}

export default async function CourseDetailPage({ params }: Props) {
  const { id } = await params;
  let course;
  try {
    course = await getCourseById(id);
  } catch {
    return (
      <p className="text-text-muted">
        Unable to load this course. Check your Supabase configuration.
      </p>
    );
  }

  if (!course) notFound();

  return (
    <DetailView
      item={course}
      backHref="/courses"
      backLabel="All courses"
    />
  );
}
