import { useProductStore } from "@/store/product.store";
import { Badge, Card, CardBody, Chip } from "@heroui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FiArrowRight, FiRefreshCw } from "react-icons/fi";
import { Product } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function RandomProducts() {
  const { getRandomProducts, getCategoryInfo } = useProductStore();
  const [randomProducts, setRandomProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const loadRandomProducts = () => {
    setIsLoading(true);
    const products = getRandomProducts(12);
    setRandomProducts(products);
    setIsLoading(false);
  };

  useEffect(() => {
    loadRandomProducts();
  }, []);

  const handleProductClick = (product: Product) => {
    router.push(`/products/${product.id}`);
  };

  const getCategoryName = (categoryUrl: string) => {
    const category = getCategoryInfo(categoryUrl);
    return category?.name || categoryUrl;
  };

  if (isLoading) {
    return (
      <div className="w-full mb-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Productos Destacados
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Descubre nuestros productos más populares
            </p>
          </div>
          <div className="animate-spin">
            <FiRefreshCw size={20} className="text-slate-400" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <Card key={index} className="rounded-2xl shadow-md w-full">
              <CardBody className="p-0">
                <div className="animate-pulse">
                  <div className="w-full h-48 bg-slate-200 rounded-t-2xl"></div>
                  <div className="p-4 space-y-3">
                    <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                    <div className="h-3 bg-slate-200 rounded w-1/2"></div>
                    <div className="h-3 bg-slate-200 rounded w-full"></div>
                    <div className="h-3 bg-slate-200 rounded w-2/3"></div>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mb-10">
      {/* Header con controles */}
      <div className="flex items-center justify-between w-full mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Productos Destacados
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            {randomProducts.length}+ productos disponibles
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

      {/* Swiper Carousel */}
      <div className="relative">
        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          centeredSlides={false}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={800}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          pagination={{
            clickable: true,
            el: ".products-pagination",
            bulletClass: "product-bullet",
            bulletActiveClass: "product-bullet-active",
          }}
          navigation={{
            nextEl: nextRef.current,
            prevEl: prevRef.current,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="w-full" // Importante: overflow visible para que las alturas se calculen correctamente
          onInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {randomProducts.map((product, index) => {
            const categoryName = getCategoryName(product.categoria!);

            return (
              <SwiperSlide key={`${product.id}-${index}`}>
                <div className="w-full h-full flex items-stretch p-1"> {/* items-stretch para igualar alturas */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="w-full h-full flex" // flex para que ocupe toda la altura disponible
                  >
                    <Card
                      isPressable
                      onPress={() => handleProductClick(product)}
                      className="group rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden w-full border border-slate-100 bg-white/90 backdrop-blur-sm flex flex-col h-full" // h-full para ocupar toda la altura del contenedor
                    >
                      <CardBody className="p-0 w-full h-full flex flex-col">
                        {/* Sección de imagen - Altura fija */}
                        <div className="relative h-48 w-full shrink-0 overflow-hidden">
                          <img
                            src={product.imagenes_urls[0]}
                            alt={product.nombre}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              e.currentTarget.src = "/img/placeholder-product.jpg";
                            }}
                          />

                          {/* Overlay de gradiente */}
                          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                          {/* Badge de categoría */}
                          <div className="absolute top-3 left-3">
                            <Chip
                              variant="flat"
                              className="bg-black/60 text-white backdrop-blur-sm text-xs border-white/20"
                            >
                              {categoryName}
                            </Chip>
                          </div>
                         
                        </div>

                        {/* Contenido - Se expande para ocupar espacio disponible */}
                        <div className="p-4 grow flex flex-col">
                          {/* Título */}
                          <h3 className="font-semibold text-slate-800 line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors">
                            {product.nombre}
                          </h3>

                          {/* Descripción */}
                          <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed mb-3 grow">
                            {product.descripcion}
                          </p>
                          
                        </div>

                        {/* Footer - Siempre al fondo */}
                        <div className="p-4 border-t border-slate-100 mt-auto">
                          <div className="flex items-center justify-end">                            
                            <div className="flex items-center text-blue-600 text-xs font-medium group/link">
                              Ver detalles
                              <FiArrowRight size={12} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>

                        {/* Efecto de brillo al hover */}
                        <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-cyan-500/5 transition-all duration-500 pointer-events-none" />
                      </CardBody>
                    </Card>
                  </motion.div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Paginación personalizada */}        
      </div>

      {/* Estilos para la paginación */}
      <style jsx global>{`                
        /* Asegurar que los slides tengan la misma altura */
        .swiper-slide {
          height: auto !important;
          display: flex !important;
        }
        
        .swiper-slide > div {
          width: 100%;
        }
      `}</style>
    </div>
  );
}