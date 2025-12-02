"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  RiCalendarEventFill,
  RiSparklingFill,
  RiImageLine,
} from "react-icons/ri";

export default function Events() {
  const router = useRouter();

  const events = [
    {
      emoji: "💍",
      title: "Bodas",
      subtitle: "Recuerdos especiales",
      color: "#FF6B35",
      linear: "from-red-400 to-pink-500",
    },
    {
      emoji: "🏢",
      title: "Corporativos",
      subtitle: "Eventos empresariales",
      color: "#00A8CC",
      linear: "from-blue-400 to-cyan-500",
    },
    {
      emoji: "🎓",
      title: "Graduaciones",
      subtitle: "Logros memorables",
      color: "#9C27B0",
      linear: "from-purple-400 to-pink-500",
    },
    {
      emoji: "⚽",
      title: "Deportivos",
      subtitle: "Torneos y competencias",
      color: "#4CAF50",
      linear: "from-green-400 to-emerald-500",
    },
  ];

  return (
    <div className="w-full flex items-center justify-center relative overflow-hidden pb-15 bg-linear-to-br from-violet-600 via-fuchsia-500 to-orange-400">
      {/* Patrón de puntos animados */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-linear(circle, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Formas geométricas flotantes */}
      <motion.div
        className="absolute w-96 h-96 bg-yellow-300/40 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Infinity }}
        style={{ top: "10%", left: "5%" }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-cyan-300/40"
        animate={{
          rotate: [0, 180, 360],
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        style={{
          bottom: "15%",
          right: "10%",
          borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
        }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-pink-300/40 blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
        style={{
          top: "40%",
          right: "20%",
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        }}
      />

      <div className="relative container mx-auto px-4 lg:px-6 py-6 lg:py-8 h-full flex flex-col justify-center mt-10">
        {/* HEADER con efecto 3D */}
        <motion.div
          initial={{ opacity: 0, rotateX: -20 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-4 lg:mb-6"
        >
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-linear-to-br from-yellow-300 to-orange-400 rounded-2xl lg:rounded-3xl shadow-2xl mb-3 lg:mb-4 relative"
          >
            <motion.div
              className="absolute inset-0 bg-white/40 rounded-2xl lg:rounded-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <RiCalendarEventFill className="text-3xl lg:text-5xl text-white relative z-10" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1 -right-1 lg:-top-2 lg:-right-2"
            >
              <RiSparklingFill className="text-xl lg:text-3xl text-yellow-200" />
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 lg:mb-3 relative"
            style={{
              textShadow: "4px 4px 0px rgba(0,0,0,0.2)",
              letterSpacing: "-0.02em",
            }}
            animate={{
              textShadow: [
                "4px 4px 0px rgba(0,0,0,0.2)",
                "6px 6px 0px rgba(0,0,0,0.15)",
                "4px 4px 0px rgba(0,0,0,0.2)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            EVENTOS
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-20 h-1 lg:w-24 lg:h-1.5 bg-white mx-auto rounded-full mb-2 lg:mb-3"
          />

          <p className="text-base md:text-base lg:text-lg text-white font-medium max-w-2xl mx-auto leading-relaxed px-4">
            Creación de experiencias llenas de{" "}
            <span className="bg-yellow-300 text-purple-900 px-2 py-1 rounded-lg text-base lg:text-base">
              diseño
            </span>
            ,{" "}
            <span className="bg-pink-400 text-white px-2 py-1 rounded-lg text-base lg:text-base">
              emoción
            </span>{" "}
            y{" "}
            <span className="bg-cyan-400 text-purple-900 px-2 py-1 rounded-lg text-base lg:text-base">
              estilo
            </span>
          </p>
        </motion.div>

        {/* GRID con diseño de tarjetas inclinadas */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 max-w-4xl mx-auto w-full">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, rotateY: -20 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{
                scale: 1.08,
                rotateZ: i % 2 === 0 ? 3 : -3,
                y: -10,
              }}
              className="relative group cursor-pointer"
            >
              {/* Sombra de color */}
              <motion.div
                className={`absolute inset-0 bg-linear-to-br ${event.linear} rounded-2xl lg:rounded-3xl blur-xl opacity-60`}
                whileHover={{ opacity: 80, scale: 1.1 }}
              />

              {/* Tarjeta principal */}
              <div className="relative bg-white rounded-2xl lg:rounded-3xl p-4 lg:p-6 shadow-2xl overflow-hidden border-2 lg:border-4 border-white h-full flex flex-col justify-between">
                {/* Patrón de fondo */}
                <div className="absolute inset-0 opacity-5">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `radial-linear(circle, ${event.color} 1px, transparent 1px)`,
                      backgroundSize: "20px 20px",
                    }}
                  />
                </div>

                {/* Badge de color */}
                <motion.div
                  className={`absolute top-2 right-2 lg:top-3 lg:right-3 w-8 h-8 lg:w-8 lg:h-8 bg-linear-to-br ${event.linear} rounded-full`}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-4xl lg:text-6xl mb-3 lg:mb-4 relative z-10 drop-shadow-lg"
                >
                  {event.emoji}
                </motion.div>

                <div>
                  <h3 className="text-lg lg:text-2xl font-black text-gray-900 mb-1 lg:mb-2 relative z-10">
                    {event.title}
                  </h3>

                  <p className="text-xs lg:text-sm text-gray-600 font-medium relative z-10">
                    {event.subtitle}
                  </p>
                </div>

                {/* Efecto de brillo al hover */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-br from-white/0 via-white/40 to-white/0"
                  initial={{ x: "-100%", skewX: -20 }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer con botón */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-4 lg:mt-6 text-center"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="text-white text-base lg:text-base font-medium flex items-center justify-center gap-2 mb-4"
          >
            <RiSparklingFill className="text-yellow-300 text-base lg:text-xl" />
            Transformamos ideas en experiencias memorables
            <RiSparklingFill className="text-yellow-300 text-base lg:text-xl" />
          </motion.div>

          {/* Botón Ver Portafolio */}
          <button
            className="relative group"
            onClick={() => {
              router.push("/portfolio");
            }}
          >
            <div className="absolute inset-0 bg-linear-to-r from-yellow-300 via-pink-400 to-purple-500 rounded-full blur-md" />
            <div className="relative bg-white rounded-full px-6 py-3 lg:px-8 lg:py-3 font-bold text-sm lg:text-base text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-600 border-2 lg:border-3 border-purple-600 shadow-xl flex items-center gap-2 transition-all duration-200 active:scale-95 active:shadow-lg active:border-purple-700">
              <RiImageLine className="text-white text-lg lg:text-xl" />
              <span className="text-white">Ver Portafolio de Trabajo</span>
            </div>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
