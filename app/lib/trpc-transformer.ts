import SuperJSON from "superjson";

export const superjson = new SuperJSON();

superjson.registerCustom<bigint, string>(
  {
    isApplicable: (v): v is bigint => {
      return typeof v === "bigint";
    },
    serialize: (v) => v.toString(),
    deserialize: (v) => BigInt(v),
  },
  "bigint"
);
