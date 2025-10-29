"use client";

import Image from "next/image";
import { Button } from "@heroui/react";
import { AiFillProduct } from "react-icons/ai";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  console.log("Rendering Home Page");
  return (
    <div className="relative flex min-h-screen items-center justify-center font-sans overflow-hidden">
      {/* Fondo animado (zoom in/out lento) */}
      <motion.div
        className="absolute inset-0 bg-[url('/img/background.png')] bg-cover bg-center"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 60, // muy lento, casi imperceptible
          ease: "easeInOut",
        }}
      />

      {/* Gradiente overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-blue-700 via-zinc-950 to-gray-900 opacity-70"></div>

      {/* Contenido centrado con animaciones */}
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
          <Link href="/categories" passHref>
            <Button
              className="border-white"
              target="_blank"
              color="default"
              variant="ghost"
              radius="full"
              startContent={<AiFillProduct size={24} />}
            >
              Ver productos
            </Button>
          </Link>
        </motion.div>
      </motion.main>
    </div>
  );
}
