import { MultiRegionRatelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis/cloudflare";
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
const cache = new Map();
// x-real-ip
export const POST = createRoute(async (c) => {
  const redis = new Redis({
    url: env<{ UPSTASH_REDIS_URL: string }>(c).UPSTASH_REDIS_URL,
    token: env<{ UPSTASH_REDIS_TOKEN: string }>(c).UPSTASH_REDIS_TOKEN,
  });

  const ohnoRateLimit = new MultiRegionRatelimit({
    redis: [redis],
    limiter: MultiRegionRatelimit.slidingWindow(3, "30 s"),
    analytics: true,
    prefix: "ratelimit:ohno",
    ephemeralCache: cache,
  });

  // ratelimit
  if (new URL(c.req.url).pathname == "/favicon.ico") {
    return new Response(null, { status: 400 });
  }

  const userIP: string = c.req.header("cf-connecting-ip") || "none";
  console.log("User IP:", userIP);

  const data = await ohnoRateLimit.limit(userIP);

  if (data.success) {
    const { query } = await c.req.json();
    const baseUrl = env<{ SNOWFLAKE_API_URL: string }>(c).SNOWFLAKE_API_URL; // cloudflare tunnel 😅

    const res = await fetch(`${baseUrl}/api/snow`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + env<{ TOKEN: string }>(c).TOKEN,
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
  } else {
    // show an error page for rate limited users
    return new Response(
      JSON.stringify(
        {
          message: "You are rate limited, try again later.",
          ip: userIP,
          data,
        },
        null,
        2
      ),
      { status: 200 }
    );
  }
});
