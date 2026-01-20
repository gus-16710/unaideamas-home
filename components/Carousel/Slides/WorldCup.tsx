import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  GiSoccerBall,
  GiSoccerField,
  GiSoccerKick,
  GiWhistle,
  GiTrophy,
  GiBackpack,
  GiSunglasses,
  GiShoppingBag,
  GiBaseballBat,
  GiBilledCap,
  GiGymBag,
} from "react-icons/gi";
import {
  FaShoppingBag,
  FaShippingFast,
  FaBoxOpen,
  FaStar,
  FaFire,
  FaBolt,
  FaCrown,
} from "react-icons/fa";

export default function WorldCup() {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const products = [
    {
      name: "Balón Oficial 2026",
      image: "/img/sliders/balon-mundial-2026.jpg",
      price: "$499.90",
      tag: "⭐ MÁS VENDIDO",
      label: "Balones",
      icon: <GiSoccerBall className="text-2xl" />,
    },
    {
      name: "Cangurera Soccer",
      image: "/img/sliders/cangurera-mundial.jpg",
      price: "$349.90",
      tag: "🔥 NUEVO",
      label: "Cangureras",
      icon: <GiGymBag className="text-2xl" />,
    },
    {
      name: "Gorra Oficial",
      image: "/img/sliders/gorra-mundial.jpg",
      price: "$229.90",
      tag: "⚡ OFERTA",
      label: "Gorras oficiales",
      icon: <GiBilledCap className="text-2xl" />,
    },
    {
      name: "Mochila Soccer",
      image: "/img/sliders/mochila-mundial.jpg",
      price: "$429.90",
      tag: "🏆 EDICIÓN ESPECIAL",
      label: "Mochilas",
      icon: <GiBackpack className="text-2xl" />,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProductIndex((prevIndex) =>
        prevIndex === products.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [products.length]);

  const soccerBallAnimation = {
    initial: { scale: 0, rotate: 0 },
    animate: {
      scale: [0, 1, 0.9, 1],
      rotate: [0, 180, 360],
      opacity: [0, 1, 0.8, 1],
    },
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  const floatingAnimation = {
    animate: {
      y: [0, -20, 0],
      x: [0, 15, 0],
      rotate: [0, 15, 0],
      scale: [1, 1.15, 1],
    },
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  const pulseAnimation = {
    animate: {
      scale: [1, 1.4, 1],
      opacity: [0.7, 1, 0.7],
    },
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  return (
    <div
      className="w-full h-full relative bg-linear-to-br overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #006341 0%, #006847 30%, #00834D 60%, #00A854 100%)",
      }}
    >
      {/* Efectos de estadio - luces verdes */}
      <div className="absolute top-0 left-0 right-0 h-3 md:h-4 flex justify-between px-2">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 md:w-3 md:h-3 rounded-full"
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.15,
            }}
            style={{
              backgroundColor: i % 2 === 0 ? "#FFD700" : "#FFFFFF",
              boxShadow: "0 0 8px currentColor",
            }}
          />
        ))}
      </div>

      {/* Elementos decorativos de fútbol */}
      <div className="absolute inset-0 opacity-30 md:opacity-20">
        <motion.div
          className="absolute top-8 right-4 md:right-10 text-5xl md:text-6xl text-white/40"
          animate={{
            rotate: [0, 360, 0],
            y: [0, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <GiSoccerField />
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-4 md:left-10 text-4xl md:text-5xl text-green-400/30"
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <GiTrophy />
        </motion.div>
      </div>

      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-center lg:gap-40 px-4 md:px-8 lg:px-16 py-4 md:py-8">
        {/* Imagen del producto */}
        <div className="flex justify-center mb-6 lg:mb-0">
          <div className="relative">
            <motion.div
              className="h-52 md:h-64 lg:h-80"
              animate={{
                y: [0, -12, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-red-800 to-green-300 rounded-2xl p-2 shadow-2xl">
                <motion.img
                  key={currentProductIndex}
                  src={products[currentProductIndex].image}
                  alt={products[currentProductIndex].name}
                  className="w-full h-full object-contain rounded-2xl"
                  initial={{ opacity: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    opacity: { duration: 0.5 },
                  }}
                />
              </div>
            </motion.div>

            {/* Badge del producto actual con iconos */}
            <motion.div
              className="absolute -top-2 -right-2 md:top-4 md:-right-4 bg-linear-to-r from-red-600 to-yellow-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold rotate-12 shadow-xl flex items-center gap-1"
              animate={{
                rotate: [12, -8, 12],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              {products[currentProductIndex].tag === "⭐ MÁS VENDIDO" && (
                <FaStar />
              )}
              {products[currentProductIndex].tag === "🔥 NUEVO" && <FaFire />}
              {products[currentProductIndex].tag === "⚡ OFERTA" && <FaBolt />}
              {products[currentProductIndex].tag === "🏆 EDICIÓN ESPECIAL" && (
                <FaCrown />
              )}
              <span>
                {products[currentProductIndex].tag.replace(/[⭐🔥⚡🏆]/g, "")}
              </span>
            </motion.div>

            <motion.div
              className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white text-green-700 px-4 py-2 rounded-full font-black text-medium md:text-xl shadow-lg border-2 border-green-500 text-center text-nowrap flex items-center gap-2"
              animate={{
                y: [0, -5, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              {products[currentProductIndex].icon}
              <span>{products[currentProductIndex].label}</span>
            </motion.div>
          </div>
        </div>

        {/* Contenido */}
        <div className="flex flex-col text-gray-800 space-y-4 md:space-y-5 lg:space-y-5 max-w-lg text-center lg:text-left">
          {/* Badge del Mundial */}
          <div className="hidden md:flex items-center justify-center lg:justify-start gap-2">
            <span className="text-xs font-bold bg-linear-to-r from-green-600 to-green-400 text-white px-4 py-2 rounded-full border-2 border-white shadow-lg flex items-center gap-2">
              <GiTrophy />
              MUNDIAL MÉXICO 2026
            </span>
          </div>

          {/* Título principal */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight text-white flex flex-col">
            <span>Productos Oficiales</span>
            <span className="text-xl md:text-3xl lg:text-5xl bg-linear-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent flex items-center gap-2">
              <GiSoccerKick className="text-yellow-400" />
              Mundial 2026
            </span>
          </h2>

          {/* Descripción */}
          <div className="text-white">
            <p className="text-sm md:text-xl leading-relaxed hidden md:block">
              ¡Prepárate para el evento deportivo más grande! Productos
              oficiales y ediciones limitadas para hinchas y empresas.
            </p>

            {/* Lista de productos con iconos */}
            <div className="grid grid-cols-2 gap-3 mt-0 md:mt-4">
              <div className="text-left space-y-2">
                <p className="text-sm md:text-base flex items-center gap-2">
                  <GiSoccerBall className="text-yellow-400 text-lg" />
                  <span>Balones Oficiales</span>
                </p>
                <p className="text-sm md:text-base flex items-center gap-2">
                  <GiBackpack className="text-yellow-400 text-lg" />
                  <span>Mochilas Soccer</span>
                </p>
                <p className="text-sm md:text-base flex items-center gap-2">
                  <GiSoccerBall className="text-yellow-400 text-lg" />
                  <span>Camisetas</span>
                </p>
              </div>
              <div className="text-left space-y-2">
                <p className="text-sm md:text-base flex items-center gap-2">
                  <GiBaseballBat className="text-yellow-400 text-lg" />
                  <span>Gorras</span>
                </p>
                <p className="text-sm md:text-base flex items-center gap-2">
                  <GiSunglasses className="text-yellow-400 text-lg" />
                  <span>Lentes</span>
                </p>
                <p className="text-sm md:text-base flex items-center gap-2">
                  <GiShoppingBag className="text-yellow-400 text-lg" />
                  <span>Cangureras</span>
                </p>
              </div>
            </div>

            {/* Texto "y muchos más..." con icono */}
            <motion.p
              className="text-sm md:text-base text-yellow-300 font-semibold mt-3 md:mt-4 flex items-center justify-center lg:justify-start gap-2"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <FaStar className="text-yellow-300 animate-pulse" />
              <span className="italic">
                y muchos más productos disponibles...
              </span>
            </motion.p>
          </div>

          {/* Especificaciones con iconos */}
          <div className="md:grid grid-cols-2 gap-4 text-sm md:text-base hidden">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <FaShippingFast className="text-yellow-400" />
                <span className="font-bold text-white">Envíos</span>
              </div>
              <p className="text-yellow-100 flex items-center gap-1">
                <span>A todo México</span>
                <span className="text-lg">🇲🇽</span>
              </p>
            </div>

            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <FaBoxOpen className="text-yellow-400" />
                <span className="font-bold text-white">Pedido Mínimo</span>
              </div>
              <p className="text-yellow-100">50 pzs para empresas</p>
            </div>
          </div>

          {/* Botones con iconos */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 md:pt-4">
            <motion.button
              className="bg-linear-to-r from-green-600 to-green-400 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-base shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open(
                  "https://wa.me/5212281255258?text=¡Hola! Quiero cotizar productos del Mundial 2026.",
                  "_blank",
                )
              }
            >
              <FaShoppingBag />
              Cotizar Productos
            </motion.button>
            <motion.button
              className="border-2 border-white text-white hover:bg-white/10 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-base shadow-lg flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open(
                  "https://wa.me/5212281255258?text=¡Hola! Quiero ver todos los productos del Mundial 2026.",
                  "_blank",
                )
              }
            >
              <GiWhistle />
              Ver Todos los Productos
            </motion.button>
          </div>
        </div>
      </div>

      {/* Elementos decorativos animados - Balones */}
      <div className="absolute top-6 left-0 sm:left-12 text-2xl md:text-3xl text-white/10">
        <GiSoccerBall className="text-[850px]" />
      </div>

      <motion.div
        className="absolute top-6 left-8 sm:left-12 text-2xl md:text-3xl text-white"
        {...soccerBallAnimation}
      >
        <GiSoccerBall />
      </motion.div>

      <motion.div
        className="absolute top-1/4 right-1/4 text-xl md:text-2xl text-green-400"
        {...floatingAnimation}
      >
        <GiSoccerKick />
      </motion.div>

      <motion.div
        className="absolute bottom-12 left-12 sm:left-20 text-lg md:text-xl text-yellow-400"
        {...pulseAnimation}
      >
        <FaStar />
      </motion.div>

      {/* Iconos decorativos adicionales */}
      <motion.div
        className="absolute top-10 right-10 sm:right-16 text-2xl md:text-3xl text-green-500"
        {...floatingAnimation}
      >
        <GiTrophy />
      </motion.div>

      <motion.div
        className="absolute bottom-8 right-8 sm:right-12 text-xl md:text-2xl text-yellow-500"
        {...pulseAnimation}
      >
        <FaFire />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-1/3 text-lg md:text-xl text-white/50"
        animate={{
          y: [0, -15, 0],
          opacity: [0.7, 1, 0.7],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        <GiSoccerField />
      </motion.div>

      {/* Contador regresivo (opcional) */}
      <motion.div
        className="absolute bottom-4 right-4 bg-black/30 text-white px-3 py-1 rounded-lg text-xs flex items-center gap-1"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <GiSoccerBall className="text-yellow-400" />
        <span>⏳ Mundial 2026</span>
      </motion.div>
    </div>
  );
}
