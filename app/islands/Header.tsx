export function Header() {
  return (
    <header className="fixed w-full p-0 md:p-2 flex justify-between items-center md:bg-transparent">
      <div className="p-2">
        <a href="/" style={{ cursor: "pointer" }}>
          <h1 className="text-2xl font-bold text-black">ohno</h1>

          <span className="sr-only">Di1</span>
        </a>
      </div>
    </header>
  );
}
