// import { motion } from "framer-motion";

// export default function BannerHorizontalLove() {
//   // Configuración de animación para las estrellas
//   const starAnimation = {
//     initial: { scale: 0, rotate: 0 },
//     animate: {
//       scale: [0, 1, 0.8, 1],
//       rotate: [0, 180, 360],
//       opacity: [0, 1, 0.7, 1],
//     },
//     transition: {
//       duration: 4,
//       repeat: Infinity,
//       ease: "easeInOut" as const,
//     },
//   };

//   const floatingStarAnimation = {
//     animate: {
//       y: [0, -15, 0],
//       x: [0, 10, 0],
//       rotate: [0, 10, 0],
//       scale: [1, 1.1, 1],
//     },
//     transition: {
//       duration: 6,
//       repeat: Infinity,
//       ease: "easeInOut" as const,
//     },
//   };

//   const pulseStarAnimation = {
//     animate: {
//       scale: [1, 1.3, 1],
//       opacity: [0.6, 1, 0.6],
//     },
//     transition: {
//       duration: 3,
//       repeat: Infinity,
//       ease: "easeInOut" as const,
//     },
//   };

//   return (
//     <div
//       className="relative z-10 mb-10 overflow-hidden bg-red-700"      
//     >
//       <div className="flex flex-col items-center justify-center lg:flex-row">
//         {/* Imagen izquierda */}
//         <img
//           src="/img/sliders/banner-004.png"
//           alt=""
//           className="h-52 md:h-64 lg:h-72 object-cover order-2 lg:order-1 hidden lg:block"
//         />

//         {/* Bloque de texto */}
//         <div className="order-1 lg:order-2 flex flex-col items-center justify-center text-center pt-10 lg:py-15">
//           <h1 className="text-4xl md:text-4xl text-pink-100 font-bold">
//             ¡Celebra el amor y la amistad! 💝
//           </h1>
//           <p className="text-lg text-pink-100 font-bold mt-4 max-w-xl">
//             Sorprende con regalos únicos y personalizados este mes del corazón
//             ❤️.
//           </p>
//           <button
//             className="mt-6 bg-pink-500 px-8 py-3 text-white rounded-xl shadow-md font-medium hover:bg-pink-600 transition"
//             onClick={() => {
//               const element = document.getElementById("grid-categories");
//               element?.scrollIntoView({ behavior: "smooth" });
//             }}
//           >
//             Explorar regalos
//           </button>
//         </div>

//         {/* Imagen derecha */}
//         <img
//           src="/img/sliders/banner-003.png"
//           alt=""
//           className="h-52 md:h-64 lg:h-72 object-cover order-3 lg:order-3 hidden lg:block pl-5"
//         />
//       </div>

//       {/* Imágenes en móvil/tablet (solo visibles ahí) */}
//       <div className="flex justify-center gap-5 mt-5 lg:hidden mb-5">
//         <img
//           src="/img/sliders/banner-004.png"
//           alt=""
//           className="h-48 md:h-56 object-cover"
//         />
//         <img
//           src="/img/sliders/banner-001.png"
//           alt=""
//           className="h-48 md:h-56 object-cover"
//         />
//       </div>

//       {/* Estrellas animadas verdes */}
//       <motion.svg
//         width="62"
//         height="62"        
//         fill="none"
//         className="absolute top-4 left-8 sm:left-12 w-6 h-6 sm:w-8 sm:h-8"
//         {...pulseStarAnimation}
//       >       
//         <path
//           d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z"
//           stroke="#ffff"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </motion.svg>

//       <motion.svg
//         width="62"
//         height="62"        
//         fill="none"
//         className="absolute top-1/4 left-1/4 w-5 h-5 sm:w-6 sm:h-6"
//         {...floatingStarAnimation}
//       >
//        <path
//           d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z"
//           stroke="#ffff"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </motion.svg>

