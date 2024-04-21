import hono from "@/assets/hono.png";
import { cn } from "@/lib/utils";
import { IconCloudflare, IconUser } from "./Icons";

export function BotMessage({
  content,
  className,
}: {
  content: string;
  className?: string;
}) {
  return (
    <div className={cn("group relative flex items-start md:-ml-12", className)}>
      <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md bg-tranparent">
        <img src={hono} alt="Cloudflare" className="h-6 w-6" />
      </div>
      <div className="ml-4 flex-1 p-4 px-4 rounded-2xl border-gray-500 bg-white backdrop-blur-lg shadow-sm">
        {content}
      </div>
    </div>
  );
}
export function UserMessage({
  content,
  className,
}: {
  content: string;
  className?: string;
}) {
  return (
    <div className={cn("group relative flex items-start md:-ml-12", className)}>
      <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md bg-tranparent">
        <IconUser className="text-orange-600 h-6 w-6" />
      </div>
      <div className="ml-4 flex-1 p-4 px-4 rounded-2xl border-gray-500 bg-white backdrop-blur-lg shadow-sm">
        {content}
      </div>
    </div>
  );
}
export function BotCard({
  children,
  showAvatar = true,
}: {
  children: React.ReactNode;
  showAvatar?: boolean;
}) {
  return (
    <div className="group relative flex items-start md:-ml-12">
      <div
        className={cn(
          "flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md shadow-sm bg-tranparent",
          !showAvatar && "invisible"
        )}
      >
        <IconCloudflare className="text-orange-600 h-6 w-6" />
      </div>
      <div className="ml-4 flex-1 p-4 px-4 rounded-2xl border-gray-500 backdrop-blur-lg shadow-sm">
        {children}
      </div>
    </div>
  );
}
