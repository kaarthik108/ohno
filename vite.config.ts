import pages from "@hono/vite-cloudflare-pages";
import adapter from "@hono/vite-dev-server/cloudflare";
import honox from "honox/vite";
import client from "honox/vite/client";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  const common = {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./app"),
      },
    },
  };

  if (mode === "client") {
    return {
      ...common,
      plugins: [client({ jsxImportSource: "react" })],
      build: {
        rollupOptions: {
          input: ["./app/client.ts", "/app/tailwind.css", "/app/favicon.ico"],
          output: {
            entryFileNames: "static/client.js",
            chunkFileNames: "static/assets/[name]-[hash].js",
            assetFileNames: "static/assets/[name].[ext]",
          },
        },
      },
    };
  } else {
    return {
      ...common,
      ssr: {
        external: [
          "react",
          "react-dom",
          "openai",
          "ai",
          "@upstash/ratelimit",
          "@upstash/redis/cloudflare",
        ],
      },
      plugins: [
        honox({
          devServer: { adapter },
        }),
        pages(),
      ],
    };
  }
});
