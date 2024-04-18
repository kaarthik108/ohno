import { useEffect, useRef, useState } from "react";

import { BotCard, BotMessage, UserMessage } from "@/components/message";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { executeSnowflakeQuery } from "@/lib/snowflake";
import { cn } from "@/lib/utils";
import { SendHorizontal } from "lucide-react";

export default function Chat() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "1",
      role: "system",
      content: "You are a helpful AI assistant",
    },
  ]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!input) return;

    const newMessages = [
      ...messages,
      {
        id: String(messages.length + 1),
        role: "user",
        content: input,
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

    const query = `SELECT SNOWFLAKE.CORTEX.COMPLETE('mixtral-8x7b', [${formattedMessages}], {'temperature': 0.7, 'max_tokens': 10});`;

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
    }

    setIsLoading(false);
  }
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current === null) return;
    ref.current.scrollTo(0, ref.current.scrollHeight);
  }, [messages]);

  return (
    <>
      <div className="px-8 md:px-12 pt-20 md:pt-16 pb-32 md:pb-40 max-w-3xl mx-auto flex flex-col space-y-3 md:space-y-6 overflow-y-auto">
        {messages.map((m) => (
          <div key={m.id} className="">
            {m.role === "user" && <UserMessage content={m.content} />}

            {m.role === "assistant" && <BotMessage content={m.content} />}
          </div>
        ))}

        <div className="fixed bottom-10 md:bottom-12 left-0 right-0 flex justify-center items-center mx-auto pt-2 bg-transparent w-full z-10">
          <form onSubmit={handleSubmit} className="max-w-2xl w-full px-2">
            <div className="relative flex items-center w-full">
              <Input
                name="message"
                value={input}
                onChange={handleInputChange}
                placeholder="Ask a question..."
                className="w-full pl-6 pr-10 h-14 rounded-full bg-[#393937] text-[#D4D4D4] focus-within:outline-none outline-none focus:ring-0 border-none backdrop-blur-lg shadow-lg"
              />
              <Button
                type="submit"
                size={"lg"}
                variant={"default"}
                disabled={isLoading}
                className={cn(
                  `flex items-center justify-center absolute right-5 top-1/2 transform -translate-y-1/2 text-white dark:text-black hover:bg-white/25 focus:bg-white/25 w-20 h-8 ring-0 outline-0 bg-[#ae5630]  rounded-xl`,
                  input ? "px-0 w-10" : "px-4"
                )}
              >
                {!input ? <span className="mr-1 text-sm">Chat</span> : null}
                <div>
                  <SendHorizontal className="text-white h-3 w-3" />
                </div>{" "}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
