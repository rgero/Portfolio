export const getLanguageImage = (language: string|undefined) => {
  const languageImages: Record<string, string> = {
    python: '/languages/python.png',
    react: '/languages/react.png',
    godot: '/languages/godot.png',
    'react native': '/languages/react.png',
    'c#': '/languages/csharp.png',
    unity: '/languages/unity.png',
    typescript: '/languages/typescript.png',
  };

  // Normalize input to lowercase to avoid mismatches
  const key = language ? language.toLowerCase() : "undefined";
  return languageImages[key] ?? '/languages/placeholder.png';
};
