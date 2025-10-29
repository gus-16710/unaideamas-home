"use client";

import { AiFillProduct } from "react-icons/ai";
import { motion } from "framer-motion";
import { BreadcrumbItem, Breadcrumbs, Card, CardBody } from "@heroui/react";
import { useRouter } from "next/navigation";

const categoriesList = [
  { id: 1, name: "Termos", img: "/img/categories/termos.jpg", url: "termos" },
  {
    id: 2,
    name: "Agendas y Libretas",
    img: "/img/categories/agendas.jpg",
    url: "agendas",
  },
  { id: 3, name: "Bolsas", img: "/img/categories/bolsas.jpg", url: "bolsas" },
  {
    id: 4,
    name: "Lapiceros",
    img: "/img/categories/lapiceros.jpg",
    url: "lapiceros",
  },
];

const termos = [
  {
    modelo: "A2198",
    nombre: "Ishtar",
    descripcion:
      "Termo metálico con interior plástico, tapa de rosca hermética, boquilla y tapa abatible con seguro.",
    capacidad: "500 ml",
    material: {
      exterior: "Acero inoxidable",
      interior: "Plástico",
    },
    medidas: {
      diametro: "7 cm",
      altura: "21.5 cm",
    },
    empaque: {
      tipo: "Caja individual",
      color: "Blanco",
    },
    colores_disponibles: ["Rojo", "Negro", "Azul", "Oro"],
    origen: "Hecho en México",
    precio_lista: "Consultar precio",
    disponibilidad: "Consultar inventario",
    url_producto: "https://doblevela.com/items/index/A2198",
    imagenes_urls: ["https://doblevela.com/images/large/A2198_lrg.jpg?v=2"],
  },
  {
    modelo: "A2337",
    nombre: "ZEKI",
    descripcion:
      "Termo metálico de 400 ml con diseño ergonómico, acabado en esmalte blanco y banda superior de silicón en color. Cuenta con interior en acero inoxidable, tapa de rosca hermética, seguro para líquidos con bisagra en color y goma anti derrapante en la base.",
    capacidad: "400 ml",
    material: {
      exterior: "Acero inoxidable",
      interior: "Acero inoxidable",
    },
    medidas: {
      diametro: "7.8 cm",
      altura: "19.5 cm",
    },
    empaque: {
      tipo: "Caja individual",
      color: "Blanco",
    },
    colores_disponibles: ["Negro", "Naranja", "Morado", "Verde", "Azul"],
    origen: "Hecho en México",
    precio_lista: "Consultar precio",
    disponibilidad: "Consultar inventario",
    url_producto: "https://doblevela.com/items/index/A2337",
    imagenes_urls: ["https://doblevela.com/images/large/A2198_lrg.jpg?v=2"],
  },
  {
    modelo: "A2334",
    nombre: "MANZUR",
    descripcion:
      "Termo metálico de acero inoxidable con interior de plástico. Tapa de rosca hermética abatible con boquilla y hendidura, para beber cómodamente los líquidos sin que se derramen. Cintillo intermedio de silicón. Cuerpo diseñado con finos detalles en relieve que le dan un toque elegante y de presencia.",
    capacidad: "470 ml",
    material: {
      exterior: "Acero inoxidable",
      interior: "Plástico",
    },
    medidas: {
      diametro: "7 cm",
      altura: "21.5 cm",
    },
    empaque: {
      tipo: "Caja individual",
      color: "Blanco",
    },
    colores_disponibles: ["Plata", "Rojo", "Negro", "Azul"],
    origen: "Hecho en México",
    precio_lista: "Consultar precio",
    disponibilidad: "Consultar inventario",
    url_producto: "https://doblevela.com/items/index/A2334",
    imagenes_urls: ["https://doblevela.com/images/large/A2198_lrg.jpg?v=2"],
  },
  {
    modelo: "A2430",
    nombre: "YAGO",
    descripcion:
      "Termo de plástico de doble pared con cuerpo en acabado brillante. Cuenta con tapa a presión y seguro deslizable. Capacidad de 590 ml. Presentación en caja individual de color blanco. Libre de BPA.",
    capacidad: "590 ml",
    material: {
      exterior: "Plástico AS",
      interior: "Plástico",
    },
    medidas: {
      diametro: "8.8 cm",
      altura: "19 cm",
    },
    empaque: {
      tipo: "Caja individual",
      color: "Blanco",
    },
    colores_disponibles: ["Amarillo", "Naranja", "Rosa"],
    origen: "Hecho en México",
    precio_lista: "Consultar precio",
    disponibilidad: "Consultar inventario",
    url_producto: "https://doblevela.com/items/index/A2430",
    imagenes_urls: ["https://doblevela.com/images/large/A2198_lrg.jpg?v=2"],
  },
  {
    modelo: "A2524",
    nombre: "BLIZAN",
    descripcion:
      "Termo de acero inoxidable con interior de plástico. Cuenta con tapa de cierre a presión y seguro deslizable al color del interior. Diseño poligonal.",
    capacidad: "350 ml",
    material: {
      exterior: "Acero inoxidable",
      interior: "Plástico PP",
    },
    medidas: {
      diametro: "8.3 cm",
      altura: "13 cm",
    },
    empaque: {
      tipo: "Caja individual",
      color: "Blanco",
    },
    colores_disponibles: ["Rojo", "Verde", "Naranja", "Azul", "Negro"],
    origen: "Hecho en México",
    precio_lista: "Consultar precio",
    disponibilidad: "Consultar inventario",
    url_producto: "https://doblevela.com/items/index/A2524",
    imagenes_urls: ["https://doblevela.com/images/large/A2198_lrg.jpg?v=2"],
  },
  {
    modelo: "A2525",
    nombre: "BLIZAN M",
    descripcion:
      "Termo de acero inoxidable acabado mate con interior de plástico. Cuenta con tapa de cierre a presión y seguro deslizable en color negro. Diseño poligonal. Capacidad de 350 ml.",
    capacidad: "350 ml",
    material: {
      exterior: "Acero inoxidable",
      interior: "Plástico PP",
    },
    medidas: {
      diametro: "8.3 cm",
      altura: "13 cm",
    },
    empaque: {
      tipo: "Bolsa de plástico",
      color: "Transparente",
    },
    colores_disponibles: ["Negro", "Rojo", "Azul"],
    origen: "Hecho en México",
    precio_lista: "Consultar precio",
    disponibilidad: "Consultar inventario",
    url_producto: "https://doblevela.com/items/index/A2525",
    imagenes_urls: ["https://doblevela.com/images/large/A2198_lrg.jpg?v=2"],
  },
  {
    modelo: "A2631",
    nombre: "CANDEL",
    descripcion:
      "Termo de acero inoxidable de 350 ml con doble pared aislada al vacío, mantiene las bebidas frías por 20 horas y calientes por 10 horas. Cuenta con asa, acabado en polvo plástico y tapa a presión transparente con seguro deslizable.",
    capacidad: "350 ml",
    material: {
      exterior: "Acero inoxidable 304",
      interior: "Acero inoxidable",
    },
    medidas: {
      diametro: "8.7 cm",
      altura: "11.7 cm",
    },
    empaque: {
      tipo: "Caja individual",
      color: "Blanco",
    },
    colores_disponibles: ["Negro", "Blanco"],
    origen: "Hecho en México",
    precio_lista: "Consultar precio",
    disponibilidad: "Consultar inventario",
    url_producto: "https://doblevela.com/items/index/A2631",
    imagenes_urls: ["https://doblevela.com/images/large/A2198_lrg.jpg?v=2"],
  },
  {
    modelo: "A2645",
    nombre: "JUNO",
    descripcion:
      "Termo de doble pared de acero inoxidable, insulado al vacío. Cuenta con acabado de polvo plástico. Mantiene las bebidas calientes por 10 hrs. y frías por 20 hrs. Incluye tapa a presión transparente con seguro deslizable.",
    capacidad: "350 ml",
    material: {
      exterior: "Acero inoxidable",
      interior: "Acero inoxidable",
    },
    medidas: {
      diametro: "9 cm",
      altura: "12 cm",
    },
    empaque: {
      tipo: "Caja individual",
      color: "Blanco",
    },
    colores_disponibles: ["Blanco", "Negro", "Rosa", "Azul claro", "Turquesa"],
    origen: "Hecho en México",
    precio_lista: "Consultar precio",
    disponibilidad: "Consultar inventario",
    url_producto: "https://doblevela.com/items/index/A2645",
    imagenes_urls: ["https://doblevela.com/images/large/A2198_lrg.jpg?v=2"],
  },
  {
    modelo: "A2636",
    nombre: "AKON",
    descripcion:
      "Termo con exterior de acero inoxidable e interior de plástico. Incluye tapa a presión transparente. Capacidad de 350 ml. Presentación: caja individual en color blanco.",
    capacidad: "350 ml",
    material: {
      exterior: "Acero inoxidable",
      interior: "Plástico",
    },
    medidas: {
      diametro: "9 cm",
      altura: "12 cm",
    },
    empaque: {
      tipo: "Caja individual",
      color: "Blanco",
    },
    colores_disponibles: [
      "Blanco",
      "Negro",
      "Naranja",
      "Rojo",
      "Rosa",
      "Verde claro",
      "Azul",
      "Azul claro",
      "Plata",
      "Turquesa",
    ],
    origen: "Hecho en México",
    precio_lista: "Consultar precio",
    disponibilidad: "Consultar inventario",
    url_producto: "https://doblevela.com/items/index/A2636",
    imagenes_urls: ["https://doblevela.com/images/large/A2198_lrg.jpg?v=2"],
  },
  {
    modelo: "A2704",
    nombre: "ALLEN",
    descripcion:
      "Termo de doble pared de acero inoxidable con exterior de bambú. Cuenta con tapa a presión con seguro deslizable. Capacidad de 445 ml. Presentación en caja individual de color blanco.",
    capacidad: "445 ml",
    material: {
      exterior: "Acero inoxidable con bambú",
      interior: "Acero inoxidable",
    },
    medidas: {
      diametro: "8.2 cm",
      altura: "17.5 cm",
    },
    empaque: {
      tipo: "Caja individual",
      color: "Blanco",
    },
    colores_disponibles: ["Natural (bambú)"],
    origen: "Hecho en México",
    precio_lista: "Consultar precio",
    disponibilidad: "Consultar inventario",
    url_producto: "https://doblevela.com/items/index/A2704",
    imagenes_urls: ["https://doblevela.com/images/large/A2198_lrg.jpg?v=2"],
  },
];

