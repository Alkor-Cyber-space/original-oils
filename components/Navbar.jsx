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

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  //  Scroll logic (other pages – desktop only)
  useEffect(() => {
    if (isHome || !isDesktop) return;
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome, isDesktop]);

  if (!mounted) return null;

  const showFullNavbar = isDesktop && isHome && !scrolled;

  const textColor = showFullNavbar ? "text-white" : "text-gray-900";
  const iconColor = showFullNavbar ? "text-white" : "text-gray-900";

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent transition-all duration-500">
        <div className="flex items-center justify-between px-6 py-3">

          <Link href="/" onClick={() => setOpen(false)}>
            {(!isDesktop ||
              (isHome
                ? (!showFullNavbar && isDesktop)
                : isDesktop)) && (
                <Image
                  src="/logo.png"
                  alt="Original Oils Logo"
                  width={255}
                  height={90}
                  priority
                  className="h-16 sm:h-14 w-auto object-contain transition-all duration-500 -ml-7 sm:ml-0 bg-white rounded-full p-2"
                />
              )}
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          {(showFullNavbar || (!isHome && isDesktop && !scrolled)) && (
            <>
              <ul
                className={`
                  hidden lg:flex
                  absolute left-1/2 -translate-x-1/2
                  gap-8 text-sm font-medium
                  ${textColor}
                  ${showFullNavbar ? "mt-5" : ""}
                `}
              >
                {navItems.map((item) => {
                  const href = linkMap[item];
                  const isActive = pathname === href;

                  return (
                    <li key={item} className="relative group">
                      <Link href={href}>
                        <span
                          className={`transition-colors
                            ${isActive ? "text-[#6b3e26] font-semibold" : ""}
                            group-hover:text-[#843d0b]
                          `}
                        >
                          {item}
                        </span>
                        <span
                          className={`absolute left-0 -bottom-1 h-0.5 bg-[#6b3e26] transition-all
                            ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                          `}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="hidden lg:flex">
                <Link
                  href="/contact"
                  className="bg-darkBrown text-white px-6 py-2 rounded-full text-sm font-semibold transition hover:scale-105 hover:shadow-lg"
                >
                  CONTACT US ➚
                </Link>
              </div>
            </>
          )}

          {(!isDesktop ||
            (!isHome ? scrolled && isDesktop : !showFullNavbar)) && (
              <button
                onClick={() => setOpen(!open)}
                className={`transition-all duration-300 bg-white p-2  rounded-3xl  ${iconColor}`}
              >
                {open ? <X size={28} /> : <Menu size={28} />}
              </button>
            )}
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`
          fixed top-16 left-0 w-full z-40
          bg-white/90 backdrop-blur-md
          border-b border-black/10
          transition-all duration-500
          ${open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        `}
      >
        <ul className="flex flex-col gap-6 px-8 py-8 text-sm font-medium">
          {navItems.map((item) => {
            const href = linkMap[item];
            const isActive = pathname === href;

            return (
              <li key={item}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block transition-colors
                    ${isActive ? "text-[#6b3e26] font-semibold" : "text-gray-900"}
                    hover:text-[#6b3e26]
                  `}
                >
                  {item}
                </Link>
              </li>
            );
          })}

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 bg-darkBrown text-white px-6 py-2 rounded-full text-sm font-semibold text-center"
          >
            CONTACT US ➚
          </Link>
        </ul>
      </div>

      {!isHome && <div className="h-20" />}
    </>
  );
};

export default Navbar;
