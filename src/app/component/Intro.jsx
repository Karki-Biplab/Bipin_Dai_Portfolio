"use client";

import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section
      id="intro"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 sm:px-12 overflow-hidden"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Floating balls */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="absolute top-24 left-24 w-64 h-64 bg-white rounded-full mix-blend-overlay" />
        <div className="absolute bottom-24 right-32 w-96 h-96 bg-white rounded-full mix-blend-overlay" />
      </motion.div>

      {/* Content */}
      <div className="relative z-0 max-w-3xl">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Who is Bipin Karki?
        </motion.h2>

        <motion.p
          className="text-white text-opacity-90 text-lg sm:text-xl px-4 sm:px-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          A passionate entrepreneur based in Kathmandu, Nepal, Bipin Karki has been leading
          the motorcycle spare parts business for over 10 years. With deep roots in Teku and a strong
          belief in customer satisfaction, he brings experience, dedication, and precision into every deal.
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a
            href="#contact"
            className="px-6 py-3 bg-white text-orange-600 font-semibold rounded-full shadow-md hover:bg-orange-100 transition-all duration-300"
          >
            Let’s Talk Business
          </a>
        </motion.div>
      </div>
    </section>
  );
}
