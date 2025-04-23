"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 1.5 }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden flex flex-col justify-center items-center text-center px-6 sm:px-12">
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 z-0"
        initial="hidden"
        animate="visible"
        variants={backgroundVariants}
      />
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full mix-blend-overlay" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-white rounded-full mix-blend-overlay" />
      </motion.div>

      {/* Content container */}
      <div className="relative z-10 max-w-4xl">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1 bg-white bg-opacity-20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-4">
            Welcome to My Portfolio
          </span>
        </motion.div>

        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="text-6xl sm:text-7xl font-extrabold text-white drop-shadow-lg"
        >
          Bipin Karki
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="h-1 w-24 bg-white mx-auto mt-6 mb-6 rounded-full"
        />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4 text-2xl sm:text-3xl text-white font-medium tracking-wide"
        >
          <span className="opacity-90">Wholesaler</span>
          <span className="mx-3 inline-block">•</span>
          <span className="opacity-90">Entrepreneur</span>
          <span className="mx-3 inline-block">•</span>
          <span className="opacity-90">Owner of Pappu Auto Parts</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-8 max-w-2xl mx-auto text-white text-opacity-90 text-lg sm:text-xl px-4 sm:px-8 leading-relaxed"
        >
          With over a decade of experience in the motorcycle spare parts industry,
          Bipin Karki is a trusted name in Teku, Kathmandu — combining technical
          expertise with heart-led business values. Driven by passion, precision, and a deep understanding of the market.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-orange-600 font-bold rounded-full shadow-2xl hover:bg-orange-50 transition-all duration-300"
          >
            Get In Touch
          </motion.a>
          
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full shadow-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300"
          >
            View Portfolio
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          delay: 2, 
          duration: 1.5, 
          repeat: Infinity,
          repeatType: "loop" 
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}