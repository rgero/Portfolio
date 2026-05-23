import type { NextConfig } from "next";

function supabaseHostname(): string {
  const url = process.env.NEXT_PUBLIC_SUPABASE_BUCKET_URL;
  if (!url) return "127.0.0.1";
  try {
    return new URL(url).hostname;
  } catch {
    return "127.0.0.1";
  }
}

const nextConfig: NextConfig = {
  turbopack: {
    root: import.meta.dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: supabaseHostname(),
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
