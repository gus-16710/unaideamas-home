import { motion } from "framer-motion";
import { RiCalendarEventFill } from "react-icons/ri";

export default function Events() {
  // Animaciones reutilizables
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <div className="w-full h-full relative bg-linear-to-br from-orange-100 via-amber-100 to-yellow-100 overflow-hidden">
      {/* Elementos de celebración animados */}
      <motion.div
        className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-yellow-400/70 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 bg-orange-400/20 rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4 md:px-8 lg:px-16 py-6">
        <div className="mb-4 md:mb-6 lg:mb-8">
          <div>
            <RiCalendarEventFill className="text-4xl md:text-5xl lg:text-6xl text-orange-500 mb-2 md:mb-3 lg:mb-4 mx-auto" />
          </div>
          <motion.div
            className="bg-linear-to-r from-orange-500 to-amber-500 text-white px-4 py-1 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-bold inline-block"
            variants={fadeInUp}
          >
            EVENTOS Y CELEBRACIONES
          </motion.div>
        </div>

        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-4 md:mb-6 ">
          Personaliza Tus <br className="hidden" />
          <span className="bg-linear-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
            Eventos
          </span>
        </h2>

        <p className="text-sm lg:text-lg xl:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl">
          Bodas, aniversarios, conferencias - creamos productos únicos para cada
          ocasión especial
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8 w-full max-w-md sm:max-w-2xl">
          {[
            {
              emoji: "🎉",
              title: "Bodas",
              desc: "Recuerdos especiales",
              color: "orange",
              colorClass: "border-orange-200",
            },
            {
              emoji: "🏢",
              title: "Corporativos",
              desc: "Eventos empresariales",
              color: "amber",
              colorClass: "border-amber-200",
            },
            {
              emoji: "🎓",
              title: "Graduaciones",
              desc: "Logros memorables",
              color: "yellow",
              colorClass: "border-yellow-200",
            },
            {
              emoji: "🏆",
              title: "Deportivos",
              desc: "Torneos y competencias",
              color: "green",
              colorClass: "border-green-200",
            },
          ].map((item, index) => (
            <div key={index}>
              <div
                className={`bg-white rounded-xl md:rounded-2xl p-4 md:p-5 shadow-lg border ${item.colorClass} hover:shadow-xl transition-shadow`}
              >
                <motion.div
                  className="text-2xl md:text-3xl mb-2"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                >
                  {item.emoji}
                </motion.div>
                <div className="font-semibold text-gray-800 text-sm md:text-base">
                  {item.title}
                </div>
                <div className="text-xs md:text-sm text-gray-600">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
