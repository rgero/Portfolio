import { PageHeader } from "@/components/layout/PageHeader";
import { resumePdfUrl } from "@/lib/constants";

export const metadata = {
  title: "Resume",
};

export default function ResumePage() {
  const pdfDirect = resumePdfUrl();
  const embedUrl = `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(pdfDirect)}`;

  return (
    <>
      <PageHeader
        title="Resume"
        description="View or download the latest PDF."
      />
      <div className="overflow-hidden rounded-xl border border-border bg-bg-card">
        <iframe
          src={embedUrl}
          title="Resume"
          className="h-[min(80vh,900px)] w-full"
        />
      </div>
      <p className="mt-4 text-center text-sm text-text-muted">
        <a
          href={pdfDirect}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline underline-offset-2"
        >
          Open PDF directly
        </a>
      </p>
    </>
  );
}
