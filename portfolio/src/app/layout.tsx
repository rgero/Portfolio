import type { Metadata } from "next";
import { JetBrains_Mono, Outfit } from "next/font/google";
import { MobileHeader } from "@/components/layout/MobileHeader";
import { MobileNav } from "@/components/layout/MobileNav";
import { Sidebar } from "@/components/layout/Sidebar";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { SITE_NAME } from "@/lib/constants";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s · ${SITE_NAME}`,
  },
  description:
    "Personal portfolio showcasing projects, courses, and creative work.",
  metadataBase: new URL("https://roymond.net"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen font-mono antialiased">
        <QueryProvider>
          <div className="flex min-h-screen">
            <div className="hidden lg:sticky lg:top-0 lg:block lg:h-screen lg:shrink-0">
              <Sidebar />
            </div>
            <main className="flex-1 pb-20 lg:pb-0">
              <div className="mx-auto max-w-4xl px-4 py-8 md:px-8 md:py-12 lg:max-w-5xl">
                <MobileHeader />
                {children}
              </div>
            </main>
          </div>
          <MobileNav />
        </QueryProvider>
      </body>
    </html>
  );
}