//       <motion.svg
//         width="62"
//         height="62"    
//         fill="none"
//         className="absolute bottom-8 left-12 sm:left-20 w-6 h-6 sm:w-6 sm:h-6"
//         {...pulseStarAnimation}
//       >
//         <path
//           d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z"
//           stroke="#ffff"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </motion.svg>

//       <motion.svg
//         width="62"
//         height="62"        
//         fill="none"
//         className="absolute top-1/3 right-1/4 w-6 h-6 sm:w-7 sm:h-7"
//         {...floatingStarAnimation}
//       >
//         <path
//           d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z"
//           stroke="#ffff"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </motion.svg>
      

//       <motion.svg
//         width="62"
//         height="62"
//         fill="none"
//         className="absolute bottom-12 right-1/3 w-5 h-5 sm:w-6 sm:h-6"
//         {...pulseStarAnimation}
//       >
//         <path
//           d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z"
//           stroke="#ffff"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </motion.svg>

//       <motion.svg
//         width="62"
//         height="62"
//         fill="none"
//         className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8"
//         {...floatingStarAnimation}
//       >
//         <path
//           d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z"
//           stroke="#ffff"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </motion.svg>

//       <motion.svg
//         width="62"
//         height="62"
//         fill="none"
//         className="absolute top-12 right-20 w-6 h-6 sm:w-6 sm:h-6"
//         {...pulseStarAnimation}
//       >
//         <path
//           d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z"
//           stroke="#ffff"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </motion.svg>

//       <motion.svg
//         width="26"
//         height="26"
//         viewBox="0 0 68 68"
//         fill="none"
//         className="absolute top-1/2 left-10 w-5 h-5 sm:w-7 sm:h-7"
//         {...pulseStarAnimation}
//       >
//        <path
//           d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z"
//           stroke="#ffff"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </motion.svg>
//     </div>
//   );
// }


import { motion } from "framer-motion";

