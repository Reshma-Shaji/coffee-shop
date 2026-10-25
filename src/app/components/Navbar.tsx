

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Button from "./ui/Button";

// const navLinks = [
//   { name: "Home", href: "/" },
//   { name: "Menu", href: "/menu" },
//   { name: "About", href: "/About" },
//   { name: "Reserve", href: "/table-booking" },
//   { name: "Contact", href: "/Contact" },
// ];

// const Navbar = () => {
//   const pathname = usePathname();

//   // About and Contact pages-il text black aakkan
//   const isDarkPage =
//     pathname === "/About" || pathname === "/Contact";

//   return (
//     <nav className="absolute top-0 left-0 z-50 flex w-full items-center justify-center bg-transparent px-20 py-2">
//       <div className="flex w-full items-center justify-between">
//         {/* Logo */}
//         <Link href="/" aria-label="Home">
//           <Image
//             src="/images/logo.png"
//             alt="Logo"
//             width={930}
//             height={628}
//             priority
//             className="h-28 w-auto object-contain"
//           />
//         </Link>

//         {/* Navigation links */}
//         <div className="flex items-center gap-16">
//           {navLinks.map((link) => {
//             const isActive = pathname === link.href;

//             return (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 aria-current={isActive ? "page" : undefined}
//                 className={`group relative py-2 font-playfair_display text-xl transition-colors duration-300 ${
//                   isActive
//                     ? "text-[#F9C06A]"
//                     : isDarkPage
//                       ? "text-black hover:text-[#F9C06A]"
//                       : "text-white hover:text-[#F9C06A]"
//                 }`}
//               >
//                 {link.name}

//                 {/* Animated underline */}
//                 <span
//                   className={`absolute bottom-0 left-0 h-[2px] bg-[#F9C06A] transition-transform duration-300 ease-out ${
//                     isActive
//                       ? "w-full scale-x-100"
//                       : "w-full scale-x-0 group-hover:scale-x-100"
//                   }`}
//                 />
//               </Link>
//             );
//           })}
//         </div>

//         {/* Action buttons */}
//         <div className="flex items-center gap-3">
         

//           <Link href="/table-booking">
//             <Button
//               textSize="text-base"
//               fontClass="font-playfair_display"
//               variant="primary"
//             >
//               Book A Table
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./ui/Button";
import Sidebar, { type NavLink } from "./Sidebar";

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About", href: "/About" },
  { name: "Reserve", href: "/table-booking" },
  { name: "Contact", href: "/Contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = useCallback(() => setIsOpen(false), []);

  // About and Contact pages-il text black aakkan
  const isDarkPage =
    pathname === "/About" || pathname === "/Contact";

  // Close sidebar when the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="absolute top-0 left-0 z-50 flex w-full items-center justify-center bg-transparent px-5 py-2 sm:px-10 lg:px-20">
      <div className="flex w-full items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Home">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={930}
            height={628}
            priority
            className="h-20 w-auto object-contain sm:h-24 lg:h-28"
          />
        </Link>

        {/* Navigation links (desktop) */}
        <div className="hidden items-center gap-10 lg:flex xl:gap-16">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`group relative py-2 font-playfair_display text-xl transition-colors duration-300 ${
                  isActive
                    ? "text-[#F9C06A]"
                    : isDarkPage
                      ? "text-black hover:text-[#F9C06A]"
                      : "text-white hover:text-[#F9C06A]"
                }`}
              >
                {link.name}

                {/* Animated underline */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#F9C06A] transition-transform duration-300 ease-out ${
                    isActive
                      ? "w-full scale-x-100"
                      : "w-full scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Action buttons (desktop) */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/table-booking">
            <Button
              textSize="text-base"
              fontClass="font-playfair_display"
              variant="primary"
            >
              Book A Table
            </Button>
          </Link>
        </div>

        {/* Hamburger button (mobile + tablet) */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          aria-expanded={isOpen}
          aria-controls="mobile-sidebar"
          className={`p-2 lg:hidden ${
            isDarkPage ? "text-black" : "text-white"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            className="h-8 w-8"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile / tablet sidebar */}
      <Sidebar isOpen={isOpen} onClose={closeSidebar} links={navLinks} />
    </nav>
  );
};

export default Navbar;