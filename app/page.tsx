// "use client";

// import Image from "next/image";
// import { Button } from "@heroui/react";
// import { AiFillProduct } from "react-icons/ai";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export default function Home() {
//   const router = useRouter();

//   const [stars, setStars] = useState<
//     { x: number; y: number; size: number; delay: number }[]
//   >([]);

//   useEffect(() => {
//     const generatedStars = Array.from({ length: 100 }).map(() => ({
//       x: Math.random() * 100,
//       y: Math.random() * 100,
//       size: Math.random() * 2 + 1,
//       delay: Math.random() * 5,
//     }));
//     setStars(generatedStars);
//   }, []);

//   return (
//     <div className="relative flex min-h-screen items-center justify-center font-sans overflow-hidden bg-black">
//       {/* Fondo de estrellas */}
//       {stars.map((_, i) => {
//         const size = Math.random() * 2 + 1; // tamaño estrella
//         const posX = Math.random() * 100; // posición horizontal %
//         const posY = Math.random() * 100; // posición vertical %
//         const delay = Math.random() * 5; // delay aleatorio
//         const duration = Math.random() * 5 + 5; // duración animación

//         return (
//           <motion.div
//             key={i}
//             className="absolute rounded-full bg-white"
//             style={{
//               width: size,
//               height: size,
//               top: `${posY}%`,
//               left: `${posX}%`,
//               opacity: 0.8,
//             }}
//             animate={{ opacity: [0.2, 1, 0.2] }}
//             transition={{
//               repeat: Infinity,
//               repeatType: "loop",
//               duration,
//               delay,
//               ease: "easeInOut",
//             }}
//           />
//         );
//       })}

//       {/* Gradiente overlay */}
//       <div className="absolute inset-0 bg-linear-to-t from-blue-900 via-black to-black opacity-70"></div>

//       {/* Contenido centrado */}
//       <motion.main
//         className="relative z-10 flex flex-col items-center justify-center w-full max-w-3xl p-16"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <motion.div
//           className="mb-6"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
//         >
//           <Image
//             src="/img/logo-light.png"
//             alt="unaidea+ logo"
//             width={300}
//             height={20}
//             priority
//             style={{ filter: "drop-shadow(0 0 10px rgba(0, 0, 0, 1))" }}
//           />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
//         >          
//             <Button
//               className="border-white text-white"
//               color="default"
//               variant="ghost"
//               radius="full"
//               startContent={<AiFillProduct size={24} />}
//               onPress={() => router.push("/categories")}
//             >
//               Ver productos
//             </Button>         
//         </motion.div>
        
//       </motion.main>      
//     </div>
//   );
// }


// "use client";

// import Image from "next/image";
// import { Button } from "@heroui/react";
// import { AiFillProduct } from "react-icons/ai";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// export default function Home() {
//   const router = useRouter();

//   const [stars, setStars] = useState<
//     { x: number; y: number; size: number; delay: number; duration: number }[]
//   >([]);

//   useEffect(() => {
//     // Generamos estrellas aleatorias
//     const generatedStars = Array.from({ length: 120 }).map(() => ({
//       x: Math.random() * 100,
//       y: Math.random() * 100,
//       size: Math.random() * 2 + 0.5,
//       delay: Math.random() * 6,
//       duration: Math.random() * 4 + 3,
//     }));
//     setStars(generatedStars);
//   }, []);

//   return (
//     <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-[#020617] via-[#0b1120] to-black text-white font-sans">
//       {/* Fondo animado: estrellas */}
//       {stars.map((star, i) => (
//         <motion.div
//           key={i}
//           className="absolute rounded-full bg-white"
//           style={{
//             width: star.size,
//             height: star.size,
//             top: `${star.y}%`,
//             left: `${star.x}%`,
//             opacity: 0.8,
//           }}
//           animate={{
//             opacity: [0.1, 1, 0.1],
//             y: ["0%", "0%", "0%"], // permanece estático
//           }}
//           transition={{
//             repeat: Infinity,
//             repeatType: "mirror",
//             duration: star.duration,
//             delay: star.delay,
//             ease: "easeInOut",
//           }}
//         />
//       ))}

