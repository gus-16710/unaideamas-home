"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PromoShirts() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [snowflakes, setSnowflakes] = useState<
    Array<{
      id: number;
      left: number;
      delay: number;
      duration: number;
      size: number;
    }>
  >([]);

  const images = [
    "/img/sliders/shirt1.jpeg",
    "/img/sliders/shirt2.jpeg",
    "/img/sliders/shirt3.jpeg",
  ];

  // Generar copos de nieve solo en el cliente
  useEffect(() => {
    const generatedSnowflakes = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 50,
      size: 10 + Math.random() * 20,
    }));
    setSnowflakes(generatedSnowflakes);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.div
      className="w-full h-full flex flex-col lg:flex-row items-center justify-center px-8 py-10 text-white relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, rgb(127, 29, 29) 0%, rgb(185, 28, 28) 45%, rgb(220, 38, 38) 75%, rgb(233 23 23) 100%)",
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Copos de nieve animados - solo se renderizan en cliente */}
      {snowflakes.map((snowflake) => (
        <motion.div
          key={snowflake.id}
          className="absolute pointer-events-none z-0"
          style={{
            left: `${snowflake.left}%`,
            top: "-5%",
            width: `${snowflake.size}px`,
            height: `${snowflake.size}px`,
          }}
          animate={{
            y: ["0vh", "100vh"],
            x: [0, Math.random() * 50 - 25],
            rotate: [0, 360],
          }}
          transition={{
            duration: snowflake.duration,
            repeat: Infinity,
            delay: snowflake.delay,
            ease: "linear",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-full h-full opacity-10"
          >
            <path
              className="fill-white"
              d="M422.804,332.819c-34.87-7.132-11.07-25.884,15.846-33.085c26.899-7.201,16.591-45.641-11.708-35.981   c-28.308,9.634-56.711,41.967-71.333,33.514c-11.69-6.746-31.178-17.982-38.502-22.217c1.881-6.02,2.888-12.425,2.888-19.049   c0-6.624-1.006-13.029-2.888-19.041c7.324-4.226,26.811-15.48,38.502-22.226c14.622-8.435,43.025,23.888,71.333,33.531   c28.298,9.643,38.606-28.798,11.708-35.999c-26.916-7.202-50.717-25.936-15.846-33.086c34.861-7.114,66.187-31.65,54.899-51.18   c-11.288-19.531-48.17-4.673-71.797,21.955c-23.582,26.618-27.913-3.369-20.712-30.267c7.202-26.908-31.212-37.189-37.014-7.858   c-5.819,29.332,7.98,70.116-6.633,78.543c-11.717,6.764-31.212,18.018-38.528,22.244c-8.637-9.38-20.056-16.145-32.954-19.05   c0-8.435,0-30.959,0-44.469c0-16.871,42.186-25.315,64.709-45.004c22.497-19.688-5.626-47.828-25.332-28.141   c-19.697,19.706-47.812,30.95-36.559-2.817C284.128,39.385,278.554,0,255.987,0c-22.55,0-28.132,39.385-16.88,73.135   c11.253,33.767-16.862,22.523-36.55,2.817c-19.706-19.688-47.83,8.453-25.332,28.141c22.515,19.689,64.708,28.133,64.708,45.004   c0,13.51,0,36.034,0,44.469c-12.898,2.905-24.326,9.669-32.954,19.05c-7.315-4.226-26.811-15.48-38.528-22.244   c-14.613-8.426-0.84-49.211-6.632-78.543c-5.802-29.331-44.225-19.05-37.014,7.858c7.193,26.898,2.896,56.886-20.712,30.267   C82.468,123.327,45.585,108.469,34.297,128c-11.288,19.531,20.038,44.067,54.899,51.18c34.853,7.15,11.052,25.884-15.855,33.086   c-26.881,7.201-16.591,45.642,11.708,35.999c28.308-9.643,56.72-41.966,71.333-33.531c11.7,6.746,31.186,18,38.493,22.226   c-1.873,6.012-2.87,12.416-2.87,19.041c0,6.624,0.997,13.029,2.87,19.049c-7.306,4.236-26.793,15.471-38.493,22.217   c-14.613,8.453-43.026-23.879-71.333-33.514c-28.299-9.66-38.589,28.78-11.708,35.981c26.907,7.202,50.725,25.954,15.855,33.085   c-34.861,7.115-66.188,31.65-54.899,51.181c11.288,19.54,48.171,4.673,71.797-21.955c23.608-26.618,27.904,3.369,20.712,30.268   c-7.21,26.907,31.213,37.188,37.014,7.858c5.792-29.323-7.981-70.091,6.632-78.543c11.717-6.764,31.213-18.018,38.528-22.235   c8.628,9.38,20.056,16.136,32.954,19.041c0,8.435,0,30.959,0,44.469c0,16.87-42.194,25.315-64.708,45.003   c-22.498,19.689,5.626,47.83,25.332,28.141c19.688-19.706,47.803-30.95,36.55,2.818c-11.253,33.758-5.67,73.135,16.88,73.135   c22.567,0,28.141-39.377,16.897-73.135c-11.253-33.768,16.862-22.524,36.559-2.818c19.706,19.688,47.829-8.452,25.332-28.141   c-22.523-19.688-64.709-28.133-64.709-45.003c0-13.51,0-36.034,0-44.469c12.898-2.905,24.317-9.66,32.954-19.041   c7.315,4.218,26.811,15.471,38.528,22.235c14.613,8.452,0.814,49.22,6.633,78.543c5.802,29.331,44.215,19.05,37.014-7.858   c-7.201-26.899-2.896-56.886,20.712-30.268c23.627,26.628,60.509,41.494,71.797,21.955   C488.991,364.469,457.665,339.934,422.804,332.819z M255.987,292.27c-20.012,0-36.253-16.232-36.253-36.27   c0-20.03,16.241-36.262,36.253-36.262c20.038,0,36.27,16.232,36.27,36.262C292.257,276.038,276.025,292.27,255.987,292.27z"
            />
          </svg>
        </motion.div>
      ))}

      {/* Resto del código permanece igual */}
      {/* Luces navideñas - optimizadas para mobile */}
      <div className="absolute top-0 left-0 right-0 h-3 md:h-4 flex justify-around px-2 z-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 md:w-3 md:h-3 rounded-full"
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            style={{
              backgroundColor: ["#ff0000", "#00ff00", "#ffff00"][i % 3],
            }}
          />
        ))}
      </div>

      {/* ELEMENTOS DECORATIVOS FLOTANTES */}
      {/* Copos estáticos */}
      <motion.div
        className="absolute top-10 left-10 text-white text-4xl opacity-30 z-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        ❄️
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-16 text-white text-3xl opacity-30 z-10"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        ❄️
      </motion.div>

      {/* Estrellas */}
      <motion.div
        className="absolute top-20 right-10 text-yellow-300 text-3xl opacity-40 z-10"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        ⭐
      </motion.div>

      <motion.div
        className="absolute bottom-24 left-5 text-yellow-200 text-2xl opacity-40 z-10"
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        ⭐
      </motion.div>

      {/* Esfera decorativa */}
      <div className="absolute top-[50%] left-[50%] text-red-300 text-5xl opacity-20 z-10">
        🎄
      </div>

      {/* TEXTO */}
      <div className="flex flex-col gap-4 max-w-lg text-center lg:text-left relative z-10">
        <h2 className="text-3xl lg:text-5xl font-extrabold drop-shadow-md">
          🎄 Playeras Navideñas Personalizadas
        </h2>

        <p className="text-base lg:text-xl font-light leading-relaxed">
          Diseña tu playera navideña a tu gusto. Colores vivos, tela ligera,
          sublimación de alta calidad y entrega rápida.
        </p>

        <div className="text-2xl lg:text-4xl font-bold text-yellow-300 drop-shadow-md">
          ✨ Desde $149.90 MXN ✨
        </div>

        <ul className="hidden lg:block text-md lg:text-lg mt-2 space-y-2">
          <li>✔ Diseño personalizado</li>
          <li>✔ Sublimación de alta calidad</li>
          <li>✔ Tallas para niño, dama y caballero</li>
          <li>✔ Perfectas para posadas, familias y regalos</li>
        </ul>

        <button          
          className="inline-block mt-6 px-8 py-3 rounded-full font-semibold text-white 
             bg-green-600 border-2 border-yellow-300 shadow-[0_0_20px_rgba(255,215,0,0.4)]
             hover:bg-green-700 hover:shadow-[0_0_30px_rgba(255,215,0,0.6)]
             transition-all duration-300 z-10 relative"
              onClick={() =>
                window.open(
                  "https://wa.me/5212281255258?text=Hola! Me interesa cotizar las Camisetas Navideñas Personalizadas.",
                  "_blank"
                )
              }
        >
          ✨📲 Ordenar por WhatsApp ✨
        </button>
      </div>

      {/* IMAGEN */}
      <div className="relative w-72 h-72 lg:w-96 lg:h-96 mb-6 lg:mb-0 z-10 mt-10 lg:mt-0">
        <motion.img
          key={currentImageIndex}
          src={images[currentImageIndex]}
          alt="Playera Navideña"
          className="object-contain drop-shadow-2xl w-4/4 h-4/4 rotate-3"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: 1,
            scale: [1, 1.05, 1],
          }}
          transition={{
            opacity: { duration: 0.8, ease: "easeInOut" },
            scale: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      </div>
    </motion.div>
  );
}
