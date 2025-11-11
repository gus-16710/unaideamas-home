import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCube } from "swiper/modules";
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
  IoBag,
  IoStar,
  IoDiamond,
} from "react-icons/io5";
import {
  RiTeamFill,
  RiCalendarEventFill,
  RiCustomerService2Fill,
} from "react-icons/ri";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";


export default function Carousel() {
  // Animaciones reutilizables
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <div className="w-full h-[calc(100vh-100px)] lg:h-[650px] flex items-center justify-center relative overflow-hidden">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={true}
        effect="cube"
        loop={true}
        cubeEffect={{
          shadow: false,
        }}
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
        modules={[Navigation, Pagination, Autoplay, EffectCube]}
        className="w-full h-full"
      >
        {/* Slide 1 - Personalización Empresarial */}
        <SwiperSlide>
          <div className="w-full h-full relative bg-linear-to-br from-blue-900 via-indigo-900 to-blue-800 overflow-hidden">
            {/* Elementos de fondo animados */}
            <motion.div
              className="absolute inset-0 opacity-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="absolute top-10 left-4 md:left-10 w-16 h-16 md:w-20 md:h-20 bg-white rounded-lg rotate-45"
                animate={{
                  rotate: [45, 90, 45],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-10 right-4 md:right-10 w-20 h-20 md:w-24 md:h-24 bg-white rounded-full"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-center lg:justify-around px-4 md:px-8 lg:px-16 py-6">
              <div className="text-white space-y-4 lg:space-y-6 text-center lg:text-left mb-6 lg:mb-0 ">
                <div className="flex items-center justify-center lg:justify-start gap-2 md:gap-3">
                  <div>
                    <FaBusinessTime className="text-2xl md:text-3xl lg:text-4xl text-cyan-400" />
                  </div>
                  <span className="text-xs md:text-sm font-semibold bg-cyan-500/30 px-3 py-1 md:px-4 md:py-2 rounded-full border border-cyan-400/50">
                    SOLUCIONES CORPORATIVAS
                  </span>
                </div>

                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Marca Tu <br className="hidden" />
                  <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Empresa
                  </span>
                </h2>

                <p className="text-sm md:text-lg lg:text-xl text-gray-300 max-w-md mx-auto lg:mx-0">
                  Productos promocionales personalizados que fortalecen tu
                  identidad corporativa y fidelizan clientes.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <button
                    className="bg-linear-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full font-semibold"
                    onClick={() =>
                      window.open(
                        "https://wa.me/5212281255258?text=Hola! Quiero cotizar productos personalizados.",
                        "_blank"
                      )
                    }
                  >
                    Cotizar Proyecto
                  </button>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end mt-10">
                <div className="relative">
                  <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-linear-to-br from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-cyan-400/30">
                    <div>
                      <RiTeamFill className="text-7xl md:text-6xl lg:text-8xl text-cyan-400" />
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-yellow-400 text-blue-900 px-2 py-1 md:px-4 md:py-2 rounded-full font-bold rotate-12 shadow-lg text-xs md:text-sm">
                    +500 EMPRESAS
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 - Productos Destacados */}
        <SwiperSlide>
          <div className="w-full h-full relative bg-linear-to-br from-purple-100 via-pink-100 to-purple-200 overflow-hidden">
            {/* Patrón de productos animado */}
            <motion.div
              className="absolute inset-0 opacity-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="absolute top-4 left-4 md:top-10 md:left-10"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <IoShirt className="text-7xl md:text-5xl lg:text-6xl text-purple-800" />
              </motion.div>
              <motion.div
                className="absolute bottom-8 right-8 md:bottom-20 md:right-32"
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <IoBook className="text-6xl md:text-4xl lg:text-5xl text-pink-500" />
              </motion.div>
            </motion.div>

            <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-center px-4 md:px-8 lg:px-16 py-6">
              <div className="lg:flex-1 mb-6 lg:mb-0">
                <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-6 max-w-sm mx-auto lg:max-w-none">
                  {[
                    {
                      icon: IoShirt,
                      color: "purple",
                      colorClass: "text-purple-500 border-purple-200",
                      title: "Textiles",
                      desc: "Playeras, gorras",
                    },
                    {
                      icon: FaPen,
                      color: "pink",
                      colorClass: "text-pink-500 border-pink-200",
                      title: "Escritura",
                      desc: "Lápices, plumas",
                    },
                    {
                      icon: IoBook,
                      color: "yellow",
                      colorClass: "text-yellow-500 border-yellow-200",
                      title: "Papelería",
                      desc: "Libretas, agendas",
                    },
                    {
                      icon: IoBag,
                      color: "green",
                      colorClass: "text-green-500 border-green-200",
                      title: "Bolsas",
                      desc: "Ecológicas, promocionales",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`bg-white rounded-xl md:rounded-2xl p-3 md:p-4 lg:p-6 shadow-lg md:shadow-xl border ${item.colorClass} transition-all duration-300 hover:shadow-xl`}
                    >
                      <div>
                        <item.icon
                          className={`text-2xl md:text-3xl lg:text-4xl ${
                            item.colorClass.split(" ")[0]
                          } mb-2 md:mb-3`}
                        />
                      </div>
                      <h3 className="font-bold text-gray-800 text-sm md:text-base">
                        {item.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:flex-1 text-gray-800 space-y-4 lg:space-y-6 text-center lg:text-left lg:pl-8 xl:pl-12">
                <div className="flex items-center justify-center lg:justify-start gap-2 md:gap-3">
                  <motion.div
                    animate={{
                      rotate: [0, 10, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <FaGift className="text-xl md:text-2xl lg:text-3xl text-purple-500" />
                  </motion.div>
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
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 - Eventos Especiales */}
        <SwiperSlide>
          <div className="w-full h-full relative bg-linear-to-br from-orange-100 via-amber-100 to-yellow-100 overflow-hidden">
            {/* Elementos de celebración animados */}
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-yellow-400/70 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 bg-orange-400/20 rounded-full"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />

            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4 md:px-8 lg:px-16 py-6">
              <div className="mb-4 md:mb-6 lg:mb-8">
                <div>
                  <RiCalendarEventFill className="text-4xl md:text-5xl lg:text-6xl text-orange-500 mb-2 md:mb-3 lg:mb-4 mx-auto" />
                </div>
                <motion.div
                  className="bg-linear-to-r from-orange-500 to-amber-500 text-white px-4 py-1 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-bold inline-block"
                  variants={fadeInUp}
                >
                  EVENTOS Y CELEBRACIONES
                </motion.div>
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-4 md:mb-6 ">
                Personaliza Tus <br className="hidden" />
                <span className="bg-linear-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                  Eventos
                </span>
              </h2>

              <p className="text-sm lg:text-lg xl:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl">
                Bodas, aniversarios, conferencias - creamos productos únicos
                para cada ocasión especial
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8 w-full max-w-md sm:max-w-2xl">
                {[
                  {
                    emoji: "🎉",
                    title: "Bodas",
                    desc: "Recuerdos especiales",
                    color: "orange",
                    colorClass: "border-orange-200",
                  },
                  {
                    emoji: "🏢",
                    title: "Corporativos",
                    desc: "Eventos empresariales",
                    color: "amber",
                    colorClass: "border-amber-200",
                  },
                  {
                    emoji: "🎓",
                    title: "Graduaciones",
                    desc: "Logros memorables",
                    color: "yellow",
                    colorClass: "border-yellow-200",
                  },
                  {
                    emoji: "🏆",
                    title: "Deportivos",
                    desc: "Torneos y competencias",
                    color: "green",
                    colorClass: "border-green-200",
                  },
                ].map((item, index) => (
                  <div key={index}>
                    <div
                      className={`bg-white rounded-xl md:rounded-2xl p-4 md:p-5 shadow-lg border ${item.colorClass} hover:shadow-xl transition-shadow`}
                    >
                      <motion.div
                        className="text-2xl md:text-3xl mb-2"
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 10, 0],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5,
                        }}
                      >
                        {item.emoji}
                      </motion.div>
                      <div className="font-semibold text-gray-800 text-sm md:text-base">
                        {item.title}
                      </div>
                      <div className="text-xs md:text-sm text-gray-600">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 - Beneficios y Ofertas */}
        {/* <SwiperSlide>
          <div className="w-full h-full relative bg-linear-to-br from-emerald-50 via-teal-100 to-green-100 overflow-hidden">            
            <motion.div
              className="absolute top-4 right-4 md:top-8 md:right-8"
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl">🎁</div>
            </motion.div>
            <motion.div
              className="absolute bottom-4 left-4 md:bottom-8 md:left-8"
              animate={{
                y: [0, 10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl">🏷️</div>
            </motion.div>

            <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-around px-4 md:px-8 lg:px-16 py-6">
              <div className="text-gray-800 space-y-4 lg:space-y-6 text-center lg:text-left mb-6 lg:mb-0 ">
                <div className="flex items-center justify-center lg:justify-start gap-2 md:gap-3">
                  <div>
                    <IoCafe className="text-xl md:text-2xl lg:text-3xl text-emerald-500" />
                  </div>
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
                      emoji: "📦",
                    },
                    {
                      icon: "🎨",
                      title: "Diseño Incluido",
                      desc: "Asesoría en personalización",
                      emoji: "✨",
                    },
                    {
                      icon: "🚚",
                      title: "Envío Rápido",
                      desc: "Recibe tus productos sin demoras",
                      emoji: "⚡",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 md:p-4 bg-white/80 rounded-xl backdrop-blur-sm border border-emerald-200"
                    >
                      <motion.div
                        className=" w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-emerald-100 rounded-full flex items-center justify-center shrink-0"
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className="text-emerald-600 font-bold text-sm md:text-base">
                          {item.icon}
                        </span>
                      </motion.div>
                      <div className="text-left flex-1">
                        <h4 className="font-bold text-gray-800 text-sm md:text-base">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-xs md:text-sm">
                          {item.desc}
                        </p>
                      </div>
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 10, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3,
                        }}
                      >
                        <span className="text-lg">{item.emoji}</span>
                      </motion.div>
                    </div>
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
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-44 h-44 md:w-52 md:h-52 lg:w-72 lg:h-72 xl:w-80 xl:h-80 bg-linear-to-br from-emerald-400/30 to-teal-500/30 rounded-2xl md:rounded-3xl flex flex-col items-center justify-center backdrop-blur-sm border border-emerald-400/30 shadow-xl md:shadow-2xl p-6 md:p-8">
                    <div className="hidden lg:block text-4xl md:text-5xl lg:text-8xl mb-3 md:mb-4">
                      <RiDiscountPercentLine className="text-emerald-500"/>
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
              </div>
            </div>
          </div>
        </SwiperSlide> */}

        {/* Slide 5 - Calidad y Servicio */}
        <SwiperSlide>
          <div className="w-full h-full relative bg-linear-to-br from-slate-900 via-gray-800 to-slate-900 overflow-hidden">
            {/* Elementos de calidad animados */}
            <motion.div
              className="absolute inset-0 opacity-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.05 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="absolute top-20 left-20 w-16 h-16 bg-white rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-20 right-20 w-20 h-20 bg-cyan-400 rounded-lg rotate-45"
                animate={{
                  rotate: [45, 90, 45],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />
            </motion.div>

            <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-around px-4 md:px-8 lg:px-16 py-6">
              <div className="text-white space-y-4 lg:space-y-6 text-center lg:text-left mb-6 lg:mb-0 ">
                <div className="flex items-center justify-center lg:justify-start gap-2 md:gap-3">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.7, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <IoDiamond className="text-2xl md:text-3xl lg:text-4xl text-cyan-400" />
                  </motion.div>
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
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20"
                    >
                      <div>
                        <item.icon
                          className={`text-${item.color}-400 text-xl md:text-2xl`}
                        />
                      </div>
                      <span className="text-white text-sm md:text-base">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <motion.div
                className="flex justify-center lg:justify-end"
                variants={fadeInRight}
                initial="initial"
                animate="animate"
              >
                <div className="relative">
                  <motion.div
                    className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-linear-to-br from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-cyan-400/30"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      rotate: {
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      },
                      scale: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [1, 0.8, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <IoStar className="text-4xl md:text-6xl lg:text-8xl text-yellow-400" />
                    </motion.div>
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-4 -left-4 bg-white text-slate-900 px-3 py-2 rounded-full font-bold shadow-lg text-xs md:text-sm"
                    initial={{ scale: 0, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{
                      delay: 0.7,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -5, 0],
                    }}
                  >
                    ⭐ 5/5 Calificación
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Navegación personalizada para mejor responsividad */}
      <div className="swiper-button-prev hidden! md:flex! after:text-white! after:text-lg! md:after:text-xl!"></div>
      <div className="swiper-button-next hidden! md:flex! after:text-white! after:text-lg! md:after:text-xl!"></div>
    </div>
  );
}
