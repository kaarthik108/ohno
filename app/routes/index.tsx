import Chat from "@/islands/Chat";
import { createRoute } from "honox/factory";

export default createRoute(async (c) => {
  const name = c.req.query("name") ?? "Hono";
  return c.render(
    <div className="h-full bg-[#f1efe8]">
      <Chat />
    </div>,
    { title: name }
  );
});
