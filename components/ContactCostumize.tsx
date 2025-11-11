import { motion } from "framer-motion";

export default function ContactCostumize() {
  return (
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
        Escríbenos por WhatsApp y recibe una cotización rápida y personalizada.
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
  );
}
