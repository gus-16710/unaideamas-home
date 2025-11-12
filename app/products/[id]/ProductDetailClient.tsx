"use client";

import { motion } from "framer-motion";
import {
  BreadcrumbItem,
  Breadcrumbs,
  Button,
  Card,
  CardBody,
  Badge,
  Chip,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useProductStore } from "@/store/product.store";
import {
  FiArrowLeft,
  FiPackage,
  FiMapPin,
  FiBox,
  FiLayers,
  FiZoomIn,
} from "react-icons/fi";
import { TbRulerMeasure2 } from "react-icons/tb";
import { MdOutlineColorLens, MdOutlineZoomOutMap } from "react-icons/md";
import { useEffect, useState } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import FloatinButton from "@/components/FloatingButton";
import ActionButtons from "@/components/ActionButtons";

interface ProductDetailClientProps {
  product: any;
}

export default function ProductDetailClient({
  product,
}: ProductDetailClientProps) {
  const router = useRouter();
  const { setSelectedProduct } = useProductStore();
  const [selectedImage, setSelectedImage] = useState(0);

  const [openGallery, setOpenGallery] = useState(false);

  useEffect(() => {
    setSelectedProduct(product);
  }, [product, setSelectedProduct]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

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

      <div className="max-w-4xl mx-auto px-4 py-8 relative z-10">
        {/* Breadcrumbs mejorado */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Breadcrumbs
            classNames={{
              list: "bg-white/80 backdrop-blur-xl rounded-2xl px-6 py-3 shadow-sm border border-white/60 shadow-black/5",
            }}
          >
            <BreadcrumbItem
              onPress={() => router.push("/")}
              className="text-gray-500 hover:text-blue-600 transition-colors duration-200 text-sm font-medium"
            >
              Inicio
            </BreadcrumbItem>
            <BreadcrumbItem
              onPress={() => router.push("/categories")}
              className="text-gray-500 hover:text-blue-600 transition-colors duration-200 text-sm font-medium"
            >
              Categorías
            </BreadcrumbItem>
            <BreadcrumbItem
              onPress={() => router.push(`/categories/${product.categoria}`)}
              className="text-gray-500 hover:text-blue-600 transition-colors duration-200 text-sm font-medium"
            >
              {product.categoria?.charAt(0).toUpperCase() +
                product.categoria?.slice(1)}
            </BreadcrumbItem>
            <BreadcrumbItem className="text-gray-900 font-semibold text-sm">
              {product.nombre}
            </BreadcrumbItem>
          </Breadcrumbs>
        </motion.div>

        {/* Contenido principal con layout mejorado */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Sección de imágenes - Mejorada */}
          <motion.div variants={itemVariants as any} className="space-y-6">
            {/* Imagen principal con efecto hover */}
            <motion.div
              variants={imageVariants as any}
              className="group relative"
            >
              <Card
                className="overflow-hidden border-none shadow-xl rounded-3xl bg-white/90 backdrop-blur-sm"
                isPressable
                onPress={() =>
                  //window.open(product.imagenes_urls[selectedImage], "_blank")
                  setOpenGallery(true)
                }
              >
                <CardBody className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.imagenes_urls[selectedImage]}
                      alt={product.nombre}
                      className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute right-0 bottom-0 m-4 bg-gray-600/70 rounded-full p-2">
                      <MdOutlineZoomOutMap size={24} className="text-white" />
                    </div>
                  </div>
                </CardBody>
              </Card>

              {/* Badge flotante */}
              <div className="absolute top-4 left-4 z-10">
                <Badge
                  color="primary"
                  variant="solid"
                  className="backdrop-blur-sm bg-white/20 text-white border-none shadow-lg"
                >
                  ID: {product.id}
                </Badge>
              </div>
            </motion.div>

            <Lightbox
              open={openGallery}
              close={() => setOpenGallery(false)}
              slides={product.imagenes_urls.map((url: string) => ({
                src: url,
              }))}
              index={selectedImage}
              controller={{
                closeOnBackdropClick: true,
                closeOnPullDown: true,
                closeOnPullUp: true,
              }}
            />

            {/* Miniaturas mejoradas */}
            {product.imagenes_urls.length > 1 && (
              <motion.div
                variants={itemVariants as any}
                className="grid grid-cols-4 gap-3"
              >
                {product.imagenes_urls.map((img: string, index: number) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Card
                      isPressable
                      className={`overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
                        selectedImage === index
                          ? "border-blue-500 shadow-lg shadow-blue-500/20"
                          : "border-transparent hover:border-gray-300"
                      }`}
                      onPress={() => setSelectedImage(index)}
                    >
                      <CardBody className="p-0">
                        <img
                          src={img}
                          alt={`${product.nombre} ${index + 1}`}
                          className="w-full h-20 object-cover"
                        />
                      </CardBody>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* Información del producto - Mejorada */}
          <motion.div variants={itemVariants as any} className="space-y-6">
            {/* Header del producto */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 flex-wrap">
                <Chip
                  color="primary"
                  variant="flat"
                  className="bg-blue-50 text-blue-700 border-blue-200"
                >
                  {product.categoria}
                </Chip>
                <Chip
                  color="success"
                  variant="flat"
                  className="bg-green-50 text-green-700 border-green-200"
                  startContent={<FiMapPin size={12} />}
                >
                  {product.origen}
                </Chip>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                {product.nombre}
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-600 text-lg leading-relaxed"
              >
                {product.descripcion}
              </motion.p>
            </div>

            {/* Especificaciones en cards mejoradas */}
            <motion.div variants={itemVariants as any}>
              <Card className="border-none shadow-lg rounded-2xl bg-white/80 backdrop-blur-sm overflow-hidden">
                <CardBody className="p-6 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 rounded-xl">
                      <FiPackage className="text-blue-600" size={20} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Especificaciones Técnicas
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {/* Capacidad */}
                    {product.capacidad && (
                      <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-gray-50/50 hover:bg-gray-50 transition-colors">
                        <span className="text-gray-600 flex items-center gap-2 font-medium">
                          <FiBox size={16} />
                          Capacidad:
                        </span>
                        <span className="font-semibold text-gray-800">
                          {product.capacidad}
                        </span>
                      </div>
                    )}

                    {/* Material exterior */}
                    <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-gray-50/50 hover:bg-gray-50 transition-colors">
                      <span className="text-gray-600 flex items-center gap-2 font-medium">
                        <FiLayers size={16} />
                        Material exterior:
                      </span>
                      <span className="font-semibold text-gray-800">
                        {product.material.exterior}
                      </span>
                    </div>

                    {/* Material interior */}
                    {product.material.interior && (
                      <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-gray-50/50 hover:bg-gray-50 transition-colors">
                        <span className="text-gray-600 flex items-center gap-2 font-medium">
                          <FiLayers size={16} />
                          Material interior:
                        </span>
                        <span className="font-semibold text-gray-800">
                          {product.material.interior}
                        </span>
                      </div>
                    )}
                  </div>
                </CardBody>
              </Card>
            </motion.div>

            {/* Colores disponibles mejorados */}
            {product.colores_disponibles.length > 0 && (
              <motion.div variants={itemVariants as any}>
                <Card className="border-none shadow-lg rounded-2xl bg-white/80 backdrop-blur-sm overflow-hidden">
                  <CardBody className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-purple-100 rounded-xl">
                        <MdOutlineColorLens
                          className="text-purple-600"
                          size={20}
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Colores Disponibles
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product.colores_disponibles.map(
                        (color: string, index: number) => (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <div
                              className="w-6 h-6 rounded-full border border-gray-200 shadow-sm"
                              style={{ background: color }}
                            ></div>
                          </motion.div>
                        )
                      )}
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            )}

            {/* Medidas mejoradas */}
            <motion.div variants={itemVariants as any}>
              <Card className="border-none shadow-lg rounded-2xl bg-white/80 backdrop-blur-sm overflow-hidden">
                <CardBody className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-green-100 rounded-xl">
                      <TbRulerMeasure2 className="text-green-600" size={20} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Dimensiones
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(product.medidas).map(([key, value]) => (
                      <motion.div
                        key={key}
                        whileHover={{ scale: 1.02 }}
                        className="text-center p-4 bg-linear-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200/50"
                      >
                        <div className="text-sm text-gray-500 font-medium capitalize mb-1">
                          {key.replace("_", " ")}
                        </div>
                        <div className="font-bold text-gray-800 text-lg">
                          {value as string}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </motion.div>

            {/* Acciones mejoradas */}
            <motion.div
              variants={itemVariants as any}
              className="flex gap-4 pt-2"
            >
              <Button
                onPress={() => router.back()}
                variant="flat"
                startContent={<FiArrowLeft size={18} />}
                className="flex-1 h-14 text-base font-semibold rounded-xl bg-white/80 backdrop-blur-sm border border-gray-300/50 hover:bg-white transition-all duration-300"
              >
                Volver
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <ActionButtons />
    </div>
  );
}
