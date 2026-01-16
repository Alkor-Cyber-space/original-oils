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
    <section className="w-full bg-[#f7f7f5] pt-20 pb-28 -mt-10 overflow-hidden">
      
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
          className="font-serif text-5xl font-medium text-gray-800 leading-tight"
        >
          Business Build on <br />
          Honesty and Trust
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 text-gray-500 max-w-2xl mx-auto"
        >
          See how our expertise and dedication <br />
          have transformed thousands of lives
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              title: "Customer Satisfaction",
              value: "98%",
              desc:
                "98% of our customers are happy and satisfied with the quality of our oil products.",
            },
            {
              title: "Annual Production",
              value: "5k+",
              desc:
                "Over 5,000 customers choose our oils every year for unmatched purity and quality.",
            },
            {
              title: "Happy Clients",
              value: "10k+",
              desc:
                "With 10,000+ happy customers globally, our oils are a trusted choice for quality.",
            },
            {
              title: "Excellence Rating",
              value: "4.9/5",
              desc:
                "Rated 4.9/5 by thousands of customers for exceptional purity and quality.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 18,
              }}
              className="bg-white rounded-2xl p-8 py-6 shadow-sm"
            >
              <p className="text-sm text-gray-500 mb-6">{item.title}</p>
              <h3 className="font-serif text-6xl font-medium text-gray-800">
                {item.value}
              </h3>
              <p className="mt-6 text-sm text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Statistics;
