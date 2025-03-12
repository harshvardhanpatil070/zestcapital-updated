import { motion } from "framer-motion";
import logo from "../assets/images/capital-logo.png";

const HeroSection = () => {
  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-[#0C056D] to-[#120A8F] overflow-hidden">
      {/* Overlay with Neon Accents */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      {/* Diagonal Neon Lines */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center pointer-events-none">
        <div className="absolute w-96 h-1 bg-[#433bff] top-20 left-10 rotate-45 opacity-50"></div>
        <div className="absolute w-96 h-1 bg-[#dedcff] bottom-20 right-10 -rotate-45 opacity-50"></div>
      </div>

      <motion.div
        className="relative text-center text-white px-6 md:px-12 lg:px-24 transform scale-90 md:scale-100 transition-transform"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg leading-tight max-w-full">
          Your Future, Our Priority with
        </h1>

        {/* Replace text with centered logo image */}
        <img
          src={logo}
          alt="Zest Capital Logo"
          className="mt-2 drop-shadow-lg h-12 md:h-16 w-auto mx-auto"
        />

        <p className="mt-4 text-base md:text-lg opacity-90 text-[#dedcff] max-w-2xl mx-auto">
          USDT-Powered Asset Management. No Compromises.
        </p>

        <motion.button
          onClick={scrollDown}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-8 px-6 py-3 text-base md:text-lg font-semibold border-2 border-[#433bff] text-white rounded-full shadow-lg hover:bg-[#433bff] transition-all"
        >
          CONNECT WITH US →
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;