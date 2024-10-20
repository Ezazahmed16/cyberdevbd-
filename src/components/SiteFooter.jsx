import Image from "next/image"
import Link from "next/link"

const SiteFooter = () => {
  return (
    <div style={{ backgroundColor: '#000000' }}>
      <div className="py-10 md:py-14 px-5 justify-between items-start grid grid-cols-1 md:grid-cols-3 gap-5 text-neutral-400">
        <div className="">
          <Image
            alt="CyberDev Technology Logo"
            src="/assets/logo/cyberdev-white.png"
            width={160}
            height={120}
            className=""
          />
          <h1 className="text-neutral-400 text-xs sm:text-base pt-2">
            Your Trusted Digital Partner
          </h1>
          <p className="text-neutral-500 text-xs pt-2">
            Dhaka, Bangladesh
          </p>
          <p className="text-neutral-500 text-xs pt-2">
            contact@cyberdevbd.com
          </p>
        </div>
        <div className="">
          <h1 className="text-xl">Menu</h1>
          {/* Footer Nav Links */}
          <p className="text-neutral-500 text-base pt-2">
            <Link className="hover:border-b-2 border-red-500 pb-1" href='/'>
              Home
            </Link>
          </p>
          <p className="text-neutral-500 text-base pt-2">
            <Link className="hover:border-b-2 border-red-500 pb-1" href='/'>
              About Us
            </Link>
          </p>
          <p className="text-neutral-500 text-base pt-2">
            <Link className="hover:border-b-2 border-red-500 pb-1" href='/'>
              Services
            </Link>
          </p>
          <p className="text-neutral-500 text-base pt-2">
            <Link className="hover:border-b-2 border-red-500 pb-1" href='/'>
              Contact
            </Link>
          </p>
        </div>
        <div className="">
          <h1 className="text-xl">Social Links</h1>
          {/* Social Media Links */}

        </div>
      </div>
    </div>
  )
}

export default SiteFooter