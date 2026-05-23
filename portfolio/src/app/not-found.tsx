import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-20 text-center">
      <h1 className="font-sans text-4xl font-bold text-text">404</h1>
      <p className="mt-2 text-text-muted">This page does not exist.</p>
      <Link
        href="/"
        className="mt-6 inline-block text-accent underline underline-offset-2"
      >
        Back home
      </Link>
    </div>
  );
}
