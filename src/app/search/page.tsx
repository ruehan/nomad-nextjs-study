import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-100 p-5">
      <div className="flex w-full max-w-screen-sm flex-col gap-2 rounded-3xl bg-white p-5 shadow-lg">
        <input
          className="h-10 w-full rounded-full bg-gray-200 pl-5 outline-none ring ring-transparent transition-shadow focus:ring-orange-200"
          type="text"
          placeholder="Search here..."
        ></input>
        <button className="font-mdeium rounded-full bg-black bg-opacity-80 py-2 text-white outline-none transition-transform focus:scale-90 active:scale-90">
          Search
        </button>
      </div>
    </main>
  );
}
