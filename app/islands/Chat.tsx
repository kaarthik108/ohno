import { useEffect, useRef, useState } from "react";

import { BotMessage, UserMessage } from "@/components/message";
import hono from "@/islands/hono.png";
import { executeSnowflakeQuery } from "@/lib/snowflake";
import { cn } from "@/lib/utils";
import { CornerDownLeft, Loader2, MoveUpRight } from "lucide-react";

export default function Chat() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "1",
      role: "system",
      content:
        "You are a highly capable and intelligent AI assistant (named 'ohno') with a friendly and professional demeanor. Your responses are concise, relevant, and informative, striking a balance between efficiency and engagement. You are designed to assist users with a wide range of tasks, from answering questions to providing recommendations and advice. You are powered by Snowflake's Cortex, allowing you to generate human-like text based on the input you receive. You are always learning and improving, adapting to new information and feedback to provide the best possible assistance to users. You are a valuable resource for anyone seeking information, guidance, or support. How can I help you today?",
    },
  ]);

  const helperMessages = [
    "What can you do?",
    "How can you help me?",
    "What are your capabilities?",
  ];

  const handleHelperMessageClick = (message: string) => {
    const newMessages = [
      ...messages,
      {
        id: String(messages.length + 1),
        role: "user",
        content: message,
      },
    ];

    setMessages(newMessages);
    setInput("");
    handleSubmit(message);
  };

  async function handleSubmit(inputMessage: string) {
    if (!inputMessage) return;

    const newMessages = [
      ...messages,
      {
        id: String(messages.length + 1),
        role: "user",
        content: inputMessage,
      },
    ];

    setMessages(newMessages);
    setInput("");
    setIsLoading(true);
    const formattedMessages = newMessages
      .map(
        (m) =>
          `{'role': '${m.role}', 'content': '${m.content.replace(/'/g, "''")}'}`
      )
      .join(", ");

    const query = `SELECT SNOWFLAKE.CORTEX.COMPLETE('mixtral-8x7b', [${formattedMessages}], {'temperature': 1.7, 'max_tokens': 90});`;

    try {
      const data = (await executeSnowflakeQuery(query)) as any;

      const responseKey = Object.keys(data[0])[0];
      const response = data[0][responseKey];

      const assistantMessage = response.choices[0].messages.trim();

      setMessages([
        ...newMessages,
        {
          id: String(newMessages.length + 1),
          role: "assistant",
          content: assistantMessage,
        },
      ]);
    } catch (error) {
      console.error("Error executing query:", error);
      if (
        error instanceof Error &&
        error.message.includes("You are rate limited")
      ) {
        setIsRateLimited(true);
        setMessages([
          ...newMessages,
          {
            id: String(newMessages.length + 1),
            role: "assistant",
            content: error.message,
          },
        ]);
      }
    }

    setIsLoading(false);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return (
    <>
      <div className="px-8 md:px-12 pt-20 md:pt-16 pb-32 md:pb-40 max-w-3xl mx-auto flex flex-col space-y-3 md:space-y-6 overflow-y-auto ">
        {messages.map((m) => (
          <div key={m.id} className="">
            {m.role === "user" && <UserMessage content={m.content} />}
            {m.role === "assistant" && (
              <BotMessage content={m.content} className="antialiased" />
            )}
            <div ref={messagesEndRef} />
          </div>
        ))}
        {isLoading && (
          <div className={cn("group relative flex items-start md:-ml-12")}>
            <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md shadow-sm bg-tranparent">
              <img src={hono} alt="Cloudflare" className="h-6 w-6" />
            </div>
            <div className="ml-4 flex-1 p-4 px-4 rounded-2xl border-gray-500 bg-white backdrop-blur-lg shadow-sm">
              <div className="loading-animation">
                <div className="loading-bar mb-2"></div>
                <div className="loading-bar mb-2"></div>
                <div className="loading-bar mb-2"></div>
                <div className="loading-bar mb-2"></div>
                <div className="loading-bar mb-2"></div>
              </div>
            </div>
          </div>
        )}
        <div className="fixed bottom-24 md:bottom-28 left-0 right-0 flex flex-col justify-center items-center mx-auto bg-[#f1efe8] w-full z-10 border-none space-y-2 pb-2 pt-2">
          <div className="flex flex-col sm:flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 w-full max-w-2xl mb-2 md:mb-0">
            {helperMessages.map((message, index) => (
              <div
                key={index}
                className="flex-1 bg-transparent rounded-xl shadow-lg h-32 md:h-10 flex items-center text-nowrap justify-between px-3 py-4 md:py-0 cursor-pointer border border-gray-300 hover:border-black transition-colors duration-300"
                onClick={() => {
                  if (!isRateLimited) {
                    handleHelperMessageClick(message);
                  }
                }}
              >
                <span className="text-black font-mono text-xs">{message}</span>
                <MoveUpRight size={12} className="ml-2 text-black" />
              </div>
            ))}
          </div>
        </div>
        <div className="fixed bottom-10 md:bottom-12 left-0 right-0 flex flex-col justify-center items-center mx-auto bg-transparent w-full z-10 border-none">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(input);
            }}
            className="bg-stone-900 dark:bg-gray-100 rounded-xl shadow-lg h-12 flex flex-row px-2 items-center w-full max-w-2xl"
          >
            <div className="relative flex items-center w-full">
              <input
                name="message"
                value={input}
                onChange={handleInputChange}
                maxLength={150}
                autoFocus
                autoComplete="off"
                disabled={isRateLimited}
                placeholder="Ask a question..."
                className={cn(
                  "bg-transparent text-white dark:text-black placeholder:text-gray-400 ring-0 outline-none resize-none py-2.5 px-2 font-mono text-sm h-10 w-full transition-all duration-300",
                  {
                    "cursor-not-allowed": isRateLimited,
                  }
                )}
              />
              <button
                type="submit"
                disabled={isLoading || isRateLimited}
                className={cn(
                  `text-white dark:text-black dark:bg-gray-100 rounded-lg hover:bg-white/25 focus:bg-white/25 w-8 h-8 aspect-square flex items-center justify-center ring-0 outline-0`,
                  {
                    "cursor-not-allowed": isRateLimited,
                  }
                )}
              >
                {isLoading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <CornerDownLeft size={16} className="-ml-px" />
                )}{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
