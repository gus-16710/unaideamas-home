import { motion } from "framer-motion";
import { FiTag } from "react-icons/fi";

export default function ContactHelp() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-10 mt-5 bg-linear-to-r from-blue-600 via-sky-500 to-cyan-400 text-white 
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
            "https://wa.me/5212281255258?text=Hola! Quisiera hablar con un asesor.",
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
  );
}