export default function BannerHorizontalLove() {
  // Animaciones mejoradas para San Valentín - CORREGIDAS
  const heartFloatAnimation = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 15, -15, 0],
      scale: [1, 1.2, 1],
    },
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut" as const, // Importante: usar 'as const'
    },
  };

  const sparkleAnimation = {
    animate: {
      scale: [0, 1.5, 0],
      opacity: [0, 1, 0],
      rotate: [0, 180, 360],
    },
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  const pulseHeartAnimation = {
    animate: {
      scale: [1, 1.3, 1],
      opacity: [0.7, 1, 0.7],
    },
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  const floatingHeartsAnimation = {
    animate: {
      y: [0, -30, 0],
      x: [0, 15, -15, 0],
      rotate: [0, 25, -25, 0],
    },
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  return (
    <div className="relative z-10 mb-10 overflow-hidden bg-gradient-to-r from-pink-600 via-red-500 to-pink-600 shadow-lg">
      {/* Capa de patrones decorativos - versión simplificada sin animación */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <span className="absolute top-10 left-10 text-6xl">❤️</span>
        <span className="absolute bottom-10 right-10 text-6xl">💕</span>
        <span className="absolute top-1/4 right-1/4 text-4xl">🌸</span>
        <span className="absolute bottom-1/4 left-1/4 text-4xl">🌹</span>
      </div>

      <div className="flex flex-col items-center justify-center lg:flex-row relative">
        {/* Imagen izquierda con overlay sutil */}
        <div className="relative order-2 lg:order-1 hidden lg:block">
          <div className="absolute inset-0  z-10 rounded-r-full"></div>
          <img
            src="/img/sliders/banner-004.png"
            alt=""
            className="h-52 md:h-64 lg:h-72 object-cover"
          />
        </div>

        {/* Bloque de texto con fondo sutil */}
        <div className="order-1 lg:order-2 flex flex-col items-center justify-center text-center pt-10 lg:py-15 px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl text-white font-bold drop-shadow-lg">
              ¡Celebra el amor y la amistad!{" "}
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" as const }}
                className="inline-block"
              >
                💝
              </motion.span>
            </h1>
            <p className="text-lg md:text-xl text-pink-50 font-medium mt-4 drop-shadow">
              Sorprende con regalos únicos y personalizados este mes del corazón{" "}
              <motion.span
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, delay: 0.5, ease: "easeInOut" as const }}
                className="inline-block"
              >
                ❤️
              </motion.span>
            </p>
            <motion.button
              className="mt-6 bg-white px-8 py-3 text-pink-600 rounded-full shadow-xl font-bold text-lg hover:bg-pink-50 transition-all duration-300 border-2 border-white/50"
              onClick={() => {
                window.open("https://whatsapp.com/channel/0029VapBpSdI7BeIMUcfP536", "_blank")
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explorar regalos 💕
            </motion.button>
          </motion.div>
        </div>

        {/* Imagen derecha con overlay sutil */}
        <div className="relative order-3 lg:order-3 hidden lg:block">
          <div className="absolute inset-0  z-10 rounded-l-full"></div>
          <img
            src="/img/sliders/banner-003.png"
            alt=""
            className="h-52 md:h-64 lg:h-72 object-cover pl-5"
          />
        </div>
      </div>

      {/* Imágenes en móvil/tablet mejoradas */}
      <div className="flex justify-center gap-5 mt-5 lg:hidden mb-5 px-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src="/img/sliders/banner-004.png"
            alt=""
            className="h-48 md:h-56 object-cover"
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src="/img/sliders/banner-003.png"
            alt=""
            className="h-48 md:h-56 object-cover"
          />
        </motion.div>
      </div>

      {/* Corazones animados - TODOS CORREGIDOS con 'as const' */}
      <motion.div
        className="absolute top-4 left-8 sm:left-12 text-3xl"
        animate={pulseHeartAnimation.animate}
        transition={{ ...pulseHeartAnimation.transition, ease: "easeInOut" as const }}
      >
        ❤️
      </motion.div>

      <motion.div
        className="absolute top-1/4 left-1/4 text-2xl"
        animate={heartFloatAnimation.animate}
        transition={{ ...heartFloatAnimation.transition, ease: "easeInOut" as const }}
      >
        💖
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-12 sm:left-20 text-3xl"
        animate={pulseHeartAnimation.animate}
        transition={{ ...pulseHeartAnimation.transition, ease: "easeInOut" as const }}
      >
        💗
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-1/4 text-2xl"
        animate={floatingHeartsAnimation.animate}
        transition={{ ...floatingHeartsAnimation.transition, ease: "easeInOut" as const }}
      >
        💕
      </motion.div>

      <motion.div
        className="absolute bottom-12 right-1/3 text-2xl"
        animate={pulseHeartAnimation.animate}
        transition={{ ...pulseHeartAnimation.transition, ease: "easeInOut" as const }}
      >
        💓
      </motion.div>

      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-3xl"
        animate={heartFloatAnimation.animate}
        transition={{ ...heartFloatAnimation.transition, ease: "easeInOut" as const }}
      >
        💘
      </motion.div>

      <motion.div
        className="absolute top-12 right-20 text-2xl"
        animate={pulseHeartAnimation.animate}
        transition={{ ...pulseHeartAnimation.transition, ease: "easeInOut" as const }}
      >
        💝
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-10 text-2xl"
        animate={sparkleAnimation.animate}
        transition={{ ...sparkleAnimation.transition, ease: "easeInOut" as const }}
      >
        ✨
      </motion.div>

      {/* Corazones adicionales para más dinamismo */}
      <motion.div
        className="absolute top-20 left-1/3 text-xl"
        animate={floatingHeartsAnimation.animate}
        transition={{ ...floatingHeartsAnimation.transition, ease: "easeInOut" as const }}
      >
        💞
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10 text-xl"
        animate={heartFloatAnimation.animate}
        transition={{ ...heartFloatAnimation.transition, ease: "easeInOut" as const }}
      >
        💕
      </motion.div>
    </div>
  );
}