"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    submitting: false,
    submitted: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState({ ...formState, submitting: true });
    
    // Simulate form submission
    setTimeout(() => {
      setFormState({ 
        name: "", 
        email: "", 
        message: "", 
        submitting: false, 
        submitted: true 
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormState(prev => ({ ...prev, submitted: false }));
      }, 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

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
      id="contact"
      className="relative py-24 px-6 sm:px-12 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-yellow-500 z-0" />
      
      <div className="relative z-0 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            className="text-white"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold mb-6"
            >
              Let's Connect
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mb-12 text-lg opacity-90 max-w-md"
            >
              Whether you want to discuss a business opportunity, explore partnerships, or just say hello — I'm always open to connections and conversations.
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="space-y-8"
            >
              <motion.div variants={itemVariants} className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Phone</h3>
                  <p className="opacity-90">9844199335</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Email</h3>
                  <p className="opacity-90">bip.2010@gmail.com</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Location</h3>
                  <p className="opacity-90">Teku, Kathmandu, Nepal</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Social Media</h3>
                  <a href="https://www.facebook.com/ksenbipin" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:underline">facebook.com/ksenbipin</a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {formState.submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-white py-12"
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-center text-white text-opacity-90">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                
                <div>
                  <label htmlFor="name" className="block text-white text-opacity-90 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-20 rounded-lg text-orange placeholder-white placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white text-opacity-90 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-20 rounded-lg text-orange placeholder-white placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white text-opacity-90 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-20 rounded-lg text-orange placeholder-white placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    placeholder="I'd like to discuss..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={formState.submitting}
                  className="w-full px-6 py-4 bg-white text-orange-500 font-bold rounded-lg transition-all duration-300 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  {formState.submitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}