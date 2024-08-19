import Link from "next/link";
import { Navbar } from "./navbar";

export function Logo() {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="ml-5 text-black text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase">
        <Link href='/'>briian uchiha</Link>
      </div>
      <Navbar />
    </div>
  )
}