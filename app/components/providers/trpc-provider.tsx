"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/react-query";
import { useState } from "react";
import { superjson } from "../../lib/trpc-transformer";
import { trpc } from "../../lib/trpc-initialization";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 5 * 1000 },
  },
});

export default function TrpcProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [trpcClient] = useState(() =>
    trpc.createClient({
      transformer: superjson,
      links: [
        httpBatchLink({
          url: "/api/trpc",
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}
