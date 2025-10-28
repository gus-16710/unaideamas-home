import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          src="/img/logo-light.png"
          alt="unaidea+ logo"
          width={300}
          height={20}
          priority
        />
        <h1 className="mt-16 text-sm font-bold text-zinc-800 dark:text-zinc-200 sm:text-5xl">
          🚧 En construcción 🚧
        </h1>
      </main>
    </div>
  );
}
