import Link from "next/link";

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}

      <Link
        href="/courses"
        className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-blue-700 transition"
      >
        ←
      </Link>
    </>
  );
}
