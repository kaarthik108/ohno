import { OpenAIStream, StreamingTextResponse } from "ai";
import { env } from "hono/adapter";
import { createRoute } from "honox/factory";
import OpenAI from "openai";
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
  const { messages } = await c.req.json();

  const openai = new OpenAI({
    apiKey: env<{ OPENAI_API_KEY: string }>(c).OPENAI_API_KEY,
  });

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages,
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
});
