"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#ff9900] text-theme-text text-center py-6 transform hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-sm opacity-90"
      >
        &copy; {new Date().getFullYear()} Bipin Karki. All rights reserved.
      </motion.p>
    </footer>
  );
}
