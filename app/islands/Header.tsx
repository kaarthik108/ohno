import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed w-full p-0 md:p-2 flex justify-between items-center md:bg-transparent">
      <div className="p-2">
        <a href="/" style={{ cursor: "pointer" }}>
          <h1 className="text-2xl font-bold text-black">ohno</h1>

          <span className="sr-only">Di1</span>
        </a>
      </div>
      <div className="p-2">
        <Button
          size={"sm"}
          variant={"ghost"}
          className="text-muted-foreground dark:text-black hover:bg-white/25 focus:bg-white/25 hover:text-white/80"
          asChild
        >
          <a href="/about">About</a>
        </Button>
      </div>
    </header>
  );
}
