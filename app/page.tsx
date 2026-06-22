import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-left justify-center py-32 px-16 font-sans dark:bg-dark">
      <Image
        className=""
        src="/logo.svg"
        alt="frittata logo"
        width={400}
        height={100}
        priority
      />
      <div className="flex flex-col flex-1 items-center justify-center  font-sans dark:bg-dark">
        <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-dark dark:bg-dark sm:items-start">
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Ciao, sono FrittataCosmica!
            </h1>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Mi piace condividere esperienze, creare un ambiente accogliente e passare del tempo insieme. Qui potete segue le mie {" "}
              <a
                href="https://www.twitch.tv/frittatacosmica"
                className="font-medium text-zinc-950 dark:text-zinc-50"
              >
                Live
              </a>{" "}
              o i miei video di{" "}
              <a
                href="https://www.youtube.com/channel/UCPb1kc1ERPGlRP-wtyrQVuQ"
                className="font-medium text-zinc-950 dark:text-zinc-50"
              >
                Youtube
              </a>{" "}
            </p>
          </div>
        </main>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-dark/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://www.twitch.tv/frittatacosmica"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/logo-twitch.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Twitch
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-dark/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://www.instagram.com/frittatacosmica/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:"
              src="/instagram-white-icon.webp"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Instagram
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://www.youtube.com/channel/UCPb1kc1ERPGlRP-wtyrQVuQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/logo-youtube.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Youtube
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://vgen.co/frittatacosmica"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:"
              src="/vg.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Vgen
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://discord.com/invite/KqHqgDz3XB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:"
              src="/discord-icon.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Discord
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://t.me/frittatacosmica"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/telegram-svgrepo-com.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Telegram
          </a>
        </div>
      </div>
    </div>
  );
}
