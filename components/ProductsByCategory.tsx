import { useProductStore } from "@/store/product.store";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Link,
  Tab,
  Tabs,
} from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";

export default function ProductsByCategory() {
  const { categories, getProductsByCategory, getProductsCountByCategory } =
    useProductStore();

  const router = useRouter();

  return (
    <div className="flex w-full flex-col mt-10">
      <Tabs
        aria-label="Productos por categoría"
        items={categories}
        variant="bordered"
      >
        {(category) => {
          const allProducts = getProductsByCategory(category.url);
          const productCount = getProductsCountByCategory(category.url);
          const products = allProducts.slice(0, 6); // 👈 Mostrar solo los primeros 6
          const Icon = category.icon!;

          return (
            <Tab
              key={category.id}
              title={
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center">
                    <Icon className={`${category.color}`} />
                  </span>
                  <span>{category.name}</span>
                  <span className="text-small text-default-400">
                    ({productCount})
                  </span>
                </div>
              }
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Header de la categoría */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {category.name}
                    </h2>
                    <p className="text-gray-600 max-w-2xl">
                      {category.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {productCount}
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                      {productCount === 1
                        ? "producto disponible"
                        : "productos disponibles"}
                    </div>
                  </div>
                </div>

                {products.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                      <FaInfoCircle className="text-3xl text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">
                      No hay productos disponibles
                    </h3>
                    <p className="text-gray-500">
                      Próximamente agregaremos productos en esta categoría.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                  >
                    <AnimatePresence>
                      {products.slice(0, 6).map((product, index) => (
                        <motion.div
                          key={product.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          whileHover={{
                            y: -8,
                            transition: { duration: 0.2 },
                          }}
                          className="h-full"
                        >
                          <Card
                            isHoverable
                            isPressable
                            shadow="sm"
                            className="h-full border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300"
                            onPress={() =>
                              router.push(`/products/${product.id}`)
                            }
                          >
                            {/* Imagen */}
                            <div className="p-0 relative h-48">
                              {product.imagenes_urls &&
                              product.imagenes_urls[0] ? (
                                <img
                                  src={product.imagenes_urls[0]}
                                  alt={product.nombre}
                                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center bg-gray-50">
                                  <Icon
                                    className={`text-4xl opacity-20 ${category.color}`}
                                  />
                                </div>
                              )}

                              {/* ID badge */}
                              <div className="absolute top-3 left-3">
                                <span className="bg-black/80 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                                  {product.id}
                                </span>
                              </div>
                            </div>

                            {/* Contenido */}
                            <CardBody className="p-5">
                              <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                                {product.nombre}
                              </h3>

                              <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                                {product.descripcion}
                              </p>

                              {/* Especificaciones */}
                              <div className="space-y-2 mb-4">
                                {product.capacidad && (
                                  <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                    <span>Capacidad: {product.capacidad}</span>
                                  </div>
                                )}
                                {product.material?.exterior && (
                                  <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                    <span>
                                      Material: {product.material.exterior}
                                    </span>
                                  </div>
                                )}
                              </div>

                              {/* Colores disponibles */}
                              {product.colores_disponibles &&
                                product.colores_disponibles.length > 0 && (
                                  <div className="mb-4">
                                    <div className="flex items-center gap-2 mb-2">
                                      <span className="text-xs font-medium text-gray-500">
                                        Colores:
                                      </span>
                                      <div className="flex gap-1">
                                        {product.colores_disponibles
                                          .slice(0, 4)
                                          .map((color, idx) => (
                                            <div
                                              key={idx}
                                              className="w-4 h-4 rounded-full border border-gray-200 shadow-sm"
                                              style={{
                                                backgroundColor:
                                                  getColorValue(color),
                                              }}
                                              title={color}
                                            />
                                          ))}
                                        {product.colores_disponibles.length >
                                          4 && (
                                          <div className="w-4 h-4 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center">
                                            <span className="text-xs text-gray-500">
                                              +
                                              {product.colores_disponibles
                                                .length - 4}
                                            </span>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                )}
                            </CardBody>

                            {/* Footer */}
                            <CardFooter className="flex items-center justify-between border-t border-gray-100 bg-gray-50/40 px-5 py-3">
                              <span className="text-xs font-medium text-gray-500">
                                {product.origen}
                              </span>

                              <Link
                                size="sm"
                                color="primary"
                                className="font-medium flex items-center gap-1"
                                onPress={() =>
                                  router.push(`/products/${product.id}`)
                                }
                              >
                                Más detalles
                                <FaExternalLinkAlt className="text-xs" />
                              </Link>
                            </CardFooter>
                          </Card>
                        </motion.div>
                      ))}

                      {/* 👇 Tarjeta de "ver más productos" */}
                      {allProducts.length > 6 && (
                        <motion.div
                          key="see-more"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          whileHover={{ scale: 1.05 }}
                          onClick={() =>
                            window.open(`/categories/${category.url}`, "_self")
                          }
                          className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-blue-400 rounded-2xl p-8 text-center text-blue-600 hover:bg-blue-50 transition-all"
                        >
                          <Icon className="text-4xl mb-3" />
                          <h4 className="font-semibold text-lg">
                            Ver más productos
                          </h4>
                          <p className="text-sm text-blue-500 mt-1">
                            Explora toda la categoría {category.name}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </motion.div>
            </Tab>
          );
        }}
      </Tabs>
    </div>
  );
}

// Mapeo de nombres de colores a HEX
function getColorValue(colorName: string): string {
  const colorMap: { [key: string]: string } = {
    Negro: "#000000",
    Blanco: "#FFFFFF",
    Rojo: "#DC2626",
    Azul: "#2563EB",
    Verde: "#16A34A",
    Amarillo: "#EAB308",
    Naranja: "#EA580C",
    Rosa: "#EC4899",
    Morado: "#9333EA",
    Gris: "#6B7280",
    Plata: "#C0C0C0",
    Oro: "#FFD700",
    Turquesa: "#06B6D4",
    Beige: "#F5F5DC",
    Vino: "#7F1D1D",
    "Azul marino": "#1E3A8A",
    "Verde claro": "#22C55E",
    "Azul claro": "#60A5FA",
    "Rosa pastel": "#FBCFE8",
    "Verde pastel": "#BBF7D0",
  };

  return colorMap[colorName] || "#E5E7EB";
}