export default function Categories() {
  const router = useRouter();

  return (
    // FONDO PRINCIPAL - Tailwind v4 compatible
    <div
      className="min-h-screen font-sans w-full px-4 sm:px-6 py-8 relative overflow-hidden"
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
      <div className="relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-8 max-w-6xl mx-auto"
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
            className="text-3xl md:text-4xl font-bold mb-2 px-4"
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
            className="text-gray-600 text-lg max-w-2xl px-4"
          >
            Descubre nuestra cuidadosa selección de productos organizados por
            categorías
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 max-w-6xl mx-auto"
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
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
            {categoriesList.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="w-full"
              >
                <Card
                  isPressable
                  onPress={() => router.push(`/categories/${category.url}`)}
                  className="group rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden w-full h-full border"
                  style={{
                    background: "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(8px)",
                    borderColor: "rgba(255, 255, 255, 0.6)",
                  }}
                >
                  <CardBody className="p-0 w-full">
                    <div className="relative overflow-hidden w-full">
                      <motion.img
                        src={category.img}
                        alt={category.name}
                        className="w-full h-48 object-cover"
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.4, ease: "easeOut" },
                        }}
                      />

                      {/* Título mejorado */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div
                          className="rounded-xl p-3 transform transition-all duration-300"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(139, 92, 246, 0.8) 100%)",
                            backdropFilter: "blur(8px)",
                          }}
                        >
                          <h3 className="text-white text-lg font-semibold text-center drop-shadow-lg">
                            {category.name}
                          </h3>
                        </div>
                      </div>

                      {/* Hover Indicator */}
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
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center mt-16 max-w-6xl mx-auto"
        >
          <div className="flex space-x-2">
            {[1, 2, 3].map((dot) => (
              <motion.div
                key={dot}
                className="w-2 h-2 rounded-full bg-gray-400"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: dot * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
