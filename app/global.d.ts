import {} from "hono";

import "@hono/react-renderer";

declare module "@hono/react-renderer" {
  interface Env {
    Variables: {};
    Bindings: {
      OPENAI_API_KEY: string;
    };
  }
  interface Props {
    title?: string;
  }
}
