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
          transition={{
            repeat: Infinity,
            duration: 2.5,
            ease: "easeInOut",
          }}
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
                {spice}{" "}
                {selectedSpice === spice && (
                  <Flame className="inline-block w-5 h-5 ml-1 text-orange-500 animate-pulse" />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* MENU SECTION */}
      <section id="menu" className="py-20 px-10 md:px-20">
        <h2 className="text-4xl text-yellow-500 font-bold mb-12 text-center">
          Our Signature Menu
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Flame Grilled PERi Chicken",
              img: "https://images.unsplash.com/photo-1550547660-d9450f859349",
            },
            {
              name: "PERi Chicken Rice Bowl",
              img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
            },
            {
              name: "Grilled Chicken Wrap",
              img: "https://images.unsplash.com/photo-1604908176997-4316c288032e",
            },
            {
              name: "PERi Loaded Fries",
              img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add",
            },
          ].map((item) => (
            <motion.div
              key={item.name}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 relative"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-56 object-cover"
              />
              <h3 className="p-4 text-xl font-semibold">{item.name}</h3>
              <motion.div
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                animate={{ opacity: [0, 0.15, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                style={{
                  backgroundImage: "url('/assets/smoke.png')",
                  backgroundSize: "cover",
                }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT / CHAIRMAN */}
      <section id="about" className="py-20 px-10 md:px-20 bg-gray-900">
        <h2 className="text-4xl text-yellow-500 font-bold mb-6">Chairman's Message</h2>
        <div className="border-l-4 border-red-700 pl-6 py-6 rounded-lg text-gray-200">
          <p>
            At Gaikwad Empire, we believe in bold ideas and precision. Our flame-grilled concept represents quality, innovation, and consistency. Inspired by global flavors and powered by agile execution, we are building a modern cloud kitchen designed for today's fast-moving generation.
            <br />
            <br />
            — Chairman, Gaikwad Empire
          </p>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-20 px-10 md:px-20">
        <h2 className="text-4xl text-yellow-500 font-bold mb-8">Contact Us</h2>
        <form
          action="https://formspree.io/f/yourformid"
          method="POST"
          className="max-w-xl mx-auto flex flex-col gap-4"
        >
          <input type="text" name="name" placeholder="Your Name" required className="p-3 rounded-lg text-black"/>
          <input type="email" name="email" placeholder="Your Email" required className="p-3 rounded-lg text-black"/>
          <textarea name="message" rows={5} placeholder="Your Message" required className="p-3 rounded-lg text-black"/>
          <button type="submit" className="bg-yellow-600 hover:bg-yellow-500 py-3 rounded-2xl font-bold text-black shadow-lg transition-all duration-300">
            Send Message
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-400 text-center py-6">
        © 2026 Gaikwad Empire | Premium Flame Grilled Cloud Kitchen
      </footer>
    </div>
  );
}
