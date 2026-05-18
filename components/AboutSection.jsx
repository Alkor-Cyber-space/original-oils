"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const boxRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.config({
      force3D: true,
    });

    const ctx = gsap.context(() => {
      // PERFORMANCE BOOST
      gsap.set([boxRef.current, imagesRef.current], {
        willChange: "transform",
        backfaceVisibility: "hidden",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
          fastScrollEnd: true,
        },
      });

      // BOX
      tl.fromTo(
        boxRef.current,
        {
          scale: 0.9,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        }
      );

      // IMAGES
      tl.from(
        imagesRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.96,
          stagger: 0.1,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.5"
      );

      // LIGHT PARALLAX
      gsap.to(imagesRef.current, {
        y: -15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.3,
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const imageClass =
    "rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] transform-gpu";

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f5f5f5] py-20 md:py-28"
    >
      {/* WHITE BOX */}
      <div
        ref={boxRef}
        className="absolute inset-4 sm:inset-8 md:inset-10 rounded-[32px] bg-white z-10"
      />

      {/* TOP LEFT */}
      <div
        ref={(el) => (imagesRef.current[0] = el)}
        className="absolute top-6 left-6 sm:top-16 sm:left-10 md:top-20 md:left-20 z-20 transform-gpu"
      >
        <Image
          src="/products/cc.webp"
          alt="Oil Bottle"
          width={220}
          height={220}
          priority
          sizes="(max-width:768px) 140px, 220px"
          className={imageClass}
        />
      </div>

      {/* TOP RIGHT */}
      <div
        ref={(el) => (imagesRef.current[1] = el)}
        className="absolute top-6 right-6 sm:top-16 sm:right-10 md:top-20 md:right-20 z-20 transform-gpu"
      >
        <Image
          src="/products/badhaam2.webp"
          alt="Oil Bottle"
          width={220}
          height={220}
          priority
          sizes="(max-width:768px) 140px, 220px"
          className={imageClass}
        />
      </div>

      {/* BOTTOM LEFT */}
      <div
        ref={(el) => (imagesRef.current[2] = el)}
        className="absolute bottom-7 left-6 sm:bottom-24 sm:left-10 md:bottom-24 md:left-20 z-20 transform-gpu"
      >
        <Image
          src="/products/kesakala3.webp"
          alt="Oil Bottle"
          width={220}
          height={220}
          sizes="(max-width:768px) 140px, 220px"
          className={imageClass}
        />
      </div>

      {/* BOTTOM RIGHT */}
      <div
        ref={(el) => (imagesRef.current[3] = el)}
        className="absolute bottom-7 right-6 sm:bottom-24 sm:right-10 md:bottom-24 md:right-20 z-20 transform-gpu"
      >
        <Image
          src="/products/chandramukhi3.webp"
          alt="Oil Bottle"
          width={220}
          height={220}
          sizes="(max-width:768px) 140px, 220px"
          className={imageClass}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-20 max-w-3xl mx-auto text-center px-6 pt-24 sm:pt-0">
        <p className="text-xs sm:text-sm tracking-[0.3em] text-gray-400 uppercase mb-4">
          About Us
        </p>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-gray-800 leading-tight">
          Where Tradition <br /> Meets Purity
        </h2>

        <p className="mt-6 text-gray-500 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
          Experience traditionally crafted oils that enrich
          your health and elevate everyday living.
        </p>

        <Link href="/products">
          <button className="mt-10 px-8 py-3 border border-gray-300 rounded-full text-gray-700 font-medium transition-all duration-300 hover:bg-gray-900 hover:text-white">
            All Products
          </button>
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
