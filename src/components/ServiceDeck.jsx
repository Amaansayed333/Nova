import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function ServiceDeck({ services }) {
  const [index, setIndex] = useState(0)

  const paginate = (direction) => {
    setIndex((prev) => {
      if (direction === 1) {
        return (prev + 1) % services.length
      } else {
        return (prev - 1 + services.length) % services.length
      }
    })
  }

  return (
    <div className="relative h-[420px] flex items-center justify-center overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          className="absolute w-[320px] md:w-[380px] h-[420px] rounded-3xl shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing"
          style={{
            backgroundImage: `url(${services[index].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ scale: 0.9, opacity: 0, x: 100 }}
          animate={{ scale: 1, opacity: 1, x: 0 }}
          exit={{ scale: 0.9, opacity: 0, x: -100 }}
          transition={{ duration: 0.4 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.8}
          onDragEnd={(e, info) => {
            if (info.offset.x < -120) {
              paginate(1)
            } else if (info.offset.x > 120) {
              paginate(-1)
            }
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>

          {/* Content */}
          <div className="absolute bottom-0 p-6 text-white">
            <h3 className="text-2xl font-bold">{services[index].title}</h3>
            <p className="mt-2 text-slate-200 text-sm leading-relaxed">
              {services[index].desc}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Hint text */}
      <div className="absolute -bottom-10 text-slate-400 text-sm">
        ← Swipe left or right →
      </div>
    </div>
  )
}
