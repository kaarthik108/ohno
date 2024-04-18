import { env } from "hono/adapter";
import { createRoute } from "honox/factory";
import { z } from "zod";

const schema = z.object({
  messages: z.array(
    z.object({
      role: z.enum(["user", "assistant"]),
      content: z.string(),
    })
  ),
});

export const POST = createRoute(async (c) => {
  const { query } = await c.req.json();
  const baseUrl = env<{ SNOWFLAKE_API_URL: string }>(c).SNOWFLAKE_API_URL; // cloudflare tunnel 😅

  const res = await fetch(`${baseUrl}/api/snow`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // "x-api-key": env<{ X_API_KEY: string }>(c).X_API_KEY,
    },
    body: JSON.stringify({ query: query }),
  });

  if (!res.ok) {
    console.log(res);

    throw new Error("Failed to execute query");
  }

  const data = await res.json();

  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
});
