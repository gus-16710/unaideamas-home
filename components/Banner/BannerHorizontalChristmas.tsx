import { motion } from "framer-motion";

export default function BannerHorizontalChristmas() {
  // Configuración de animación para las estrellas
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
      className="relative z-10 mb-10 overflow-hidden"
      style={{ backgroundColor: "#cae9d8" }}
    >
      <div className="flex flex-col items-center justify-center lg:flex-row">
        {/* Imagen izquierda */}
        <img
          src="/img/sliders/banner-002.png"
          alt=""
          className="h-52 md:h-64 lg:h-72 object-cover order-2 lg:order-1 hidden lg:block"
        />

        {/* Bloque de texto */}
        <div className="order-1 lg:order-2 flex flex-col items-center justify-center text-center pt-10 lg:py-15">
          <h1 className="text-4xl md:text-5xl text-green-900 font-bold">
            ¡Regala alegría esta Navidad!
          </h1>
          <p className="text-lg text-green-900 font-bold mt-4 max-w-xl">
            Sorprende con regalos únicos y personalizados esta Navidad 🎁.
          </p>
          <button
            className="mt-6 bg-red-500 px-8 py-3 text-white rounded-xl shadow-md font-medium hover:bg-red-600 transition"
            onClick={() => {
              const element = document.getElementById("grid-categories");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explorar regalos
          </button>
        </div>

        {/* Imagen derecha */}
        <img
          src="/img/sliders/banner-001.png"
          alt=""
          className="h-52 md:h-64 lg:h-72 object-cover order-3 lg:order-3 hidden lg:block pl-5"
        />
      </div>

      {/* Imágenes en móvil/tablet (solo visibles ahí) */}
      <div className="flex justify-center gap-5 mt-5 lg:hidden mb-5">
        <img
          src="/img/sliders/banner-002.png"
          alt=""
          className="h-48 md:h-56 object-cover"
        />
        <img
          src="/img/sliders/banner-001.png"
          alt=""
          className="h-48 md:h-56 object-cover"
        />
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
