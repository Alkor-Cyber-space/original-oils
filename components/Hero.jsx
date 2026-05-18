"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };
  return (
    <section
      className="
        grid grid-cols-1 md:grid-cols-2
        px-3 sm:px-5 md:px-10
         pb-0 sm:pb-0 md:pb-20 lg:pb-20
        items-center text-white
        relative overflow-hidden
        pt-24 md:pt-28 lg:pt-34
        -mt-8
      "
    >
      {/* HERO LOGO */}
      <div className="absolute hidden sm:block md:block lg:block top-10 md:top-9 lg:top-15 left-4 md:left-12 z-30">
        <Link href="/">
          <Image
            src="/logo2.png"
            alt="Original Oils Logo"
            width={255}
            height={90}
            priority
            className="w-[160px] sm:w-[150px] md:w-[140px] lg:w-[190px] object-contain"
          />
        </Link>
      </div>

      {/* Left Section */}
      <div className="z-20  text-left md:text-left">

        <h1 className="font-playfair leading-none text-shadow-[0_4px_12px_rgba(0,0,0,0.35)] md:whitespace-nowrap">

          {/* MOBILE VIEW */}
          <span className="block md:hidden text-md sm:text-md lg:text-2xl font-normal">
            <span className="text-[3.9rem] font-extrabold">60</span>{" "}
            years in
          </span>
          <span className="block md:hidden text-md sm:text-md lg:text-2xl font-normal">
            oil milling Industry.
          </span>

          {/* DESKTOP VIEW — YOUR ORIGINAL STYLE */}
          <span className="hidden md:inline font-bold text-[6.5rem]">60&nbsp;</span>
          <span className="hidden md:inline font-normal text-[4.5rem]">
            years in
            <br />
            oil milling Industry.
          </span>

        </h1>



        <div className="max-w-7xl md:mx-0 mt-5">
          <p
            className="relative z-30
              
              text-xs sm:text-xs md:text-md lg:text-3xl  
              font-medium
              tracking-widest
              text-white/85
              text-shadow-[0_3px_7px_rgba(0,0,0,0.5)]
              
            "
          >
            One of the first coconut oil mills in Kerala
          </p>

          <p
            className="
              mt-5
              font-serif
              text-sm sm:text-sm md:tetx-lg lg:text-3xl
              leading-relaxed
              font-semibold
              tracking-wide
              text-white
              text-shadow-[0_4px_10px_rgba(0,0,0,0.4)]
            "
          >
            <span className="text-green-700 font-bold tracking-wider">
              Kerala
            </span>{" "}
            coconut oil infused <br />
            Hair oil and Body oil.
          </p>
        </div>

        <Link href="/products">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.button
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative px-6 py-2 mt-3 overflow-hidden rounded-full bg-white text-sm tracking-widest text-black shadow-lg"
            >
              {/* Ripple */}
              <motion.span
                className="absolute pointer-events-none rounded-full bg-[#47260a]"
                style={{
                  width: 500,
                  height: 500,
                  left: mousePos.x,
                  top: mousePos.y,
                  translateX: "-50%",
                  translateY: "-50%",
                  filter: "blur(12px)",
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: isHovered ? 1 : 0,
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              <span
                className={`relative z-10 transition-colors duration-500 ${isHovered ? "text-white font-medium" : "text-black "
                  }`}
              >
                All products
              </span>
            </motion.button>
          </motion.div>
        </Link>
      </div>

      {/* Right Section */}
      <div className="relative h-[35vh] sm:h-[40vh] md:h-[90vh] flex items-end justify-end md:justify-end z-20 ">
        <div className="relative w-full max-w-[330px] sm:max-w-[330px] md:max-w-[380px] lg:max-w-[580px] z-40 ">
          <Image
            src="/hero-bg.png"
            alt="Coconut Oil Bottle"
            width={700}
            height={700}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* TORN PAPER — SAME POSITION */}
      <div className="absolute bottom-9 md:bottom-6 left-0 w-full h-76 sm:h-76 md:h-72 lg:h-110 z-10 overflow-hidden">
        <Image
          src="/paper.png"
          alt="torn edge"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>
    </section>
  );
};

export default Hero;
