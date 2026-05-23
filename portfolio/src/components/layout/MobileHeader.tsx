import { SITE_NAME } from "@/lib/constants";

export function MobileHeader() {
  return (
    <header className="mb-6 border-b border-border pb-4 lg:hidden">
      <p className="font-sans text-lg font-bold text-accent">{SITE_NAME}</p>
    </header>
  );
}
