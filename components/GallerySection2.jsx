import Image from "next/image";

const images = [
  "/gallery/1.png",
  "/gallery/1.png",
  "/gallery/3.png",
  "/gallery/4.png",
  "/gallery/5.png",
  "/gallery/6.png",
  "/gallery/7.png",
  "/gallery/8.png",
  "/gallery/5.png",
];

export default function GallerySection2() {
  return (
    <section id="gallery" className="bg-white px-6 md:px-20 py-1 scroll-mt-28">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <p className="text-sm tracking-widest text-gray-500 mb-3">Gallery</p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-gray-900 leading-tight">
            Our Signature Oils, <br />
            Crafted with Tradition
          </h2>
        </div>

        <p className="text-gray-600 text-sm md:text-base leading-relaxed md:pt-10">
          Bring purity and tradition into your daily rituals with our finest
          oils.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, i) => (
          <div
            key={i}
            className="relative aspect-4/3 rounded-xl overflow-hidden group"
          >
            <Image
              src={src}
              alt={`Gallery ${i + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* BUTTON */}
      <div className="flex justify-center md:justify-end max-w-7xl mx-auto mt-12">
        <button className="border border-gray-300 px-6 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
          View All Images
        </button>
      </div>
    </section>
  );
}
