import { cn } from "@/lib/utils";

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
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/kaarthik108/ohno"
            target="_blank"
            aria-label="Visit the GitHub repository"
          >
            <IconGitHub className="hover:text-stone-500" />
          </a>
          <a
            href="https://twitter.com/kaarthikcodes"
            target="_blank"
            aria-label="Follow me on Twitter"
          >
            <IconX className="hover:text-stone-500 text-black" />
          </a>
        </div>{" "}
      </div>
    </header>
  );
}
function IconGitHub({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn("size-4", className)}
      {...props}
    >
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}
function IconX({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      role="img"
      fill="currentColor"
      className={cn("size-4", className)}
      {...props}
    >
      <path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z" />
    </svg>
  );
}
export function IconSnowflake({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // fill="#29b5e8"
      width="24"
      height="24"
      className={cn("size-1", className)}
      {...props}
    >
      <path d="M81.492 28.285l-.084-.1v.1zm-.084-1l.084-.088h-.084zm-8.548 3.887l-.03.075.045.114.047-.114-.033-.08h-.028zm9.56-2.897v-.1l-.084.1zm0-.98v-.088h-.084zm-11.957 7.52l.025.001.023-.057.01-.03-.043-.12-.048.12zm4.82 0l.024-.001.006-.015.026-.074-.05-.12-.042.12zm26.885-3.37l-.05-.063-.006.12zm-2.416 2.502V33.9l-.025.063zm1.628-1.813l-.006.006.055.068.06-.063-.005-.006zm-1.713.466h.026l.06-.06v-.123l-.085.086zm-18.175-4.325v-.1h-.084z" />
      <path d="M75.297 34.845l.01-.033-.024.001zm-4.8-.03l-.025-.001.01.033zm11.933-7.52l-.084-.088v.088zm18.955 4.844l.004-.004zm.004-.004l.103.005-.05-.06zm-1.696.485l-.026-.01v.037zm-17.357-4.335l.084-.1h-.084zm-.844-1v-.088l-.084.088zm18.2 5.326l.05-.05z" />
      <path d="M75.313 34.797l.027-.074zm31.855-3.653l.004-.017a3.41 3.41 0 0 1 3.285-2.827c1.616.046 2.97 1.232 3.233 2.827l.004.016.013.072h-6.552l.014-.07zm-.062 1.016l-.005-.083h7.1c.1.005.218-.036.298-.112s.125-.18.126-.292v-.055a4.19 4.19 0 0 0-6.467-3.526 4.19 4.19 0 0 0-1.905 3.838 4.35 4.35 0 0 0 4.172 4.473h.4a4.29 4.29 0 0 0 3.497-2.233.48.48 0 0 0-.142-.623c-.094-.058-.207-.075-.314-.048s-.198.098-.25.194c-.55 1.05-1.606 1.743-2.8 1.83h-.408a3.46 3.46 0 0 1-3.322-3.358l-.001-.005m-25.022-7.9c-.435.605-.637 1.346-.57 2.087v.958H80.35a.42.42 0 0 0-.306.12c-.082.08-.128.2-.128.303a.47.47 0 0 0 .434.48h1.142v7.784a.42.42 0 0 0 .64.389.42.42 0 0 0 .202-.389v-7.784h1.222a.46.46 0 0 0 .435-.479c.002-.115-.044-.225-.126-.305a.41.41 0 0 0-.3-.118h-1.222v-.958a2.43 2.43 0 0 1 .353-1.495 1.33 1.33 0 0 1 1.088-.339c.017 0 .034-.001.05-.004.02.003.038.004.057.004h.137a.45.45 0 0 0 .435-.451.45.45 0 0 0-.435-.451h-.137a.52.52 0 0 0-.055.003.49.49 0 0 0-.054-.003 2.14 2.14 0 0 0-1.712.648m-37.338 7.02c-1.02-.354-2.12-.62-2.12-1.485 0-1.096 1.3-1.547 1.996-1.547 1.708 0 2.076 1.4 2.554.974s-1.212-1.792-2.43-1.792c-.75-.032-1.5.17-2.12.576a1.99 1.99 0 0 0-.935 1.79c-.05 1.837 2.122 2.147 3.055 2.472s2.017.705 2.027 1.616c.012 1.26-1.484 1.65-2.155 1.65-1.914 0-2.43-1.123-2.8-.77s.104.794.986 1.226a4.62 4.62 0 0 0 1.805.424 3.41 3.41 0 0 0 2.155-.659 2.36 2.36 0 0 0 .935-1.87c0-1.686-1.458-2.08-2.96-2.603" />
      <path d="M92.753 35.524a3.45 3.45 0 0 1-3.25-3.612 3.27 3.27 0 1 1 6.499 0 3.44 3.44 0 0 1-3.249 3.612m3.25-6.343l-.047-.066-.03-.04a3.97 3.97 0 0 0-3.172-1.653c-2.368.116-4.198 2.122-4.098 4.5-.1 2.37 1.73 4.375 4.098 4.5 1.262-.023 2.44-.642 3.172-1.67l.032-.043.046-.064v1.337c-.006.155.074.3.207.38a.42.42 0 0 0 .433 0c.133-.08.213-.225.207-.38V27.86c.006-.155-.074-.3-.207-.38a.42.42 0 0 0-.433 0c-.133.08-.213.225-.207.38zm3.7 3.44l-.026.026v-8.634a.43.43 0 0 0-.652-.382c-.135.08-.217.225-.214.382v11.952a.43.43 0 0 0 .652.382c.135-.08.217-.225.214-.382V33.9l1.767-1.833.05.062.005.005 3.267 4.094c.073.113.202.177.336.165a.44.44 0 0 0 .282-.092c.178-.172.193-.452.035-.642l-3.355-4.235 3.337-3.352a.43.43 0 0 0 0-.623c-.075-.087-.185-.138-.3-.138s-.225.05-.3.138l-5.047 5.108zm-13.15-9.05a.44.44 0 0 0-.424.44v11.95a.43.43 0 0 0 .652.382c.135-.08.217-.226.214-.382V24c-.001-.243-.2-.44-.442-.44m-11.24 11.225l-.006.015-.01.033-.012-.032-.035-.088-1.947-4.8a.47.47 0 0 0-.424-.275c-.177.007-.334.113-.407.275l-1.995 4.93-.01-.033-2.514-7.1a.41.41 0 0 0-.548-.238.45.45 0 0 0-.21.568l2.896 8.085a.33.33 0 0 0 .176.202.09.09 0 0 0 .07.036.5.5 0 0 0 .159.036c.168-.01.314-.117.37-.274a.07.07 0 0 1 .017-.037l1.996-4.95 2.02 4.95a.46.46 0 0 0 .353.293h.053c.1.001.18-.032.248-.092s.127-.133.16-.22l2.88-8.048c.087-.22-.015-.47-.23-.568-.217-.085-.46.022-.547.238l-2.465 7zm-25.05-6.916c.01-.154-.068-.3-.2-.38s-.297-.08-.43 0a.41.41 0 0 0-.2.38v8.194c.01.01.016.022.018.036-.003.02.004.04.017.056a.47.47 0 0 0 .283.238h.105a.38.38 0 0 0 .32-.165.42.42 0 0 0 .088-.202v-4.95c-.002-1.497 1.188-2.724 2.684-2.768a2.72 2.72 0 0 1 2.667 2.767v4.875c-.006.155.074.3.207.38a.42.42 0 0 0 .433 0c.133-.08.213-.225.207-.38v-4.875c.03-1.976-1.54-3.605-3.515-3.648a3.46 3.46 0 0 0-2.684 1.302zm11.854 7.643a3.46 3.46 0 0 1-3.249-3.611 3.27 3.27 0 1 1 6.499 0 3.46 3.46 0 0 1-3.249 3.611m0-8.102a4.34 4.34 0 0 0-4.098 4.491c-.143 1.554.606 3.054 1.933 3.875s3.004.82 4.33 0 2.075-2.322 1.933-3.875a4.34 4.34 0 0 0-4.098-4.5M9.734 21.576l6.56 3.934c.748.45 1.708.324 2.315-.303a2.03 2.03 0 0 0 .62-1.467v-7.885a1.92 1.92 0 0 0-2.902-1.725 1.92 1.92 0 0 0-.938 1.725v4.487l-3.726-2.234a1.89 1.89 0 0 0-2.634.733c-.533.954-.222 2.158.706 2.735m15.77 3.924l6.56-3.934c.93-.577 1.24-1.782.706-2.736a1.89 1.89 0 0 0-2.633-.732l-3.677 2.204v-4.458a1.92 1.92 0 0 0-2.902-1.725 1.92 1.92 0 0 0-.938 1.725v7.73c-.04.414.047.83.25 1.194a1.89 1.89 0 0 0 2.634.733m-5.84 4.483a.57.57 0 0 1 .137-.343l.767-.798a.55.55 0 0 1 .332-.142h.03a.53.53 0 0 1 .331.142l.767.798a.57.57 0 0 1 .137.343v.03a.57.57 0 0 1-.137.345l-.767.796a.55.55 0 0 1-.33.143h-.03a.53.53 0 0 1-.332-.143l-.767-.796c-.083-.097-.13-.218-.137-.345zm-2.322-.328v.688a.78.78 0 0 0 .187.469l2.603 2.702a.72.72 0 0 0 .452.195h.662a.72.72 0 0 0 .452-.195l2.603-2.702c.113-.13.18-.296.187-.47v-.688a.78.78 0 0 0-.187-.47l-2.603-2.7a.72.72 0 0 0-.452-.195h-.662a.72.72 0 0 0-.452.195l-2.603 2.702c-.113.13-.18.296-.187.47M6.34 27.8l3.715 2.228-3.715 2.227c-.928.577-1.24 1.782-.706 2.736a1.89 1.89 0 0 0 2.634.732l6.56-3.934a2.09 2.09 0 0 0 0-3.522l-6.56-3.935a1.89 1.89 0 0 0-2.634.733c-.533.954-.222 2.158.706 2.735m19.668 2.226a2.02 2.02 0 0 0 .964 1.754l6.563 3.934a1.89 1.89 0 0 0 2.633-.732c.534-.954.223-2.16-.706-2.736l-3.715-2.227 3.715-2.228c.93-.576 1.24-1.78.706-2.735a1.89 1.89 0 0 0-2.633-.733l-6.563 3.935a2.02 2.02 0 0 0-.964 1.769M17.612 34.3c-.453-.088-.922-.004-1.317.234l-6.56 3.935c-.928.577-1.24 1.78-.706 2.735a1.89 1.89 0 0 0 2.634.732l3.726-2.234v4.453a1.92 1.92 0 0 0 2.902 1.725 1.92 1.92 0 0 0 .938-1.725V36.26a1.97 1.97 0 0 0-1.616-1.969m14.455 4.17l-6.56-3.934a1.89 1.89 0 0 0-2.634.732 2.06 2.06 0 0 0-.249 1.195v7.692a1.92 1.92 0 0 0 2.902 1.725 1.92 1.92 0 0 0 .938-1.725v-4.422l3.676 2.204a1.89 1.89 0 0 0 2.634-.733c.533-.954.222-2.158-.706-2.735" />
    </svg>
  );
}
