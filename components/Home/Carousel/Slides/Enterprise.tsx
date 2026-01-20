import { motion } from "framer-motion";
import { FaBusinessTime, FaRocket, FaAward, FaUsers } from "react-icons/fa";
import { RiTeamFill, RiStarFill } from "react-icons/ri";
import { useState, useEffect } from "react";

export default function Enterprise() {
  const [particles, setParticles] = useState<Array<{
    id: number;
    width: number;
    height: number;
    left: number;
    top: number;
    duration: number;
    delay: number;
  }>>([]);

  // Generar partículas solo en el cliente
  useEffect(() => {
    const generatedParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      width: Math.random() * 8 + 2,
      height: Math.random() * 8 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <div className="w-full h-full relative bg-linear-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
      {/* Fondo con partículas animadas - Solo se renderiza en cliente */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-cyan-400/20"
            style={{
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Elementos decorativos flotantes */}
      <motion.div
        className="absolute top-20 left-10 opacity-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <FaRocket className="text-4xl text-cyan-400" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10 opacity-20"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <FaAward className="text-4xl text-purple-400" />
      </motion.div>

      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-around px-4 md:px-8 lg:px-16 py-8 lg:py-12">
        {/* Contenido principal */}
        <div className="text-white space-y-6 lg:space-y-8 text-center lg:text-left mb-8 lg:mb-0 max-w-2xl">
          {/* Badge mejorado */}
          <div
            className="flex items-center justify-center lg:justify-start gap-3"
            
          >
            <div className="p-2 bg-cyan-500/20 rounded-lg">
              <FaBusinessTime className="text-2xl md:text-3xl text-cyan-400" />
            </div>
            <span className="text-sm md:text-base font-bold bg-linear-to-r from-cyan-500 to-blue-600 px-4 py-2 rounded-full border border-cyan-400/50 shadow-lg">
              SOLUCIONES CORPORATIVAS
            </span>
          </div>

          {/* Título principal */}
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"            
          >
            Impulsa Tu{" "}
            <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Empresa
            </span>
            <br />
            Al Siguiente Nivel
          </h2>

          {/* Descripción */}
          <p
            className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl leading-relaxed"            
          >
            Productos promocionales <span className="text-cyan-300">personalizados</span> que 
            fortalecen tu identidad corporativa, fidelizan clientes y 
            <span className="text-blue-300"> aumentan tu visibilidad</span>.
          </p>

          {/* Características */}
          <div
            className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start"           
          >
            {[
              { icon: RiStarFill, text: "Alta Calidad", color: "text-yellow-400" },
              { icon: FaUsers, text: "+500 Empresas", color: "text-cyan-400" },
              { icon: FaAward, text: "Garantía", color: "text-purple-400" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 bg-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/20">
                <item.icon className={`text-sm md:text-lg ${item.color}`} />
                <span className="text-xs md:text-sm font-medium text-white">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Botones de acción - OPTIMIZADOS PARA MÓVIL */}
          <div
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start"
           
          >
            <motion.button
              className="bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-3 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-2 md:gap-3 justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open(
                  "https://wa.me/5212281255258?text=Hola! Quiero cotizar productos personalizados.",
                  "_blank"
                )
              }
            >
              <FaBusinessTime className="text-sm md:text-base" />
              Cotizar Proyecto
            </motion.button>
            
            <motion.button
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-4 py-3 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-lg transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open(
                  "https://wa.me/5212281255258?text=Hola! Me gustaría más información.",
                  "_blank"
                )
              }
            >
              Más Información
            </motion.button>
          </div>
        </div>

        {/* Elemento visual derecho */}
        <div
          className="relative"
          
        >
          {/* Círculo principal */}
          <div className="relative w-48 h-48 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Círculo de fondo animado */}
            <motion.div
              className="absolute inset-0 bg-linear-to-br from-cyan-400/10 to-purple-500/10 rounded-full border border-cyan-400/30 backdrop-blur-sm"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            {/* Círculo interior */}
            <div className="absolute inset-3 md:inset-4 bg-linear-to-br from-blue-500/20 to-purple-600/20 rounded-full border border-white/10 backdrop-blur-sm flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <RiTeamFill className="text-4xl md:text-6xl lg:text-8xl text-cyan-400" />
              </motion.div>
            </div>

            {/* Badge flotante */}
            <motion.div
              className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-linear-to-r from-yellow-400 to-orange-400 text-blue-900 px-3 py-2 md:px-4 md:py-3 rounded-full font-bold shadow-2xl"
              animate={{
                y: [0, -8, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm lg:text-base">
                <FaUsers className="text-xs md:text-sm" />
                +500 EMPRESAS
              </div>
            </motion.div>

            {/* Puntos decorativos */}
            <motion.div
              className="absolute -bottom-1 -left-1 md:-bottom-2 md:-left-2 w-4 h-4 md:w-6 md:h-6 bg-cyan-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <motion.div
              className="absolute top-2 -left-2 md:top-4 md:-left-4 w-3 h-3 md:w-4 md:h-4 bg-purple-400 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}