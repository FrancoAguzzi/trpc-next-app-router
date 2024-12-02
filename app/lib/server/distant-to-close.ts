import { procedure } from "../trpc-initialization";

export const distantToCloseProcedure = procedure.query(async ({ ctx }) => {
  /**
   * I will do something related to my function title,
   * I will be a server hosted function,
   * trpc technology bridges me to the frontend,
   * our connection happens by programmed agreement.
   **/

  console.log("Hey, the intention to run distantToClose has been successful!");

  /**
   * Please visit the file [] to understand how to call me
   **/

  const worksWithRoutedEndpoint = true;
  const wannaVisitClient = true;

  return {
    worksWithRoutedEndpoint,
    wannaVisitClient,
  };
});
