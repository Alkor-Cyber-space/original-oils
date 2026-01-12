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

      /* =================================
         WHITE BOX – EXPAND FROM CENTER
         (COMING FROM INSIDE EFFECT)
      ================================= */
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
        className="relative py-28 overflow-hidden bg-[#f3f3f3]"
      >
        {/* WHITE BOX */}
        <div
          ref={boxRef}
          className="absolute inset-10 bg-white rounded-3xl shadow-[0_40px_120px_rgba(0,0,0,0.08)] z-10"
        />

        {/* IMAGES */}
        <div
          ref={(el) => (imagesRef.current[0] = el)}
          className="absolute top-20 left-20 z-20 cursor-pointer"
        >
          <Image
            src="/about-5.jpg"
            alt="Oil Bottle"
            width={180}
            height={180}
            className="rounded-xl shadow-xl"
          />
        </div>

        <div
          ref={(el) => (imagesRef.current[1] = el)}
          className="absolute top-20 right-20 z-20 cursor-pointer"
        >
          <Image
            src="/about-2.jpg"
            alt="Oil Bottle"
            width={180}
            height={180}
            className="rounded-xl shadow-xl"
          />
        </div>

        <div
          ref={(el) => (imagesRef.current[2] = el)}
          className="absolute bottom-24 left-20 z-20 cursor-pointer"
        >
          <Image
            src="/about-3.jpg"
            alt="Oil Bottle"
            width={180}
            height={180}
            className="rounded-xl shadow-xl"
          />
        </div>

        <div
          ref={(el) => (imagesRef.current[3] = el)}
          className="absolute bottom-24 right-20 z-20 cursor-pointer"
        >
          <Image
            src="/about-4.jpg"
            alt="Oil Bottle"
            width={180}
            height={180}
            className="rounded-xl shadow-xl"
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-20 max-w-3xl mx-auto text-center px-6">
          <p className="text-sm tracking-widest text-gray-400 uppercase mb-4">
            About Us
          </p>

          <h2 className="font-serif text-5xl md:text-6xl font-medium text-gray-800 leading-tight">
            Where Tradition <br /> Meets Purity
          </h2>

          <p className="mt-6 text-gray-500 text-lg leading-relaxed max-w-xl mx-auto">
            Experience traditionally crafted oils that enrich <br />
            your health and elevate everyday living.
          </p>

          <button className="mt-10 px-8 py-3 border border-gray-400 rounded-full text-gray-700 font-medium hover:bg-gray-800 hover:text-white transition duration-300">
            All Products
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
