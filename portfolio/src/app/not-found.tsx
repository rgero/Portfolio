"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const setMounted = () => {
      setIsMounted(true);
    }
    setMounted()
  }, []);

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-4">404 – Page Not Found</h1>

      {isMounted && (
        <p className="text-lg">
          You tried to visit:{" "}
          <code className="border-2 border-grey-800 px-2 py-1 rounded">
            {pathname}
          </code>
        </p>
      )}

      <Link
        href="/"
        className="mt-6 inline-block underline text-blue-600"
      >
        Go back home
      </Link>
    </main>
  );
}
