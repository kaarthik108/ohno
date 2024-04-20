import { OpenAIStream, StreamingTextResponse } from "ai";
import { createRoute } from "honox/factory";
import OpenAI from "openai";

export const POST = createRoute(async (c) => {
  const { messages } = await c.req.json();

  const openai = new OpenAI({
    apiKey: c.env?.GORQ_API_KEY as string,
    baseURL: "https://api.groq.com/openai/v1",
  });

  const response = await openai.chat.completions.create({
    model: "llama3-8b-8192",
    stream: true,
    messages,
    temperature: 0.7,
    max_tokens: 150,
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
});
