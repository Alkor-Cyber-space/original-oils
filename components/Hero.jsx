import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="
        grid grid-cols-1 md:grid-cols-2
        px-20 pb-20
        items-center text-white
        relative overflow-hidden pt-28
        -mt-12
        will-change-transform
      "
    >
      {/* Left Section */}
      <div className="-translate z-20 -translate-y-5">
        <h1 className="font-serif font-bold text-[4.8rem] leading-none whitespace-nowrap text-shadow-[0_4px_12px_rgba(0,0,0,0.35)]">
          <span className="text-[6.2rem]">60</span>{" "}
          <span className="font-normal text-[4.2rem]">
            years in
            <br />
            oil milling Industry.
          </span>
        </h1>

        <div className="max-w-130">
          <p
            className="
              font-sans
              text-[1.05rem]
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
              text-[1.75rem]
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

        <button className="mt-4 bg-white text-black px-3 py-2 rounded-full font-semibold shadow-md transition-all duration-300 hover:bg-[#7A4A2E] hover:text-white">
          All Products
        </button>
      </div>

      {/* Right Section */}
      <div className="relative h-[80vh] md:h-[90vh] flex items-end justify-center md:justify-end z-20">
        <div className="relative w-full max-w-120 h-full z-40 -translate-y-8">
          <Image
            src="/hero-bg.png"
            alt="Coconut Oil Bottle"
            fill
            priority
            className="object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* TORN PAPER — EXACT POSITION */}
      <div className="absolute bottom-6 left-0 w-full h-72.5 z-10 overflow-hidden">
        <Image
          src="/paper.png"
          alt="torn edge"
          fill
          priority
          className="object-cover object-top"
        />
      </div>
    </section>
  );
};

export default Hero;
