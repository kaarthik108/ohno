import { cn } from "@/lib/utils";
import hono from "../../public/hono.png";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function BotMessage({
  content,
  className,
}: {
  content: string;
  className?: string;
}) {
  // const words = content.split(" ").map((word) => ({ text: `${word} ` }));
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
function IconCloudflare({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      role="img"
      className={cn("size-4", className)}
      {...props}
    >
      <path
        fill="#FDD835"
        d="M41.008 26.487L40.4 24.249 44.096 23.56 40.427 22.733 43.88 21.24 40.119 21.25 43.151 19.028 39.488 19.875 41.948 17.033 38.564 18.675 40.331 15.355 37.398 17.709 38.383 14.079 36.049 17.028 36.197 13.27 34.579 16.663 33.89 12.966 33.064 16.636 31.57 13.184 31.58 16.944 29.969 17.372 27.362 15.115 29.005 18.498 25.686 16.732 28.039 19.662 24.409 18.68 27.356 21.015 23.601 20.864 26.993 22.484 23.296 23.173 26.966 23.999 24.941 24.875 17.125 24.875 17.125 29.5 34.461 29.5 39 30 38.827 29.5 39 29.5 39 28.56 39.515 28.834 40.771 28.834 39.354 27.07 42.984 28.053z"
      ></path>
      <path
        fill="#F57C00"
        d="M38.265,23.789c-0.884,0-1.708,0.218-2.454,0.573l2.564,4.763l-4-3.875l-15,4.375l13.75-5.25L25.5,21.5l9.041,2.083l0.262,0.053c0.008,0.028,0.035-0.366,0.035-0.769c0-5.25-4.267-9.505-9.533-9.505c-4.374,0-8.057,2.938-9.178,6.946c-0.746-0.701-1.748-1.134-2.85-1.134c-2.303,0-4.166,1.861-4.166,4.154c0,0.46,0.077,0.906,0.216,1.318c-0.192-0.016-0.389-0.028-0.586-0.028C5.57,24.619,3,27.18,3,30.34c0,0.577,0.089,1.136,0.249,1.66h40.173C43.789,31.247,44,30.403,44,29.513C44,26.348,41.432,23.789,38.265,23.789z"
      ></path>
      <path
        fill="#FFB74D"
        d="M25.5 19c2.851 0 5.453 1.043 7.463 2.761C32.591 17.967 29.391 15 25.5 15s-7.091 2.967-7.463 6.761C20.047 20.043 22.649 19 25.5 19zM14.737 22.026C14.395 21.417 13.749 21 13 21c-1.104 0-2 .896-2 2 0 .465.165.888.432 1.228C12.049 22.987 13.282 22.123 14.737 22.026zM7.05 32c.251-2.734 2.482-4.895 5.259-4.99C11.537 26.388 10.568 26 9.5 26 7.015 26 5 28.015 5 30.5c0 .529.102 1.031.271 1.5H7.05z"
      ></path>
    </svg>
  );
}

function IconUser({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn("size-4", className)}
      {...props}
    >
      <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8ZM72 96a56 56 0 1 1 56 56 56.06 56.06 0 0 1-56-56Z" />
    </svg>
  );
}
