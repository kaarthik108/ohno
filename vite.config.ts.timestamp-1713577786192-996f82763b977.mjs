// vite.config.ts
import pages from "file:///Users/kaarthikandavar/Projects/ohno/node_modules/@hono/vite-cloudflare-pages/dist/index.js";
import adapter from "file:///Users/kaarthikandavar/Projects/ohno/node_modules/@hono/vite-dev-server/dist/adapter/cloudflare.js";
import honox from "file:///Users/kaarthikandavar/Projects/ohno/node_modules/honox/dist/vite/index.js";
import client from "file:///Users/kaarthikandavar/Projects/ohno/node_modules/honox/dist/vite/client.js";
import path from "path";
import { defineConfig } from "file:///Users/kaarthikandavar/Projects/ohno/node_modules/vite/dist/node/index.js";
var __vite_injected_original_dirname = "/Users/kaarthikandavar/Projects/ohno";
var vite_config_default = defineConfig(({ mode }) => {
  const common = {
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "./app")
      }
    }
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
            assetFileNames: "static/assets/[name].[ext]"
          }
        }
      }
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
          "@upstash/redis/cloudflare"
        ]
      },
      plugins: [
        honox({
          devServer: { adapter }
        }),
        pages()
      ]
    };
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMva2FhcnRoaWthbmRhdmFyL1Byb2plY3RzL29obm9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9rYWFydGhpa2FuZGF2YXIvUHJvamVjdHMvb2huby92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMva2FhcnRoaWthbmRhdmFyL1Byb2plY3RzL29obm8vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcGFnZXMgZnJvbSBcIkBob25vL3ZpdGUtY2xvdWRmbGFyZS1wYWdlc1wiO1xuaW1wb3J0IGFkYXB0ZXIgZnJvbSBcIkBob25vL3ZpdGUtZGV2LXNlcnZlci9jbG91ZGZsYXJlXCI7XG5pbXBvcnQgaG9ub3ggZnJvbSBcImhvbm94L3ZpdGVcIjtcbmltcG9ydCBjbGllbnQgZnJvbSBcImhvbm94L3ZpdGUvY2xpZW50XCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4ge1xuICBjb25zdCBjb21tb24gPSB7XG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IHtcbiAgICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9hcHBcIiksXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgaWYgKG1vZGUgPT09IFwiY2xpZW50XCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uY29tbW9uLFxuICAgICAgcGx1Z2luczogW2NsaWVudCh7IGpzeEltcG9ydFNvdXJjZTogXCJyZWFjdFwiIH0pXSxcbiAgICAgIGJ1aWxkOiB7XG4gICAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgICBpbnB1dDogW1wiLi9hcHAvY2xpZW50LnRzXCIsIFwiL2FwcC90YWlsd2luZC5jc3NcIiwgXCIvYXBwL2Zhdmljb24uaWNvXCJdLFxuICAgICAgICAgIG91dHB1dDoge1xuICAgICAgICAgICAgZW50cnlGaWxlTmFtZXM6IFwic3RhdGljL2NsaWVudC5qc1wiLFxuICAgICAgICAgICAgY2h1bmtGaWxlTmFtZXM6IFwic3RhdGljL2Fzc2V0cy9bbmFtZV0tW2hhc2hdLmpzXCIsXG4gICAgICAgICAgICBhc3NldEZpbGVOYW1lczogXCJzdGF0aWMvYXNzZXRzL1tuYW1lXS5bZXh0XVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmNvbW1vbixcbiAgICAgIHNzcjoge1xuICAgICAgICBleHRlcm5hbDogW1xuICAgICAgICAgIFwicmVhY3RcIixcbiAgICAgICAgICBcInJlYWN0LWRvbVwiLFxuICAgICAgICAgIFwib3BlbmFpXCIsXG4gICAgICAgICAgXCJhaVwiLFxuICAgICAgICAgIFwiQHVwc3Rhc2gvcmF0ZWxpbWl0XCIsXG4gICAgICAgICAgXCJAdXBzdGFzaC9yZWRpcy9jbG91ZGZsYXJlXCIsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgcGx1Z2luczogW1xuICAgICAgICBob25veCh7XG4gICAgICAgICAgZGV2U2VydmVyOiB7IGFkYXB0ZXIgfSxcbiAgICAgICAgfSksXG4gICAgICAgIHBhZ2VzKCksXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4UixPQUFPLFdBQVc7QUFDaFQsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sV0FBVztBQUNsQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsb0JBQW9CO0FBTDdCLElBQU0sbUNBQW1DO0FBT3pDLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBQ3hDLFFBQU0sU0FBUztBQUFBLElBQ2IsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLE1BQ3RDO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFFQSxNQUFJLFNBQVMsVUFBVTtBQUNyQixXQUFPO0FBQUEsTUFDTCxHQUFHO0FBQUEsTUFDSCxTQUFTLENBQUMsT0FBTyxFQUFFLGlCQUFpQixRQUFRLENBQUMsQ0FBQztBQUFBLE1BQzlDLE9BQU87QUFBQSxRQUNMLGVBQWU7QUFBQSxVQUNiLE9BQU8sQ0FBQyxtQkFBbUIscUJBQXFCLGtCQUFrQjtBQUFBLFVBQ2xFLFFBQVE7QUFBQSxZQUNOLGdCQUFnQjtBQUFBLFlBQ2hCLGdCQUFnQjtBQUFBLFlBQ2hCLGdCQUFnQjtBQUFBLFVBQ2xCO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRixPQUFPO0FBQ0wsV0FBTztBQUFBLE1BQ0wsR0FBRztBQUFBLE1BQ0gsS0FBSztBQUFBLFFBQ0gsVUFBVTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCxNQUFNO0FBQUEsVUFDSixXQUFXLEVBQUUsUUFBUTtBQUFBLFFBQ3ZCLENBQUM7QUFBQSxRQUNELE1BQU07QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
