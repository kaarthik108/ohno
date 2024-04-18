// import { OpenAIStream, StreamingTextResponse } from "ai";
// import { env } from "hono/adapter";
// import { createRoute } from "honox/factory";
// import OpenAI from "openai";
// import * as snowflake from "snowflake-sdk";
// import { z } from "zod";

// export const POST = createRoute(async (c) => {
//   const requestBody = await c.req.json();

//   const config = env<{
//     ACCOUNT: string;
//     USER_NAME: string;
//     PASSWORD: string;
//     ROLE: string;
//     WAREHOUSE: string;
//     DATABASE: string;
//     SCHEMA: string;
//   }>(c);

//   const snowConnect = snowflake.createConnection({
//     account: config.ACCOUNT,
//     username: config.USER_NAME,
//     password: config.PASSWORD,
//     role: config.ROLE,
//     warehouse: config.WAREHOUSE,
//     database: config.DATABASE,
//     schema: config.SCHEMA,
//   });

//   snowflake.configure({ ocspFailOpen: false });

//   const query = requestBody.query;

//   try {
//     const result = await new Promise<any[]>((resolve, reject) => {
//       snowConnect.connect((err, conn) => {
//         if (err) {
//           console.error("Unable to connect: " + err.message);
//           reject(err);
//         } else {
//           snowConnect.execute({
//             sqlText: query,
//             complete: (err, stmt, rows) => {
//               if (err) {
//                 console.error(
//                   "Failed to execute statement due to the following error: " +
//                     err.message
//                 );
//                 reject(err);
//               } else {
//                 resolve(rows || []);
//               }
//             },
//           });
//         }
//       });
//     });

//     //  const columns = result.length > 0 ? Object.keys(result[0]) : [];
//     //  const formattedResult = {
//     //    columns,
//     //    data: result,
//     //  };

//     return new Response(JSON.stringify(result), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     console.error(error);
//     return new Response(JSON.stringify({ error: error }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// });
