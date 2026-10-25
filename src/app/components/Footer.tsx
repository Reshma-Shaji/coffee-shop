


import React from "react"
import Link from "next/link"
import Image from "next/image"
import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6"

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-[#42210b] text-[#EAD9C9]">
      {/* Background coffee beans texture anchored at the bottom */}
     <div className="absolute inset-0">
  <Image
    src="/images/footer/bg.webp"
    alt="Coffee texture background"
    fill
    className="object-cover object-bottom"
  />
  <div className="absolute inset-0 bg-[#442808] opacity-85" />
</div>

      {/* Subtle overlay gradient to blend nicely with texture */}
     

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-12 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 lg:gap-8">
          
          {/* 1. Brand column */}
          <div className="flex flex-col items-start lg:col-span-4">
           <Link href="/" aria-label="Home">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={930}
            height={628}
            priority
            className="h-28 w-auto object-contain"
          />
        </Link>
            <p className=" font-playfair_display text-md leading-relaxed text-[#D6C5B3] lg:text-xl">
       Enjoy freshly brewed coffee, delicious flavors, and cozy moments at Bean Scene. Your perfect coffee experience starts here!
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex items-center gap-4 text-white">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#F9C06A] hover:text-[#42210b]"
              >
                <FaFacebookF className="h-4 w-4" />
              </Link>

              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#F9C06A] hover:text-[#42210b]"
              >
                <FaInstagram className="h-4 w-4" />
              </Link>

              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#F9C06A] hover:text-[#42210b]"
              >
                <FaYoutube className="h-4 w-4" />
              </Link>

              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#F9C06A] hover:text-[#42210b]"
              >
                <FaXTwitter className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* 2. Navigation Column */}
          <div className="flex flex-col items-start lg:col-span-4 lg:pl-6">
            <h3 className="font-playfair_display text-2xl font-bold text-white">
              Quick Links
            </h3>
            <div className="mt-5 flex flex-col items-start gap-3 font-playfair_display text-base text-[#D6C5B3]">
              <Link href="/" className="transition-colors hover:text-[#F9C06A]">
                Home
              </Link>
              <Link href="/menu" className="transition-colors hover:text-[#F9C06A]">
                Menu
              </Link>
              <Link href="/About" className="transition-colors hover:text-[#F9C06A]">
                About
              </Link>
              <Link href="/table-booking" className="transition-colors hover:text-[#F9C06A]">
                Reserve
              </Link>
              <Link href="/Contact" className="transition-colors hover:text-[#F9C06A]">
                Contact
              </Link>
            </div>
          </div>

          {/* 3. Contact Us Column */}
          <div className="flex flex-col items-start lg:col-span-4">
            <h3 className="font-playfair_display text-2xl font-bold text-white">
              Contact Us
            </h3>
            <div className="mt-5 space-y-4 font-playfair_display text-base leading-relaxed text-[#D6C5B3]">
             <p>
  <Link
    href="https://maps.app.goo.gl/FFRyLMd5XphG9VAn7"
    target="_blank"
    rel="noopener noreferrer"
  className="transition-colors hover:text-[#F9C06A]"
  >
    Akshya Nagar 1st Block 1st Cross,
    <br />
    Rammurthy Nagar, Bangalore - 560016
  </Link>
</p>
              <p>
                <Link href="tel:+12029182132" className="transition-colors hover:text-[#F9C06A]">
                  +1 202-918-2132
                </Link>
              </p>
              <p>
                <Link href="mailto:beanscene@mail.com" className="transition-colors hover:text-[#F9C06A]">
                  beanscene@mail.com
                </Link>
              </p>
              <p>
                <Link href="https://www.beanscene.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#F9C06A]">
                  www.beanscene.com
                </Link>
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer