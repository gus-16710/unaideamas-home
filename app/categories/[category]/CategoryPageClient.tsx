"use client";

import { AiFillProduct } from "react-icons/ai";
import { motion } from "framer-motion";
import {
  BreadcrumbItem,
  Breadcrumbs,
  Card,
  CardBody,
  CardFooter,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { FiExternalLink } from "react-icons/fi";
import { useProductStore } from "@/store/product.store";
import WhatsAppButton from "@/components/WhatsAppButton";
import FloatinButton from "@/components/FloatingButton";
import ActionButtons from "@/components/ActionButtons";

interface CategoryPageClientProps {
  category: string;
}

export default function CategoryPageClient({
  category,
}: CategoryPageClientProps) {
  const router = useRouter();
  const { getProductsByCategory, getCategoryByUrl } = useProductStore();

  const products = getProductsByCategory(category);
  const categoryDetails = getCategoryByUrl(category);

  return (
    <div
      className="min-h-screen font-sans w-full relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%, #f8fafc 100%)",
      }}
    >
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

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12"
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
              {categoryDetails?.icon && categoryDetails.icon}
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
            Categoría - {category.charAt(0).toUpperCase() + category.slice(1)}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 text-lg max-w-2xl px-4"
          >
            Explora los productos disponibles en la categoría{" "}
            <strong>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </strong>
            .
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
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
            <BreadcrumbItem
              className="text-gray-800"
              onPress={() => router.push("/categories")}
            >
              Categorías
            </BreadcrumbItem>
            <BreadcrumbItem
              className="text-gray-800 font-medium"
              onPress={() => router.push("/categories")}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </BreadcrumbItem>
          </Breadcrumbs>
        </motion.div>

        {/* Products Grid */}
        {products.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto shadow-lg border border-white/50">
              <AiFillProduct size={48} className="text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No hay productos disponibles
              </h3>
              <p className="text-gray-500">
                Próximamente agregaremos productos a esta categoría.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {products.map((product) => (
              <div key={product.id}>
                <Card
                  isPressable
                  className="w-full h-full border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm"
                  onPress={() => {
                    router.push(`/products/${product.id}`);
                  }}
                >
                  <div className="relative overflow-hidden cursor-pointer">
                    <img
                      src={product.imagenes_urls[0]}
                      alt={product.nombre}
                      className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-black/70 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                        ID: {product.id}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <CardBody className="p-4">
                    <h3 className="font-bold text-lg text-gray-800 line-clamp-2 mb-2">
                      {product.nombre}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                      {product.descripcion}
                    </p>
                  </CardBody>

                  <CardFooter className="p-4 pt-0">
                    <div className="w-full">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                          {product.capacidad}
                        </span>
                        <span className="text-xs text-gray-500">
                          {product.colores_disponibles.length} colores
                        </span>
                      </div>
                      <div className="w-full text-sm bg-linear-to-r from-blue-500 to-cyan-500 text-white font-medium py-2 px-4 rounded-lg shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2">
                        Ver detalles
                        <FiExternalLink size={14} />
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </motion.div>
        )}
      </div>

      <ActionButtons />
    </div>
  );
}
