"use client";

import Image from "next/image";
import { Button } from "@heroui/react";
import { AiFillProduct } from "react-icons/ai";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  const [stars, setStars] = useState<
    { x: number; y: number; size: number; delay: number }[]
  >([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 100 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="relative flex min-h-screen items-center justify-center font-sans overflow-hidden bg-black">
      {/* Fondo de estrellas */}
      {stars.map((_, i) => {
        const size = Math.random() * 2 + 1; // tamaño estrella
        const posX = Math.random() * 100; // posición horizontal %
        const posY = Math.random() * 100; // posición vertical %
        const delay = Math.random() * 5; // delay aleatorio
        const duration = Math.random() * 5 + 5; // duración animación

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: size,
              height: size,
              top: `${posY}%`,
              left: `${posX}%`,
              opacity: 0.8,
            }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration,
              delay,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* Gradiente overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-blue-900 via-black to-black opacity-70"></div>

      {/* Contenido centrado */}
      <motion.main
        className="relative z-10 flex flex-col items-center justify-center w-full max-w-3xl p-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src="/img/logo-light.png"
            alt="unaidea+ logo"
            width={300}
            height={20}
            priority
            style={{ filter: "drop-shadow(0 0 10px rgba(0, 0, 0, 1))" }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
        >          
            <Button
              className="border-white"
              color="default"
              variant="ghost"
              radius="full"
              startContent={<AiFillProduct size={24} />}
              onClick={() => router.push("/categories")}
            >
              Ver productos
            </Button>         
        </motion.div>
      </motion.main>
    </div>
  );
}
