export const SITE_NAME = "Roymond.NET";
export const SITE_TAGLINE = "Creative technologist & lifelong learner";

export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/rgero", icon: "github" as const },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/roygero",
    icon: "linkedin" as const,
  },
  {
    label: "itch.io",
    href: "https://roymond.itch.io",
    icon: "itch" as const,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@roygero",
    icon: "youtube" as const,
  },
] as const;

export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/courses", label: "Courses" },
  { href: "/resume", label: "Resume" },
] as const;

export const bucketUrl = () =>
  process.env.NEXT_PUBLIC_SUPABASE_BUCKET_URL ?? "";

export const profileImageUrl = () =>
  `${bucketUrl()}/files/profile.jpg`;

export const resumePdfUrl = () =>
  `${bucketUrl()}/files/GeroResume.pdf`;
