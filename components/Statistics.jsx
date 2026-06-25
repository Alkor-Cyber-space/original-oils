"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Statistics = () => {
  return (
    <section className="bg-[#f7f7f5] pt-18 pb-18 overflow-hidden">

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="max-w-350 mx-auto px-6 md:px-12 lg:px-20 text-center"
      >

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-playfair text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 leading-tight"
        >
          Business Built on <br />
          Honesty and Trust
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto"
        >
          See how our expertise and dedication <br />
          have transformed thousands of lives
        </motion.p>

        {/* Product Images Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 items-center"
        >
          {[
            { src: "/frame.jpeg", alt: "Founder" },
            { src: "/coconutoil2.png", alt: "Coconut Oil" },
            { src: "/badam2.jpg", alt: "Badam Oil" },
            { src: "/frame4.png", alt: "Massage Oil" },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
className="relative w-full h-[120px] sm:h-[120px] md:h-[160px] lg:h-[285px] flex items-center justify-center bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-contain"
              />
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Statistics;
