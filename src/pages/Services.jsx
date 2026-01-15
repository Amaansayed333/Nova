import ServiceSlider from "../components/ServiceSlider"

export default function Services() {
  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-6">

      <h2 className="text-4xl font-bold text-secondary text-center">
        Our Services
      </h2>

      <p className="mt-4 text-center text-slate-600 max-w-3xl mx-auto">
        Nova Global Enterprises offers comprehensive import, export, trading, supply, and consultancy services across multiple high-demand sectors with a strong focus on quality, reliability, and long-term partnerships.
      </p>

      <div className="mt-20 space-y-24">

        {/* ================= Poultry ================= */}
        <ServiceSlider
          title="Poultry Products & Livestock Supply"
          slides={[
            {
              title: "Cobb 430Y Hatching Eggs",
              desc: "Premium quality Cobb 430Y hatching eggs supplied for commercial poultry farms.",
              image: "../../public/cobby_430y.jpeg",
            },
            {
              title: "Hatching Eggs",
              desc: "High fertility hatching eggs supplied in bulk quantities for hatcheries.",
              image: "../../public/hatching_eggs.jpeg",
            },
            {
              title: "Day Old Chicks",
              desc: "Healthy, vaccinated day-old chicks supplied with proper handling.",
              image: "../../public/day_old_chicks.jpeg",
            },
            {
              title: "Poultry Feed & Medicines",
              desc: "Complete range of poultry feeds, supplements, and medicines.",
              image: "../../public/poultry_feed.png",
            },
          ]}
        />

        {/* ================= Metals & Aluminium ================= */}
        {/* ================= Metals & Aluminium ================= */}
      <ServiceSlider
        title="Metals & Aluminium Products"
        slides={[
          {
            title: "Aluminium Borings",
            desc: "Industrial-grade aluminium borings for recycling & manufacturing.",
            image: "../../public/Aluminium Borings.png",
          },
          {
            title: "Aluminium Cable Wire",
            desc: "Electrical-grade aluminium cable wire for infrastructure projects.",
            image: "../../public/Aluminium Cable Wire.png",
          },
          {
            title: "Aluminium Ingots",
            desc: "High purity aluminium ingots for casting and production.",
            image: "../../public/Aluminium Ingots.png",
          },
          {
            title: "Aluminium Turnings",
            desc: "Quality aluminium turnings supplied for industrial processing.",
            image: "../../public/Aluminium Turnings.png",
          },
        ]}
      />

      {/* ================= Minerals & Ores ================= */}
      <ServiceSlider
        title="Minerals & Ores Trading"
        slides={[
          {
            title: "Iron Ore",
            desc: "High quality iron ore for steel manufacturing.",
            image: "../../public/Iron Ore.jpg",
          },
          {
            title: "Bauxite Ore",
            desc: "Industrial-grade bauxite ore for aluminium production.",
            image: "../../public/Bauxite Ore.jpg",
          },
          {
            title: "Laterite Ores",
            desc: "Different grades of laterite ores for construction use.",
            image: "../../public/Laterite Ores.jpg",
          },
          {
            title: "Mineral Processing",
            desc: "Sorted and graded minerals for export and industrial use.",
            image: "../../public/Mineral Processing.jpg",
          },
        ]}
      />

      {/* ================= Cereals, Rice & Spices ================= */}
      <ServiceSlider
        title="Cereals, Rice & Masala Spices"
        slides={[
          {
            title: "Rice Varieties",
            desc: "Sona, IR64, Broken, Banumathi and other varieties.",
            image: "../../public/agricultural_products.png",
          },
          {
            title: "Cereals",
            desc: "All types of cereals for bulk supply.",
            image: "../../public/Cereals.jpg",
          },
          {
            title: "Indian Masala Spices",
            desc: "Authentic Indian spices in bulk quantities.",
            image: "../../public/Indian Masala Spices.jpg",
          },
          {
            title: "Bulk Food Supply",
            desc: "Wholesale supply for distributors & exporters.",
            image: "../../public/Bulk Food Supply.jpg",
          },
        ]}
      />

      {/* ================= Food Products & Copra ================= */}
      <ServiceSlider
        title="Food Products, Dry & Ball Copra"
        slides={[
          {
            title: "Dry Copra",
            desc: "Premium quality dry copra for oil & food industries.",
            image: "../../public/Dry Copra.jpg",
          },
          {
            title: "Ball Copra",
            desc: "High grade ball copra for religious and commercial use.",
            image: "../../public/Ball Copra.jpg",
          },
          {
            title: "Food Commodities",
            desc: "Bulk food commodities supply.",
            image: "../../public/Food Commodities.jpg",
          },
          {
            title: "Export Food Supply",
            desc: "International food export support.",
            image: "../../public/Export Food Supply.jpg",
          },
        ]}
      />
        {/* ================= Real Estate ================= */}
        <ServiceSlider
          title="Real Estate, Construction & Consultancy"
          slides={[
            {
              title: "Construction Services",
              desc: "End-to-end construction for residential & commercial.",
              image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
            },
            {
              title: "Property Development",
              desc: "Land development and project execution.",
              image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
            },
            {
              title: "Consultancy Services",
              desc: "Professional real estate consultancy.",
              image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
            },
            {
              title: "Contract Projects",
              desc: "Contract-based construction & advisory services.",
              image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
            },
          ]}
        />

      </div>
    </div>
  )
}
