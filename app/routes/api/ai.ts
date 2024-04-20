import { OpenAIStream, StreamingTextResponse } from "ai";
import { events } from "fetch-event-stream";
import { env } from "hono/adapter";
import { streamText } from "hono/streaming";
import { createRoute } from "honox/factory";
import OpenAI from "openai";
import { z } from "zod";

export const POST = createRoute(async (c) => {
  const { messages } = await c.req.json();

  //   @ts-ignore
  const aiResp = await c.env.AI.run("@cf/meta/llama-3-8b-instruct", {
    messages,
    stream: true,
  });
  let buffer = "";
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();
  const transformer = new TransformStream({
    /* https://github.com/chand1012/openai-cf-workers-ai/blob/main/routes/chat.js */
    transform(chunk, controller) {
      buffer += decoder.decode(chunk);
      // Process buffered data and try to find the complete message
      while (true) {
        const newlineIndex = buffer.indexOf("\n");
        if (newlineIndex === -1) {
          // If no line breaks are found, it means there is no complete message, wait for the next chunk
          break;
        }

        const line = buffer.slice(0, newlineIndex + 1);
        buffer = buffer.slice(newlineIndex + 1);

        try {
          if (line.startsWith("data: ")) {
            const content = line.slice("data: ".length);
            const doneflag = content.trim() == "[DONE]";
            if (doneflag) {
              controller.enqueue(encoder.encode("data: [DONE]\n\n"));
              return;
            }

            const data = JSON.parse(content);
            const newChunk =
              "data: " +
              JSON.stringify({
                object: "chat.completion.chunk",
                choices: [
                  {
                    delta: { content: data.response },
                    index: 0,
                    finish_reason: null,
                  },
                ],
              }) +
              "\n\n";
            controller.enqueue(encoder.encode(newChunk));
          }
        } catch (err) {
          console.error("Error parsing line:", err);
        }
      }
    },
  });

  return new Response(aiResp.pipeThrough(transformer), {
    headers: {
      "content-type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
});
