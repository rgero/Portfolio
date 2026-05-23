"use client";

import { Search } from "lucide-react";

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export function SearchInput({
  value,
  onChange,
  placeholder = "Search by name or tag…",
}: SearchInputProps) {
  return (
    <label className="relative block w-full max-w-md">
      <Search
        className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-text-muted"
        aria-hidden
      />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-border bg-bg-card py-2.5 pl-10 pr-4 text-sm text-text outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
      />
    </label>
  );
}
