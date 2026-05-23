/** Maps tag names from Supabase to PNG filenames in /assets/languages/ */
const FILENAME_ALIASES: Record<string, string> = {
  "c#": "csharp",
  "react native": "react",
};

export function languageIconPath(tag: string): string {
  const key = tag.toLowerCase().trim();
  const filename = FILENAME_ALIASES[key] ?? key.replace(/\s+/g, "");
  return `/assets/languages/${filename}.png`;
}

export const LANGUAGE_PLACEHOLDER = "/assets/languages/placeholder.png";
