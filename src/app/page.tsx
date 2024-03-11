import Image from "next/image";

export default function Home() {
  return (
    <main className="lg:p-10 p-5">
      <h1 className="duration-200 cursor-default text-black dark:text-white">Be Right Back</h1>

      <span className="absolute left-0 bottom-0 h-full w-full bg-gradient-to-b from-transparent dark:to-white to-black -z-30 animate-fade-in" />

      <span className="absolute bottom-0 right-0 lg:p-10 p-5 ">
        <h1 className="duration-200 cursor-default dark:text-black text-white">Under Development</h1>
      </span>


    </main>
  );
}
