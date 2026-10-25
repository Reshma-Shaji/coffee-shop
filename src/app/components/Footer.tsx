// import React from "react"
// import Link from "next/link"
// import Image from "next/image"

// const Footer = () => {
//   return (
//     <footer className="relative w-full overflow-hidden bg-[#42210b] text-[#EAD9C9]">
//       {/* Background coffee beans texture anchored at the bottom */}
//       <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[280px] sm:h-[350px] lg:h-[420px] opacity-25">
//         <Image
//           src="/images/amazing/img.webp"
//           alt="Coffee texture background"
//           fill
//           className="object-cover object-bottom"
//         />
//       </div>

//       {/* Subtle overlay gradient to blend nicely with texture */}
//       <div className="absolute inset-0 bg-gradient-to-t from-[#2d1505]/90 via-[#42210b]/95 to-[#42210b]" />

//       <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-12 sm:px-12 lg:px-20">
//         <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 lg:gap-8">
          
//           {/* 1. Brand column */}
//           <div className="flex flex-col items-start lg:col-span-4">
//            <Link href="/" aria-label="Home">
//           <Image
//             src="/images/logo.png"
//             alt="Logo"
//             width={930}
//             height={628}
//             priority
//             className="h-28 w-auto object-contain"
//           />
//         </Link>
//             <p className=" font-playfair_display text-md leading-relaxed text-[#D6C5B3] lg:text-xl">
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry. Lorem Ipsum has been the industry&apos;s standard dummy
//               text ever since the 1500s, when an unknown printer took a galley of
//               type and scrambled it to make a type specimen book.
//             </p>

//             {/* Social Icons */}
//             <div className="mt-7 flex items-center gap-4 text-white">
//               {/* Facebook */}
//               <Link
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noreferrer"
//                 aria-label="Facebook"
//                 className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#F9C06A] hover:text-[#42210b]"
//               >
//                 <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
//                   <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
//                 </svg>
//               </Link>

//               {/* Instagram */}
//               <Link
//                 href="https://instagram.com"
//                 target="_blank"
//                 rel="noreferrer"
//                 aria-label="Instagram"
//                 className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#F9C06A] hover:text-[#42210b]"
//               >
//                 <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//                 </svg>
//               </Link>

//               {/* YouTube */}
//               <Link
//                 href="https://youtube.com"
//                 target="_blank"
//                 rel="noreferrer"
//                 aria-label="YouTube"
//                 className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#F9C06A] hover:text-[#42210b]"
//               >
//                 <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
//                   <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
//                 </svg>
//               </Link>

//               {/* Twitter / X */}
//               <Link
//                 href="https://twitter.com"
//                 target="_blank"
//                 rel="noreferrer"
//                 aria-label="Twitter"
//                 className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#F9C06A] hover:text-[#42210b]"
//               >
//                 <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
//                   <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.18 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
//                 </svg>
//               </Link>
//             </div>
//           </div>

//           {/* 2. About Column */}
//           <div className="flex flex-col items-start lg:col-span-2 lg:pl-6">
//             <h3 className="font-playfair_display text-2xl font-bold text-white">
//               About
//             </h3>
//             <ul className="mt-5 space-y-3 font-playfair_display text-base text-[#D6C5B3]">
//               <li>
//                 <Link href="/menu" className="transition-colors hover:text-[#F9C06A]">
//                   Menu
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/features" className="transition-colors hover:text-[#F9C06A]">
//                   Features
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/news" className="transition-colors hover:text-[#F9C06A]">
//                   News & Blogs
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/help" className="transition-colors hover:text-[#F9C06A]">
//                   Help & Supports
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* 3. Company Column */}
//           <div className="flex flex-col items-start lg:col-span-2">
//             <h3 className="font-playfair_display text-2xl font-bold text-white">
//               Company
//             </h3>
//             <ul className="mt-5 space-y-3 font-playfair_display text-base text-[#D6C5B3]">
//               <li>
//                 <Link href="/about" className="transition-colors hover:text-[#F9C06A]">
//                   How we work
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/terms" className="transition-colors hover:text-[#F9C06A]">
//                   Terms of service
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/pricing" className="transition-colors hover:text-[#F9C06A]">
//                   Pricing
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/faq" className="transition-colors hover:text-[#F9C06A]">
//                   FAQ
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* 4. Contact Us Column */}
//           <div className="flex flex-col items-start lg:col-span-4">
//             <h3 className="font-playfair_display text-2xl font-bold text-white">
//               Contact Us
//             </h3>
//             <div className="mt-5 space-y-4 font-playfair_display text-base leading-relaxed text-[#D6C5B3]">
//               <p>
//                 Akshya Nagar 1st Block 1st Cross,<br />
//                 Rammurthy nagar, Bangalore-560016
//               </p>
//               <p>
//                 <a href="tel:+12029182132" className="transition-colors hover:text-[#F9C06A]">
//                   +1 202-918-2132
//                 </a>
//               </p>
//               <p>
//                 <a href="mailto:beanscene@mail.com" className="transition-colors hover:text-[#F9C06A]">
//                   beanscene@mail.com
//                 </a>
//               </p>
//               <p>
//                 <a href="https://www.beanscene.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#F9C06A]">
//                   www.beanscene.com
//                 </a>
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer


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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
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
                Akshya Nagar 1st Block 1st Cross,<br />
                Rammurthy nagar, Bangalore-560016
              </p>
              <p>
                <a href="tel:+12029182132" className="transition-colors hover:text-[#F9C06A]">
                  +1 202-918-2132
                </a>
              </p>
              <p>
                <a href="mailto:beanscene@mail.com" className="transition-colors hover:text-[#F9C06A]">
                  beanscene@mail.com
                </a>
              </p>
              <p>
                <a href="https://www.beanscene.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#F9C06A]">
                  www.beanscene.com
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer