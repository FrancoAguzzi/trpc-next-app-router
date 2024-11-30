import { initTRPC } from "@trpc/server";
import { superjson } from "./trpc-transformer";
import { createTRPCReact } from "@trpc/react-query";
import { AppRouter } from "../api/trpc/[trpc]/route";

// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
const t = initTRPC.create({
  transformer: superjson,
  errorFormatter({ error, shape }) {
    const shouldHideError =
      error.code === "INTERNAL_SERVER_ERROR" &&
      process.env.VERCEL_ENV === "production";

    const { code, httpStatus, path } = shape.data;

    const data = shouldHideError
      ? {
          code,
          httpStatus,
          path,
        }
      : shape.data;
    const message = shouldHideError ? "Something went wrong" : shape.message;

    return {
      ...shape,
      message,
      data,
    };
  },
});

// Base router and procedure helpers
export const { procedure, createCallerFactory, router } = t;
export const trpc = createTRPCReact<AppRouter>({});
