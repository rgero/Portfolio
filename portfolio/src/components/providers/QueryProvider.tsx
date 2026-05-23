"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

const STALE_MS = 600_000;

export function QueryProvider({ children }: { children: React.ReactNode }) {
  const [client] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { staleTime: STALE_MS },
        },
      }),
  );

  return (
    <QueryClientProvider client={client}>{children}</QueryClientProvider>
  );
}
