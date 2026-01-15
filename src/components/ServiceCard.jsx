import { motion } from "framer-motion"

export default function ServiceCard({ title, desc, image }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="group relative rounded-2xl overflow-hidden shadow-xl cursor-pointer"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>

      <div className="absolute bottom-0 p-6 text-white">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm mt-2 text-slate-200">{desc}</p>
      </div>
    </motion.div>
  )
}
