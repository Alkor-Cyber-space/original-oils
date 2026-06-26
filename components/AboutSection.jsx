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

    const ctx = gsap.context(() => {
      // 1. Scale the white card as the section enters the viewport (applies to both desktop and mobile)
      gsap.fromTo(
        boxRef.current,
        {
          scale: 0.25,
          opacity: 0,
          transformOrigin: "center center",
        },
        {
          scale: 1,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "top top",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        }
      );

      const mm = gsap.matchMedia();

      // Desktop-only pinning and image entrance animations
      mm.add("(min-width: 1024px)", () => {
        // 2. Timeline for pinned state: pins the section and animates the images/content
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=150%",
            scrub: 1,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Staggered entry animation for the image wrapper divs
        tl.fromTo(
          imagesRef.current,
          {
            opacity: 0,
            scale: 0.85,
            y: 80,
            rotate: (i) => (i % 2 === 0 ? -3 : 3),
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            rotate: 0,
            stagger: 0.25,
            duration: 2,
            ease: "power4.out",
          }
        );

        // 3. Parallax effect for the inner image components (applied to child HTML img tags to avoid conflict)
        imagesRef.current.forEach((wrapper, i) => {
          if (!wrapper) return;
          const img = wrapper.querySelector("img");
          if (!img) return;

          gsap.to(img, {
            y: i % 2 === 0 ? -35 : -20,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              invalidateOnRefresh: true,
            },
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative">
      <section
        ref={sectionRef}
        className="relative py-20 md:py-28 lg:py-0 lg:h-screen lg:flex lg:items-center lg:justify-center overflow-hidden bg-[#f3f3f3]"
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
            hidden sm:block
            absolute 
            top-6 left-6
            sm:top-16 sm:left-10 
            md:top-20 md:left-20
            z-20
          "
        >
          <Image
            src="/products/cc.jpg"
            alt="Oil Bottle"
            width={150}
            height={150}
            className="sm:w-[160px] md:w-[180px] lg:w-[250px] rounded-xl shadow-xl"
          />
        </div>

        {/* TOP RIGHT */}
        <div
          ref={(el) => (imagesRef.current[1] = el)}
          className="
            hidden sm:block
            absolute 
            top-6 right-6
            sm:top-16 sm:right-10 
            md:top-20 md:right-20
            z-20
          "
        >
          <Image
            src="/products/badhaam2.webp"
            alt="Oil Bottle"
            width={140}
            height={140}
            priority
            className="sm:w-[160px] md:w-[180px] lg:w-[250px] rounded-xl shadow-xl"
          />
        </div>

        {/* BOTTOM LEFT */}
        <div
          ref={(el) => (imagesRef.current[2] = el)}
          className="
            hidden sm:block
            absolute 
            bottom-7 left-6
            sm:bottom-24 sm:left-10 
            md:bottom-24 md:left-20
            z-20
          "
        >
          <Image
            src="/products/kesakala3.jpg"
            alt="Oil Bottle"
            width={120}
            height={120}
            priority
            className="sm:w-[160px] md:w-[180px] lg:w-[250px] rounded-xl shadow-xl"
          />
        </div>

        {/* BOTTOM RIGHT */}
        <div
          ref={(el) => (imagesRef.current[3] = el)}
          className="
            hidden sm:block
            absolute 
            bottom-7 right-6
            sm:bottom-24 sm:right-10 
            md:bottom-24 md:right-20
            z-20
          "
        >
          <Image
            src="/products/chandramukhi3.webp"
            alt="Oil Bottle"
            width={120}
            height={120}
            className="sm:w-[160px] md:w-[180px] lg:w-[250px] rounded-xl shadow-xl"
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

          <Link href="/products">
            <button className="mt-8 sm:mt-10 px-5 sm:px-8 py-2 sm:py-3 text-sm sm:text-base border border-gray-400 rounded-full text-gray-700 font-medium hover:bg-gray-800 hover:text-white transition duration-300">
              All Products
            </button>
          </Link>

        </div>
      </section>
    </div>
  );
};

export default AboutSection;
