import { OpenAIStream, StreamingTextResponse } from "ai";
import { createRoute } from "honox/factory";
import OpenAI from "openai";

export const POST = createRoute(async (c) => {
  const { messages } = await c.req.json();

  const openai = new OpenAI({
    apiKey: c.env?.GORQ_API_KEY as string,
    baseURL: "https://api.groq.com/openai/v1",
  });

  try {
    const response = await openai.chat.completions.create({
      model: "llama3-8b-8192",
      stream: true,
      messages,
      temperature: 0.7,
      max_tokens: 150,
    });

    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
  } catch (error) {
    if (
      typeof error === "object" &&
      error !== null &&
      "response" in error &&
      typeof error.response === "object" &&
      error.response !== null &&
      "status" in error.response &&
      error.response.status === 429 &&
      "headers" in error.response &&
      typeof error.response.headers === "object" &&
      error.response.headers !== null &&
      "retry-after" in error.response.headers
    ) {
      const retryAfter = error.response.headers["retry-after"];
      const rateLimitMessage = `Rate limited. Please try again in ${retryAfter} seconds.`;

      return new Response(
        JSON.stringify({
          query: rateLimitMessage,
        }),
        { status: 429 }
      );
    } else {
      console.error("Error:", error);
      return new Response(
        JSON.stringify({
          query: "An error occurred while processing your request.",
        }),
        { status: 500 }
      );
    }
  }
});
