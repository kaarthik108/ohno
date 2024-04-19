import { MultiRegionRatelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis/cloudflare";
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

export const POST = createRoute(async (c) => {
  const redis = new Redis({
    url: c.env?.UPSTASH_REDIS_URL as string,
    token: c.env?.UPSTASH_REDIS_TOKEN as string,
  });

  const ohnoRateLimit = new MultiRegionRatelimit({
    redis: [redis],
    limiter: MultiRegionRatelimit.slidingWindow(10, "60 s"),
    analytics: true,
    prefix: "ratelimit:ohno",
    ephemeralCache: cache,
  });

  const userIP: string = c.req.header("cf-connecting-ip") || "none";

  const data = await ohnoRateLimit.limit(userIP);

  if (data.success) {
    const { query } = await c.req.json();

    const baseUrl = c.env?.SNOWFLAKE_API_URL; // cloudflare tunnel 😅

    const res = await fetch(`${baseUrl}/api/snow`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + c.env?.TOKEN,
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
    return new Response(
      JSON.stringify({
        query: "You are rate limited, try again later.",
      }),
      { status: 200 }
    );
  }
});
