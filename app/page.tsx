// "use client";

// import Image from "next/image";
// import { Button } from "@heroui/react";
// import { AiFillProduct } from "react-icons/ai";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import ActionButtons from "@/components/ActionButtons";

// export default function Home() {
//   const router = useRouter();

//   const [stars, setStars] = useState<
//     { x: number; y: number; size: number; delay: number; opacity: number }[]
//   >([]);

//   useEffect(() => {
//     const generatedStars = Array.from({ length: 80 }).map(() => ({
//       x: Math.random() * 100,
//       y: Math.random() * 100,
//       size: Math.random() * 3 + 0.5,
//       delay: Math.random() * 4,
//       opacity: Math.random() * 0.8 + 0.2,
//     }));
//     setStars(generatedStars);
//   }, []);

//   return (
//     <div className="relative flex min-h-screen items-center justify-center font-sans overflow-hidden bg-black bg-[url('/img/backgroundhome.jpg')] bg-cover bg-center">      
//       {/* Nebulosa central */}
//       <motion.div
//         className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-20 blur-3xl"
//         animate={{
//           background: [
//             "radial-gradient(circle, rgba(120,80,200,0.3) 0%, transparent 70%)",
//             "radial-gradient(circle, rgba(80,120,220,0.4) 0%, transparent 70%)",
//             "radial-gradient(circle, rgba(120,80,200,0.3) 0%, transparent 70%)",
//           ],
//         }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//       />

//       {/* Estrellas con efecto de brillo más sutil */}
//       {stars.map((star, i) => (
//         <motion.div
//           key={i}
//           className="absolute rounded-full bg-blue-800"
//           style={{
//             width: star.size,
//             height: star.size,
//             top: `${star.y}%`,
//             left: `${star.x}%`,
//             opacity: star.opacity,
//             boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.5)`,
//           }}
//           animate={{
//             opacity: [star.opacity * 0.3, star.opacity, star.opacity * 0.3],
//             scale: [0.8, 1.2, 0.8],
//           }}
//           transition={{
//             repeat: Infinity,
//             repeatType: "loop",
//             duration: Math.random() * 4 + 3,
//             delay: star.delay,
//             ease: "easeInOut",
//           }}
//         />
//       ))}

//       {/* Estrellas fugaces ocasionales */}
//       <motion.div
//         className="absolute top-0 left-0 w-1 h-1 bg-white rounded-full"
//         animate={{
//           x: [0, 1000],
//           y: [0, 500],
//           opacity: [0, 1, 0],
//         }}
//         transition={{
//           duration: 1.5,
//           repeat: Infinity,
//           repeatDelay: Math.random() * 15 + 10,
//           ease: "easeOut",
//         }}
//       />

//       {/* Contenido principal */}
//       <motion.main
//         className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl p-8"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//       >
//         {/* Logo con efecto de brillo sutil */}
//         <motion.div
//           className="mb-8 relative"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
//         >
//           <div className="absolute inset-0 bg-white/10 blur-xl rounded-full scale-80"></div>
//           <Image
//             src="/img/logo-light.png"
//             alt="unaidea+ logo"
//             width={280}
//             height={60}
//             priority
//             className="relative z-10"            
//           />
//         </motion.div>

//         {/* Botón con efecto de borde luminoso */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
//         >
//           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//             <Button
//               className="relative overflow-hidden border border-white/80 bg-emerald-700/40 backdrop-blur-md text-white px-8 py-6 text-lg font-light tracking-wider"
//               radius="full"
//               startContent={<AiFillProduct className="text-xl" />}
//               onPress={() => router.push("/categories")}
//             >
//               <span className="relative z-10">Explorar Productos</span>

//               {/* Efecto de brillo en hover */}
//               <motion.div
//                 className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent"
//                 initial={{ x: "-100%" }}
//                 whileHover={{ x: "100%" }}
//                 transition={{ duration: 0.6 }}
//               />
//             </Button>
//           </motion.div>
//         </motion.div>

