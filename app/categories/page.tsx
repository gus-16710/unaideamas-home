"use client";

import { AiFillProduct } from "react-icons/ai";
import { motion } from "framer-motion";
import { BreadcrumbItem, Breadcrumbs, Card, CardBody, Badge, Chip } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useProductStore } from "@/store/product.store";
import { FiPackage, FiGrid, FiArrowRight } from "react-icons/fi";

export default function Categories() {
  const router = useRouter();
  const { categories, getProductsCountByCategory } = useProductStore();

  const totalCategories = categories.length;
  const totalProducts = categories.reduce((total, category) => {
    return total + getProductsCountByCategory(category.url);
  }, 0);

  return (
    // FONDO PRINCIPAL - Tailwind v4 compatible
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

      {/* Contenido */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 py-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-8"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-4"
          >
            <div
              className="p-3 rounded-2xl shadow-lg"
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
              }}
            >
              <AiFillProduct size={32} className="text-white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-2 px-4 pb-1"
            style={{
              background: "linear-gradient(135deg, #1e293b 0%, #475569 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Categorías de Productos
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 text-lg max-w-2xl px-4 mb-4"
          >
            Descubre nuestra cuidadosa selección de productos organizados por categorías
          </motion.p>

          {/* Estadísticas generales */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mb-2"
          >
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-2 shadow-sm border border-white/50">
              <FiGrid className="text-blue-500" size={18} />
              <span className="text-sm font-medium text-gray-700">
                {totalCategories} Categorías
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-2 shadow-sm border border-white/50">
              <FiPackage className="text-green-500" size={18} />
              <span className="text-sm font-medium text-gray-700">
                {totalProducts} Productos
              </span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <Breadcrumbs
            classNames={{
              list: "bg-white/70 backdrop-blur-sm rounded-lg px-4 py-2 shadow-sm border border-white/50",
            }}
          >
            <BreadcrumbItem
              onPress={() => router.push("/")}
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              Inicio
            </BreadcrumbItem>
            <BreadcrumbItem className="text-gray-800 font-medium">
              Categorías
            </BreadcrumbItem>
          </Breadcrumbs>
        </motion.div>

        {/* Categories Grid */}
        <div className="w-full mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
            {categories.map((category, index) => {
              const productCount = getProductsCountByCategory(category.url);
              
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  className="w-full"
                >
                  <Card
                    isPressable
                    onPress={() => router.push(`/categories/${category.url}`)}
                    className="group rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden w-full h-full border border-gray-100 bg-white/90 backdrop-blur-sm"
                  >
                    <CardBody className="p-0 w-full">
                      <div className="relative overflow-hidden w-full">
                        {/* Imagen de la categoría */}
                        <motion.img
                          src={category.img}
                          alt={category.name}
                          className="w-full h-48 object-cover"
                          whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.4, ease: "easeOut" },
                          }}
                        />

                        {/* Badge de cantidad de productos */}
                        <div className="absolute top-4 left-4">
                          <Chip 
                            variant="flat" 
                            className="bg-black/50 text-white backdrop-blur-sm"
                            startContent={<AiFillProduct className="text-sm" />}
                          >                            
                            {productCount} {productCount === 1 ? 'producto' : 'productos'}
                          </Chip>
                        </div>                       

                        {/* Título principal (siempre visible) */}
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <div
                            className="rounded-xl p-1 transform transition-all duration-300 group-hover:bg-white/10 group-hover:backdrop-blur-sm"
                            style={{
                              background: "linear-gradient(135deg, rgba(59, 130, 246, 0.95) 0%, rgba(139, 92, 246, 0.9) 100%)",
                              backdropFilter: "blur(0.5px)",
                            }}
                          >
                            <h3 className="text-white text-lg font-semibold text-center drop-shadow-lg mb-1">
                              {category.name}
                            </h3>                            
                          </div>
                        </div>

                        {/* Indicador de hover */}
                        <motion.div
                          className="absolute top-4 right-4 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300"
                          style={{
                            width: "40px",
                            height: "40px",
                            background: "rgba(255, 255, 255, 0.9)",
                            backdropFilter: "blur(8px)",
                          }}
                          whileHover={{ rotate: 90 }}
                        >
                          <div
                            className="rounded-full"
                            style={{
                              width: "8px",
                              height: "8px",
                              background: "#3b82f6",
                            }}
                          />
                        </motion.div>
                      </div>

                      {/* Información adicional debajo de la imagen */}
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                            Categoría
                          </span>
                          <Badge variant="flat" color="primary" size="sm">
                            ID: {category.id}
                          </Badge>
                        </div>
                        
                        <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                          {category.description}
                        </p>
                        
                        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                          <span className="text-xs text-gray-500">
                            {productCount} productos
                          </span>
                          <div className="flex items-center text-blue-600 text-xs font-medium">
                            Explorar
                            <FiArrowRight size={12} className="ml-1" />
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
