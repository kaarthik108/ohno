interface SnowflakeResponse {
  choices: Array<{
    messages: string;
  }>;
  created: number;
  model: string;
  usage: {
    completion_tokens: number;
    prompt_tokens: number;
    total_tokens: number;
  };
}
interface RateLimitResponse {
  query: string;
}

export async function executeSnowflakeQuery(
  sqlText: string
): Promise<SnowflakeResponse[]> {
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://ohno-1sq.pages.dev"
      : "http://localhost:5173";

  const res = await fetch(`${baseUrl}/api/snow`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // "x-api-key": process.env.X_API_KEY as string,
    },
    body: JSON.stringify({ query: sqlText }),
  });

  if (!res.ok) {
    throw new Error("Failed to execute query");
  }

  const data: unknown = await res.json();
  console.log(data);

  if (
    typeof data === "object" &&
    data !== null &&
    (data as RateLimitResponse).hasOwnProperty("query")
  ) {
    const rateLimitMessage = (data as RateLimitResponse).query;
    console.log(rateLimitMessage);
    throw new Error(rateLimitMessage);
  }

  return data as SnowflakeResponse[];
}
