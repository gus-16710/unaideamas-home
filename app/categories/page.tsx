"use client";

import { AiFillProduct } from "react-icons/ai";
import { motion } from "framer-motion";
import {
  BreadcrumbItem,
  Breadcrumbs,
  Card,
  CardBody,
  Badge,
  Chip,
  Alert,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useProductStore } from "@/store/product.store";
import { FiPackage, FiGrid, FiArrowRight, FiTag } from "react-icons/fi";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useState } from "react";
import { MdOutlineSell } from "react-icons/md";

import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import {
  FaBusinessTime,
  FaPen,
  FaGift,
  FaRocket,
  FaShippingFast,
} from "react-icons/fa";
import {
  IoShirt,
  IoBook,
  IoCafe,
  IoBag,
  IoStar,
  IoDiamond,
} from "react-icons/io5";
import {
  RiTeamFill,
  RiCalendarEventFill,
  RiCustomerService2Fill,
} from "react-icons/ri";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Carousel = () => {
  // Animaciones optimizadas
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const slideUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="w-full h-screen lg:h-[650px] flex items-center justify-center relative overflow-hidden">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={true}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={800}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        className="w-full h-full shadow-lg md:shadow-2xl"
      >
        {/* Slide 1 - Personalización Empresarial */}
        <SwiperSlide>
          <div className="w-full h-full relative bg-linear-to-br from-blue-900 via-indigo-900 to-blue-800 overflow-hidden">
            <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 md:px-8 lg:px-16 py-6">
              <motion.div
                className="text-white space-y-4 lg:space-y-6 text-center lg:text-left mb-6 lg:mb-0 lg:flex-1"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                <motion.div
                  className="flex items-center justify-center lg:justify-start gap-2 md:gap-3"
                  variants={slideUp}
                >
                  <FaBusinessTime className="text-2xl md:text-3xl lg:text-4xl text-cyan-400" />
                  <span className="text-xs md:text-sm font-semibold bg-cyan-500/30 px-3 py-1 md:px-4 md:py-2 rounded-full border border-cyan-400/50">
                    SOLUCIONES CORPORATIVAS
                  </span>
                </motion.div>

                <motion.h2
                  className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight"
                  variants={slideUp}
                >
                  Marca Tu <br className="hidden sm:block" />
                  <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Empresa
                  </span>
                </motion.h2>

                <motion.p
                  className="text-sm md:text-lg lg:text-xl text-gray-300 max-w-md mx-auto lg:mx-0"
                  variants={slideUp}
                >
                  Productos promocionales personalizados que fortalecen tu
                  identidad corporativa y fidelizan clientes.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
                  variants={slideUp}
                >
                  <button
                    className="bg-linear-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() =>
                      window.open(
                        "https://wa.me/5212281255258?text=Hola! Quiero cotizar productos personalizados.",
                        "_blank"
                      )
                    }
                  >
                    Cotizar Proyecto
                  </button>
                </motion.div>
              </motion.div>

              <motion.div
                className="lg:flex-1 flex justify-center lg:justify-end"
                variants={fadeIn}
                initial="initial"
                animate="animate"
              >
                <div className="relative">
                  <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-linear-to-br from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-cyan-400/30">
                    <RiTeamFill className="text-4xl md:text-6xl lg:text-8xl text-cyan-400" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 - Productos Destacados */}
        <SwiperSlide>
          <div className="w-full h-full relative bg-linear-to-br from-purple-100 via-pink-100 to-purple-200 overflow-hidden">
            <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-center px-4 md:px-8 lg:px-16 py-6">
              <motion.div
                className="lg:flex-1 mb-6 lg:mb-0"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-6 max-w-sm mx-auto lg:max-w-none">
                  {[
                    {
                      icon: IoShirt,
                      color: "purple",
                      title: "Textiles",
                      desc: "Playeras, gorras",
                    },
                    {
                      icon: FaPen,
                      color: "pink",
                      title: "Escritura",
                      desc: "Lápices, plumas",
                    },
                    {
                      icon: IoBook,
                      color: "blue",
                      title: "Papelería",
                      desc: "Libretas, agendas",
                    },
                    {
                      icon: IoBag,
                      color: "green",
                      title: "Bolsas",
                      desc: "Ecológicas, promocionales",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className={`bg-white rounded-xl md:rounded-2xl p-3 md:p-4 lg:p-6 shadow-lg md:shadow-xl border border-${item.color}-200 transition-all duration-300 hover:shadow-xl`}
                      variants={scaleIn}
                    >
                      <item.icon
                        className={`text-2xl md:text-3xl lg:text-4xl text-${item.color}-500 mb-2 md:mb-3`}
                      />
                      <h3 className="font-bold text-gray-800 text-sm md:text-base">
                        {item.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="lg:flex-1 text-gray-800 space-y-4 lg:space-y-6 text-center lg:text-left lg:pl-8 xl:pl-12"
                variants={fadeIn}
                initial="initial"
                animate="animate"
              >
                <div className="flex items-center justify-center lg:justify-start gap-2 md:gap-3">
                  <FaGift className="text-xl md:text-2xl lg:text-3xl text-purple-500" />
                  <span className="text-xs md:text-sm font-semibold bg-purple-500/20 text-purple-700 px-2 py-1 md:px-3 md:py-1 rounded-full">
                    PRODUCTOS DESTACADOS
                  </span>
                </div>

                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Todo en <br className="hidden sm:block" />
                  <span className="bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Promocionales
                  </span>
                </h2>

                <p className="text-sm md:text-lg lg:text-xl text-gray-600 max-w-md mx-auto lg:mx-0">
                  Desde artículos de escritura hasta textiles, tenemos todo para
                  tus campañas promocionales.
                </p>

                <button
                  className="bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold transition-all duration-300 shadow-lg text-sm md:text-base"
                  onClick={() => {
                    const element = document.getElementById("grid-categories");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Explorar Productos
                </button>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 - Eventos Especiales */}
        <SwiperSlide>
          <div className="w-full h-full relative bg-linear-to-br from-orange-100 via-amber-100 to-yellow-100 overflow-hidden">
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4 md:px-8 lg:px-16 py-6">
              <motion.div
                className="mb-4 md:mb-6 lg:mb-8"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                <RiCalendarEventFill className="text-4xl md:text-5xl lg:text-6xl text-orange-500 mb-2 md:mb-3 lg:mb-4 mx-auto" />
                <div className="bg-linear-to-r from-orange-500 to-amber-500 text-white px-4 py-1 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-bold inline-block">
                  EVENTOS Y CELEBRACIONES
                </div>
              </motion.div>

              <motion.h2
                className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-4 md:mb-6"
                variants={slideUp}
              >
                Personaliza Tus <br className="hidden sm:block" />
                <span className="bg-linear-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                  Eventos
                </span>
              </motion.h2>

              <p className="text-sm md:text-lg lg:text-xl xl:text-2xl text-gray-600 mb-6 md:mb-8 max-w-2xl">
                Bodas, aniversarios, conferencias - creamos productos únicos
                para cada ocasión especial
              </p>

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8 w-full max-w-md sm:max-w-2xl"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {[
                  {
                    emoji: "🎉",
                    title: "Bodas",
                    desc: "Recuerdos especiales",
                    color: "orange",
                  },
                  {
                    emoji: "🏢",
                    title: "Corporativos",
                    desc: "Eventos empresariales",
                    color: "amber",
                  },
                  {
                    emoji: "🎓",
                    title: "Graduaciones",
                    desc: "Logros memorables",
                    color: "yellow",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    variants={scaleIn}
                  >
                    <div
                      className={`bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-${item.color}-200 hover:shadow-xl transition-shadow`}
                    >
                      <div className="text-2xl md:text-3xl mb-2">
                        {item.emoji}
                      </div>
                      <div className="font-semibold text-gray-800 text-sm md:text-base">
                        {item.title}
                      </div>
                      <div className="text-xs md:text-sm text-gray-600">
                        {item.desc}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 - Beneficios y Ofertas */}
        <SwiperSlide>
          <div className="w-full h-full relative bg-linear-to-br from-emerald-50 via-teal-100 to-green-100 overflow-hidden">
            <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-center px-4 md:px-8 lg:px-16 py-6">
              <motion.div
                className="text-gray-800 space-y-4 lg:space-y-6 text-center lg:text-left mb-6 lg:mb-0 lg:flex-1"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                <div className="flex items-center justify-center lg:justify-start gap-2 md:gap-3">
                  <IoCafe className="text-xl md:text-2xl lg:text-3xl text-emerald-500" />
                  <span className="text-xs md:text-sm font-semibold bg-emerald-500/20 text-emerald-700 px-2 py-1 md:px-3 md:py-1 rounded-full">
                    OFERTAS ESPECIALES
                  </span>
                </div>

                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Grandes <br className="hidden sm:block" />
                  <span className="bg-linear-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                    Beneficios
                  </span>
                </h2>

                <div className="space-y-3 max-w-md mx-auto lg:mx-0">
                  {[
                    {
                      icon: "✓",
                      title: "Mínimo 50 piezas",
                      desc: "Precios especiales por volumen",
                    },
                    {
                      icon: "🎨",
                      title: "Diseño Incluido",
                      desc: "Asesoría gratuita en personalización",
                    },
                    {
                      icon: "🚚",
                      title: "Envío Rápido",
                      desc: "Recibe tus productos sin demoras",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-3 md:p-4 bg-white/80 rounded-xl backdrop-blur-sm border border-emerald-200 hover:bg-white/90 transition-colors"
                      variants={slideUp}
                    >
                      <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-emerald-600 font-bold text-sm md:text-base">
                          {item.icon}
                        </span>
                      </div>
                      <div className="text-left flex-1">
                        <h4 className="font-bold text-gray-800 text-sm md:text-base">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-xs md:text-sm">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <button
                  className="bg-linear-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold transition-all duration-300 shadow-lg text-sm md:text-base mt-4"
                  onClick={() =>
                    window.open(
                      "https://wa.me/5212281255258?text=Hola! Quiero cotizar productos personalizados.",
                      "_blank"
                    )
                  }
                >
                  Solicitar Cotización
                </button>
              </motion.div>

              <motion.div
                className="lg:flex-1 flex justify-center lg:justify-end"
                variants={fadeIn}
                initial="initial"
                animate="animate"
              >
                <div className="relative">
                  <div className="w-44 h-44 md:w-52 md:h-52 lg:w-72 lg:h-72 xl:w-80 xl:h-80 bg-linear-to-br from-emerald-400/30 to-teal-500/30 rounded-2xl md:rounded-3xl flex flex-col items-center justify-center backdrop-blur-sm border border-emerald-400/30 shadow-xl md:shadow-2xl p-6 md:p-8">
                    <div className="text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4">
                      💼
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-emerald-700">
                        15% OFF
                      </div>
                      <div className="text-sm md:text-base lg:text-lg text-emerald-600 font-semibold">
                        En pedidos mayores
                      </div>
                      <div className="text-xs md:text-sm text-emerald-500">
                        a $5,000 MXN
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 5 - Calidad y Servicio */}
        <SwiperSlide>
          <div className="w-full h-full relative bg-linear-to-br from-slate-900 via-gray-800 to-slate-900 overflow-hidden">
            <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-center px-4 md:px-8 lg:px-16 py-6">
              <motion.div
                className="text-white space-y-4 lg:space-y-6 text-center lg:text-left mb-6 lg:mb-0 lg:flex-1"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                <div className="flex items-center justify-center lg:justify-start gap-2 md:gap-3">
                  <IoDiamond className="text-2xl md:text-3xl lg:text-4xl text-cyan-400" />
                  <span className="text-xs md:text-sm font-semibold bg-cyan-500/30 px-3 py-1 md:px-4 md:py-2 rounded-full border border-cyan-400/50">
                    CALIDAD PREMIUM
                  </span>
                </div>

                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Excelencia en <br className="hidden sm:block" />
                  <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Cada Detalle
                  </span>
                </h2>

                <p className="text-sm md:text-lg lg:text-xl text-gray-300 max-w-md mx-auto lg:mx-0">
                  Materiales de primera calidad y procesos artesanales que
                  garantizan durabilidad y satisfacción.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md lg:max-w-none">
                  {[
                    {
                      icon: IoStar,
                      text: "Materiales Duraderos",
                      color: "yellow",
                    },
                    {
                      icon: FaShippingFast,
                      text: "Entrega Puntual",
                      color: "green",
                    },
                    {
                      icon: RiCustomerService2Fill,
                      text: "Soporte Personalizado",
                      color: "blue",
                    },
                    {
                      icon: FaRocket,
                      text: "Procesos Eficientes",
                      color: "purple",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors"
                      variants={scaleIn}
                    >
                      <item.icon
                        className={`text-${item.color}-400 text-xl md:text-2xl`}
                      />
                      <span className="text-white text-sm md:text-base">
                        {item.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="lg:flex-1 flex justify-center lg:justify-end"
                variants={fadeIn}
                initial="initial"
                animate="animate"
              >
                <div className="relative">
                  <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-linear-to-br from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-cyan-400/30">
                    <IoStar className="text-4xl md:text-6xl lg:text-8xl text-yellow-400" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Navegación personalizada */}
      <div className="swiper-button-prev hidden! md:flex! after:text-white! after:text-lg! md:after:text-xl!"></div>
      <div className="swiper-button-next hidden! md:flex! after:text-white! after:text-lg! md:after:text-xl!"></div>
    </div>
  );
};

export default function Categories() {
  const router = useRouter();
  const { categories, getProductsCountByCategory } = useProductStore();
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div
      className="min-h-screen font-sans w-full relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%, #f8fafc 100%)",
      }}
    >
      {/* Patrón geométrico sutil */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(30deg, #cbd5e1 12%, transparent 12.5%, transparent 87%, #cbd5e1 87.5%, #cbd5e1),
            linear-gradient(150deg, #cbd5e1 12%, transparent 12.5%, transparent 87%, #cbd5e1 87.5%, #cbd5e1),
            linear-gradient(30deg, #cbd5e1 12%, transparent 12.5%, transparent 87%, #cbd5e1 87.5%, #cbd5e1),
            linear-gradient(150deg, #cbd5e1 12%, transparent 12.5%, transparent 87%, #cbd5e1 87.5%, #cbd5e1)
          `,
          backgroundSize: "70px 122px",
          backgroundPosition: "0 0, 0 0, 35px 61px, 35px 61px",
        }}
      ></div>

      <div className="relative bg-linear-to-r from-amber-500 to-orange-500 shadow-lg">
        <Alert
          description={
            <div className="flex items-center gap-2 text-amber-900">
              <span>
                Descubre los productos más recientes para tu negocio o evento.
              </span>
            </div>
          }
          isVisible={isVisible}
          title={
            <div className="flex items-center gap-2 text-amber-900">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                🔥
              </motion.div>
              <span className="font-bold">¡Nuevo catálogo disponible!</span>
            </div>
          }
          variant="solid"
          onClose={() => setIsVisible(false)}
          className="max-w-6xl mx-auto bg-transparent border-none shadow-none"
          icon={
            <motion.div
              animate={{
                rotate: [0, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <MdOutlineSell size={28} className="text-amber-900" />
            </motion.div>
          }
        />

        {/* Efecto decorativo */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-white/10 rounded-full -translate-x-10 -translate-y-10"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-white/10 rounded-full translate-x-8 translate-y-8"></div>

        {/* Patrón sutil */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-2 right-10 text-2xl">🎯</div>
          <div className="absolute bottom-2 left-10 text-xl">✨</div>
        </div>
      </div>

      <Carousel />

      {/* Contenido */}
      <div
        className="relative z-10 max-w-3xl mx-auto px-4 py-8"
        id="grid-categories"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        ></motion.div>

        {/* Breadcrumbs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-5"
        >
          <Breadcrumbs
            classNames={{
              list: "bg-white/70 backdrop-blur-sm rounded-lg px-4 py-2 shadow-sm border border-white/50",
            }}
          >
            <BreadcrumbItem
              onPress={() => router.push("/")}
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              Inicio
            </BreadcrumbItem>
            <BreadcrumbItem className="text-gray-800 font-medium">
              Categorías
            </BreadcrumbItem>
          </Breadcrumbs>
        </motion.div>

        {/* 🔹 Llamado a la acción final */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center p-8 mb-5"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            ¿Listo para personalizar tus productos?
          </h3>
          <p className="text-gray-600 mb-6">
            Escríbenos por WhatsApp y recibe una cotización rápida y
            personalizada.
          </p>
          <button
            onClick={() =>
              window.open(
                "https://wa.me/5212281255258?text=Hola! Quiero cotizar productos personalizados.",
                "_blank"
              )
            }
            className="px-6 py-3 rounded-xl text-white font-semibold bg-linear-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 transition-all shadow-lg"
          >
            Cotizar por WhatsApp
          </button>
        </motion.div>

        {/* Categories Grid */}
        <div className="w-full mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
            {categories.map((category, index) => {
              const productCount = getProductsCountByCategory(category.url);

              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  className="w-full"
                >
                  <Card
                    isPressable
                    onPress={() => router.push(`/categories/${category.url}`)}
                    className="group rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden w-full h-full border border-gray-100 bg-white/90 backdrop-blur-sm"
                  >
                    <CardBody className="p-0 w-full">
                      <div className="relative overflow-hidden w-full">
                        {/* Imagen de la categoría */}
                        <motion.img
                          src={category.img}
                          alt={category.name}
                          className="w-full h-56 object-cover"
                          whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.4, ease: "easeOut" },
                          }}
                        />

                        {/* Badge de cantidad de productos */}
                        <div className="absolute top-4 left-4">
                          <Chip
                            variant="flat"
                            className="bg-black/50 text-white backdrop-blur-sm"
                            startContent={<AiFillProduct className="text-sm" />}
                          >
                            {productCount}{" "}
                            {productCount === 1 ? "producto" : "productos"}
                          </Chip>
                        </div>

                        {/* Título principal (siempre visible) */}
                        <div className="absolute bottom-0 left-0 right-0 p4">
                          <div
                            className="p-1 transform transition-all duration-300 group-hover:bg-white/10 group-hover:backdrop-blur-sm"
                            style={{
                              background:
                                "linear-gradient(135deg, rgba(59, 130, 246, 0.95) 0%, rgba(139, 92, 246, 0.9) 100%)",
                              backdropFilter: "blur(0.5px)",
                            }}
                          >
                            <h3 className="text-white text-lg font-semibold text-center drop-shadow-lg mb-1">
                              {category.name}
                            </h3>
                          </div>
                        </div>

                        {/* Indicador de hover */}
                        <motion.div
                          className="absolute top-4 right-4 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300"
                          style={{
                            width: "40px",
                            height: "40px",
                            background: "rgba(255, 255, 255, 0.9)",
                            backdropFilter: "blur(8px)",
                          }}
                          whileHover={{ rotate: 90 }}
                        >
                          <div
                            className="rounded-full"
                            style={{
                              width: "8px",
                              height: "8px",
                              background: "#3b82f6",
                            }}
                          />
                        </motion.div>
                      </div>

                      {/* Información adicional debajo de la imagen */}
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                            Categoría
                          </span>
                          <Badge variant="flat" color="primary" size="sm">
                            ID: {category.id}
                          </Badge>
                        </div>

                        <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                          {category.description}
                        </p>

                        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                          <span className="text-xs text-gray-500">
                            {productCount} productos
                          </span>
                          <div className="flex items-center text-blue-600 text-xs font-medium">
                            Explorar
                            <FiArrowRight size={12} className="ml-1" />
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 text-center"
        >
          {[
            {
              icon: <FiPackage size={28} />,
              title: "Entrega rápida",
              desc: "Recibe tus pedidos sin demoras",
            },
            {
              icon: <FiTag size={28} />,
              title: "Precios de mayoreo",
              desc: "Descuentos por volumen",
            },
            {
              icon: <AiFillProduct size={28} />,
              title: "Más de 90 productos",
              desc: "Catálogo en constante crecimiento",
            },
            {
              icon: <FiGrid size={28} />,
              title: "Personalización",
              desc: "Tu logo, en cualquier producto",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl shadow-md p-5"
            >
              <div className="flex flex-col items-center gap-2 text-blue-600 mb-2">
                {item.icon}
              </div>
              <h4 className="font-semibold text-gray-800">{item.title}</h4>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* 🔸 Banner Promocional Mejorado y Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10 bg-linear-to-r from-blue-600 via-sky-500 to-cyan-400 text-white 
             p-6 rounded-2xl shadow-lg flex flex-col md:flex-row items-center 
             justify-between gap-4 md:gap-6 text-center md:text-left"
        >
          {/* Texto e ícono */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4">
            <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
              <FiTag size={28} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold leading-tight">
                🎁 ¿Necesitas ayuda para elegir?
              </h3>
              <p className="text-sm md:text-base text-blue-50 mt-1">
                Nuestro equipo puede orientarte según tu presupuesto.
              </p>
            </div>
          </div>

          {/* Botón */}
          <button
            onClick={() =>
              window.open(
                "https://wa.me/5212281255258?text=Hola! Quieriera hablar con un asesor.",
                "_blank"
              )
            }
            className="bg-white text-blue-700 font-semibold px-6 py-2.5 rounded-xl 
               hover:bg-blue-50 transition-all duration-300 shadow-md 
               w-full md:w-auto"
          >
            Hablar con un asesor
          </button>
        </motion.div>

        <footer className="text-center text-gray-500 text-sm py-6">
          © {new Date().getFullYear()} Unaidea+ · Diversidad Publicitaria
        </footer>
      </div>

      <WhatsAppButton />
    </div>
  );
}
