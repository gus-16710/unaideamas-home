// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import { useProductStore } from "@/store/product.store";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-cube";
// import { Category } from "@/types";

// export default function CarouselCategories() {
//   const { categories } = useProductStore();

//   return (
//     <div className="w-full h-[250px] flex items-center justify-center relative overflow-hidden">
//       <Swiper
//         spaceBetween={0}
//         slidesPerView={1}
//         centeredSlides={true}
//         effect="slide"
//         loop={true}
//         autoplay={{
//           delay: 5000,
//           disableOnInteraction: false,
//         }}
//         speed={800}
//         pagination={{
//           clickable: true,
//           dynamicBullets: true,
//         }}
//         navigation={{
//           nextEl: ".button-next",
//           prevEl: ".button-prev",
//         }}
//         modules={[Navigation, Pagination, Autoplay]}
//         className="w-full h-full"
//       >
//         {categories.map((category: Category) => (
//           <SwiperSlide key={category.id}>
//             <div
//               className="p-3 rounded-2xl shadow-lg"
//               style={{
//                 background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
//               }}
//             >
//               {category.icon && category.icon}
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay, EffectCreative } from "swiper/modules";
// import { useProductStore } from "@/store/product.store";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-creative";
// import { Category } from "@/types";
// import { useRef } from "react";

// export default function CarouselCategories() {
//   const { categories } = useProductStore();
//   const prevRef = useRef<HTMLButtonElement>(null);
//   const nextRef = useRef<HTMLButtonElement>(null);

//   return (
//     <div className="w-full h-[480px] flex items-center justify-center relative overflow-hidden bg-linear-to-br  rounded-3xl p-6">

//       {/* Título minimalista */}
//       <div className="absolute top-6 left-6 z-10">
//         <h2 className="text-2xl font-bold text-slate-800">Categorías</h2>
//         <p className="text-slate-500 text-sm mt-1">Explora nuestras colecciones</p>
//       </div>

//       {/* Controles de navegación personalizados */}
//       <div className="absolute top-6 right-6 z-10 flex space-x-2">
//         <button
//           ref={prevRef}
//           className="button-prev w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 flex items-center justify-center hover:bg-white hover:shadow-lg transition-all duration-300 group"
//         >
//           <svg className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>
//         <button
//           ref={nextRef}
//           className="button-next w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 flex items-center justify-center hover:bg-white hover:shadow-lg transition-all duration-300 group"
//         >
//           <svg className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </button>
//       </div>

//       <Swiper
//         spaceBetween={20}
//         slidesPerView={1}
//         centeredSlides={true}
//         loop={true}
//         autoplay={{
//           delay: 4000,
//           disableOnInteraction: false,
//         }}
//         speed={1000}
//         creativeEffect={{
//           prev: {
//             shadow: true,
//             translate: ["-120%", 0, -500],
//           },
//           next: {
//             shadow: true,
//             translate: ["120%", 0, -500],
//           },
//         }}
//         pagination={{
//           clickable: true,
//           el: ".custom-pagination",
//           bulletClass: "custom-bullet",
//           bulletActiveClass: "custom-bullet-active",
//         }}
//         navigation={{
//           nextEl: nextRef.current,
//           prevEl: prevRef.current,
//         }}
//         modules={[Navigation, Pagination, Autoplay, EffectCreative]}
//         className="w-full h-full"
//         onInit={(swiper) => {
//           // @ts-ignore
//           swiper.params.navigation.prevEl = prevRef.current;
//           // @ts-ignore
//           swiper.params.navigation.nextEl = nextRef.current;
//           swiper.navigation.init();
//           swiper.navigation.update();
//         }}
//       >
//         {categories.map((category: Category, index: number) => (
//           <SwiperSlide key={category.id}>
//             <div className="w-full h-full flex items-center justify-center p-4">
//               <div className="relative group cursor-pointer">
//                 {/* Tarjeta con efecto glassmorphism */}
//                 <div className="relative bg-white/20 backdrop-blur-lg rounded-3xl p-8 border border-white/30 shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white/30">

//                   {/* Gradiente animado de fondo */}
//                   <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-blue-500/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                   {/* Icono centrado con efecto flotante */}
//                   <div className="relative z-10 flex flex-col items-center justify-center">
//                     <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-500">
//                       <div className="text-white text-2xl">
//                         {category.icon && category.icon}
//                       </div>
//                     </div>

//                     {/* Nombre de categoría */}
//                     <h3 className="text-xl font-semibold text-slate-800 text-center mb-2">
//                       {category.name}
//                     </h3>

//                     {/* Descripción (si existe) */}
//                     {category.description && (
//                       <p className="text-slate-600 text-sm text-center max-w-xs">
//                         {category.description}
//                       </p>
//                     )}

//                     {/* Badge de productos */}
//                     <div className="mt-3 px-3 py-1 bg-white/50 backdrop-blur-sm rounded-full border border-white/50">
//                       <span className="text-xs font-medium text-slate-700">
//                         {category.productCount || 0} productos
//                       </span>
//                     </div>
//                   </div>

//                   {/* Efecto de brillo al hacer hover */}
//                   <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Paginación personalizada */}
//       <div className="custom-pagination absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10" />

//       {/* Estilos personalizados para la paginación */}
//       <style jsx>{`
//         .custom-bullet {
//           width: 8px;
//           height: 8px;
//           background: rgba(255, 255, 255, 0.5);
//           border-radius: 50%;
//           cursor: pointer;
//           transition: all 0.3s ease;
//         }
//         .custom-bullet-active {
//           width: 24px;
//           background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
//           border-radius: 12px;
//         }
//       `}</style>
//     </div>
//   );
// }

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCreative,
} from "swiper/modules";
import { useProductStore } from "@/store/product.store";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
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
                        <div className="text-white text-xl">
                          {category.icon && category.icon}
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
