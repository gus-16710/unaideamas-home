import { motion } from "framer-motion";

export default function Calendars() {
  return (
    <div className="w-full h-full relative bg-linear-to-br from-blue-500 via-purple-500 to-indigo-600 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-15 md:opacity-20">
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
      </div>

      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-center lg:justify-around px-4 md:px-8 lg:px-16 py-4 md:py-8 h-full">
        {/* Contenido informativo - Lado izquierdo en desktop */}
        <div className="text-white space-y-4 md:space-y-6 max-w-lg text-center lg:text-left order-2 lg:order-1">
          {/* Badge destacado */}
          <div className="flex items-center justify-center lg:justify-start gap-2">
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
          </div>

          {/* Título principal */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Calendarios{" "}
            <span className="bg-linear-to-r from-yellow-300 to-amber-300 bg-clip-text text-transparent">
              de Varilla
            </span>
          </h2>

          {/* Descripción */}
          <p className="hidden lg:block text-sm md:text-lg lg:text-xl text-blue-100 leading-relaxed">
            Calendarios prácticos y elegantes con santoral bimestral. Perfectos
            para oficinas, hogares y espacios comerciales.
          </p>

          {/* Características principales */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-4 text-sm">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                <span className="font-bold text-yellow-300">Incluye:</span>
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
              <img
                src="/img/sliders/calendars.png"
                alt="Calendario de Varilla con Santoral"
                className="w-72 h-56 md:w-64 md:h-56 lg:w-80 lg:h-96 object-contain drop-shadow-2xl"
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
  );
}
