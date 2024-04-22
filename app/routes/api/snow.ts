import { MultiRegionRatelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis/cloudflare";
import { createRoute } from "honox/factory";

const cache = new Map();

export const POST = createRoute(async (c) => {
  const redis = new Redis({
    url: c.env?.UPSTASH_REDIS_URL as string,
    token: c.env?.UPSTASH_REDIS_TOKEN as string,
  });

  const ohnoRateLimit = new MultiRegionRatelimit({
    redis: [redis],
    limiter: MultiRegionRatelimit.slidingWindow(5, "60 s"),
    analytics: true,
    prefix: "ratelimit:ohno",
    ephemeralCache: cache,
  });

  const userIP: string = c.req.header("cf-connecting-ip") || "none";

  const data = await ohnoRateLimit.limit(userIP);

  if (data.success) {
    const { query } = await c.req.json();

    // const baseUrl = c.env?.SNOWFLAKE_API_URL; // cloudflare tunnel 😅

    const baseUrl = `https://snowbrain-agui.vercel.app`;

    const res = await fetch(`${baseUrl}/api/snowai`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": c.env?.X_API_KEY as string,
      },
      body: JSON.stringify({ query: query }),
    });

    if (!res.ok) {
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
