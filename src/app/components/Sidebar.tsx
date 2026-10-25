"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./ui/Button";

export type NavLink = {
  name: string;
  href: string;
};

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
};

const Sidebar = ({ isOpen, onClose, links }: SidebarProps) => {
  const pathname = usePathname();

  // Lock body scroll + close on Escape while sidebar is open
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-[60] bg-black/60 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Sidebar */}
      <aside
        id="mobile-sidebar"
        aria-hidden={!isOpen}
        className={`fixed right-0 top-0 z-[70] flex h-full w-72 max-w-[85vw] flex-col bg-[#111] px-8 py-6 shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            tabIndex={isOpen ? 0 : -1}
            className="p-2 text-white transition-colors duration-300 hover:text-[#F9C06A]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              className="h-7 w-7"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {/* Sidebar links */}
        <div className="mt-10 flex flex-col gap-6">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                tabIndex={isOpen ? 0 : -1}
                aria-current={isActive ? "page" : undefined}
                className={`border-b border-white/10 pb-3 font-playfair_display text-2xl transition-colors duration-300 ${
                  isActive
                    ? "text-[#F9C06A]"
                    : "text-white hover:text-[#F9C06A]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Sidebar action button */}
        <Link
          href="/table-booking"
          tabIndex={isOpen ? 0 : -1}
          className="mt-10"
        >
          <Button
            textSize="text-base"
            fontClass="font-playfair_display"
            variant="primary"
          >
            Book A Table
          </Button>
        </Link>
      </aside>
    </>
  );
};

export default Sidebar;