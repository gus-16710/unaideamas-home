import { motion } from "framer-motion";

export default function EcoBag() {
  return (
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
            <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-around  px-4 md:px-8 lg:px-16 py-8">
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
  )
}
