import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCube } from "swiper/modules";
import {
  FaBusinessTime,
  FaPen,
  FaGift,
  FaRocket,
  FaShippingFast,
} from "react-icons/fa";
import { IoShirt, IoBook, IoBag, IoStar, IoDiamond } from "react-icons/io5";
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
    <motion.div
      className="w-full h-screen lg:h-[650px] flex items-center justify-center relative overflow-hidden"
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={true}
        effect="cube"
        loop={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.7,
        }}
        autoplay={{
          delay: 10000,
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
        modules={[
          Navigation,
          Pagination,
          //Autoplay,
          EffectCube,
        ]}
        className="w-full h-full mb-12"
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

        {/* Slide 6 - Bolsa Ecologica */}
        <SwiperSlide>
          <div className="w-full h-full relative bg-[url('/img/sliders/A2478.jpg')] bg-cover bg-center overflow-hidden">
            {/* Overlay con gradiente para mejor legibilidad */}
            <div className="absolute inset-0 bg-linear-to-r from-zinc-900/90 via-zinc-800/50 to-transparent"></div>

            {/* Elementos decorativos animados */}
            <motion.div
              className="absolute inset-0 opacity-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 1 }}
            >
              {/* Círculos decorativos flotantes */}
              <motion.div
                className="absolute top-1/4 left-1/4 w-16 h-16 md:w-24 md:h-24 bg-white rounded-full"
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-1/3 right-1/3 w-12 h-12 md:w-20 md:h-20 bg-yellow-400 rounded-full"
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              {/* Hojas decorativas */}
              <motion.div
                className="absolute top-10 right-10 w-8 h-8 md:w-12 md:h-12 text-green-300"
                animate={{
                  rotate: [0, 45, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1.59-4.49C9.52,15,17,8,17,8z M21.5,6c-1.5,0-3,1-4,2c-1-1-2.5-2-4-2C10.5,6,9,7.5,9,9.5c0,2,2,4,4,6c2-2,4-4,4-6C17,7.5,15.5,6,21.5,6z" />
                </svg>
              </motion.div>
            </motion.div>

            {/* Contenido principal */}
            <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 lg:px-16 py-8">
              {/* Información del producto */}
              <div className="text-white space-y-4 lg:space-y-6 max-w-lg flex flex-col justify-center h-full">
                {/* Badge ecológico */}
                <div className="flex items-center gap-2 md:gap-3">
                  <div>
                    <svg
                      className="w-6 h-6 md:w-8 md:h-8 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-xs md:text-sm font-bold bg-green-500/40 px-3 py-1 md:px-4 md:py-2 rounded-full border border-green-400/50">
                    PRODUCTO ECOLÓGICO
                  </span>
                </div>

                {/* Nombre del producto */}
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Bolsa Ecológica <br />
                  <span className="bg-linear-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                    STAR (Chica)
                  </span>
                </h2>

                {/* Descripción */}
                <p className="text-sm md:text-lg lg:text-xl text-gray-200 max-w-md">
                  Bolsa ecológica termosellada con asas y diseño brillante.
                  <span className="block mt-2 font-semibold text-yellow-300">
                    Peso máximo de carga: 10 kgs
                  </span>
                </p>

                {/* Especificaciones */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="font-semibold text-green-300">
                        Material:
                      </span>
                    </div>
                    <p className="text-gray-200 ml-4">Non Woven 130 GSM</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="font-semibold text-blue-300">
                        Medidas:
                      </span>
                    </div>
                    <div className="text-gray-200 ml-4 space-y-1">
                      <p>Alto: 23 cm</p>
                      <p>Ancho: 35 cm</p>
                      <p>Profundidad: 10 cm</p>
                    </div>
                  </div>
                </div>

                {/* Botón de acción */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    className="bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-3 rounded-full font-bold shadow-lg transition-all duration-300 transform hover:scale-105"
                    onClick={() =>
                      window.open(
                        "https://wa.me/5212281255258?text=Hola! Me interesa la Bolsa Ecológica STAR.",
                        "_blank"
                      )
                    }
                  >
                    ¡Cotizar Ahora!
                  </button>
                  <button
                    className="border-2 border-green-400 text-green-400 hover:bg-green-400/20 px-6 py-3 rounded-full font-semibold transition-all duration-300"
                    onClick={() =>
                      window.open(
                        "https://wa.me/5212281255258?text=Hola! Quiero más información sobre la Bolsa Ecológica STAR.",
                        "_blank"
                      )
                    }
                  >
                    Más Información
                  </button>
                </div>
              </div>

              {/* Elemento decorativo lateral */}
              <motion.div
                className="hidden lg:flex items-center justify-center"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <div className="relative">
                  {/* Círculo decorativo principal */}
                  <div className="w-64 h-64 bg-linear-to-br from-green-400/30 to-yellow-400/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-green-400/40 shadow-2xl">
                    {/* Icono de bolsa ecológica */}
                    <div className="text-green-300">
                      <svg
                        className="w-24 h-24 md:w-32 md:h-32"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 6h-2c0-2.8-2.2-5-5-5S7 3.2 7 6H5C3.3 6 2 7.3 2 9v12c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V9c0-1.7-1.3-3-3-3zm-7-3c1.7 0 3 1.3 3 3h-6c0-1.7 1.3-3 3-3zm7 18H5V9h2v1c0 .6.4 1 1 1s1-.4 1-1V9h6v1c0 .6.4 1 1 1s1-.4 1-1V9h2v12z" />
                      </svg>
                    </div>
                  </div>

                  {/* Badge flotante */}
                  <motion.div
                    className="absolute -top-4 -right-4 bg-yellow-400 text-green-900 px-4 py-2 rounded-full font-bold rotate-12 shadow-lg"
                    animate={{
                      rotate: [12, -8, 12],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <span className="text-sm">10 KGS</span>
                    <div className="text-xs">CARGA MÁX</div>
                  </motion.div>

                  {/* Badge adicional */}
                  <motion.div
                    className="absolute -bottom-2 -left-4 bg-green-500 text-white px-3 py-1 rounded-full font-bold text-sm shadow-lg"
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    🌱 ECO-FRIENDLY
                  </motion.div>
                </div>
              </motion.div>
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

        {/* Slide - Set Ecológico BioSet (Mobile Optimized) */}
        <SwiperSlide>
          <div className="w-full h-full relative bg-linear-to-br from-amber-400 via-orange-300 to-rose-400 overflow-hidden">
            {/* Elementos decorativos de fondo más sutiles en móvil */}
            <motion.div
              className="absolute inset-0 opacity-15 md:opacity-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="absolute top-10 left-4 md:left-10 w-12 h-12 md:w-20 md:h-20 bg-white rounded-lg rotate-45"
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
                className="absolute bottom-10 right-4 md:right-10 w-10 h-10 md:w-16 md:h-16 bg-green-200 rounded-full"
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

            <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 md:px-8 lg:px-16 py-4 md:py-8">
              {/* Imagen del producto - Más compacta en móvil */}
              <div className="flex justify-center mb-4 lg:mb-0 lg:flex-1">
                <div className="relative">
                  <motion.div
                    className="w-48 h-48 md:w-52 md:h-52 lg:w-80 lg:h-80 bg-white/90 shadow-xl border-2 border-white rounded-full"
                    animate={{
                      y: [0, -8, 0],
                      rotate: [0, 2, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="w-full h-full bg-linear-to-br from-amber-100 to-rose-100 flex items-center justify-center overflow-hidden rounded-full">
                      {/* Reemplaza el SVG con la imagen real */}
                      <motion.img
                        src="/img/sliders/set-027-be.jpg"
                        alt="Set Ecológico BioSet"
                        className="w-full h-full object-cover"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      />

                      {/* Texto superpuesto (opcional) */}
                      <motion.span
                        className="absolute bottom-2 bg-white/90 px-2 py-1 rounded-full text-amber-700 font-bold text-xs md:text-sm"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        3 PIEZAS
                      </motion.span>
                    </div>
                  </motion.div>

                  {/* Badges más pequeños en móvil */}
                  <motion.div
                    className="absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold rotate-12 shadow-lg"
                    animate={{
                      rotate: [12, -8, 12],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                  >
                    🌱 ECO
                  </motion.div>
                </div>
              </div>

              {/* Contenido optimizado para móvil */}
              <div className="flex flex-col text-gray-800 space-y-3 md:space-y-4 lg:space-y-6 max-w-lg text-center lg:text-left">
                {/* Badge compacto */}
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <span className="text-xs font-bold bg-white/70 px-3 py-1 rounded-full border border-white">
                    SET ECOLÓGICO
                  </span>
                </div>

                {/* Título principal */}
                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight">
                  BioSet
                  <br />
                  <span className="bg-linear-to-r from-amber-700 to-rose-700 bg-clip-text text-transparent text-lg md:text-2xl lg:text-3xl">
                    Ecológico
                  </span>
                </h2>

                {/* Descripción corta para móvil */}
                <div className="text-gray-700">
                  <p className="text-sm md:text-base leading-relaxed">
                    Set ecológico premium con libreta, bolsa de algodón y
                    bolígrafo.
                  </p>

                  {/* Información clave en badges */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-3">
                    <span className="bg-white/60 px-2 py-1 rounded-full text-xs font-semibold">
                      📓 Libreta 80 hojas
                    </span>
                    <span className="bg-white/60 px-2 py-1 rounded-full text-xs font-semibold">
                      🛍️ Bolsa algodón
                    </span>
                    <span className="bg-white/60 px-2 py-1 rounded-full text-xs font-semibold">
                      ✏️ Bolígrafo cartón
                    </span>
                  </div>
                </div>

                {/* Especificaciones solo las más importantes en móvil */}
                <div className="grid grid-cols-2 gap-3 text-xs md:text-sm">
                  <div className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-1 mb-1">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                      <span className="font-bold text-amber-700">Material</span>
                    </div>
                    <p className="text-gray-700">Cartón / Algodón</p>
                  </div>

                  <div className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-1 mb-1">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                      <span className="font-bold text-green-700">Medidas</span>
                    </div>
                    <p className="text-gray-700">29 × 22 × 5 cm</p>
                  </div>

                  <div className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-1 mb-1">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span className="font-bold text-blue-700">Color</span>
                    </div>
                    <p className="text-gray-700">Beige Natural</p>
                  </div>

                  <div className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-1 mb-1">
                      <div className="w-1.5 h-1.5 bg-rose-600 rounded-full"></div>
                      <span className="font-bold text-rose-700">Origen</span>
                    </div>
                    <p className="text-gray-700">Hecho en México</p>
                  </div>
                </div>

                {/* Botones optimizados para móvil */}
                <div className="flex flex-col gap-2 pt-2 md:pt-4">
                  <button
                    className="bg-linear-to-r from-amber-600 to-rose-600 hover:from-amber-700 hover:to-rose-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-bold shadow-lg text-sm md:text-base"
                    onClick={() =>
                      window.open(
                        "https://wa.me/5212281255258?text=Hola! Me interesa el Set Ecológico BioSet.",
                        "_blank"
                      )
                    }
                  >
                    Cotizar Set Completo
                  </button>
                  <button
                    className="hidden md:block border border-amber-600 text-amber-700 hover:bg-amber-600/20 px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base"
                    onClick={() =>
                      window.open(
                        "https://wa.me/5212281255258?text=Hola! Quiero más información sobre el BioSet.",
                        "_blank"
                      )
                    }
                  >
                    Más Información
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

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

        {/* Slide - Calendarios de Varilla */}
        <SwiperSlide>
          <div className="w-full h-full relative bg-linear-to-br from-blue-500 via-purple-500 to-indigo-600 overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <motion.div
              className="absolute inset-0 opacity-15 md:opacity-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              transition={{ duration: 1 }}
            >
              {/* Formas de calendario decorativas */}
              <motion.div
                className="absolute top-8 left-8 w-16 h-20 md:w-20 md:h-24 bg-white/30 rounded-lg"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-8 right-8 w-14 h-18 md:w-18 md:h-22 bg-yellow-300/40 rounded-lg"
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              {/* Números flotantes decorativos */}
              <motion.div
                className="absolute top-1/4 right-1/4 text-white/20 text-2xl md:text-4xl font-bold"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
              >
                31
              </motion.div>
              <motion.div
                className="absolute bottom-1/3 left-1/4 text-white/20 text-xl md:text-3xl font-bold"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.3, 0.1, 0.3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
              >
                12
              </motion.div>
            </motion.div>

            <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-center lg:justify-around px-4 md:px-8 lg:px-16 py-4 md:py-8 h-full">
              {/* Contenido informativo - Lado izquierdo en desktop */}
              <div className="text-white space-y-4 md:space-y-6 max-w-lg text-center lg:text-left order-2 lg:order-1">
                {/* Badge destacado */}
                <motion.div
                  className="flex items-center justify-center lg:justify-start gap-2"
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div>
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zM5 7V5h14v2H5zm2 4h10v2H7zm0 4h7v2H7z" />
                    </svg>
                  </div>
                  <span className="text-xs md:text-sm font-bold bg-white/20 px-3 py-1 rounded-full border border-white/30">
                    CALENDARIOS 2026
                  </span>
                </motion.div>

                {/* Título principal */}
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Calendarios{" "}
                  <span className="bg-linear-to-r from-yellow-300 to-amber-300 bg-clip-text text-transparent">
                    de Varilla
                  </span>
                </h2>

                {/* Descripción */}
                <p className="hidden lg:block text-sm md:text-lg lg:text-xl text-blue-100 leading-relaxed">
                  Calendarios prácticos y elegantes con santoral bimestral.
                  Perfectos para oficinas, hogares y espacios comerciales.
                </p>

                {/* Características principales */}
                <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-4 text-sm">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                      <span className="font-bold text-yellow-300">
                        Incluye:
                      </span>
                    </div>
                    <ul className="text-blue-100 space-y-2 text-left">
                      <li className="flex items-center gap-2">
                        <span className="text-yellow-300">•</span>
                        Santoral del día
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-yellow-300">•</span>
                        Número de semana
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-yellow-300">•</span>
                        Mes anterior/siguiente
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                      <span className="font-bold text-green-300">
                        Especificaciones:
                      </span>
                    </div>
                    <div className="text-blue-100 space-y-2 text-left">
                      <div>
                        <span className="font-semibold">Área publicidad:</span>
                        <p>37.8 × 28 cm</p>
                      </div>
                      <div>
                        <span className="font-semibold">Tamaños:</span>
                        <p>Chico, Mediano, Grande</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Beneficios en badges */}
                <div className="flex-wrap justify-center lg:justify-start gap-2 pt-2 hidden md:flex">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold border border-white/30">
                    📅 Bimestral
                  </span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold border border-white/30">
                    🎨 Diseño Atractivo
                  </span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold border border-white/30">
                    ⭐ Alta Visibilidad
                  </span>
                </div>

                {/* Botones de acción */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2 md:pt-2">
                  <button
                    className="bg-linear-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-blue-900 px-6 py-3 rounded-full font-bold shadow-lg transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
                    onClick={() =>
                      window.open(
                        "https://wa.me/5212281255258?text=Hola! Quiero cotizar calendarios de varilla.",
                        "_blank"
                      )
                    }
                  >
                    Cotizar Calendarios
                  </button>
                  <button
                    className="border-2 border-yellow-300 text-yellow-300 hover:bg-yellow-300/20 px-6 py-3 rounded-full font-semibold transition-all duration-300 text-sm md:text-base"
                    onClick={() =>
                      window.open(
                        "https://wa.me/5212281255258?text=Hola! Quiero ver modelos de calendarios de varilla.",
                        "_blank"
                      )
                    }
                  >
                    Ver Modelos
                  </button>
                </div>
              </div>

              {/* Imagen del calendario - Lado derecho en desktop */}
              <div className="flex justify-center lg:justify-end mb-6 lg:mb-0 order-1 lg:order-2">
                <div className="relative">
                  {/* Marco decorativo para la imagen */}
                  <motion.div
                    className="relative bg-white/20 rounded-2xl p-4 md:p-6 backdrop-blur-sm border border-white/30 shadow-2xl"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {/* Imagen PNG del calendario */}
                    <motion.img
                      src="/img/sliders/calendars.png"
                      alt="Calendario de Varilla con Santoral"
                      className="w-72 h-56 md:w-64 md:h-56 lg:w-80 lg:h-96 object-contain drop-shadow-2xl"
                      animate={{
                        scale: [1, 1.02, 1],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Elementos decorativos alrededor de la imagen */}
                    <motion.div
                      className="absolute -top-3 -right-3 bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                      animate={{
                        rotate: [0, 10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                      }}
                    >
                      NUEVO
                    </motion.div>

                    <motion.div
                      className="absolute -bottom-2 -left-2 bg-green-400 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg"
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                    >
                      📅 2026
                    </motion.div>
                  </motion.div>

                  {/* Efecto de resplandor */}
                  <div className="absolute inset-0 bg-linear-to-r from-yellow-400/20 to-blue-400/20 rounded-2xl blur-xl -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Navegación personalizada para mejor responsividad */}
      <div className="swiper-button-prev hidden! md:flex! after:text-white! after:text-lg! md:after:text-xl!"></div>
      <div className="swiper-button-next hidden! md:flex! after:text-white! after:text-lg! md:after:text-xl!"></div>
    </motion.div>
  );
}
