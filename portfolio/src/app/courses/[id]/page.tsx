import { getCourseById, getCourses } from "@/services/apiCourses";

import { Course } from "@/app/interfaces/Course";

interface SingleCoursePageProps {
  params: {
    id: string;
  };
}

const SingleCoursePage = async ({ params }: SingleCoursePageProps) => {
  const { id } = await params;

  const course: Course = await getCourseById(id);

  return (
    <main>
      {course.name}
    </main>
  );
};

export default SingleCoursePage;

export async function generateStaticParams() {
  const response = await getCourses();
  return response.map((course) => ({
    id: course.id.toString(),
  }));
}
