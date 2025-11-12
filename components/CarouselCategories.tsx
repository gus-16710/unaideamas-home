import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { useProductStore } from "@/store/product.store";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import 'swiper/css/effect-coverflow';

import { Category } from "@/types";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function CarouselCategories() {
  const { categories, getProductsCountByCategory } = useProductStore();
  const router = useRouter();

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="w-full h-[350px] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Título */}
      <div className="flex items-center justify-between w-full">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Categorías</h2>
          <p className="text-slate-500 text-sm mt-1">
            Explora nuestras colecciones
          </p>
        </div>

        {/* Controles de navegación */}
        <div className=" flex space-x-2">
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
        slidesPerView={3} // Mostrar 3 categorías a la vez
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={800}
        breakpoints={{
          // Responsive breakpoints
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
          el: ".custom-pagination",
          bulletClass: "custom-bullet",
          bulletActiveClass: "custom-bullet-active",
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
        {categories.map((category: Category) => {
          const productCount = getProductsCountByCategory(category.url);
          const Icon = category.icon!;

          return (
            <SwiperSlide key={category.id}>
              <div className="w-full h-full flex items-center justify-center p-2">
                <div
                  className="relative group cursor-pointer w-full"
                  onClick={() => router.push(`/categories/${category.url}`)}
                >
                  {/* Tarjeta de categoría */}
                  <div className="relative bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow transition-all duration-300 hover:scale-105 hover:bg-white/30 hover:shadow-xl w-full">
                    {/* Gradiente animado */}
                    <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-blue-500/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Contenido */}
                    <div className="relative z-10 flex flex-col items-center justify-center">
                      <div className="w-16 h-16 rounded-xl bg-linear-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg mb-3 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-white text-4xl">
                          <Icon />
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-slate-800 text-center mb-2">
                        {category.name}
                      </h3>

                      {category.description && (
                        <p className="text-slate-600 text-xs text-center line-clamp-2">
                          {category.description}
                        </p>
                      )}

                      <div className="mt-2 px-2 py-1 bg-white/50 backdrop-blur-sm rounded-full border border-white/50">
                        <span className="text-xs font-medium text-slate-700">
                          {productCount || 0} productos
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Paginación */}
      <div className="custom-pagination absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10" />

      <style jsx>{`
        .custom-bullet {
          width: 6px;
          height: 6px;
          background: rgba(100, 116, 139, 0.4);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .custom-bullet-active {
          width: 20px;
          background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
