import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaTwitch, FaXTwitter } from "react-icons/fa6";

export function Navbar() {
  return (
    <div className="flex gap-4 sm:gap-7 mr-5 justify-between text-base sm:text-lg md:text-2xl tracking-wide">
      <Link href='/fnbu/edicoes' className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">
        Edições da FNBU
      </Link>

      <Link href='https://www.instagram.com/briianuchiha' target='_blank' rel='noopener noreferrer' className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">
        <FaInstagram color="pink" />
      </Link>
      
      <Link href='https://www.twitch.tv/briianuchiha' target='_blank' rel='noopener noreferrer' className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">
        <FaTwitch color="purple" />
      </Link>

      <Link href='https://x.com/BrianUchiha__' target='_blank' rel='noopener noreferrer' className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">
        <FaXTwitter />
      </Link>
    </div>
  )
}