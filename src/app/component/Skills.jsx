"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Business Skills",
      skills: [
        "Accounting",
        "Inventory Management",
        "Customer Relations",
        "Supply Chain Management",
        "Negotiation (Buying & Selling)"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h2a2 2 0 012 2v8H3v-8a2 2 0 012-2zM17 10h2a2 2 0 012 2v8h-4v-8a2 2 0 012-2zM7 6h10v2H7V6z" />
        </svg>
      )
    },
    {
      title: "Technical Knowledge",
      skills: [
        "Motorcycle Parts Compatibility",
        "Inventory Software",
        "Digital Payment Platforms (e-Sewa, Khalti)",
        "CRM Systems",
        "E-commerce Operations"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.269 2.943 9.542 7-.707 2.643-2.5 4.879-4.857 6.03a1.99 1.99 0 01-1.685 0C13.458 16.879 11.707 14.643 11 12h-8.542z" />
        </svg>
      )
    },
    {
      title: "Soft Skills",
      skills: [
        "Team Leadership",
        "Relationship Building",
        "Conflict Resolution",
        "Adaptability",
        "Community Engagement"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7a4 4 0 11-8 0 4 4 0 018 0zm6 14v-1a4 4 0 00-4-4H7a4 4 0 00-4 4v1h16zm2-9a3 3 0 11-6 0 3 3 0 016 0zm0 9v-1a4 4 0 00-3-3.874" />
        </svg>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center items-center px-6 sm:px-12 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="absolute top-24 right-24 w-64 h-64 bg-white rounded-full mix-blend-overlay" />
        <div className="absolute bottom-24 left-32 w-96 h-96 bg-white rounded-full mix-blend-overlay" />
      </motion.div>

      <div className="relative z-0 max-w-5xl w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Skills & Expertise
          </motion.h2>

          <motion.p
            className="text-white text-opacity-90 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            With a decade of hands-on experience running a wholesale business, I bring together technical know-how, solid business sense, and strong interpersonal skills.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white/20 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center mb-4">
                <div className="mr-4 text-white">{category.icon}</div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <ul className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <motion.li
                    key={idx}
                    className="text-white text-opacity-90 flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx + 0.5 + (index * 0.1), duration: 0.3 }}
                  >
                    <svg className="w-4 h-4 mr-2 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white  text-orange-600 font-bold rounded-full shadow-lg hover:bg-orange-50 transition-all duration-300"
          >
            Let's Work Together
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
