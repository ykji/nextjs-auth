import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-full bg-gradient-to-b from-ble-800 to-re-900 boder-4 border-white relative">
      <Link
        href={"/profile"}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute right-10 top-12"
      >
        Profile
      </Link>
      <div className="flex justify-center items-center w-[350px] h-[250px] p-10 relative">
        <div className="absolute h-[150px] w-[150px] top-3 right-3 border-r-4 border-t-4 brder-red-600"></div>
        <div className="absolute h-[150px] w-[150px] left-0 bottom-3 border-b-4 border-l-4 brder-blue-600"></div>
        <p className="text-lg text-gray-200">{`I built this project for the sole purpose of learning the new App Router in Next.js. Please excuse me if you don't find any responsiveness here.`}</p>
      </div>
      <div className="mt-20">
        <a
          className="cursor-pointer hover:cursor-pointer hover:underline"
          href="https://nextjs.org/docs/app"
          target="_parent"
          rel="noreferrer"
        >
          Learn more about App Router
        </a>
        <span className="ml-2">↗</span>
      </div>
    </div>
  );
}
