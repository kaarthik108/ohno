import Footer from "@/islands/Footer";
import { Header } from "@/islands/Header";
import { reactRenderer, useRequestContext } from "@hono/react-renderer";
import { FC, PropsWithChildren } from "react";

const HasIslands: FC<PropsWithChildren> = ({ children }) => {
  const IMPORTING_ISLANDS_ID = "__importing_islands" as const;
  const c = useRequestContext();
  return <>{c.get(IMPORTING_ISLANDS_ID) ? children : <></>}</>;
};

export default reactRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/ico" href="/static/assets/favicon.ico" />
        <title>
          {title || "Chatbot Template | Hono.js | Snowflake Cortex LLM"}
        </title>
        <meta
          name="description"
          content="A chatbot template built with Hono.js on Cloudflare Pages, powered by Snowflake Cortex LLM model and styled with Tailwind CSS. Utilizes Mistral models for enhanced conversational capabilities."
        />
        <meta
          name="keywords"
          content="chatbot, template, Hono.js, Cloudflare Pages, Snowflake Cortex, LLM, Tailwind CSS, Mistral models, React, Vite"
        />
        <meta name="author" content="Kaarthik Andavar" />
        <meta
          property="og:title"
          content={title || "Chatbot Template | Hono.js | Snowflake Cortex LLM"}
        />
        <meta
          property="og:description"
          content="A chatbot template built with Hono.js on Cloudflare Pages, powered by Snowflake Cortex LLM model and styled with Tailwind CSS. Utilizes Mistral models for enhanced conversational capabilities."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ohno-1sq.pages.dev" />
        <meta
          property="og:image"
          content="https://ohno-1sq.pages.dev/static/assets/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={title || "Chatbot Template | Hono.js | Snowflake Cortex LLM"}
        />
        <meta
          name="twitter:description"
          content="A chatbot template built with Hono.js on Cloudflare Pages, powered by Snowflake Cortex LLM model and styled with Tailwind CSS. Utilizes Mistral models for enhanced conversational capabilities."
        />
        <meta
          name="twitter:image"
          content="https://ohno-1sq.pages.dev/static/assets/twitter-image.jpg"
        />

        {import.meta.env.PROD ? (
          <>
            <HasIslands>
              <script type="module" src="/static/client.js"></script>
            </HasIslands>
            <link href="/static/assets/tailwind.css" rel="stylesheet" />
          </>
        ) : (
          <>
            <script type="module" src="/app/client.ts"></script>
            <link href="/app/tailwind.css" rel="stylesheet" />
          </>
        )}
        {title ? <title>{title}</title> : ""}
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "1fe4b11b58124bdda1bc2be326230dfc"}'
        ></script>
      </body>
    </html>
  );
});
