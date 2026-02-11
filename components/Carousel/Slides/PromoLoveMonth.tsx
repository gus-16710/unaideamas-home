// "use client";

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import {
//   FaHeart,
//   FaGift,
//   FaTshirt,
//   FaCouch,
//   FaMugHot,
//   FaToilet,
//   FaWhatsapp,
//   FaRibbon,
//   FaRegHeart
// } from "react-icons/fa";
// import { GiRose, GiLoveSong, GiLoveLetter, GiHeartNecklace, GiUnderwearShorts } from "react-icons/gi";
// import { LuMessageCircleMore } from "react-icons/lu";

// export default function PromoLoveMonth() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [hearts, setHearts] = useState<
//     Array<{
//       id: number;
//       left: number;
//       delay: number;
//       duration: number;
//       size: number;
//       emoji: string;
//     }>
//   >([]);

//   const images = [
//     "/img/sliders/boxer1.jpeg",
//     "/img/sliders/taza-valentin.jpeg",
//     "/img/sliders/mameluco1.jpeg",
//     "/img/sliders/rollo-valentin.jpeg",
//   ];

//   // Generar corazones flotantes
//   useEffect(() => {
//     const heartEmojis = ["❤️", "🧡", "💛", "💚", "💙", "💜", "🩷", "💖", "💘", "💝", "💕", "💞"];
//     const generatedHearts = Array.from({ length: 20 }, (_, i) => ({
//       id: i,
//       left: Math.random() * 100,
//       delay: Math.random() * 5,
//       duration: 8 + Math.random() * 12,
//       size: 16 + Math.random() * 24,
//       emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
//     }));
//     setHearts(generatedHearts);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div
//       className="w-full h-full flex flex-col lg:flex-row items-center justify-center px-8 py-10 text-white relative overflow-hidden gap-10 lg:gap-20"
//       style={{
//         background: "linear-gradient(145deg, #ff758c 0%, #ff7eb3 35%, #ff9a9e 70%, #fad0c4 100%)",
//       }}
//     >
//       {/* Fondo decorativo con patrones */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-10 left-10 text-7xl">💕</div>
//         <div className="absolute bottom-10 right-10 text-7xl">💖</div>
//         <div className="absolute top-1/4 right-1/4 text-6xl">🌸</div>
//         <div className="absolute bottom-1/4 left-1/4 text-6xl">🌹</div>
//       </div>

//       {/* CORAZONES FLOTANTES - ANIMACIÓN PRINCIPAL */}
//       {hearts.map((heart) => (
//         <motion.div
//           key={heart.id}
//           className="absolute pointer-events-none z-0"
//           style={{
//             left: `${heart.left}%`,
//             top: "-5%",
//             fontSize: `${heart.size}px`,
//           }}
//           animate={{
//             y: ["0vh", "110vh"],
//             x: [0, Math.random() * 100 - 50],
//             rotate: [0, 360],
//             scale: [1, 1.5, 0.8, 1.2, 0],
//           }}
//           transition={{
//             duration: heart.duration,
//             repeat: Infinity,
//             delay: heart.delay,
//             ease: "easeInOut",
//           }}
//         >
//           {heart.emoji}
//         </motion.div>
//       ))}

//       {/* CORAZONES LATE ANIMADOS SUPERIORES */}
//       <div className="absolute top-0 left-0 right-0 h-4 flex justify-around px-2 z-10">
//         {[...Array(12)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="text-xl"
//             animate={{
//               scale: [1, 1.5, 1],
//               opacity: [0.5, 1, 0.5],
//               y: [0, -5, 0],
//             }}
//             transition={{
//               duration: 1.8,
//               repeat: Infinity,
//               delay: i * 0.15,
//               ease: "easeInOut",
//             }}
//           >
//             {["❤️", "💖", "💗", "💓", "💕", "💘"][i % 6]}
//           </motion.div>
//         ))}
//       </div>

//       {/* ELEMENTOS FLOTANTES - CORAZONES Y ROSAS */}
//       <motion.div
//         className="absolute top-10 left-10 text-4xl opacity-40 z-10"
//         animate={{ y: [0, -25, 0], rotate: [0, 15, -15, 0] }}
//         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//       >
//         <GiRose />
//       </motion.div>

//       <motion.div
//         className="absolute bottom-10 right-16 text-4xl opacity-40 z-10"
//         animate={{ y: [0, 25, 0], rotate: [0, -20, 20, 0] }}
//         transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
//       >
//         <FaHeart />
//       </motion.div>

//       <motion.div
//         className="absolute top-20 right-10 text-4xl opacity-40 z-10"
//         animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
//         transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
//       >
//         <GiLoveLetter />
//       </motion.div>

//       <motion.div
//         className="absolute bottom-24 left-5 text-4xl opacity-40 z-10"
//         animate={{ rotate: [0, -360], scale: [1, 1.3, 1] }}
//         transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
//       >
//         <GiHeartNecklace />
//       </motion.div>

//       <motion.div
//         className="absolute top-[15%] right-[15%] text-5xl opacity-30 z-10"
//         animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//       >
//         <GiLoveSong />
//       </motion.div>

//       {/* TEXTO PRINCIPAL - AMOR Y AMISTAD */}
//       <div className="relative z-20 flex flex-col lg:flex-row items-center justify-evenly w-full">
//         <div className="flex flex-col gap-5 max-w-lg text-center lg:text-left relative z-20  p-8 ">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight text-white drop-shadow-lg">
//               Regalos para <span className="text-pink-900">San Valentín</span>
//             </h1>
//             <p className="text-pink-50 text-lg mt-2 font-light italic flex items-center justify-center lg:justify-start gap-2">
//               <FaRegHeart className="text-pink-200" /> El detalle perfecto para tu persona especial <FaRegHeart className="text-pink-200" />
//             </p>
//           </motion.div>

//           {/* LISTA DE PRODUCTOS - MÁS COMPACTA CON REACT ICONS */}
//           <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm border border-white/30 mt-2">
//             <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2 border-b border-white/30 pb-2">
//               <FaGift className="text-pink-200" /> Productos personalizables:
//             </h3>

//             <ul className="space-y-2">
//               <li className="flex items-center gap-3 text-pink-50 bg-white/10 p-2 rounded-lg">
//                 <FaMugHot className="text-xl text-pink-500/50" />
//                 <span className="font-medium text-pink-800">Tazas</span>
//                 <span className="text-xs bg-pink-500/50 px-2 py-1 rounded-full ml-auto">con fotos + nombres</span>
//               </li>
//               <li className="flex items-center gap-3 text-pink-50 bg-white/10 p-2 rounded-lg">
//                 <FaCouch className="text-xl text-pink-500/50" />
//                 <span className="font-medium text-pink-800">Cojines</span>
//                 <span className="text-xs bg-pink-500/50 px-2 py-1 rounded-full ml-auto">estampados</span>
//               </li>
//               <li className="flex items-center gap-3 text-pink-50 bg-white/10 p-2 rounded-lg">
//                 <FaTshirt className="text-xl text-pink-500/50" />
//                 <span className="font-medium text-pink-800">Playeras</span>
//                 <span className="text-xs bg-pink-500/50 px-2 py-1 rounded-full ml-auto">sublimadas</span>
//               </li>
//               <li className="flex items-center gap-3 text-pink-50 bg-white/10 p-2 rounded-lg">
//                 <GiUnderwearShorts className="text-xl text-pink-500/50" />
//                 <span className="font-medium text-pink-800">Boxers</span>
//                 <span className="text-xs bg-pink-500/50 px-2 py-1 rounded-full ml-auto">caballero</span>
//               </li>
//               <li className="flex items-center gap-3 text-pink-50 bg-white/10 p-2 rounded-lg">
//                 <FaToilet className="text-xl text-pink-500/50" />
//                 <span className="font-medium text-pink-800">Rollos sanitarios</span>
//                 <span className="text-xs bg-pink-500/50 px-2 py-1 rounded-full ml-auto">grabados</span>
//               </li>
//               <li className="flex items-center gap-3 text-pink-50 bg-white/10 p-2 rounded-lg">
//                 <LuMessageCircleMore className="text-xl text-pink-500/50" />
//                 <span className="font-medium text-pink-800">Y mucho más</span>
//                 <span className="text-xs bg-pink-500/50 px-2 py-1 rounded-full ml-auto">consulta</span>
//               </li>
//             </ul>
//           </div>

//           <motion.button
//             className="px-10 py-4 rounded-full font-bold text-xl text-white
//               bg-linear-to-r from-red-500 to-pink-500 border-2 border-white/50
//               shadow-[0_0_30px_rgba(255,105,180,0.7)] hover:shadow-[0_0_50px_rgba(255,105,180,0.9)]
//               transition-all duration-300 z-10 relative flex items-center justify-center gap-3"
//             onClick={() =>
//               window.open(
//                 "https://wa.me/5212281255258?text=Hola!%20Me%20interesa%20cotizar%20regalos%20para%20San%20Valent%C3%ADn%20%E2%9D%A4%EF%B8%8F",
//                 "_blank"
//               )
//             }
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <FaWhatsapp className="text-2xl" />
//             Cotizar por WhatsApp
//             <FaHeart className="text-xl" />
//           </motion.button>

//           <p className="text-xs text-pink-100 mt-2 text-center italic flex items-center justify-center gap-1">
//             <FaRegHeart /> Personalizamos con nombres, fotos y fechas especiales <FaRegHeart />
//           </p>
//         </div>

//         {/* SECCIÓN DE IMAGEN */}
//         <div className="hidden relative z-20 mt-10 lg:mt-0">
//           <div className="relative w-64 h-72 sm:w-80 sm:h-96 lg:w-96 lg:h-[500px]">
//             {/* Marco decorativo de corazones */}
//             <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 to-rose-400 rounded-3xl blur-lg opacity-60"></div>

//             {/* Imagen principal */}
//             <motion.div
//               key={currentImageIndex}
//               className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80"
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{
//                 opacity: 1,
//                 scale: 1,
//               }}
//               transition={{
//                 opacity: { duration: 0.8 },
//                 scale: { duration: 0.8 },
//               }}
//               whileHover={{ scale: 1.02 }}
//             >
//               <img
//                 src={images[currentImageIndex]}
//                 alt="Regalo San Valentín Personalizado"
//                 className="w-full h-full object-cover"
//               />

//               {/* Overlay de corazones */}
//               <div className="absolute inset-0 bg-gradient-to-t from-pink-900/50 via-transparent to-transparent" />

//               {/* Indicador de personalización */}
//               <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm p-3 rounded-xl border border-pink-300/50">
//                 <p className="text-white text-sm font-bold text-center flex items-center justify-center gap-2">
//                   <FaGift /> 100% Personalizable <FaRegHeart />
//                 </p>
//               </div>
//             </motion.div>

//             {/* Etiqueta de San Valentín */}
//             <motion.div
//               className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-5 py-2 rounded-full font-bold text-sm shadow-lg z-30 border-2 border-white/50 flex items-center gap-2"
//               animate={{
//                 rotate: [0, 8, -8, 0],
//                 scale: [1, 1.15, 1],
//               }}
//               transition={{
//                 duration: 2.5,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             >
//               <FaHeart /> AMOR Y AMISTAD <FaHeart />
//             </motion.div>

//             {/* Elementos decorativos */}
//             <motion.div
//               className="absolute -bottom-6 -left-6 text-6xl opacity-30 z-0"
//               animate={{
//                 y: [0, -15, 0],
//                 rotate: [0, 15, 0],
//               }}
//               transition={{
//                 duration: 5,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             >
//               <GiLoveLetter />
//             </motion.div>

//             <motion.div
//               className="absolute -top-8 -right-8 text-5xl opacity-30 z-0"
//               animate={{
//                 y: [0, 15, 0],
//                 rotate: [0, -15, 0],
//               }}
//               transition={{
//                 duration: 6,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//                 delay: 1,
//               }}
//             >
//               <GiRose />
//             </motion.div>

//             {/* Mini corazones flotantes alrededor de la imagen */}
//             <motion.div
//               className="absolute top-1/2 -left-10 text-3xl"
//               animate={{ x: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
//               transition={{ duration: 3, repeat: Infinity }}
//             >
//               ❤️
//             </motion.div>
//             <motion.div
//               className="absolute top-1/3 -right-10 text-3xl"
//               animate={{ x: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
//               transition={{ duration: 3.5, repeat: Infinity }}
//             >
//               💖
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import {
  FaHeart,
  FaGift,
  FaTshirt,
  FaCouch,
  FaMugHot,
  FaToilet,
  FaWhatsapp,
  FaRibbon,
  FaStar,
  FaRegHeart,
  FaBoxes,
} from "react-icons/fa";
import {
  GiRose,
  GiLoveSong,
  GiLoveLetter,
  GiHeartNecklace,
  GiUnderwearShorts,
} from "react-icons/gi";
import { LuMessageCircleMore } from "react-icons/lu";

export default function PromoLoveMonth() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hearts, setHearts] = useState<
    Array<{
      id: number;
      left: number;
      delay: number;
      duration: number;
      size: number;
      emoji: string;
    }>
  >([]);

  const images = [
    "/img/sliders/boxer1.jpeg",
    "/img/sliders/taza-valentin.jpeg",
    "/img/sliders/mameluco1.jpeg",
    "/img/sliders/rollo-valentin.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="w-full h-full flex flex-col lg:flex-row items-center justify-center px-6 py-8 text-white relative overflow-hidden gap-8 lg:gap-20"
      style={{
        background:
          "linear-gradient(145deg, #ff758c 0%, #ff7eb3 35%, #ff9a9e 70%, #fad0c4 100%)",
      }}
    >
      {/* Fondo decorativo con patrones */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-7xl">💕</div>
        <div className="absolute bottom-10 right-10 text-7xl">💖</div>
        <div className="absolute top-1/4 right-1/4 text-6xl">🌸</div>
        <div className="absolute bottom-1/4 left-1/4 text-6xl">🌹</div>
      </div>

      {/* ELEMENTOS FLOTANTES - CORAZONES Y ROSAS */}
      <div className="absolute top-10 left-10 text-4xl opacity-40 z-10">
        <GiRose />
      </div>

      <div className="absolute bottom-10 right-16 text-4xl opacity-40 z-10">
        <FaHeart />
      </div>

      <div className="absolute top-20 right-10 text-4xl opacity-40 z-10">
        <GiLoveLetter />
      </div>

      <div className="absolute bottom-24 left-5 text-4xl opacity-40 z-10">
        <GiHeartNecklace />
      </div>

      <div className="absolute top-[15%] right-[15%] text-5xl opacity-30 z-10">
        <GiLoveSong />
      </div>

      {/* TEXTO PRINCIPAL - AMOR Y AMISTAD */}
      <div className="relative z-20 flex flex-col lg:flex-row items-center justify-center w-full gap-5 lg:gap-20">
        {/* SECCIÓN DE IMAGEN */}
        <div className="relative z-20 mt-8 lg:mt-0">
          <div className="relative w-48 h-56 sm:w-72 sm:h-80 lg:w-96 lg:h-[450px]">
            {/* Marco decorativo de corazones */}
            <div className="absolute -inset-3 bg-linear-to-r from-pink-400 to-rose-400 rounded-3xl blur-lg opacity-60"></div>

            {/* Imagen principal */}
            <motion.div
              key={currentImageIndex}
              className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: [0, -1, 1, -1, 0],
              }}
              transition={{
                opacity: { duration: 0.8 },
                scale: { duration: 0.8 },
                rotate: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={images[currentImageIndex]}
                alt="Regalo San Valentín Personalizado"
                className="w-full h-full object-cover"
              />

              {/* Overlay de corazones */}
              <div className="absolute inset-0 bg-linear-to-t from-pink-900/50 via-transparent to-transparent" />
            </motion.div>

            {/* Etiqueta de San Valentín */}
            <div className="absolute -top-3 -right-3 bg-linear-to-r from-red-500 to-pink-500 text-white px-3 py-1.5 rounded-full font-bold text-xs sm:text-sm shadow-lg z-30 border-2 border-white/50 flex items-center gap-1 sm:gap-2 rotate-12">
              <FaHeart className="text-xs" /> AMOR Y AMISTAD{" "}
              <FaHeart className="text-xs" />
            </div>

            {/* Elementos decorativos */}
            <div className="absolute -bottom-5 -left-5 text-5xl opacity-30 z-0">
              <GiLoveLetter />
            </div>

            <div className="absolute -top-6 -right-6 text-4xl opacity-30 z-0">
              <GiRose />
            </div>

            {/* Mini corazones flotantes alrededor de la imagen */}
            <div className="absolute top-1/2 -left-8 text-2xl">❤️</div>
            <div className="absolute top-1/3 -right-8 text-2xl">💖</div>
          </div>
        </div>

        <div className="flex flex-col gap-4 max-w-lg text-center lg:text-left relative z-20 ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden md:block"
          >
            <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white drop-shadow-lg">
              Regalos para San Valentín
            </h1>
            <p className="text-pink-50 text-base sm:text-lg mt-2 font-light italic flex items-center justify-center lg:justify-start gap-2 ">
              <FaRegHeart className="text-pink-200" /> El detalle perfecto para
              tu persona especial <FaRegHeart className="text-pink-200" />
            </p>
          </motion.div>

          {/* PÁRRAFO DE PRODUCTOS - COMPACTO PARA MÓVILES */}
          <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm border border-white/30 mt-1">
            <div className="flex items-center gap-2 text-white mb-2 border-b border-white/30 pb-2">
              <FaGift className="text-pink-200 text-lg" />
              <h3 className="font-semibold text-sm sm:text-base">
                Personalizamos:
              </h3>
            </div>

            <p className="text-pink-50 text-xs sm:text-sm leading-relaxed">
              <span className="inline-flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full mr-1 mb-1 text-pink-800">
                <FaMugHot className="text-pink-600/50 text-xs" /> Tazas
              </span>
              <span className="inline-flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full mr-1 mb-1 text-pink-800">
                <FaCouch className="text-pink-600/50 text-xs" /> Cojines
              </span>
              <span className="inline-flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full mr-1 mb-1 text-pink-800">
                <FaTshirt className="text-pink-600/50 text-xs" /> Playeras
              </span>
              <span className="inline-flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full mr-1 mb-1 text-pink-800">
                <GiUnderwearShorts className="text-pink-600/50 text-xs" />{" "}
                Boxers
              </span>
              <span className="inline-flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full mr-1 mb-1 text-pink-800">
                <FaToilet className="text-pink-600/50 text-xs" /> Rollos
                grabados
              </span>
              <span className="inline-flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full mr-1 mb-1 text-pink-800">
                <LuMessageCircleMore className="text-pink-600/50 text-xs" />{" "}
                Detalles
              </span>
              <span className="inline-flex items-center gap-1 bg-pink-500/50 px-2 py-0.5 rounded-full mr-1 mb-1 font-medium">
                ✨ ¡y mucho más!
              </span>
            </p>
            <p className="text-pink-600 text-xs mt-2 italic">
              Personalizados con nombres, fotos y fechas especiales ❤️
            </p>
          </div>

          <div className="mt-1 p-2 sm:p-2 bg-linear-to-r from-pink-500 to-rose-500 rounded-xl">
            <p className="text-lg sm:text-2xl lg:text-2xl font-bold text-white drop-shadow-md text-center flex items-center justify-center gap-2 flex-wrap">
              <FaStar className="text-yellow-200 text-sm sm:text-base" /> Desde
              $99.00 MXN{" "}
              <FaStar className="text-yellow-200 text-sm sm:text-base" />
            </p>
            <p className="text-xs sm:text-sm text-pink-100 mt-1 text-center">
              Precios especiales por San Valentín
            </p>
          </div>

          <motion.button
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold sm:text-lg text-white 
              bg-linear-to-r from-red-500 to-pink-500 border-2 border-white/50 
              shadow-[0_0_30px_rgba(255,105,180,0.7)] hover:shadow-[0_0_50px_rgba(255,105,180,0.9)]
              transition-all duration-300 z-10 relative flex items-center justify-center gap-2 sm:gap-3"
            onClick={() =>
              window.open(
                "https://wa.me/5212281255258?text=Hola!%20Me%20interesa%20cotizar%20regalos%20para%20San%20Valent%C3%ADn%20%E2%9D%A4%EF%B8%8F",
                "_blank",
              )
            }
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp className="text-lg sm:text-2xl" />
            Cotizar por WhatsApp
            <FaRegHeart className="text-lg sm:text-2xl" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
