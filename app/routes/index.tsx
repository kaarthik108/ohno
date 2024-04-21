import Chat from "@/islands/Chat";
import { createRoute } from "honox/factory";

export default createRoute(async (c) => {
  return c.render(
    <div className="min-h-screen bg-[#f1efe8] custom-scrollbar">
      <Chat />
    </div>,
    { title: "ohno" }
  );
});
