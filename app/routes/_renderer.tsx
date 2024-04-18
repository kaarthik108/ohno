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
          data-cf-beacon='{"token": "d3b155d6c9ba4dd384bb4e14a841dd64"}'
        ></script>
      </body>
    </html>
  );
});
