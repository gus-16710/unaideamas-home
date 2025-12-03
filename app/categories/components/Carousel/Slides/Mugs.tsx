import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Mugs() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/img/sliders/taza-navidad-01.png",
    "/img/sliders/taza-navidad-02.png",
    "/img/sliders/taza-navidad-03.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5000 ms = 5 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  const starAnimation = {
    initial: { scale: 0, rotate: 0 },
    animate: {
      scale: [0, 1, 0.8, 1],
      rotate: [0, 180, 360],
      opacity: [0, 1, 0.7, 1],
    },
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  const floatingStarAnimation = {
    animate: {
      y: [0, -15, 0],
      x: [0, 10, 0],
      rotate: [0, 10, 0],
      scale: [1, 1.1, 1],
    },
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  const pulseStarAnimation = {
    animate: {
      scale: [1, 1.3, 1],
      opacity: [0.6, 1, 0.6],
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
          "linear-gradient(160deg, #0a3931 0%, #0f4b43 50%, #1a8c78 100%)",
      }}
    >
      {/* Luces navideñas - optimizadas para mobile */}
      <div className="absolute top-0 left-0 right-0 h-3 md:h-4 flex justify-around px-2">
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

      {/* Elementos decorativos de fondo más sutiles en móvil */}
      <div className="absolute inset-0 opacity-15 md:opacity-20">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="_x32_"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
          className="absolute top-10 left-4 md:left-10 w-12 h-12 md:w-20 md:h-20 rounded-lg fill-zinc-50 -rotate-90"
          animate={{
            rotate: [0, 45, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <g>
            <path
              className="st0"
              d="M310.308,86.496c13.919,9.238,32.698,5.438,41.918-8.481c9.238-13.911,5.429-32.689-8.473-41.91   c-13.919-9.237-32.679-5.437-41.918,8.482C292.598,58.498,296.407,77.276,310.308,86.496z"
            />
            <path
              className="st0"
              d="M371.681,127.203c13.919,9.229,32.679,5.429,41.899-8.472c9.238-13.929,5.447-32.698-8.473-41.927   c-13.918-9.229-32.679-5.438-41.918,8.481C353.953,99.205,357.761,117.966,371.681,127.203z"
            />
            <path
              className="st0"
              d="M289.678,129.509c-9.22,13.91-5.429,32.689,8.491,41.908c13.901,9.238,32.679,5.447,41.918-8.472   c9.22-13.928,5.429-32.698-8.491-41.918C317.677,111.789,298.9,115.589,289.678,129.509z"
            />
            <path
              className="st0"
              d="M39.935,98.671c29.476,15.129,63.455,53.78,67.3,82.384c3.133,23.113,45.442-58.542,82.287,6.951   c12.264-8.775,34.69-43.502,70.949-22.712c3.043-5.633,7.422-10.839,12.442-15.539c-0.801-9.14,1.37-18.618,6.817-26.842   c0.748-1.104,1.514-2.162,2.332-3.194c-36.952-3.098-89.781-8.696-89.318-15.477c0.641-10.421,125.629-2.101,125.629-2.101   s-36.881-21.964-50.693-49.838c-38.608,16.038-56.442-21.306-67.478-31.558c-44.855,60.304-76.467-26.085-82.518-3.515   c-7.423,27.865-45.567,63.428-77.232,73.111C36.767,91.471,33.474,95.405,39.935,98.671z"
            />
            <path
              className="st0"
              d="M474.188,204.427c-13.741-6.177-55.054-8.126-55.285-49.919c-31.042-1.877-65.626-27.331-65.626-27.331   S409.522,239.1,400.16,243.763c-6.069,3.016-31.736-43.369-48.931-76.173c-0.409,0.676-0.783,1.317-1.21,1.958   c-5.553,8.366-13.599,14.079-22.498,16.874c-2.457,6.88-5.679,13.368-9.914,18.672c33.232,25.328,9.967,59.468,6.621,74.206   c74.687,8.482,15.913,79.226,38.429,73.093c27.857-7.61,76.627,8.704,102.063,30.001c5.536,4.646,7.885,0.08,7.476-3.72   c-3.382-32.964,14.524-81.922,37.326-99.632C527.978,264.704,436.097,269.18,474.188,204.427z"
            />
            <path
              className="st0"
              d="M342.151,298.337c-3.381-2.243-7.92-3.925-13.545-5.118c-3.15,11.953-7.298,24.092-12.193,36.195   c-23.068,56.967-8.01,78.727-8.864,105.311c-45.388-14.418-92.985-37.058-139.156-67.683   c-46.172-30.615-85.526-65.68-116.444-101.884c24.136-11.116,50.034-5.722,93.572-49.126   c10.146-10.137,20.736-19.463,31.558-27.572c-3.525-5.251-7.12-9.113-10.751-11.516c-1.78-1.183-3.578-1.939-5.393-2.358   c-10.021,7.734-20.06,16.634-30.152,26.663c-27.465,27.394-45.673,32.226-63.278,36.89c-18.6,4.93-39.692,10.51-60.998,39.398   c-3.916,5.296-8.135,14.347-5.874,27.189c2.172,12.193,10.413,33.187,56.852,74.295c4.93,4.334,10.039,8.704,15.183,12.966   c-3.274,13.074-2.634,26.726,1.549,39.23c4.787,14.258,14.221,27.136,27.678,36.061c13.491,8.954,29.013,12.629,43.982,11.464   c13.172-0.98,26.006-5.714,36.774-13.804c5.928,3.08,11.908,6.079,17.835,8.945c55.944,26.806,78.478,26.236,90.564,23.486   c12.71-2.902,19.401-10.306,22.766-15.975c18.333-30.864,15.272-52.455,12.566-71.518c-2.546-18.04-5.18-36.711,9.398-72.64   c4.646-11.552,8.473-22.668,11.552-33.428C346.138,301.727,344.466,299.876,342.151,298.337z M144.293,457.943   c-10.537,0.792-21.323-1.762-30.846-8.045c-9.504-6.336-16.055-15.298-19.454-25.301c-1.869-5.652-2.687-11.57-2.474-17.498   c13.1,10.155,25.275,18.956,33.944,24.688c8.65,5.75,21.484,13.545,35.938,21.662C155.987,455.941,150.22,457.481,144.293,457.943z    M295.873,470.75c-16.696,28.141-128.921-36.462-158.895-56.344C107.003,394.524,3.856,316.261,23.274,289.909   c7.085-9.567,13.795-15.806,20.523-20.212l-6.693,5.642c32.289,38.082,73.298,74.696,121.41,106.618   c48.112,31.906,97.79,55.454,145.421,70.388l2.598-8.348C305.093,451.9,301.96,460.507,295.873,470.75z"
            />
          </g>
        </motion.svg>

        <motion.div
          className="absolute bottom-10 right-4 md:right-10 w-10 h-10 md:w-16 md:h-16 bg-red-200 rounded-full"
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
      </div>

      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-center lg:gap-40 px-4 md:px-8 lg:px-16 py-4 md:py-8">
        {/* Imagen del producto - Más compacta en móvil */}
        <div className="flex justify-center mb-4 lg:mb-0">
          <div className="relative">
            <motion.div
              className="w-72 h-52 md:w-64 md:h-64 lg:w-96 lg:h-80 "
              animate={{
                y: [0, -8, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-full h-full flex items-center justify-center ">
                {/* Imagen de taza navideña - puedes reemplazar con tu imagen real */}
                <motion.img
                  key={currentImageIndex} // Key importante para forzar re-render
                  src={images[currentImageIndex]}
                  alt="Tazas Navideñas Personalizadas"
                  className="w-4/4 h-4/4 object-contain"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    opacity: { duration: 0.5 },
                  }}
                />
              </div>
            </motion.div>

            {/* Badge de oferta */}
            <motion.div
              className="absolute -top-1 -right-1 md:top-10 md:-right-2 bg-red-500 text-white px-2 py-1 rounded-full  font-bold rotate-12 shadow-lg"
              animate={{
                rotate: [12, -8, 12],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              🏷️ $29.90 c/u
            </motion.div>
          </div>
        </div>

        {/* Contenido optimizado para móvil */}
        <div className="flex flex-col text-gray-800 space-y-3 md:space-y-4 lg:space-y-6 max-w-lg text-center lg:text-left">
          {/* Badge compacto */}
          <div className="flex  items-center justify-center lg:justify-start gap-2">
            <span className="text-xs font-bold bg-white/70 px-3 py-1 rounded-full border border-white">
              PROMOCIÓN NAVIDEÑA
            </span>
          </div>

          {/* Título principal */}
          <h2 className="text-xl md:text-3xl lg:text-6xl font-bold leading-tight text-zinc-100">
            Tazas Navideñas
            <br />
            <span className="text-lg md:text-2xl lg:text-6xl">
              Personalizadas
            </span>
          </h2>

          {/* Descripción corta para móvil */}
          <div className="text-zinc-100">
            <p className="text-sm md:text-2xl leading-relaxed">
              Perfectas para regalos corporativos y eventos familiares. ¡A
              partir de 100 pzs!
            </p>

            {/* Información clave en badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-3 text-zinc-800">
              <span className="bg-white/60 px-2 py-1 rounded-full text-xs font-semibold">
                🎨 Diseños personalizados
              </span>
              <span className="bg-white/60 px-2 py-1 rounded-full text-xs font-semibold">
                🏢 Ideal para empresas
              </span>
              <span className="bg-white/60 px-2 py-1 rounded-full text-xs font-semibold">
                ⏱️ Por tiempo limitado
              </span>
            </div>
          </div>

          {/* Especificaciones */}
          <div className="grid grid-cols-2 gap-3 text-xs md:text-lg">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-1 mb-1">
                <div className="w-1.5 h-1.5 bg-zinc-100 rounded-full"></div>
                <span className="font-bold text-zinc-100">Entrega</span>
              </div>
              <p className="text-zinc-100">3-5 días hábiles</p>
            </div>

            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-1 mb-1">
                <div className="w-1.5 h-1.5 bg-zinc-100 rounded-full"></div>
                <span className="font-bold text-zinc-100">Material</span>
              </div>
              <p className="text-zinc-100">Cerámica premium</p>
            </div>
          </div>

          {/* Botones optimizados para móvil */}
          <div className="flex flex-col gap-2 pt-2 md:pt-2">
            <button
              className="bg-red-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-bold shadow-lg text-sm md:text-base"
              onClick={() =>
                window.open(
                  "https://wa.me/5212281255258?text=Hola! Me interesa cotizar las Tazas Navideñas Personalizadas.",
                  "_blank"
                )
              }
            >
              Cotizar Tazas
            </button>
            <button
              className="border border-zinc-100 text-zinc-100 hover:bg-red-600/20 px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base"
              onClick={() =>
                window.open(
                  "https://wa.me/5212281255258?text=Hola! Quiero más información sobre las Tazas Navideñas.",
                  "_blank"
                )
              }
            >
              Ver Diseños Disponibles
            </button>
          </div>
        </div>
      </div>

      {/* Estrellas animadas verdes */}
      <motion.svg
        width="32"
        height="32"
        viewBox="0 0 68 68"
        fill="none"
        className="absolute top-4 left-8 sm:left-12 w-6 h-6 sm:w-8 sm:h-8"
        {...starAnimation}
      >
        <path
          d="M34.3088 0.55798L36.1455 23.5444C36.4756 27.6642 39.7445 30.933 43.8642 31.2632L66.8507 33.0999C67.5947 33.1603 67.5947 34.2507 66.8507 34.3088L43.8642 36.1455C39.7445 36.4756 36.4756 39.7445 36.1455 43.8642L34.3088 66.8507C34.2484 67.5947 33.158 67.5947 33.0999 66.8507L31.2632 43.8642C30.933 39.7445 27.6642 36.4756 23.5444 36.1455L0.55798 34.3088C-0.185993 34.2484 -0.185993 33.158 0.55798 33.0999L23.5444 31.2632C27.6642 30.933 30.933 27.6642 31.2632 23.5444L33.0999 0.55798C33.158 -0.185993 34.2484 -0.185993 34.3088 0.55798Z"
          fill="#64A783"
        />
      </motion.svg>

      <motion.svg
        width="24"
        height="24"
        viewBox="0 0 68 68"
        fill="none"
        className="absolute top-1/4 left-1/4 w-5 h-5 sm:w-6 sm:h-6"
        {...floatingStarAnimation}
      >
        <path
          d="M34.3088 0.55798L36.1455 23.5444C36.4756 27.6642 39.7445 30.933 43.8642 31.2632L66.8507 33.0999C67.5947 33.1603 67.5947 34.2507 66.8507 34.3088L43.8642 36.1455C39.7445 36.4756 36.4756 39.7445 36.1455 43.8642L34.3088 66.8507C34.2484 67.5947 33.158 67.5947 33.0999 66.8507L31.2632 43.8642C30.933 39.7445 27.6642 36.4756 23.5444 36.1455L0.55798 34.3088C-0.185993 34.2484 -0.185993 33.158 0.55798 33.0999L23.5444 31.2632C27.6642 30.933 30.933 27.6642 31.2632 23.5444L33.0999 0.55798C33.158 -0.185993 34.2484 -0.185993 34.3088 0.55798Z"
          fill="#64A783"
        />
      </motion.svg>

      <motion.svg
        width="20"
        height="20"
        viewBox="0 0 68 68"
        fill="none"
        className="absolute bottom-8 left-12 sm:left-20 w-4 h-4 sm:w-5 sm:h-5"
        {...pulseStarAnimation}
      >
        <path
          d="M34.3088 0.55798L36.1455 23.5444C36.4756 27.6642 39.7445 30.933 43.8642 31.2632L66.8507 33.0999C67.5947 33.1603 67.5947 34.2507 66.8507 34.3088L43.8642 36.1455C39.7445 36.4756 36.4756 39.7445 36.1455 43.8642L34.3088 66.8507C34.2484 67.5947 33.158 67.5947 33.0999 66.8507L31.2632 43.8642C30.933 39.7445 27.6642 36.4756 23.5444 36.1455L0.55798 34.3088C-0.185993 34.2484 -0.185993 33.158 0.55798 33.0999L23.5444 31.2632C27.6642 30.933 30.933 27.6642 31.2632 23.5444L33.0999 0.55798C33.158 -0.185993 34.2484 -0.185993 34.3088 0.55798Z"
          fill="#64A783"
        />
      </motion.svg>

      <motion.svg
        width="28"
        height="28"
        viewBox="0 0 68 68"
        fill="none"
        className="absolute top-1/3 right-1/4 w-6 h-6 sm:w-7 sm:h-7"
        {...floatingStarAnimation}
      >
        <path
          d="M34.3088 0.55798L36.1455 23.5444C36.4756 27.6642 39.7445 30.933 43.8642 31.2632L66.8507 33.0999C67.5947 33.1603 67.5947 34.2507 66.8507 34.3088L43.8642 36.1455C39.7445 36.4756 36.4756 39.7445 36.1455 43.8642L34.3088 66.8507C34.2484 67.5947 33.158 67.5947 33.0999 66.8507L31.2632 43.8642C30.933 39.7445 27.6642 36.4756 23.5444 36.1455L0.55798 34.3088C-0.185993 34.2484 -0.185993 33.158 0.55798 33.0999L23.5444 31.2632C27.6642 30.933 30.933 27.6642 31.2632 23.5444L33.0999 0.55798C33.158 -0.185993 34.2484 -0.185993 34.3088 0.55798Z"
          fill="#64A783"
        />
      </motion.svg>

      {/* Estrellas animadas blancas */}
      <motion.svg
        width="36"
        height="36"
        viewBox="0 0 68 68"
        fill="none"
        className="absolute top-8 right-8 sm:right-12 w-7 h-7 sm:w-9 sm:h-9"
        {...starAnimation}
      >
        <path
          d="M34.3088 0.55798L36.1455 23.5444C36.4756 27.6642 39.7445 30.933 43.8642 31.2632L66.8507 33.0999C67.5947 33.1603 67.5947 34.2507 66.8507 34.3088L43.8642 36.1455C39.7445 36.4756 36.4756 39.7445 36.1455 43.8642L34.3088 66.8507C34.2484 67.5947 33.158 67.5947 33.0999 66.8507L31.2632 43.8642C30.933 39.7445 27.6642 36.4756 23.5444 36.1455L0.55798 34.3088C-0.185993 34.2484 -0.185993 33.158 0.55798 33.0999L23.5444 31.2632C27.6642 30.933 30.933 27.6642 31.2632 23.5444L33.0999 0.55798C33.158 -0.185993 34.2484 -0.185993 34.3088 0.55798Z"
          fill="#FFFFFF"
        />
      </motion.svg>

      <motion.svg
        width="22"
        height="22"
        viewBox="0 0 68 68"
        fill="none"
        className="absolute bottom-12 right-1/3 w-5 h-5 sm:w-6 sm:h-6"
        {...pulseStarAnimation}
      >
        <path
          d="M34.3088 0.55798L36.1455 23.5444C36.4756 27.6642 39.7445 30.933 43.8642 31.2632L66.8507 33.0999C67.5947 33.1603 67.5947 34.2507 66.8507 34.3088L43.8642 36.1455C39.7445 36.4756 36.4756 39.7445 36.1455 43.8642L34.3088 66.8507C34.2484 67.5947 33.158 67.5947 33.0999 66.8507L31.2632 43.8642C30.933 39.7445 27.6642 36.4756 23.5444 36.1455L0.55798 34.3088C-0.185993 34.2484 -0.185993 33.158 0.55798 33.0999L23.5444 31.2632C27.6642 30.933 30.933 27.6642 31.2632 23.5444L33.0999 0.55798C33.158 -0.185993 34.2484 -0.185993 34.3088 0.55798Z"
          fill="#FFFFFF"
        />
      </motion.svg>

      <motion.svg
        width="30"
        height="30"
        viewBox="0 0 68 68"
        fill="none"
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8"
        {...floatingStarAnimation}
      >
        <path
          d="M34.3088 0.55798L36.1455 23.5444C36.4756 27.6642 39.7445 30.933 43.8642 31.2632L66.8507 33.0999C67.5947 33.1603 67.5947 34.2507 66.8507 34.3088L43.8642 36.1455C39.7445 36.4756 36.4756 39.7445 36.1455 43.8642L34.3088 66.8507C34.2484 67.5947 33.158 67.5947 33.0999 66.8507L31.2632 43.8642C30.933 39.7445 27.6642 36.4756 23.5444 36.1455L0.55798 34.3088C-0.185993 34.2484 -0.185993 33.158 0.55798 33.0999L23.5444 31.2632C27.6642 30.933 30.933 27.6642 31.2632 23.5444L33.0999 0.55798C33.158 -0.185993 34.2484 -0.185993 34.3088 0.55798Z"
          fill="#FFFFFF"
        />
      </motion.svg>

      <motion.svg
        width="18"
        height="18"
        viewBox="0 0 68 68"
        fill="none"
        className="absolute top-12 right-20 w-4 h-4 sm:w-5 sm:h-5"
        {...pulseStarAnimation}
      >
        <path
          d="M34.3088 0.55798L36.1455 23.5444C36.4756 27.6642 39.7445 30.933 43.8642 31.2632L66.8507 33.0999C67.5947 33.1603 67.5947 34.2507 66.8507 34.3088L43.8642 36.1455C39.7445 36.4756 36.4756 39.7445 36.1455 43.8642L34.3088 66.8507C34.2484 67.5947 33.158 67.5947 33.0999 66.8507L31.2632 43.8642C30.933 39.7445 27.6642 36.4756 23.5444 36.1455L0.55798 34.3088C-0.185993 34.2484 -0.185993 33.158 0.55798 33.0999L23.5444 31.2632C27.6642 30.933 30.933 27.6642 31.2632 23.5444L33.0999 0.55798C33.158 -0.185993 34.2484 -0.185993 34.3088 0.55798Z"
          fill="#64A783"
        />
      </motion.svg>

      <motion.svg
        width="26"
        height="26"
        viewBox="0 0 68 68"
        fill="none"
        className="absolute top-1/2 left-10 w-5 h-5 sm:w-7 sm:h-7"
        {...starAnimation}
      >
        <path
          d="M34.3088 0.55798L36.1455 23.5444C36.4756 27.6642 39.7445 30.933 43.8642 31.2632L66.8507 33.0999C67.5947 33.1603 67.5947 34.2507 66.8507 34.3088L43.8642 36.1455C39.7445 36.4756 36.4756 39.7445 36.1455 43.8642L34.3088 66.8507C34.2484 67.5947 33.158 67.5947 33.0999 66.8507L31.2632 43.8642C30.933 39.7445 27.6642 36.4756 23.5444 36.1455L0.55798 34.3088C-0.185993 34.2484 -0.185993 33.158 0.55798 33.0999L23.5444 31.2632C27.6642 30.933 30.933 27.6642 31.2632 23.5444L33.0999 0.55798C33.158 -0.185993 34.2484 -0.185993 34.3088 0.55798Z"
          fill="#FFFFFF"
        />
      </motion.svg>
    </div>
  );
}
