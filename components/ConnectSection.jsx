import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Facebook, Instagram, MessageCircle } from "lucide-react";


export default function ConnectSection() {
  return (
    <footer className="w-full m-0 p-0 text-white">
      <div
        className="relative w-full aspect-1920/650 flex items-center justify-center"

      >
        <Image
          src="/footer-bg.png"
          alt="Footer Illustration"
          fill
          className="object-cover"
          priority
        />


        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        {/*  bottom fade gradient */}
        <div className="absolute inset-x-0 -bottom-px h-32 bg-linear-to-b from-black/0 to-[#352900]" />
        <div className="relative z-10 text-center">
          <p className="text-sm font-kumbh tracking-wide mb-1 md:mb-1 sm:mb-0 opacity-90">
            Wellness in Every Drop
          </p>
          <h2 className="text-md font-playfair font-medium
               sm:text-md md:text-5xl
               max-w-md mx-auto
               leading-tight text-center
               text-balance">
            Connect & Stay Inspired
          </h2>

          <p className="text-sm md:text-base sm:text-sm text-white tracking-wider mb-3 font-kumbh">
            Fresh updates, daily rituals & wellness inspiration —
            <br />straight to WhatsApp.
          </p>
          <button className="bg-white rounded-3xl text-[#563A1F] text-xs md:text-xs sm:text-sm my-2 px-2 py-1 md:px-4 md:py-0.9 sm:px-1 outline-none">
            <span className=" flex justify-center gap-2"> CONNECT US <span><ArrowUpRight size={14} /></span></span>
          </button>
        </div>
      </div>

      {/* ================= FOOTER CONTENT ================= */}
      <div className="bg-linear-to-b from-[#352900] via-[#372C03] to-black">

        <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-3 gap-1 ">

          {/* Quick Links */}
          <div className="font-kumbh">
            <h4 className="mb-2 text-xs font-semibold">Quick Links</h4>
            <ul className="space-y-3 text-xs ml-3 ">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary transition-colors">
                  Our Product
                </Link>
              </li>
              <li>
                <Link href="/gallery/images" className="hover:text-primary transition-colors">
                  Image Gallery
                </Link>
              </li>
              <li>
                <Link href="/gallery/videos" className="hover:text-primary transition-colors">
                  Video Gallery
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-primary transition-colors">
                  Customer Review
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="font-kumbh">
            <h4 className="text-xs font-semibold">Contact Info</h4>
            <p className="mb-4 text-xs ">
              Visit our office or connect with us via Phone and Email
            </p>

            <div className="space-y-3 text-xs">
              <p className="flex gap-3 items-start">
                <MapPin size={18} />
                <span className=" w-75">Original Oils Edathadan Building, Aloor Chalakudy – Irinjalakuda Road, Thrissur, Kerala.</span>
              </p>

              <p className="flex gap-3 items-center cursor-pointer group">
                <Phone size={16} /> <span className=" underline-offset-1 group-hover:underline">+91 8078112788</span>
              </p>

              <a
                href="mailto:info@originaloils.org"
                className="flex gap-3 items-center cursor-pointer group"
              >
                <Mail size={16} />
                <span className=" underline-offset-1 group-hover:underline">
                  info@originaloils.org
                </span>
              </a>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="w-8 h-8 bg-white rounded-sm flex items-center justify-center hover:scale-105 transition"
                >
                  <Facebook className="text-black" size={20} fill="1" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="w-8 h-8 bg-white rounded-sm flex items-center justify-center hover:scale-105 transition"
                >
                  <Instagram className="text-black" size={20} />
                </a>
                <a
                  href="https://wa.me/918078112788"
                  target="_blank"
                  className="w-8 h-8 bg-white rounded-sm flex items-center justify-center hover:scale-105 transition"
                >
                  <MessageCircle className="text-black" size={20} />
                </a>
              </div>
            </div>
          </div>
          {/* Map */}
          <div
            suppressHydrationWarning
            className="col-span-2 md:col-span-1 w-screen md:w-full -mx-6 md:mx-0 h-[220px] md:h-[200px] overflow-hidden rounded-none md:rounded-xl">
            <iframe
              src="https://www.google.com/maps?q=Edathadan%20Artisans%20Originals&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className=" py-4 px-6 text-xs flex flex-col md:flex-row items-center justify-between text-white/80 font-kumbh tracking-wide gap-2">
          <p>
            Original Oils <span className="mx-2">|</span>
            Developed by : Alkor Cyber Space
          </p>

          <p>
            © Original Oils 2026 <span className="mx-2">|</span>
            All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
}