//         {/* Texto descriptivo minimalista */}
//         <motion.p
//           className="text-zinc/60 mt-6 text-center tracking-wide font-light"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.9, duration: 0.5 }}
//         >
//           Donde las ideas cobran vida
//         </motion.p>
//       </motion.main>

//       <ActionButtons/>
//     </div>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { Alert } from "@heroui/react";
import { useState } from "react";
import { MdOutlineSell } from "react-icons/md";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import ContactCostumize from "@/components/ContactCostumize";
import FeaturesSection from "@/components/FeaturesSection";
import ContactHelp from "@/components/ContactHelp";
import CarouselCategories from "@/components/CarouselCategories";
import RandomProducts from "@/components/RandomProducts";
import ActionButtons from "@/components/ActionButtons";
import ProductsByCategory from "@/components/ProductsByCategory";
import BannerHorizontal from "@/components/BannerHorizontal";
import CategoriesImage from "../components/CategoriesImage";
import OtherProducts from "@/components/OtherProducts";
import CarouselTestimonials from "@/components/CarouselTestimonies";

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div
      className="min-h-screen font-sans w-full relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%, #f8fafc 100%)",
      }}
    >
      {/* Patrón geométrico sutil */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(30deg, #cbd5e1 12%, transparent 12.5%, transparent 87%, #cbd5e1 87.5%, #cbd5e1),
            linear-gradient(150deg, #cbd5e1 12%, transparent 12.5%, transparent 87%, #cbd5e1 87.5%, #cbd5e1),
            linear-gradient(30deg, #cbd5e1 12%, transparent 12.5%, transparent 87%, #cbd5e1 87.5%, #cbd5e1),
            linear-gradient(150deg, #cbd5e1 12%, transparent 12.5%, transparent 87%, #cbd5e1 87.5%, #cbd5e1)
          `,
          backgroundSize: "70px 122px",
          backgroundPosition: "0 0, 0 0, 35px 61px, 35px 61px",
        }}
      ></div>

      <motion.div
        className="relative bg-linear-to-r from-amber-500 to-orange-500 shadow-lg"
        // initial={{ opacity: 0, y: 40 }}
        // whileInView={{ opacity: 1, y: 0 }}
        //transition={{ duration: 0.8 }}
      >
        <Alert
          description={
            <div className="items-center gap-2 text-amber-900 flex">
              <span>
                Descubre los productos más recientes para tu negocio o evento.
              </span>
            </div>
          }
          isVisible={isVisible}
          title={
            <div className="flex items-center gap-2 text-amber-900">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                🔥
              </motion.div>
              <span className="font-bold">¡Nuevo catálogo disponible!</span>
            </div>
          }
          variant="solid"
          onClose={() => setIsVisible(false)}
          className="max-w-4xl mx-auto bg-transparent border-none shadow-none"
          icon={
            <motion.div
              animate={{
                rotate: [0, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <MdOutlineSell size={28} className="text-amber-900" />
            </motion.div>
          }
        />

        {/* Efecto decorativo */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-white/10 rounded-full -translate-x-10 -translate-y-10"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-white/10 rounded-full translate-x-8 translate-y-8"></div>

        {/* Patrón sutil */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-2 right-10 text-2xl">🎯</div>
          <div className="absolute bottom-2 left-10 text-xl">✨</div>
        </div>
      </motion.div>

      <Carousel />

      {/* Contenido */}
      <div
        className="relative z-10 max-w-4xl mx-auto px-4 pb-4"
        id="grid-categories"
      >
        {/* Header */}        
        <Breadcrumb />
        <CategoriesImage />
        {/* <ProductsByCategory /> */}
        <ContactHelp />
        <RandomProducts />
      </div>

      <BannerHorizontal />

      <div className="relative z-10 max-w-4xl mx-auto px-4 pb-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        ></motion.div>

        <CarouselTestimonials />
        {/* <CarouselCategories /> */}
        <OtherProducts />
        <ContactCostumize />
        <FeaturesSection />

        <Footer />
      </div>

      <ActionButtons />
    </div>
  );
}
