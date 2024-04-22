import {} from "hono";

import "@hono/react-renderer";

declare module "@hono/react-renderer" {
  interface Env {
    Variables: {
      OPENAI_API_KEY: string;
      SNOWFLAKE_API_URL: string;
      UPSTASH_REDIS_URL: string;
      UPSTASH_REDIS_TOKEN: string;
      GORQ_API_KEY: string;
      TOKEN: string;
      X_API_KEY: string;
    };
    Bindings: {
      kv: KVNamespace;
      ai: any;
      OPENAI_API_KEY: string;
      SNOWFLAKE_API_URL: string;
      UPSTASH_REDIS_URL: string;
      UPSTASH_REDIS_TOKEN: string;
      GORQ_API_KEY: string;
      TOKEN: string;
    };
  }
  interface Props {
    title?: string;
  }
}
