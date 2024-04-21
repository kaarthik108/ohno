import { IconGitHub, IconX } from "@/components/Icons";

export default function Footer() {
  return (
    <div className="fixed w-full bottom-0 flex items-center justify-center text-black pb-4">
      <div className="flex items-center gap-4">
        <a href="https://github.com/kaarthik108/di1" target="_blank">
          <IconGitHub className="hover:text-stone-500" />
        </a>

        <a
          href="https://twitter.com/kaarthikcodes"
          target="_blank"
          className="hover:text-stone-500"
        >
          <IconX className="hover:text-stone-500 text-black" />
        </a>
      </div>{" "}
    </div>
  );
}
