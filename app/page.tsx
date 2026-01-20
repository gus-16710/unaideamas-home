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
