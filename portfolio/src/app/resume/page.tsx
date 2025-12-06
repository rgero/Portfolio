export default function ResumePage() {
  const SUPABASE_BUCKET_URL = process.env.VITE_SUPABASE_BUCKET_URL;
  const pdfUrl = `https://docs.google.com/gview?embedded=true&url=${SUPABASE_BUCKET_URL}/files/GeroResume.pdf`;

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6">Resume</h1>

      <embed
        src={pdfUrl}
        type="application/pdf"
        className="w-full rounded-xl"
        style={{ height: "80vh" }}
      />
    </div>
  );
}
