import { type NextRequest } from "next/server";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { router } from "@/app/lib/trpc-initialization";
import { distantToCloseProcedure } from "@/app/lib/server/distant-to-close";

/**
 * As the number of endpoints grow with
 * the definition of routed procedures,
 * please consider moving this to a
 * dedicated "routes" file.
 *
 * For creation clarity:
 * handler bridges trpc requests to router procedures,
 * which are alike an API endpoint.
 **/

export const appRouter = router({
  distantToClose: distantToCloseProcedure,
});

export type AppRouter = typeof appRouter;

const handler = (req: NextRequest) =>
  fetchRequestHandler({
    createContext: () => ({}),
    endpoint: "/api/trpc",
    router: appRouter,
    req,
  });

export { handler as GET, handler as POST };
