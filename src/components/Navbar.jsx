import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <motion.nav 
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-primary shadow-md fixed w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO – Bigger Now */}
        <div className="flex items-end gap-2">
          <h1 className="text-3xl font-bold text-white tracking-wide">
            NOVA Global
          </h1>
          <span className="text-sm md:text-base font-medium text-lightBlue tracking-wide">
            Import & Export
          </span>
        </div>


        {/* DESKTOP LINKS */}
        <div className="hidden md:flex space-x-8">
          {links.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className="relative text-white hover:text-lightBlue transition font-medium"
            >
              <span className="after:block after:absolute after:h-[2px] after:w-0 after:bg-lightBlue after:bottom-[-4px] after:left-0 hover:after:w-full after:transition-all">
                {link.name}
              </span>
            </Link>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-white focus:outline-none"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden bg-primary border-t border-white/20">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {links.map((link, i) => (
              <Link
                key={i}
                to={link.path}
                onClick={() => setOpen(false)}
                className="text-white text-lg font-medium hover:text-lightBlue transition"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </motion.nav>
  )
}
