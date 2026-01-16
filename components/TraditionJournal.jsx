"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const articles = [
  {
    image: "/blogs/journal1.png",
    title: "On the way back from Munnar.",
    slug: "on-the-way-back-from-munnar",
  },
  {
    image: "/blogs/journal2.png",
    title: "My Journey with Hair Fall After Delivery",
    slug: "my-journey-with-hair-fall-after-delivery",
  },
  {
    image: "/blogs/journal3.png",
    title: "From My Grandmother to My Daughter",
    slug: "from-my-grandmother-to-my-daughter",
  },
];

export default function TraditionJournal() {
  return (
    <section className="bg-white px-6 md:px-8 py-7">
      {/* Header */}
      <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
        {/* Left */}
        <div>
          <p className="text-md tracking-wide text-gray-500 mb-2">
            The Tradition Journal
          </p>

          <h2 className="font-serif text-[2rem] md:text-[2.6rem] leading-tight text-gray-900 md:whitespace-nowrap">
            Stories Rooted in Tradition
          </h2>
        </div>

        {/* Right */}
        <div className="flex flex-col justify-end items-end text-gray-600 text-lg text-right leading-relaxed font-medium">
          <p>Where tradition, balance,</p>
          <p>and everyday wellness come together.</p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((item, index) => (
          <Link
            key={index}
            href={`/blog/${item.slug}`}
            className="block"
          >
            <motion.div
              className="bg-white rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.08)] overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.12)" }}
            >
              {/* Image */}
              <div className="relative h-55 w-full">
                <Image
                  src={item.image}
                  alt="Journal Image"
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col justify-between min-h-[36]">
                <p className="text-gray-800 text-sm leading-relaxed">
                  {item.title}
                </p>

                <div className="mt-3 text-sm text-gray-600 flex items-center gap-2">
                  Read More
                  <span className="w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center text-xs">
                    →
                  </span>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
