import ServiceHoverCard from "../components/ServiceHoverCard"

export default function Services() {
  const services = [
    {
      title: "Poultry Products & Livestock Supply",
      desc: "Complete supply of Cobb 430Y hatching eggs, hatching eggs, day-old chicks, poultry feeds, poultry medicines and all poultry-related products. We ensure healthy, quality-certified livestock and reliable delivery.",
      image: "/Nova_poultry1.jpeg",
      details: [
        "Cobb 430Y hatching eggs",
        "Hatching eggs",
        "Day old chicks",
        "Poultry feeds",
        "Poultry medicines",
        "All poultry products supply",
      ],
    },
    {
      title: "Metals & Aluminium Products",
      desc: "Wholesale trading of aluminium and metal products for industrial, electrical and manufacturing requirements.",
      image: "/Nova_scrap.jpeg",
      details: [
        "Aluminium boring",
        "Aluminium cable wire",
        "Aluminium ingots",
        "Aluminium turnings",
        "Industrial metal supply",
      ],
    },
    {
      title: "Minerals & Ores Trading",
      desc: "Trading of high-quality minerals and ores including iron ore, bauxite ore and laterite ores of different grades for industrial and construction use.",
      image: "/ore-trading.png",
      details: [
        "Iron ore",
        "Bauxite ore",
        "Laterite ores (different grades)",
      ],
    },
    {
      title: "Cereals, Rice & Spices",
      desc: "Wholesale supply of all types of cereals, Indian masala spices and multiple varieties of rice catering to bulk buyers and distributors.",
      image: "/agricultural_products.png",
      details: [
        "All types of cereals",
        "Indian masala spices",
        "Sona rice",
        "IR64 rice",
        "Broken rice",
        "Banumathi rice",
        "All rice varieties",
      ],
    },
    {
      title: "Food Products & Copra",
      desc: "Bulk supply of food products including dry copra, ball copra and other essential food commodities.",
      image: "/Nova_copra.png",
      details: [
        "Dry copra",
        "Ball copra",
        "Food commodities",
        "Bulk food supply",
      ],
    },
    {
      title: "Real Estate, Construction & Consultancy",
      desc: "Professional real estate services including construction, property development and consultancy services on contract basis.",
      image: "/real_estate.png",
      details: [
        "Construction services",
        "Real estate consultancy",
        "Property development",
        "Contract-based services",
      ],
    },
  ]

  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-secondary text-center">
        Our Services
      </h2>

      <p className="mt-4 text-center text-slate-600 max-w-3xl mx-auto">
        Nova Global Enterprises offers comprehensive trading, supply, and consultancy services across multiple high-demand sectors with a strong focus on quality, reliability, and long-term partnerships.
      </p>

      <div className="mt-20 grid md:grid-cols-3 gap-10">
        {services.map((s, i) => (
          <ServiceHoverCard key={i} service={s} />
        ))}
      </div>
    </div>
  )
}
