import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center justify-center w-full max-w-3xl p-16 bg-white dark:bg-black">
        <Image
          src="/img/logo-light.png"
          alt="unaidea+ logo"
          width={300}
          height={20}
          priority
        />
        <h1 className="mt-8 text-sm text-zinc-800 dark:text-zinc-200">
          🚧 En construcción 🚧
        </h1>
      </main>
    </div>
  );
}
