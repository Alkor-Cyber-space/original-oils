"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { motion, useMotionValue } from "framer-motion";

const images = [
  "/products/coconutOil3.png",
  "/products/badhaam2.png",
  "/products/chandramukhi3.webp",
  "/products/dandhapala3.webp",
];

export default function GallerySection() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };


  return (
    <section className="bg-white px-4 md:px-7 ">
      <div className="max-w-7xl mx-auto mb-10  grid grid-cols-1  md:grid-cols-3 gap-1 md:gap-8 ">
        <div className="md:col-span-2">
          <p className="text-md tracking-widest text-gray-500 mb-3">Gallery</p>
          <h2 className="font-playfair text-xl md:text-4xl font-semibold text-[#333333] tracking-wider leading-tight">
            Our Signature Oils, <br />
            Crafted with Tradition
          </h2>
        </div>

        <div className="flex flex-col justify-end items-end text-gray-600 text-xs sm:text-xs md:text-lg text-right leading-relaxed font-medium">
          <p className="">
            Bring purity and tradition into
          </p>
          <p>your daily rituals with our finest oils.</p>
        </div>
      </div>

      <div className="flex gap-6 overflow-x-auto scrollbar-hide ">
        {images.map((src, index) => (
          <div
            key={index}
            className="min-w-65 md:min-w-85 h-55 md:h-65 relative rounded-2xl overflow-hidden"
          >
            <Image
              src={src}
              alt="Gallery Image"
              fill
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12 pb-12">
        <Link href="/gallery">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.button
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}

              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-3.5 overflow-hidden rounded-full border border-[#1a1a1a] text-sm font-bold uppercase tracking-widest text-[#1a1a1a] transition-colors duration-300"
            >
              <motion.span
                className="absolute bg-[#1a1a1a] rounded-full pointer-events-none"
                initial={false}
                animate={isHovered ? {
                  width: 300,
                  height: 300,
                  transition: { duration: 0.5, ease: "easeOut" }
                } : {
                  width: 0,
                  height: 0,
                  transition: { duration: 0.3, ease: "easeIn" }
                }}
                style={{
                  x,
                  y,
                  translateX: "-50%",
                  translateY: "-50%",
                }}
              />

              <span className={`relative transition-colors duration-300 ${isHovered ? 'text-white' : 'text-[#1a1a1a]'}`}>
                View Collection
              </span>
            </motion.button>
          </motion.div>
        </Link>
      </div>
    </section>
  );
}
