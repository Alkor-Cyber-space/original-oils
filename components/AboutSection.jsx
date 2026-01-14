"use client";

import Image from "next/image";
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

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%",
          scrub: 1,
          pin: true,
        },
      });

      tl.fromTo(
        boxRef.current,
        {
          scale: 0.2,
          opacity: 0,
          transformOrigin: "center center",
        },
        {
          scale: 1,
          opacity: 1,
          duration: 2.2,
          ease: "power4.out",
        }
      );

      tl.from(
        imagesRef.current,
        {
          opacity: 0,
          scale: 0.95,
          rotate: -2,
          y: 80,
          x: (i) => (i % 2 === 0 ? -50 : 50),
          duration: 2,
          stagger: 0.3,
          ease: "power4.out",
        },
        "+=0.2"
      );

      imagesRef.current.forEach((img, i) => {
        gsap.to(img, {
          y: i % 2 === 0 ? -25 : -15,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative">
      <section
        ref={sectionRef}
        className="relative py-20 md:py-28 overflow-hidden bg-[#f3f3f3]"
      >
        {/* WHITE BOX */}
        <div
          ref={boxRef}
          className="absolute inset-4 sm:inset-8 md:inset-10 bg-white rounded-2xl md:rounded-3xl shadow-[0_40px_120px_rgba(0,0,0,0.08)] z-10"
        />

        {/* IMAGES */}
        {/* TOP LEFT */}
        <div
          ref={(el) => (imagesRef.current[0] = el)}
          className="
            absolute 
            top-6 left-6
            sm:top-16 sm:left-10 
            md:top-20 md:left-20
            z-20
          "
        >
          <Image
            src="/about-5.jpg"
            alt="Oil Bottle"
            width={120}
            height={120}
            className="sm:w-[160px] md:w-[180px] rounded-xl shadow-xl"
          />
        </div>

        {/* TOP RIGHT */}
        <div
          ref={(el) => (imagesRef.current[1] = el)}
          className="
            absolute 
            top-6 right-6
            sm:top-16 sm:right-10 
            md:top-20 md:right-20
            z-20
          "
        >
          <Image
            src="/about-2.jpg"
            alt="Oil Bottle"
            width={120}
            height={120}
            className="sm:w-[160px] md:w-[180px] rounded-xl shadow-xl"
          />
        </div>

        {/* BOTTOM LEFT */}
        <div
          ref={(el) => (imagesRef.current[2] = el)}
          className="
            absolute 
            bottom-7 left-6
            sm:bottom-24 sm:left-10 
            md:bottom-24 md:left-20
            z-20
          "
        >
          <Image
            src="/about-3.jpg"
            alt="Oil Bottle"
            width={120}
            height={120}
            className="sm:w-[160px] md:w-[180px] rounded-xl shadow-xl"
          />
        </div>

        {/* BOTTOM RIGHT */}
        <div
          ref={(el) => (imagesRef.current[3] = el)}
          className="
            absolute 
            bottom-7 right-6
            sm:bottom-24 sm:right-10 
            md:bottom-24 md:right-20
            z-20
          "
        >
          <Image
            src="/about-4.jpg"
            alt="Oil Bottle"
            width={120}
            height={120}
            className="sm:w-[160px] md:w-[180px] rounded-xl shadow-xl"
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-20 max-w-3xl mx-auto text-center px-6 pt-24 sm:pt-0">
          <p className="text-xs sm:text-sm tracking-widest text-gray-400 uppercase mb-3 sm:mb-4">
            About Us
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl font-medium text-gray-800 leading-tight">
            Where Tradition <br /> Meets Purity
          </h2>

          <p className="mt-4 sm:mt-6 text-gray-500 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            Experience traditionally crafted oils that enrich <br className="hidden sm:block" />
            your health and elevate everyday living.
          </p>

         <button className="mt-8 sm:mt-10 px-5 sm:px-8 py-2 sm:py-3 text-sm sm:text-base border border-gray-400 rounded-full text-gray-700 font-medium hover:bg-gray-800 hover:text-white transition duration-300">
  All Products
</button>

        </div>
      </section>
    </div>
  );
};

export default AboutSection;
