import Link from "next/link"
import Image from "next/image"
import { CiSearch } from "react-icons/ci"
import { NAV_LINKS, SOCIALS } from "@/constants"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center max-container padding-container relative z-30 py-5">
      <ul className="flex flex-row gap-2">
        {SOCIALS.links.map((link) => (
          <Image
            key={link.src}
            src={link.src}
            alt={link.alt}
            width={40}
            height={40}
          />
        ))}
      </ul>
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-2 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
        {/* Add a search link */}
        <CiSearch size="24px" />
      </ul>
    </nav>
  )
}

export default Navbar
