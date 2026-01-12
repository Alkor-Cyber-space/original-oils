import Image from "next/image";

const avatars = [
  "/avatar1.jpg",
  "/avatar2.jpeg",
  "/avatar3.jpeg",
  "/avatar4.jpg",
  "/avatar5.jpg",
];

export default function CraftSection() {
  return (
    <section className="bg-background py-24 px-6">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-5xl leading-tight text-gray-900">
          Quality comes from <br /> skill, not shortcuts
        </h2>
        <p className="mt-6 text-gray-500 text-base">
          We combine time-honored methods and skilled craftsmanship to ensure
          consistent purity.
        </p>
      </div>

      {/* Content */}
      <div className="mt-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* LEFT CARD */}
        <div>
          <div className="relative h-50 rounded-3xl overflow-hidden shadow-xl">
            {/* Background Image */}
            <Image
              src="/plant image.png"
              alt="Process"
              fill
              className="object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/10" />

            {/* Inner Glass Panel */}
            <div className="absolute inset-4 rounded-2xl bg-white/30 backdrop-blur-md border border-white/40 p-6 text-white">
              <p className="text-xs tracking-wide opacity-80 text-center">
                Our process is honest
              </p>

              <h3 className="mt-3 font-serif text-xl text-center leading-tight">
                Calm in every drop
              </h3>

              <p className="mt-3 text-sm md:text-base leading-relaxed opacity-85 text-center font-serif">
                We create more than oils
                <br />
                We create moments of
                <br />
                balance and care.
              </p>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-8">
            <p className="text-sm tracking-widest text-gray-700">★★★★★</p>
            <h4 className="mt-2 font-medium text-gray-900">Community Love</h4>

            <p className="mt-3 text-sm text-gray-500 leading-relaxed max-w-md">
              Original Oils is more than a product — it’s part of everyday home
              rituals. From first-time customers to loyal families, people
              return for the purity, the trust, and the care in every bottle.
            </p>

            <div className="mt-6 max-w-md">
              <div className="flex -space-x-4 justify-start">
                {avatars.map((src, index) => (
                  <Image
                    key={index}
                    src={src}
                    alt="user"
                    width={56}
                    height={56}
                    // quality={100}
                    className="rounded-full border-4 border-white object-cover shadow-sm"
                  />
                ))}
              </div>

              {/* CTA */}
              <div className="mt-6 flex items-center justify-center gap-4 text-gray-700 cursor-pointer group">
                <span className="text-sm font-medium">Read Testimonials</span>

                <span className="w-11 h-11 rounded-full border border-gray-400 flex items-center justify-center transition group-hover:bg-gray-900 group-hover:text-white">
                  →
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CENTER IMAGE */}
        <div className="relative h-130 rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/craft-man.jpg"
            alt="Craft"
            fill
            className="object-cover"
          />

          <div className="absolute bottom-3 left-6 right-6 rounded-2xl bg-black/35 backdrop-blur-md p-2 text-white">
            <h3 className="font-serif text-lg leading-tight">
              Experience You Can Trust
            </h3>

            <p className="mt-3 text-sm leading-relaxed opacity-90">
              At Original Oils, every bottle reflects the hands and experience
              behind it. Our oils are crafted by skilled professionals who value
              traditional methods, purity, and genuine care — a quality you can
              feel and trust in every drop.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col items-start gap-10">
         <div className="flex justify-center ml-4">
  <Image
    src="/originals.png"
    alt="Originals quote"
    width={420}
    height={700}
    className="w-full max-w-70 h-auto object-contain"
    priority
  />
</div>

          {/* LOGO */}
<div className="flex items-center justify-center -mt-4">
  <Image
    src="/original-oils-logo.png"
    alt="Original Oils"
    width={220}
    height={190}
    className="object-contain"
  />
</div>

        </div>
      </div>
    </section>
  );
}
