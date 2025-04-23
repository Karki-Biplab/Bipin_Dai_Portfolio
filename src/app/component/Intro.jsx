"use client";
import { useState, useEffect } from "react";

export default function Intro() {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section className="min-h-screen bg-orange-50 flex items-center justify-center px-6 sm:px-12 py-16 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-300 rounded-full opacity-20 -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400 rounded-full opacity-10 -ml-40 -mb-40" />
      
      <div className={`bg-white shadow-2xl rounded-3xl p-8 sm:p-12 max-w-4xl w-full relative z-10 border-b-8 border-orange-500 transform ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-1000`}>
        {/* Header with gradient */}
        <div className="mb-8 pb-6 border-b border-orange-100">
          <h2 className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400 mb-2">
            Meet Bipin Karki
          </h2>
          <div className="w-24 h-2 bg-orange-500 rounded-full mt-3" />
        </div>

        <p className="text-gray-700 text-lg sm:text-xl mb-8 leading-relaxed">
          With over a decade in the motorbike spare parts business, Bipin Dai is a
          household name in Teku, Kathmandu. As the founder of{" "}
          <span className="font-bold text-orange-600 px-1 py-0.5 bg-orange-50 rounded">
            Pappu Auto Parts
          </span>
          , he's mastered inventory flows, customer relations, and digital tools
          — all while keeping the grind real.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {[
            ["🧾", "Accounting & Inventory Pro", "Masterful tracking of parts & profit"],
            ["📲", "Mobile Banking & E-Payments", "Modernized transaction systems"],
            ["📦", "Supply Chain Coordination", "Optimized delivery networks"],
            ["📢", "Social Media Promotions", "Digital marketing expertise"],
            ["🔧", "Basic Auto Diagnostics", "Practical mechanical knowledge"],
          ].map((item, index) => (
            <div 
              key={index} 
              className={`flex items-start p-4 rounded-xl bg-orange-50 hover:bg-orange-100 transition-colors border-l-4 border-orange-400 transform ${animate ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
              style={{ transitionDelay: `${0.3 + index * 0.1}s`, transitionDuration: '0.5s' }}
            >
              <span className="text-2xl mr-3">{item[0]}</span>
              <div>
                <h3 className="font-bold text-orange-800">{item[1]}</h3>
                <p className="text-gray-600 text-sm">{item[2]}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center">
          <div className="w-16 h-1 bg-orange-300 rounded-full mb-4" />
          <p className="text-xl sm:text-2xl text-orange-700 font-bold text-center">
            "From Teku to the top — powered by precision and passion."
          </p>
          <div className="mt-6">
            <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Connect with Bipin
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}