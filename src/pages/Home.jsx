import { motion } from "framer-motion"
import Hero from "../components/Hero"
import ServiceCard from "../components/ServiceCard"

export default function Home() {
  const services = [
    {
      title: "Poultry Products & Livestock Supply",
      desc: "Complete supply of Cobb 430Y hatching eggs, hatching eggs, day-old chicks, poultry feeds, poultry medicines and all poultry-related products with strict quality standards.",
      image: "/Nova_poultry1.jpeg",
    },
    {
      title: "Metals, Aluminium & Industrial Products",
      desc: "Wholesale trading of aluminium boring, aluminium cable wire, aluminium ingots, aluminium turnings and other industrial metal products for manufacturing and electrical sectors.",
      image: "/Nova_scrap.jpeg",
    },
    {
      title: "Minerals & Ores Trading",
      desc: "Supplying iron ore, bauxite ore and laterite ores of different grades for construction, infrastructure and industrial use.",
      image: "/Nova_minerals.jpeg",
    },
    {
      title: "Cereals, Rice & Masala Spices",
      desc: "Bulk supply of all types of cereals, Indian masala spices and multiple rice varieties including Sona, IR64, Broken rice and Banumathi rice.",
      image: "/agricultural_products.png",
    },
    {
      title: "Food Products, Dry & Ball Copra",
      desc: "Wholesale distribution of essential food products including dry copra, ball copra and other bulk food commodities.",
      image: "/Nova_copra.png",
    },
    {
      title: "Real Estate, Construction & Consultancy",
      desc: "Professional real estate services including construction, property development and consultancy services on contract basis.",
      image: "/real_estate.png",
    },
  ]

  return (
    <>
      <Hero />

      {/* ================= ABOUT SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
        
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-secondary">
            About Nova Global Enterprises
          </h2>

          <p className="mt-6 text-slate-700 leading-relaxed">
            Nova Global Enterprises is a diversified trading company based in Tumakuru, Karnataka, engaged in wholesale trading across multiple high-demand sectors including metals, minerals, poultry, agricultural products, food commodities, and real estate services.
          </p>

          <p className="mt-4 text-slate-700 leading-relaxed">
            With a strong sourcing network, transparent operations, and commitment to quality, we ensure reliable supply, competitive pricing, and long-term business partnerships across India.
          </p>

          <button className="mt-8 bg-secondary text-white px-6 py-3 rounded-full font-semibold hover:bg-lightBlue hover:text-primary transition">
            Learn More About Us
          </button>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-secondary to-primary text-white p-10 rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-lightBlue/30 to-transparent"></div>

          <div className="relative z-10 space-y-6">
            <div>
              <h3 className="text-2xl font-bold">Multi-Sector Expertise</h3>
              <p className="text-slate-200 mt-2">
                Extensive experience across poultry, metals, minerals, food products, agriculture and real estate services.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">Trusted Network</h3>
              <p className="text-slate-200 mt-2">
                Strong supplier, farmer and logistics network ensuring timely and efficient delivery.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">Customer First</h3>
              <p className="text-slate-200 mt-2">
                We focus on long-term partnerships, transparency, and consistent product quality.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= SERVICES INTRO ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-12 text-center">
        <h2 className="text-4xl font-bold text-secondary">Our Business Verticals</h2>
        <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
          Nova Global Enterprises operates across multiple sectors including poultry, metals, minerals, agriculture, food products and real estate, providing reliable trading solutions backed by strong sourcing networks and professional expertise.
        </p>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-10">
        {services.map((s, i) => (
          <ServiceCard key={i} title={s.title} desc={s.desc} image={s.image} />
        ))}
      </section>
    </>
  )
}
