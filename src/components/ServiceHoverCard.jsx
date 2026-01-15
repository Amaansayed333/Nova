import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef } from "react"

export default function ServiceHoverCard({ service }) {
  const [expanded, setExpanded] = useState(false)
  const closeTimerRef = useRef(null)

  const handleOpen = () => {
    setExpanded(true)

    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
    }

    // Auto close after 3 sec on desktop hover
    closeTimerRef.current = setTimeout(() => {
      setExpanded(false)
    }, 3000)
  }

  const handleClose = () => {
    setExpanded(false)
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
    }
  }

  return (
    <>
      {/* NORMAL CARD */}
      <div
        onMouseEnter={handleOpen}
        onClick={handleOpen}   // 👈 mobile tap support
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative 
                w-full sm:w-[80%] md:w-[60%] lg:w-[30vw]
                h-[85vh] md:h-[70vh]
                bg-white rounded-3xl overflow-hidden shadow-2xl
              "
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 md:h-1/2 object-cover"
              />

              <div className="p-6 md:p-8 overflow-y-auto h-[calc(100%-14rem)] md:h-auto">
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

                {/* Close button for mobile */}
                <button
                  onClick={handleClose}
                  className="mt-6 w-full bg-secondary text-white py-3 rounded-lg font-semibold hover:bg-primary transition md:hidden"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
