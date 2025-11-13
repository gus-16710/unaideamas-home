import { useProductStore } from "@/store/product.store";
import { Card, CardBody, CardFooter, Chip, Link } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Category } from "@/types";

export default function ProductsByCategory() {
  const { categories, getProductsByCategory, getProductsCountByCategory } =
    useProductStore();

  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(false);

  // Seleccionar la primera categoría por defecto
  useEffect(() => {
    if (categories.length > 0 && !selectedCategory) {
      setSelectedCategory(categories[0]);
    }
  }, [categories, selectedCategory]);

  // Verificar scroll disponible
  const checkScroll = () => {
    const scrollContainer = document.querySelector(
      ".categories-scroll"
    ) as HTMLElement;
    if (scrollContainer) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
      setShowLeftScroll(scrollLeft > 10);
      setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollCategories = (direction: "left" | "right") => {
    const scrollContainer = document.querySelector(
      ".categories-scroll"
    ) as HTMLElement;
    if (scrollContainer) {
      const scrollAmount = 200;
      scrollContainer.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 300);
    }
  };

  useEffect(() => {
    const scrollContainer = document.querySelector(".categories-scroll");
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScroll);

      // Verificar scroll después del render
      setTimeout(checkScroll, 100);
      setTimeout(checkScroll, 500);

      // Revisar en resize
      const resizeObserver = new ResizeObserver(checkScroll);
      resizeObserver.observe(scrollContainer);

      return () => {
        scrollContainer.removeEventListener("scroll", checkScroll);
        resizeObserver.disconnect();
      };
    }
  }, []);

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
  };

  // Si no hay categorías
  if (categories.length === 0) {
    return (
      <div className="flex w-full flex-col mt-10">
        <div className="text-center py-16">
          <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <FaInfoCircle className="text-3xl text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            No hay categorías disponibles
          </h3>
          <p className="text-gray-500">
            Próximamente agregaremos categorías de productos.
          </p>
        </div>
      </div>
    );
  }

  const allProducts = selectedCategory
    ? getProductsByCategory(selectedCategory.url)
    : [];
  const productCount = selectedCategory
    ? getProductsCountByCategory(selectedCategory.url)
    : 0;
  const products = allProducts.slice(0, 6);

  return (
    <div className="flex w-full flex-col mt-10">
      {/* Navegación de categorías personalizada */}
      <div className="relative mb-8">
        {/* Botón de scroll izquierdo */}
        {showLeftScroll && (
          <button
            onClick={() => scrollCategories("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-30 bg-white/5 backdrop-blur-sm border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-white hover:shadow-xl transition-all duration-200 hover:scale-110"
            aria-label="Desplazar categorías a la izquierda"
          >
            <svg
              className="w-5 h-5 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}

        {/* Botón de scroll derecho */}
        {showRightScroll && (
          <button
            onClick={() => scrollCategories("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-30 bg-white/5 backdrop-blur-xs border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-white hover:shadow-xl transition-all duration-200 hover:scale-110"
            aria-label="Desplazar categorías a la derecha"
          >
            <svg
              className="w-5 h-5 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}

        {/* Lista de categorías */}
        <div className="categories-scroll flex overflow-x-auto scrollbar-hide gap-2 px-10 py-2">
          {categories.map((category) => {
            const Icon = category.icon!;
            const isSelected = selectedCategory?.id === category.id;
            const categoryProductCount = getProductsCountByCategory(
              category.url
            );

            return (
              <motion.button
                key={category.id}
                onClick={() => handleCategoryClick(category)}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all duration-300 shrink-0 whitespace-nowrap
                  ${
                    isSelected
                      ? "border-blue-500 bg-blue-50 text-blue-700 shadow-md"
                      : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:shadow-sm"
                  }
                `}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  className={`p-2 rounded-lg ${
                    isSelected ? "bg-blue-100" : "bg-gray-100"
                  }`}
                >
                  <Icon className={`text-xl ${category.color}`} />
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-semibold text-sm">{category.name}</span>
                  <span className="text-xs opacity-70">
                    {categoryProductCount} productos
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Contenido de la categoría seleccionada */}
      <AnimatePresence mode="wait">
        {selectedCategory && (
          <motion.div
            key={selectedCategory.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header de la categoría */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedCategory.name}
                </h2>
                <p className="text-gray-600 max-w-2xl">
                  {selectedCategory.description}
                </p>
              </div>
              <div className="text-right shrink-0 hidden sm:block md:block">
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
              <>
                <motion.div
                  layout
                  className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-2 sm:gap-4"
                >
                  <AnimatePresence>
                    {products.map((product, index) => {
                      const Icon = selectedCategory.icon!;

                      return (
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
                            <div className="p-0 relative h-40 sm:h-48">
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
                                    className={`text-4xl opacity-20 ${selectedCategory.color}`}
                                  />
                                </div>
                              )}

                              {/* ID badge */}
                              <div className="absolute top-3 left-3">
                                <Chip
                                  variant="flat"
                                  className="bg-black/60 text-white backdrop-blur-sm text-xs border-white/20"
                                >
                                  {product.id}
                                </Chip>
                              </div>
                            </div>

                            {/* Contenido */}
                            <CardBody className="p-2">
                              <h3 className="font-bold text-sm sm:text-lg text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                                {product.nombre}
                              </h3>

                              <p className="text-gray-600 text-sm line-clamp-2 md:line-clamp-3 leading-relaxed ">
                                {product.descripcion}
                              </p>

                              {/* Especificaciones */}
                              <div className="space-y-2 mt-2">
                                {product.capacidad && (
                                  <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                    <span className="hidden sm:flex md:flex">
                                      Capacidad:
                                    </span>
                                    <span>{product.capacidad}</span>
                                  </div>
                                )}
                                {product.material?.exterior && (
                                  <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                    <span className="hidden sm:flex md:flex">
                                      Material:
                                    </span>
                                    <span className="line-clamp-1">
                                      {product.material.exterior}
                                    </span>
                                  </div>
                                )}
                              </div>

                              {/* Colores disponibles */}
                              {product.colores_disponibles &&
                                product.colores_disponibles.length > 0 && (
                                  <div className="flex mt-4">
                                    <div className="flex items-center gap-2 mb-2">
                                      <span className="text-xs font-medium text-gray-500 hidden sm:flex md:flex">
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
                                                background: color,
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
                              <span className="text-xs font-medium text-gray-500 hidden sm:flex md:flex">
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
                      );
                    })}
                  </AnimatePresence>
                </motion.div>

                {/* Tarjeta de "ver más productos" */}
                {allProducts.length > 6 && (
                  <motion.div
                    key="see-more"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() =>
                      window.open(
                        `/categories/${selectedCategory.url}`,
                        "_self"
                      )
                    }
                    className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-blue-400 rounded-2xl p-8 text-center text-blue-600 hover:bg-blue-50 transition-all mt-5"
                  >
                    {/* ]<selectedCategory.icon className="text-4xl mb-3" /> */}
                    <h4 className="font-semibold text-lg">Ver más productos</h4>
                    <p className="text-sm text-blue-500 mt-1">
                      Explora toda la categoría {selectedCategory.name}
                    </p>
                  </motion.div>
                )}
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
