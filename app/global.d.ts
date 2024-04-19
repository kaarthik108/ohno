import {} from "hono";

import "@hono/react-renderer";

declare module "@hono/react-renderer" {
  interface Env {
    Variables: {
      OPENAI_API_KEY: string;
      SNOWFLAKE_API_URL: string;
      UPSTASH_REDIS_URL: string;
      UPSTASH_REDIS_TOKEN: string;
      TOKEN: string;
    };
    Bindings: {
      kv: KVNamespace;
      OPENAI_API_KEY: string;
      SNOWFLAKE_API_URL: string;
      UPSTASH_REDIS_URL: string;
      UPSTASH_REDIS_TOKEN: string;
      TOKEN: string;
    };
  }
  interface Props {
    title?: string;
  }
}
