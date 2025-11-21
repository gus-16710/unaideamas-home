import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BioSet() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/img/sliders/set-027-be.jpg",
    "/img/sliders/set-027-be_4_1.jpg",
    "/img/sliders/set-027-be_5_1.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5000 ms = 5 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
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

      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-center lg:gap-40 px-4 md:px-8 lg:px-16 py-4 md:py-8">
        {/* Imagen del producto - Más compacta en móvil */}
        <div className="flex justify-center mb-4 lg:mb-0">
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
                  key={currentImageIndex} // Key importante para forzar re-render
                  src={images[currentImageIndex]}
                  alt="Set Ecológico BioSet"
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    opacity: { duration: 0.5 }, // Transición suave al cambiar imagen
                  }}
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
              className="absolute -top-1 -right-1 md:top-10 md:-right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold rotate-12 shadow-lg"
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
              Set ecológico premium con libreta, bolsa de algodón y bolígrafo.
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
  );
}
