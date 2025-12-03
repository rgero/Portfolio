"use client";

import Link from "next/link";

export default function AppBar() {
  return (
    <header className="w-full fixed top-0 left-0 bg-slate-900 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="mx-auto max-w-8xl px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold tracking-tight">
          Roymond.NET
        </Link>
        
        <nav className="flex gap-6 text-sm font-medium">
          <Link
            href="/"
            className="hover:text-blue-600 transition-colors"
          >
            Home
          </Link>

          <Link
            href="/projects"
            className="hover:text-blue-600 transition-colors"
          >
            Projects
          </Link>

          <Link
            href="/courses"
            className="hover:text-blue-600 transition-colors"
          >
            Courses
          </Link>
          <Link
            href="/resume"
            className="hover:text-blue-600 transition-colors"
          >
            Resume
          </Link>
        </nav>
      </div>
    </header>
  );
}
