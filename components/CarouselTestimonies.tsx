import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Avatar } from "@heroui/react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  testimonial: string;
  location: string;
  date: string;
  rating: number; // 1-5
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "María González",
    avatar: "https://i.pravatar.cc/150?img=45", // Avatar femenino
    testimonial: "Las playeras personalizadas que pedí para mi empresa son de excelente calidad. Los sublimados son impecables y el material muy cómodo. ¡Superaron mis expectativas!",
    location: "Xalapa",
    date: "15 Nov 2024",
    rating: 5,
  },
  {
    id: 2,
    name: "Carlos Ramírez",
    avatar: "https://i.pravatar.cc/150?img=8", // Avatar masculino
    testimonial: "Encargué gorras y mochilas promocionales para un evento corporativo. El diseño quedó perfecto y el servicio de entrega fue muy puntual. Los clientes quedaron encantados.",
    location: "Coatepec",
    date: "10 Nov 2024",
    rating: 5,
  },
  {
    id: 3,
    name: "Ana Martínez",
    avatar: "https://i.pravatar.cc/150?img=43", // Avatar femenino
    testimonial: "Las agendas personalizadas para nuestro equipo de trabajo son preciosas. La calidad del papel y la impresión es excelente, aunque el proceso tardó unos días más de lo estimado.",
    location: "Banderilla",
    date: "5 Nov 2024",
    rating: 4,
  },
  {
    id: 4,
    name: "Luis Hernández",
    avatar: "https://i.pravatar.cc/150?img=12", // Avatar masculino
    testimonial: "Compré vasos y bolsas térmicas con logo para mi café. La impresión resiste perfectamente los lavados y el material es de primera. Justo lo que necesitaba para fidelizar clientes.",
    location: "Xico",
    date: "1 Nov 2024",
    rating: 5,
  },
  {
    id: 5,
    name: "Fernanda López",
    avatar: "https://i.pravatar.cc/150?img=44", // Avatar femenino
    testimonial: "Los productos promocionales para nuestro congreso médico (camisas, bolígrafos y bolsas) llegaron a tiempo y con una calidad superior. Gran profesionalismo en el diseño.",
    location: "Rafael Lucio",
    date: "28 Oct 2024",
    rating: 5,
  },
];

export default function CarouselTestimonials() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star}>
            {star <= rating ? (
              <FaStar className="text-yellow-400 w-4 h-4" />
            ) : (
              <FaRegStar className="text-slate-300 w-4 h-4" />
            )}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full h-[400px] flex flex-col items-center justify-center relative overflow-hidden pb-8 pt-4">
      {/* Título */}
      <div className="flex items-center justify-between w-full mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Testimonios</h2>
          <p className="text-slate-500 text-sm mt-1">
            Lo que dicen nuestros clientes
          </p>
        </div>

        {/* Controles de navegación */}
        <div className="flex space-x-2">
          <button
            ref={prevRef}
            className="button-prev w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 flex items-center justify-center hover:bg-white hover:shadow-lg transition-all duration-300 group"
          >
            <svg
              className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            ref={nextRef}
            className="button-next w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 flex items-center justify-center hover:bg-white hover:shadow-lg transition-all duration-300 group"
          >
            <svg
              className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={800}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination-testimonials",
          bulletClass: "custom-bullet-testimonials",
          bulletActiveClass: "custom-bullet-active-testimonials",
        }}
        navigation={{
          nextEl: nextRef.current,
          prevEl: prevRef.current,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="w-full h-full"
        onInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="w-full h-full flex items-center justify-center p-2">
              <div className="relative group cursor-default w-full h-full">
                {/* Tarjeta de testimonio */}
                <div className="relative bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow transition-all duration-300 hover:scale-[1.02] hover:bg-white/30 hover:shadow-xl w-full h-full flex flex-col">
                  {/* Gradiente animado */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Contenido */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Header con avatar y nombre */}
                    <div className="flex items-center gap-3 mb-4">
                      <Avatar
                        src={testimonial.avatar}
                        size="lg"
                        className="ring-2 ring-blue-500/20 group-hover:ring-blue-500/40 transition-all duration-300"
                      />
                      <div className="flex-1">
                        <h3 className="text-base font-semibold text-slate-800">
                          {testimonial.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                    </div>

                    {/* Testimonio */}
                    <div className="flex-1 mb-4">
                      <p className="text-slate-600 text-sm leading-relaxed line-clamp-4">
                        "{testimonial.testimonial}"
                      </p>
                    </div>

                    {/* Footer con ubicación y fecha */}
                    <div className="flex items-center justify-between pt-3 border-t border-slate-200/50">
                      <span className="text-xs text-slate-500 font-medium">
                        📍 {testimonial.location}
                      </span>
                      <span className="text-xs text-slate-400">
                        {testimonial.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Paginación */}
      <div className="custom-pagination-testimonials absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10" />

      <style jsx>{`
        .custom-bullet-testimonials {
          width: 6px;
          height: 6px;
          background: rgba(100, 116, 139, 0.4);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .custom-bullet-active-testimonials {
          width: 20px;
          background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}