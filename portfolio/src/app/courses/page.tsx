import { Course } from '../interfaces/Course';
import CourseMarkdown from '@/data/Courses';
import Markdown from 'react-markdown';
import {getCourses} from '../../services/apiCourses'

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Courses</h1>

      <Markdown>
        {CourseMarkdown}
      </Markdown>

      <ul className="space-y-2">
        {courses.map((course: Course) => (
          <li
            key={course.id}
            className="border p-3 rounded-lg"
          >
            <h2 className="text-xl font-semibold">{course.name}</h2>
          </li>
        ))}
      </ul>
    </main>
  );
}
