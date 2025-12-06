"use client";

import Link from "next/link";
import { useState } from "react";

export default function AppBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 bg-slate-900 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="mx-auto max-w-8xl px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold tracking-tight">
          Roymond.NET
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link href="/projects" className="hover:text-blue-600 transition-colors">Projects</Link>
          <Link href="/courses" className="hover:text-blue-600 transition-colors">Courses</Link>
          <Link href="/resume" className="hover:text-blue-600 transition-colors">Resume</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-sm p-2 rounded hover:bg-slate-800"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Animated Mobile Drawer */}
      <div
        className={`md:hidden bg-slate-900 border-t border-gray-800 overflow-hidden transition-all duration-300 ${
          open ? "max-h-64" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-2 text-sm font-medium">
          <Link href="/" className="py-2 hover:text-blue-600" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/projects" className="py-2 hover:text-blue-600" onClick={() => setOpen(false)}>
            Projects
          </Link>
          <Link href="/courses" className="py-2 hover:text-blue-600" onClick={() => setOpen(false)}>
            Courses
          </Link>
          <Link href="/resume" className="py-2 hover:text-blue-600" onClick={() => setOpen(false)}>
            Resume
          </Link>
        </nav>
      </div>
    </header>
  );
}
