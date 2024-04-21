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
