import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef } from "react"

export default function ServiceHoverCard({ service }) {
  const [expanded, setExpanded] = useState(false)
  const closeTimerRef = useRef(null)

  const handleMouseEnter = () => {
    // open immediately
    setExpanded(true)

    // clear any existing timer
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
    }

    // auto close after 5 seconds
    closeTimerRef.current = setTimeout(() => {
      setExpanded(false)
    }, 3000)
  }

  const handleMouseLeave = () => {
    // optional: do nothing so it stays for 5 sec even if mouse leaves
  }

  return (
    <>
      {/* NORMAL CARD */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative group rounded-2xl overflow-hidden shadow-xl cursor-pointer"
      >
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>

        <div className="absolute bottom-0 p-6 text-white">
          <h3 className="text-xl font-bold">{service.title}</h3>
          <p className="text-sm mt-2 text-slate-200 line-clamp-3">
            {service.desc}
          </p>
        </div>
      </div>

      {/* EXPANDED CARD */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          >
            <motion.div
              initial={{ scale: 0.85, y: 60 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 60 }}
              transition={{ duration: 0.4 }}
              className="relative w-[30vw] h-[70vh] bg-white rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-1/2 object-cover"
              />

              <div className="p-8">
                <h3 className="text-2xl font-bold text-secondary">
                  {service.title}
                </h3>

                <p className="mt-3 text-slate-700 leading-relaxed">
                  {service.desc}
                </p>

                <ul className="mt-4 list-disc list-inside text-slate-600 space-y-1">
                  {service.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
