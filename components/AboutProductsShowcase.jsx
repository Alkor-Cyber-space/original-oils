"use client";

import { useState } from "react";
import Image from "next/image";

const items = [
  {
    title: "From Kerala’s First Mills to You",
    description:
      "Care guides every step we take. Every bottle is carefully crafted using time-honored methods and delivered to your home with purity, intention, and trust.",
    image: "/about/oil-6.png",
  },
  {
    title: "Rooted in Tradition. Crafted with Care.",
    description:
      "Inspired by heritage and guided by intention, every bottle is carefully made using traditional practices to bring you pure, honest oils you can trust.",
    image: "/about/oil-2.png",
  },
  {
    title: "Oils That Tell a Story",
    description:
      "Each bottle carries the essence of tradition, crafted with care using age-old methods to preserve purity, purpose, and nature’s true goodness.",
    image: "/about/oil-5.png",
  },
  {
    title: "Original Oils. Original Care",
    description:
      "Guided by tradition and crafted with heart, every bottle reflects our commitment to honest ingredients and mindful care.",
    image: "/about/oil-4.png",
  },
];

export default function AboutProductShowcase() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-20 md:py-35 px-6 -mt-18">
      <div className="max-w-full md:max-w-300 mx-auto">

        {/* TOP TEXT */}
        <div className="text-center max-w-full md:max-w-130 mx-auto">
          <p className="text-[13px] tracking-[0.28em] uppercase text-gray-400 font-inter">
            About Us
          </p>

          <h2 className="mt-6 text-3xl md:text-[46px] leading-[1.12] font-playfair text-[#2b2b2b]">
            Pure Oils,<br /> Honest Origins
          </h2>

          <p className="mt-6 text-sm md:text-[15px] text-gray-500 font-inter">
            At Original Oils, care begins long before the first drop
          </p>
        </div>

        {/* IMAGE + DESCRIPTION ROW */}
        <div className="relative mt-16 md:mt-24 flex flex-col md:flex-row gap-12 items-center md:items-start justify-center overflow-visible">

          {items.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setActive(index)}
              className="relative flex flex-col md:flex-row items-center md:items-start"
            >
              {/* IMAGE FRAME */}
              <div
                className={`
    w-44
    ${item.image === "/about/oil-6.png"
                    ? "h-110 md:h-140 -translate-y-12 md:-translate-y-38"
                    : "h-72 md:h-95"}
    md:w-37.5
    flex items-center justify-center
    transition-all duration-300 ease-out
    ${active === index ? "scale-[1.05]" : "opacity-90"}
  `}
              >

                <div className="relative w-full h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className={
                      item.image === "/about/oil-6.png"
                        ? "object-cover"
                        : "object-contain"
                    }
                  />
                </div>
              </div>

              {/* DESCRIPTION CARD */}
              {active === index && (
                <div
                  className="
                    mt-6 md:mt-0
                    md:ml-6
                    w-full max-w-md md:w-70
                    bg-white rounded-[20px]
                    px-7 py-8
                    shadow-[0_18px_45px_rgba(0,0,0,0.08)]
                  "
                >
                  <h3 className="text-[20px] leading-snug font-playfair text-[#2b2b2b]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[14.5px] leading-[1.75] text-gray-500 font-inter">
                    {item.description}
                  </p>
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
