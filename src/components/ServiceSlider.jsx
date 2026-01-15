import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function ServiceSlider({ title, slides }) {
  return (
    <div className="mb-24">
      <h2 className="text-3xl font-bold text-secondary mb-8">{title}</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden group">
              {/* Image */}
              <div className="h-56 bg-slate-200 flex items-center justify-center text-slate-500">
                {/* Replace later with image */}
                {slide.image ? (
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-sm">Image Coming Soon</span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary">
                  {slide.title}
                </h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                  {slide.desc}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
