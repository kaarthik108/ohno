import { IconSnowflake } from "./Header";

export default function Footer() {
  return (
    <div className="fixed w-full bottom-0 flex items-center justify-center bg-[#f1efe8]">
      <div className="flex items-center gap-4">
        <a
          href="https://docs.snowflake.com/en/user-guide/snowflake-cortex/llm-functions#label-cortex-llm-complete?utm_source=ohno"
          target="_blank"
          className="flex"
        >
          <div className="flex mr-1 antialiased items-center">
            Powered by
            <IconSnowflake className="ml-1 h-16 w-36" />
          </div>
        </a>
      </div>{" "}
    </div>
  );
}
