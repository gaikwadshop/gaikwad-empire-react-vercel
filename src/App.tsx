import { useState } from "react";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";

const spiceLevels = ["Lemon Herb", "Mild", "Medium", "Hot", "Extra Hot"];

export default function GaikwadEmpire() {
  const [selectedSpice, setSelectedSpice] = useState("Medium");

  return (
    <div className="relative bg-black text-white font-sans overflow-x-hidden">

      {/* HERO SECTION */}
      <section
        className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Smoke overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ y: [0, -50, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          style={{
            backgroundImage: "url('/assets/smoke.png')",
            backgroundSize: "cover",
            opacity: 0.15,
          }}
        />

        {/* Flame overlay */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-48 pointer-events-none"
          animate={{
            y: [0, -15, 0, -10, 0],
            scale: [1, 1.05, 0.95, 1.02, 1],
            opacity: [0.6, 1, 0.7, 1, 0.6],
          }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          style={{
            backgroundImage: "url('/assets/flame.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            transformOrigin: "bottom center",
          }}
        />

        {/* Content */}
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-yellow-500 drop-shadow-lg">
            Gaikwad Empire
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-red-700 font-semibold drop-shadow-md">
            Flame Grilled. Bold Heat. Premium Experience.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex justify-center gap-6 flex-wrap">
            <button className="bg-yellow-600 hover:bg-yellow-500 px-6 py-3 rounded-2xl shadow-lg text-black font-bold transition-all duration-300 transform hover:scale-105">
              Order on Swiggy (Yet to Launch)
            </button>
            <button className="bg-red-700 hover:bg-red-600 px-6 py-3 rounded-2xl shadow-lg font-bold transition-all duration-300 transform hover:scale-105">
              Order on Zomato (Yet to Launch)
            </button>
          </div>

          {/* Spice Selector */}
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            {spiceLevels.map((spice) => (
              <motion.button
                key={spice}
                onClick={() => setSelectedSpice(spice)}
                className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300
                  ${
                    selectedSpice === spice
                      ? "bg-red-700 text-yellow-400 scale-110 shadow-xl"
                      : "bg-gray-800 text-white hover:bg-gray-700"
                  }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {spice} {selectedSpice === spice && <Flame className="inline-block w-5 h-5 ml-1 text-orange-500 animate-pulse" />}
              </motion.button>
            ))}
          </div>
        </div>
      </section>
      
      {/* ... rest of your sections remain the same ... */}
    </div>
  );
}
