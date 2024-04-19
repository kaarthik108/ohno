export interface SnowflakeResponse {
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
export interface RateLimitResponse {
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
    },
    body: JSON.stringify({ query: sqlText }),
  });

  if (!res.ok) {
    throw new Error("Failed to execute query");
  }

  const data: unknown = await res.json();

  if (
    typeof data === "object" &&
    data !== null &&
    (data as RateLimitResponse).hasOwnProperty("query")
  ) {
    const rateLimitMessage = (data as RateLimitResponse).query;
    throw new Error(rateLimitMessage);
  }

  return data as SnowflakeResponse[];
}
