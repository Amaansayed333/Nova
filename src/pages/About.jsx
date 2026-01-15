import { motion } from "framer-motion"

export default function About() {
  return (
    <div className="pt-28 pb-24 px-6 relative overflow-hidden">

      {/* Background Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-lightBlue/20 rounded-full blur-3xl"></div>
      <div className="absolute top-40 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-secondary"
        >
          About Nova Global Enterprises
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-slate-700 leading-relaxed max-w-4xl"
        >
          Nova Global Enterprises is a diversified trading company based in Tumakuru, Karnataka, engaged in wholesale trading across multiple high-demand sectors. Our operations span metals and metal ores, scrap and waste materials, agricultural products, food items, livestock, poultry, and real estate services.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-4 text-slate-700 leading-relaxed max-w-4xl"
        >
          We believe in building long-term relationships through trust, transparency, and consistent quality. With a strong sourcing network and efficient logistics, we ensure timely delivery and competitive pricing to our clients.
        </motion.p>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-10">

          {/* Vision */}
          <motion.div
            whileHover={{ y: -10, scale: 1.03 }}
            className="group relative rounded-3xl p-[2px] overflow-hidden"
          >
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg,#1e40af,#38bdf8,#1e40af)] animate-spin-slow"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-secondary">Our Vision</h3>
              <p className="mt-4 text-slate-600">
                To become a trusted name in multi-sector trading by delivering value-driven solutions that empower businesses.
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            whileHover={{ y: -10, scale: 1.03 }}
            className="group relative rounded-3xl p-[2px] overflow-hidden"
          >
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg,#38bdf8,#1e40af,#38bdf8)] animate-spin-slow"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-secondary">Our Mission</h3>
              <p className="mt-4 text-slate-600">
                To provide reliable, ethical, and high-quality trading services across industries through transparency and excellence.
              </p>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            whileHover={{ y: -10, scale: 1.03 }}
            className="group relative rounded-3xl p-[2px] overflow-hidden"
          >
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg,#1e40af,#38bdf8,#1e40af)] animate-spin-slow"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-secondary">Our Values</h3>
              <p className="mt-4 text-slate-600">
                Integrity, transparency, customer focus, and long-term partnerships form the foundation of everything we do.
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Animation Styles */}
      <style>
        {`
          .animate-spin-slow {
            animation: spin 10s linear infinite;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>

    </div>
  )
}
