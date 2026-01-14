import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="
        grid grid-cols-1 md:grid-cols-2
        px-3 sm:px-5 md:px-10
         pb-0 sm:pb-0 md:pb-20
        items-center text-white
        relative overflow-hidden
        pt-24 md:pt-28
        -mt-8
      "
    >
      {/* HERO LOGO */}
      <div className="absolute hidden lg:block top-10 md:top-9 left-4 md:left-12 z-30">
        <Link href="/">
          <Image
            src="/logo2.png"
            alt="Original Oils Logo"
            width={255}
            height={90}
            priority
            className="w-[160px] sm:w-[190px] md:w-[140px] object-contain"
          />
        </Link>
      </div>

      {/* Left Section */}
      <div className="z-20 mt-8 md:mt-0 -translate-y-3 md:-translate-y-5 text-center md:text-left">
     
<h1 className="font-serif leading-none text-shadow-[0_4px_12px_rgba(0,0,0,0.35)] md:whitespace-nowrap">

  {/* MOBILE VIEW */}
  <span className="block md:hidden text-[2.5rem] font-normal">
    <span className="text-[3.9rem] font-extrabold">60</span>{" "}
    years in
  </span>
  <span className="block md:hidden text-[2.5rem] font-normal">
    oil milling Industry.
  </span>

  {/* DESKTOP VIEW — YOUR ORIGINAL STYLE */}
  <span className="hidden md:inline font-bold text-[6.2rem]">60&nbsp;</span>
  <span className="hidden md:inline font-normal text-[4.2rem]">
    years in
    <br />
    oil milling Industry.
  </span>

</h1>



        <div className="max-w-130 mx-auto md:mx-0 mt-3">
          <p
            className="
              font-sans
              text-sm sm:text-[1.05rem]
              font-light
              tracking-widest
              text-white/85
              text-shadow-[0_2px_6px_rgba(0,0,0,0.3)]
            "
          >
            One of the first coconut oil mills in Kerala
          </p>

          <p
            className="
              mt-3
              font-serif
              text-lg sm:text-[1.75rem]
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

        <button className="mt-6 bg-white text-black px-5 py-2.5 rounded-full font-semibold shadow-md transition-all duration-300 hover:bg-[#7A4A2E] hover:text-white">
          All Products
        </button>
      </div>

      {/* Right Section */}
      <div className="relative h-[45vh] sm:h-[70vh] md:h-[90vh] flex items-end justify-center md:justify-end z-20 ">
        <div className="relative w-full max-w-[380px] sm:max-w-[300px] md:max-w-[380px] z-40 -translate-y-10 sm:-translate-y-8 md:-translate-y-0 translate-x-6 sm:-translate-x-6 md:-translate-x-12">
          <Image
            src="/hero-bg.png"
            alt="Coconut Oil Bottle"
            width={700}
            height={700}
            priority
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* TORN PAPER — SAME POSITION */}
      <div className="absolute bottom-9 md:bottom-6 left-0 w-full h-76 sm:h-76 md:h-72 z-10 overflow-hidden">
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
