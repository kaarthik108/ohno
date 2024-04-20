import groq from "/groq.svg";

export default function Footer() {
  return (
    <div className="fixed w-full bottom-0 py-2 flex items-center justify-center bg-[#f1efe8]">
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <div className="flex items-center text-sm">
          <span className="mr-1 antialiased pb-2 font-light tracking-widest">
            Powered by
          </span>
          <a
            href="https://docs.snowflake.com/en/user-guide/snowflake-cortex/llm-functions#label-cortex-llm-complete?utm_source=ohno"
            target="_blank"
            className="flex items-center"
          >
            <span className="text-black font-normal tracking-widest pb-2">
              Snowflake &
            </span>
          </a>
        </div>
        <a
          href="https://groq.com?utm_source=ohno"
          target="_blank"
          className="flex items-center"
        >
          <img src={groq} alt="powered by groq" className="h-4" />
        </a>
      </div>
    </div>
  );
}
