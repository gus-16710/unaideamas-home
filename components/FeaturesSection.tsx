import { motion } from "framer-motion";
import { AiFillProduct } from "react-icons/ai";
import { FiGrid, FiPackage, FiTag } from "react-icons/fi";

export default function FeaturesSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 text-center"
    >
      {[
        {
          icon: <FiPackage size={28} />,
          title: "Entrega rápida",
          desc: "Recibe tus pedidos sin demoras",
        },
        {
          icon: <FiTag size={28} />,
          title: "Precios de mayoreo",
          desc: "Descuentos por volumen",
        },
        {
          icon: <AiFillProduct size={28} />,
          title: "Más de 100 productos",
          desc: "Catálogo en constante crecimiento",
        },
        {
          icon: <FiGrid size={28} />,
          title: "Personalización",
          desc: "Tu logo, en cualquier producto",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          className="bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl shadow-md p-5"
        >
          <div className="flex flex-col items-center gap-2 text-blue-600 mb-2">
            {item.icon}
          </div>
          <h4 className="font-semibold text-gray-800">{item.title}</h4>
          <p className="text-gray-500 text-sm">{item.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
