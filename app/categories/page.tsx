"use client";

import { AiFillProduct } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Categories() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans overflow-hidden bg-black">
      <div className="flex justify-center items-center flex-col gap-6">
        {/* Icono con animación */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <AiFillProduct size={70} className="text-blue-500" />
        </motion.div>

        {/* Título con animación con delay */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative z-10 text-white text-4xl font-bold text-center"
        >
          Categorías de Productos
        </motion.h1>
      </div>
    </div>
  );
}