//       {/* Gradiente etéreo flotante */}
//       <motion.div
//         className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#3b82f6_0%,transparent_60%)] opacity-30"
//         animate={{
//           scale: [1, 1.1, 1],
//           opacity: [0.2, 0.4, 0.2],
//         }}
//         transition={{
//           duration: 12,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       {/* Cometa ocasional */}
//       <motion.div
//         className="absolute h-[2px] w-32 bg-gradient-to-r from-transparent via-white to-transparent opacity-80 blur-[1px]"
//         initial={{ x: "-10%", y: "20%", opacity: 0 }}
//         animate={{
//           x: ["-10%", "110%"],
//           y: ["20%", "15%", "25%", "20%"],
//           opacity: [0, 1, 0],
//         }}
//         transition={{
//           duration: 6,
//           delay: Math.random() * 5,
//           repeat: Infinity,
//           repeatDelay: 10,
//           ease: "easeInOut",
//         }}
//       />

//       {/* Contenido principal */}
//       <motion.main
//         className="relative z-10 flex flex-col items-center justify-center text-center p-8"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
//         >
//           <Image
//             src="/img/logo-light.png"
//             alt="unaidea+ logo"
//             width={260}
//             height={80}
//             priority
//             className="drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]"
//           />
//         </motion.div>

//         <motion.p
//           className="mt-6 text-gray-300 max-w-md text-base leading-relaxed"
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6 }}
//         >
//           Crea, personaliza y descubre productos únicos.  
//           Inspirados en tu imaginación, hechos realidad.
//         </motion.p>

//         <motion.div
//           className="mt-10"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.8, duration: 0.5 }}
//         >
//           <Button
//             className="px-8 py-6 text-lg font-medium text-white border border-white/60 hover:border-blue-500 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 rounded-full bg-transparent"
//             variant="ghost"
//             radius="full"
//             startContent={<AiFillProduct size={22} />}
//             onPress={() => router.push("/categories")}
//           >
//             Ver productos
//           </Button>
//         </motion.div>
//       </motion.main>

//       {/* Suave degradado de niebla inferior */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/60 to-transparent" />
//     </div>
//   );
// }


"use client";

import Image from "next/image";
import { Button } from "@heroui/react";
import { AiFillProduct } from "react-icons/ai";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [stars, setStars] = useState<
    { x: number; y: number; size: number; delay: number; opacity: number }[]
  >([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 80 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 0.5,
      delay: Math.random() * 4,
      opacity: Math.random() * 0.8 + 0.2,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="relative flex min-h-screen items-center justify-center font-sans overflow-hidden bg-black">
      {/* Fondo de galaxia sutil */}
      <div className="absolute inset-0 bg-linear-to-br from-black via-blue-900 to-black opacity-90"></div>
      
      {/* Nebulosa central */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-20 blur-3xl"
        animate={{
          background: [
            "radial-gradient(circle, rgba(120,80,200,0.3) 0%, transparent 70%)",
            "radial-gradient(circle, rgba(80,120,220,0.4) 0%, transparent 70%)",
            "radial-gradient(circle, rgba(120,80,200,0.3) 0%, transparent 70%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Estrellas con efecto de brillo más sutil */}
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size,
            height: star.size,
            top: `${star.y}%`,
            left: `${star.x}%`,
            opacity: star.opacity,
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.5)`,
          }}
          animate={{ 
            opacity: [star.opacity * 0.3, star.opacity, star.opacity * 0.3],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: Math.random() * 4 + 3,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Estrellas fugaces ocasionales */}
      <motion.div
        className="absolute top-0 left-0 w-1 h-1 bg-white rounded-full"
        animate={{
          x: [0, 1000],
          y: [0, 500],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: Math.random() * 15 + 10,
          ease: "easeOut",
        }}
      />

      {/* Contenido principal */}
      <motion.main
        className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl p-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Logo con efecto de brillo sutil */}
        <motion.div
          className="mb-8 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-white/10 blur-xl rounded-full scale-80"></div>
          <Image
            src="/img/logo-light.png"
            alt="unaidea+ logo"
            width={280}
            height={60}
            priority
            className="relative z-10 drop-shadow-2xl"
            style={{ filter: "drop-shadow(0 0 10px rgba(0, 0, 0, 0.5))" }}
          />
        </motion.div>

        {/* Botón con efecto de borde luminoso */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className="relative overflow-hidden border border-white/30 bg-black/40 backdrop-blur-md text-white px-8 py-6 text-lg font-light tracking-wider"
              radius="full"
              startContent={<AiFillProduct className="text-xl" />}
              onPress={() => router.push("/categories")}
            >
              <span className="relative z-10">Explorar Productos</span>
              
              {/* Efecto de brillo en hover */}
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </Button>
          </motion.div>
        </motion.div>

        {/* Texto descriptivo minimalista */}
        <motion.p
          className="text-white/60 text-sm mt-6 text-center tracking-wide font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          Donde las ideas cobran vida
        </motion.p>
      </motion.main>
    </div>
  );
}

