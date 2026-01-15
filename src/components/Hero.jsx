import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <div
      className="min-h-screen flex items-center pt-24 relative"
      style={{
        backgroundImage: "url('/global_enterprise_home.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold leading-tight"
        >
          NOVA Global Enterprises
        </motion.h1>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-lg max-w-2xl text-slate-200 leading-relaxed"
        >
          Nova Global Enterprises is a diversified trading powerhouse delivering excellence in metals, scrap materials, agricultural products, food commodities, livestock, and real estate services across India. With a strong sourcing network, transparent operations, and a commitment to quality, we provide reliable supply solutions that support industries, businesses, and long-term partnerships.
        </motion.p>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex gap-4"
        >
          {/* Explore Services */}
          <Link to="/services">
            <button className="bg-lightBlue text-primary px-6 py-3 rounded-full font-semibold hover:bg-white transition">
              Explore Services
            </button>
          </Link>

          {/* Contact Us */}
          <Link to="/contact">
            <button className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
