import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white shadow-md fixed w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-secondary">NOVA Global</h1>
        <div className="space-x-6">
          {["/", "/about", "/services", "/contact"].map((path, i) => (
            <Link
              key={i}
              to={path}
              className="relative text-slate-700 hover:text-secondary transition"
            >
              <span className="after:block after:absolute after:h-[2px] after:w-0 after:bg-secondary after:bottom-[-4px] after:left-0 hover:after:w-full after:transition-all">
                {path === "/" ? "Home" : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}
