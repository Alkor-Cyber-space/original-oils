"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export default function OilsSection() {
  const imagesRef = useRef([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    //  Ensure everything is visible immediately
    gsap.set(imagesRef.current, {
      y: 0,
      opacity: 1,
    });

    imagesRef.current.forEach((img) => {
      if (!img) return;

      gsap.to(img, {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.4,
          invalidateOnRefresh: true,
        },
      });
    });

    ScrollTrigger.refresh();
  }, []);

  const products = [
    {
      title: "Coconut Oil",
      slug: "coconut-oil",
      desc: "Coconut oil has many nutrients that can contribute to your health and a good diet.",
      img: "/immage.png",
    },
    {
      title: "Black cumin seed oil",
      slug: "black-cumin-seed-oil",
      desc: "Black seed oil is high in antioxidants and may have several benefits for health.",
      img: "/black-seed.jpg",
    },
    {
      title: "Badam oil",
      slug: "badam-oil",
      desc: "Badam Oil is a heart-healthy oil rich in vitamin E and anti-inflammatory properties.",
      img: "/badam.jpg",
    },
    {
      title: "Dhandapala Dandruff Oil",
      slug: "dhandha-pala-oil",
      desc: "Dhandapala Dandruff Oil is made from shwetha kutaja leaves and coconut oil has high therapeutic benefits.",
      img: "/Danthapala.jpg",
    },
    {
      title: "Chandra Mukhi Oil",
      slug: "chandra-mukhi-oil",
      desc: "Chandramukhi Oil, a radiant blend of elegance and wellness, combines a host of natural ingredients.",
      img: "/Chandra Mukhi.jpg",
    },
    {
      title: "Kesakala Hair Oil",
      slug: "kesakala-hair-oil",
      desc: "Kesakala Hair Oil, a radiant blend of elegance and wellness, combines a host of natural ingredients",
      img: "/aboutt.png",
    },
  ];


  return (
    <section className="bg-white py-20">
      <div className="mx-auto  min-h-[140vh] px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-14">

          {/* LEFT – STICKY */}
          <div className="lg:sticky lg:top-24 h-fit">
            <p className="text-xs uppercase tracking-widest text-gray-500">
              Traditionally Crafted Oils
            </p>

            <h1 className="mt-4 text-4xl md:text-5xl font-playfair font-semibold text-[#333333] leading-tight">
              Pure Oils,<br />Timeless Benefits
            </h1>

            <p className="mt-5 text-[#666666sm] max-w-sm tracking-wide leading-relaxed">
              Pure, cold-pressed oils made with heritage methods to nourish your
              lifestyle from the inside out.
            </p>

            {/* TAGS */}
            <div className="mt-6 flex flex-wrap gap-2 max-w-md">
              {[
                "Coconut Oil",
                "Black Seed Oil",
                "Badam Oil",
                "Coco Rosemary",
                "Gingelly Oil",
                "Dhandapala Dandruff Oil",
                "Chandramukhi Body oil",
                "Keshakala Oil",
                "Chia Seed Oil"
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 transition cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>

            <Link
              href="/products"
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#666666] border border-[#666666] rounded-2xl px-4 py-1.5 group"
            >
              Full Product List
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* RIGHT – SMOOTH COMPACT LIST */}
          <div className="space-y-4">
            {products.map((product, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) imagesRef.current[index] = el;
                }}
                className="group flex gap-4 items-start rounded-xl p-3 transition hover:bg-gray-50"
              >
                {/* IMAGE */}
                <div className="rounded-lg w-44 md:w-44 lg:w-69 shrink-0 overflow-hidden">
                  <Image
                    src={product.img}
                    alt={product.title}
                    width={350}
                    height={500}
                    className="object-contain w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* TEXT */}
                <div className="flex flex-col gap-10 justify-between">
                  <h3 className="text-base font-serif text-gray-900">
                    {product.title}
                  </h3>

                  <p className="mt-1 text-sm sm:text-sm md:text-lg lg:text-lg text-gray-600 max-w-xs leading-relaxed">
                    {product.desc}
                  </p>

                  <Link
                    href={`/products/${product.slug}`}
                    className="mt-2 text-xs sm:text-xs lg:text-xl text-gray-700 hover:text-black flex items-center gap-1 transition group"
                  >
                    View details
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
