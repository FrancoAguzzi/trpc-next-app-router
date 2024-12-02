"use client";

import { trpc } from "@/app/lib/trpc-initialization";

export const DataQuerier = () => {
  const { data: result, isLoading, isError } = trpc.distantToClose.useQuery();

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <h1>TRPC + Next App Router</h1>
      <p>
        {isError
          ? "Error loading data!"
          : isLoading
          ? "Loading data! It will be displayed here..."
          : result
          ? JSON.stringify(result)
          : "No results found! Please review the code behind the scenes."}
      </p>
    </div>
  );
};
