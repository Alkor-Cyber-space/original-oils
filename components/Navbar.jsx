"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["HOME", "ABOUT US", "PRODUCTS", "GALLERY", "BLOG", "REVIEW"];

const linkMap = {
  HOME: "/",
  "ABOUT US": "/about",
  PRODUCTS: "/products",
  GALLERY: "/gallery",
  BLOG: "/blog",
  REVIEW: "/review",
};

const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isAbout = pathname === "/about";


  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

 

  // Scroll detection (HOME only)
  useEffect(() => {
    if (!isHome) return;

    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);


  const showFullNavbar = isHome && !scrolled;

  const navBg = showFullNavbar
    ? "bg-[#d6b21e]" // GOLD only on home initial
    : "bg-transparent";

  const navTextColor = showFullNavbar ? "text-white" : "text-gray-900";
  const iconColor = showFullNavbar ? "text-white" : "text-gray-900";

  return (
    <>
      {/* NAVBAR */}
     <nav
  className={`
    fixed top-0 left-0 w-full z-50
    transition-all duration-500 ease-out
    ${isHome ? "bg-transparent" : "bg-transparent"}
  `}
>

        <div className="flex items-center justify-between px-8 py-3">
          
          {/* LOGO */}
          <Link href="/" onClick={() => setOpen(false)}>
            <Image
              src="/logo.png"
              alt="Original Oils Logo"
              width={showFullNavbar ? 190 : 175}
              height={70}
              priority      
              className="object-contain transition-all duration-500 hover:scale-105"
            />
          </Link>

          {/* DESKTOP NAV (HOME ONLY FULL) */}
          {showFullNavbar && (
            <>
              <ul className={`hidden md:flex gap-8 text-sm font-medium ${navTextColor}`}>
                {navItems.map((item) => (
                  <li key={item} className="relative group">
                    <Link href={linkMap[item]}>
                      <span className="transition-colors duration-300 group-hover:text-[#843d0b]">
                        {item}
                      </span>
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#6b3e26] transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="hidden md:block">
                <button className="bg-darkBrown text-white px-6 py-2 rounded-full text-sm font-semibold transition hover:scale-105 hover:shadow-lg">
                  CONTACT US ➚
                </button>
              </Link>
            </>
          )}

          {/* HAMBURGER */}
          {!showFullNavbar && (
            <button
              onClick={() => setOpen(!open)}
              className={`transition-all duration-300 hover:scale-110 ${iconColor}`}
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          )}
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed top-16 left-0 w-full z-40
          bg-white/10 backdrop-blur-md
          text-gray-900
          border-b border-black/10
          transition-all duration-500 ease-in-out
          ${open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        `}
      >
        <ul className="flex flex-col gap-6 px-8 py-8 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                href={linkMap[item]}
                onClick={() => setOpen(false)}
                className="block transition-colors duration-300 hover:text-[#6b3e26]"
              >
                {item}
              </Link>
            </li>
          ))}

          <Link href="/contact" onClick={() => setOpen(false)}>
            <button className="mt-4 bg-darkBrown text-white px-6 py-2 rounded-full text-sm font-semibold transition hover:scale-105">
              CONTACT US ➚
            </button>
          </Link>
        </ul>
      </div>

      {/* SPACER */}
      {!isHome && <div className="h-18" />}

    </>
  );
};

export default Navbar;
