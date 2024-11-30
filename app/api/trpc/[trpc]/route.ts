import { type NextRequest } from "next/server";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { router } from "@/app/lib/trpc-initialization";

export const appRouter = router({});

export type AppRouter = typeof appRouter;

const handler = (req: NextRequest) =>
  fetchRequestHandler({
    router: appRouter,
    endpoint: "/api/trpc",
    req,
    createContext: () => ({}),
  });

export { handler as GET, handler as POST };
