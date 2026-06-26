"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const products = [
  {
    title: "Coconut Oil",
    image: "/coconutoil.png",

  },
  {
    title: "Badam Oil",
    image: "/badam oil 1.png",
  },
  {
    title: "Dhandha pala Oil",
    image: "/dhandha pala oil 1.png",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const HandpickedSection = () => {
  return (
    <section className="bg-white py-12 px-6 overflow-hidden">
      {/* Header */}
      <motion.div
        className="text-center max-w-xl mx-auto"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="text-xs tracking-[0.28em] text-gray-500 uppercase">
          Original Picks
        </p>

        <h2 className="mt-2 font-serif text-4xl md:text-5xl text-gray-800 leading-tight">
          Handpicked <br /> For Your Ritual
        </h2>

        <p className="mt-2 text-gray-500 text-sm leading-relaxed">
          From generations of knowledge, purity that never compromises.
        </p>
      </motion.div>

      {/* Products */}
      <div className=" grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2  mx-auto">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            whileHover={{ y: -6 }}
          >
            <div className="relative w-full  flex items-center justify-center md:mt-6">
              <Image
                src={product.image}
                alt={product.title}
                width={390}
                height={330}
                className="object-contain   transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>

            <p className="mt-7 text-gray-700 text-sm tracking-wide">
              {product.title}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <motion.div
        className="mt-10 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Link href="/products">
          <button className="rounded-full border border-black bg-white px-9 py-2.5 text-xs tracking-[0.2em] text-black transition-all duration-500 hover:bg-black hover:text-white">
            View Shop
          </button>
        </Link>

      </motion.div>
    </section>
  );
};

export default HandpickedSection;
