"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const milestones = [
    {
      year: "2014",
      title: "Started Pappu Auto Parts",
      description: "Established a small motorcycle spare parts shop in Teku, Kathmandu with a vision to provide quality parts at fair prices."
    },
    {
      year: "2017",
      title: "Expanded to Wholesale",
      description: "Grew the business from retail to wholesale, becoming a trusted supplier for shops across Kathmandu."
    },
    {
      year: "2020",
      title: "Survived the Pandemic",
      description: "Successfully navigated business challenges during COVID-19 by implementing digital payment solutions and delivery services."
    },
    {
      year: "2022",
      title: "Modernized Operations",
      description: "Integrated inventory management software and expanded digital presence to reach more customers."
    },
    {
      year: "Present",
      title: "Community Leader",
      description: "Now recognized as an industry expert with over 10 years of experience, mentoring new entrepreneurs in the automotive parts sector."
    }
  ];

  return (
    <section
      id="experience"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 sm:px-12 py-20 overflow-hidden"
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
        <div className="absolute top-20 right-24 w-64 h-64 bg-white rounded-full mix-blend-overlay" />
        <div className="absolute bottom-24 left-32 w-96 h-96 bg-white rounded-full mix-blend-overlay" />
      </motion.div>

      {/* Content */}
      <div className="relative z-0 max-w-4xl">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-white mb-8 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Journey
        </motion.h2>

        <motion.div
          className="space-y-6 text-white text-opacity-90 text-lg sm:text-xl px-4 sm:px-8 leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p>
            Over a decade ago, I stepped into the bustling world of motorcycle spare parts with a dream
            and a dedication to serve riders across Nepal. Today, Pappu Auto Parts stands as a symbol
            of quality and trust in Teku, Kathmandu.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <motion.div 
            className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 top-0 bottom-0 w-1 bg-white bg-opacity-50"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          
          {/* Timeline items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div 
                key={index}
                className={`flex flex-col sm:flex-row ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''} items-start sm:items-center gap-4`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.2) }}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'sm:text-left' : 'sm:text-right'}`}>
                  <h3 className="text-2xl font-bold text-white">{milestone.title}</h3>
                  <p className="text-white text-opacity-80 mt-2">{milestone.description}</p>
                </div>
                
                <div className="relative flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-white text-orange-600 flex items-center justify-center font-bold z-0">
                    {index + 1}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className={`text-xl font-bold text-yellow-300 ${index % 2 === 0 ? 'sm:text-right' : 'sm:text-left'}`}>
                    {milestone.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-orange-600 font-bold rounded-full shadow-lg hover:bg-orange-50 transition-all duration-300"
          >
            Let's Connect
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}