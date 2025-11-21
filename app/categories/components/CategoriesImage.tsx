import { useProductStore } from "@/store/product.store";
import { Badge, Card, CardBody, Chip } from "@heroui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { AiFillProduct } from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";

export default function CategoriesImage() {
  const { categories, getProductsCountByCategory } = useProductStore();
  const router = useRouter();

  return (
    <div className="w-full mb-10">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-6 w-full">
        {categories.map((category, index) => {
          const productCount = getProductsCountByCategory(category.url);
          const Icon = category.icon!;

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
                      className="w-full h-56 object-cover"
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
                        {productCount}{" "}
                        {productCount === 1 ? "producto" : "productos"}
                      </Chip>
                    </div>

                    {/* Título principal (siempre visible) */}
                    <div className="absolute bottom-0 left-0 right-0 p4">
                      <div
                        className="p-1 transform transition-all duration-300 group-hover:bg-white/10 group-hover:backdrop-blur-sm"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(59, 130, 246, 0.95) 0%, rgba(139, 92, 246, 0.9) 100%)",
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
                    <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                      {category.description}
                    </p>

                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
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
  );
}
