import { showRoutes } from "hono/dev";
import { createRoute } from "honox/factory";
import { createApp } from "honox/server";

type bindings = {
  OPENAI_API_KEY: string;
};

const app = createApp<{ Bindings: bindings }>();

showRoutes(app);

export default app;
