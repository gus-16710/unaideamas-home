import { motion } from "framer-motion";
import { FaBusinessTime } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";

export default function Enterprise() {
  return (
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
            Productos promocionales personalizados que fortalecen tu identidad
            corporativa y fidelizan clientes.
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
  );
}
