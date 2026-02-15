import { useState } from "react";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";


export default function GaikwadEmpire() {
  const spiceLevels = ["Lemon Herb", "Mild", "Medium", "Hot", "Extra Hot"];
  const [selectedSpice, setSelectedSpice] = useState("Medium");

  return (
    <div className="bg-black text-white font-sans">
      {/* HERO SECTION */}
      <section
        className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600891964092-4316c288032e')",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-yellow-500">
            Gaikwad Empire
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-red-700 font-semibold">
            Flame Grilled. Bold Heat. Premium Experience.
          </p>
          <div className="mt-8 flex justify-center gap-6">
            <button className="bg-yellow-600 hover:bg-yellow-500 px-6 py-3 rounded-2xl shadow-lg text-black font-bold">
              Order on Swiggy (Yet to Launch)
            </button>
            <button className="bg-red-700 hover:bg-red-600 px-6 py-3 rounded-2xl shadow-lg font-bold">
              Order on Zomato (Yet to Launch)
            </button>
          </div>
        </div>
      </section>

      {/* MENU SHOWCASE */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-black to-gray-900">
        <h2 className="text-4xl font-bold text-center text-yellow-500 mb-12">
          Smoked & Flame Grilled Perfection
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            "https://images.unsplash.com/photo-1550547660-d9450f859349",
            "https://images.unsplash.com/photo-1604908176997-4316c288032e",
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
          ].map((img, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={index}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={img}
                alt="Smoked grilled chicken"
                className="w-full h-80 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* SPICE LEVEL SELECTOR */}
      <section className="py-20 px-6 md:px-20 bg-black text-center">
        <h2 className="text-4xl font-bold text-red-700 mb-10">
          Choose Your Heat Level
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {spiceLevels.map((level) => (
            <motion.button
              key={level}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedSpice(level)}
              className={`px-6 py-3 rounded-2xl font-semibold shadow-xl border transition-all duration-300 ${
                selectedSpice === level
                  ? "bg-red-700 border-yellow-500 text-white"
                  : "bg-gray-900 border-gray-700 text-gray-300 hover:bg-gray-800"
              }`}
            >
              <div className="flex items-center gap-2">
                <Flame size={18} /> {level}
              </div>
            </motion.button>
          ))}
        </div>

        <motion.div
          key={selectedSpice}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 text-xl text-yellow-500 font-bold"
        >
          Selected Heat: {selectedSpice}
        </motion.div>
      </section>

      {/* CHAIRMAN MESSAGE */}
      <section
        className="relative py-24 px-6 md:px-32 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1598514983318-2f64f8f4796c')",
        }}
      >
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 text-center">
          <h2 className="text-4xl font-bold text-yellow-500 mb-6">
            Chairman's Vision
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
            Gaikwad Empire represents innovation, agility, and bold execution. Our
            flame-grilled concept is built on precision, premium quality, and
            fearless ambition. We are crafting a modern food brand designed for
            the next generation of India.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-8 text-center text-gray-500">
        © 2026 Gaikwad Empire | Ultra Premium Flame Kitchen
      </footer>
    </div>
  );
}
