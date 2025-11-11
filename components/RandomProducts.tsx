// import { useProductStore } from "@/store/product.store";
// import { useEffect } from "react";

// export default function RandomProducts() {
//   const { getRandomProducts } = useProductStore();

//   useEffect(() => {
//     const randomProducts = getRandomProducts(6);
//     console.log({ randomProducts });
//   }, []);

//   return <div>RandomProducts</div>;
// }

// import { useProductStore } from "@/store/product.store";
// import { Badge, Card, CardBody, Chip } from "@heroui/react";
// import { motion } from "framer-motion";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { FiArrowRight, FiRefreshCw } from "react-icons/fi";
// import { Product } from "@/types";

// export default function RandomProducts() {
//   const { getRandomProducts, getCategoryInfo } = useProductStore();
//   const [randomProducts, setRandomProducts] = useState<Product[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const router = useRouter();

//   const loadRandomProducts = () => {
//     setIsLoading(true);
//     const products = getRandomProducts(6);
//     setRandomProducts(products);
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     loadRandomProducts();
//   }, []);

//   const handleProductClick = (product: Product) => {
//     // Navegar al detalle del producto o a la categoría
//     router.push(`/categories/${product.categoria}`);
//   };

//   const getCategoryName = (categoryUrl: string) => {
//     const category = getCategoryInfo(categoryUrl);
//     return category?.name || categoryUrl;
//   };

//   if (isLoading) {
//     return (
//       <div className="w-full mb-10">
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-2xl font-bold text-gray-800">
//             Productos Destacados
//           </h2>
//           <div className="animate-spin">
//             <FiRefreshCw size={20} className="text-gray-400" />
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {[...Array(6)].map((_, index) => (
//             <Card key={index} className="rounded-2xl shadow-md w-full h-full">
//               <CardBody className="p-0">
//                 <div className="animate-pulse">
//                   <div className="w-full h-56 bg-gray-200"></div>
//                   <div className="p-4 space-y-3">
//                     <div className="h-4 bg-gray-200 rounded w-3/4"></div>
//                     <div className="h-3 bg-gray-200 rounded w-1/2"></div>
//                     <div className="h-3 bg-gray-200 rounded w-full"></div>
//                     <div className="h-3 bg-gray-200 rounded w-2/3"></div>
//                   </div>
//                 </div>
//               </CardBody>
//             </Card>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full mb-10">
//       <div className="mb-6">
//         <h2 className="text-2xl font-bold text-gray-800">
//           Productos Destacados
//         </h2>
//         <p className="text-slate-500 text-sm mt-1">
//           Más de 100 productos disponibles
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
//         {randomProducts.map((product, index) => {
//           const categoryName = getCategoryName(product.categoria!);

//           return (
//             <motion.div
//               key={`${product.id}-${index}`}
//               initial={{ opacity: 0, y: 30, scale: 0.95 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               transition={{
//                 duration: 0.5,
//                 ease: "easeOut",
//                 delay: index * 0.1,
//               }}
//               whileHover={{
//                 y: -6,
//                 scale: 1.02,
//                 transition: { duration: 0.3, ease: "easeOut" },
//               }}
//               className="w-full"
//             >
//               <Card
//                 isPressable
//                 onPress={() => handleProductClick(product)}
//                 className="group rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden w-full h-full border border-gray-100 bg-white/90 backdrop-blur-sm"
//               >
//                 <CardBody className="p-0 w-full">
//                   <div className="relative overflow-hidden w-full">
//                     {/* Imagen del producto */}
//                     <motion.img
//                       src={product.imagenes_urls[0]}
//                       alt={product.nombre}
//                       className="w-full h-56 object-cover"
//                       whileHover={{
//                         scale: 1.05,
//                         transition: { duration: 0.4, ease: "easeOut" },
//                       }}
//                       onError={(e) => {
//                         // Fallback image si la imagen no carga
//                         e.currentTarget.src = "/img/placeholder-product.jpg";
//                       }}
//                     />

//                     {/* Badge de categoría */}
//                     <div className="absolute top-4 left-4">
//                       <Chip
//                         variant="flat"
//                         className="bg-black/50 text-white backdrop-blur-sm text-xs"
//                       >
//                         {categoryName}
//                       </Chip>
//                     </div>

//                     {/* ID del producto */}
//                     <div className="absolute top-4 right-4">
//                       <Badge variant="flat" color="primary" size="sm">
//                         ID: {product.id}
//                       </Badge>
//                     </div>

//                     {/* Título del producto (siempre visible) */}
//                     <div className="absolute bottom-0 left-0 right-0 p4">
//                       <div
//                         className="p-3 transform transition-all duration-300 group-hover:bg-white/10 group-hover:backdrop-blur-sm"
//                         style={{
//                           background:
//                             "linear-gradient(135deg, rgba(59, 130, 246, 0.95) 0%, rgba(139, 92, 246, 0.9) 100%)",
//                           backdropFilter: "blur(0.5px)",
//                         }}
//                       >
//                         <h3 className="text-white font-semibold text-center drop-shadow-lg line-clamp-2">
//                           {product.nombre}
//                         </h3>
//                       </div>
//                     </div>

//                     {/* Indicador de hover */}
//                     <motion.div
//                       className="absolute top-16 right-4 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300"
//                       style={{
//                         width: "40px",
//                         height: "40px",
//                         background: "rgba(255, 255, 255, 0.9)",
//                         backdropFilter: "blur(8px)",
//                       }}
//                       whileHover={{ rotate: 90 }}
//                     >
//                       <div
//                         className="rounded-full"
//                         style={{
//                           width: "8px",
//                           height: "8px",
//                           background: "#ef4444",
//                         }}
//                       />
//                     </motion.div>
//                   </div>

//                   {/* Información adicional debajo de la imagen */}
//                   <div className="p-4">
//                     <div className="flex items-center justify-between mb-2">
//                       <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
//                         Producto
//                       </span>
//                       <Badge variant="flat" color="secondary" size="sm">
//                         {product.categoria}
//                       </Badge>
//                     </div>

//                     <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed mb-3">
//                       {product.descripcion}
//                     </p>

//                     {/* Especificaciones rápidas */}
//                     <div className="space-y-2 mb-3">
//                       {product.capacidad && (
//                         <div className="flex justify-between text-xs">
//                           <span className="text-gray-500">Capacidad:</span>
//                           <span className="font-medium">
//                             {product.capacidad}
//                           </span>
//                         </div>
//                       )}
//                       {product.material?.exterior && (
//                         <div className="flex justify-between text-xs">
//                           <span className="text-gray-500">Material:</span>
//                           <span className="font-medium text-right line-clamp-1">
//                             {product.material.exterior}
//                           </span>
//                         </div>
//                       )}
//                     </div>

//                     {/* Colores disponibles */}
//                     {product.colores_disponibles &&
//                       product.colores_disponibles.length > 0 && (
//                         <div className="mb-3">
//                           <span className="text-xs text-gray-500 block mb-1">
//                             Colores:
//                           </span>
//                           <div className="flex flex-wrap gap-1">
//                             {product.colores_disponibles
//                               .slice(0, 3)
//                               .map((color, idx) => (
//                                 <span
//                                   key={idx}
//                                   className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
//                                 >
//                                   {color}
//                                 </span>
//                               ))}
//                             {product.colores_disponibles.length > 3 && (
//                               <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
//                                 +{product.colores_disponibles.length - 3}
//                               </span>
//                             )}
//                           </div>
//                         </div>
//                       )}

//                     <div className="flex items-center justify-between pt-3 border-t border-gray-100">
//                       <span className="text-xs text-gray-500">
//                         {product.origen}
//                       </span>
//                       <div className="flex items-center text-red-600 text-xs font-medium">
//                         Ver más
//                         <FiArrowRight size={12} className="ml-1" />
//                       </div>
//                     </div>
//                   </div>
//                 </CardBody>
//               </Card>
//             </motion.div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }


import { useProductStore } from "@/store/product.store";
import { Badge, Card, CardBody, Chip } from "@heroui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiArrowRight, FiRefreshCw } from "react-icons/fi";
import { Product } from "@/types";

export default function RandomProducts() {
  const { getRandomProducts, getCategoryInfo } = useProductStore();
  const [randomProducts, setRandomProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const loadRandomProducts = () => {
    setIsLoading(true);
    const products = getRandomProducts(6);
    setRandomProducts(products);
    setIsLoading(false);
  };

  useEffect(() => {
    loadRandomProducts();    
  }, []);

  const handleProductClick = (product: Product) => {
    // Navegar al detalle del producto o a la categoría
    router.push(`/products/${product.id}`);
  };

  const getCategoryName = (categoryUrl: string) => {
    const category = getCategoryInfo(categoryUrl);
    return category?.name || categoryUrl;
  };

  if (isLoading) {
    return (
      <div className="w-full mb-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Productos Destacados
          </h2>
          <div className="animate-spin">
            <FiRefreshCw size={20} className="text-gray-400" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <Card key={index} className="rounded-2xl shadow-md w-full h-full">
              <CardBody className="p-0">
                <div className="animate-pulse">
                  <div className="w-full h-56 bg-gray-200"></div>
                  <div className="p-4 space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mb-10">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Productos Destacados
        </h2>
        <p className="text-slate-500 text-sm mt-1">
          Más de 100 productos disponibles
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {randomProducts.map((product, index) => {
          const categoryName = getCategoryName(product.categoria!);

          return (
            <motion.div
              key={`${product.id}-${index}`}
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
                onPress={() => handleProductClick(product)}
                className="group rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden w-full h-full border border-gray-100 bg-white/90 backdrop-blur-sm"
              >
                <CardBody className="p-0 w-full">
                  <div className="relative overflow-hidden w-full">
                    {/* Imagen del producto */}
                    <motion.img
                      src={product.imagenes_urls[0]}
                      alt={product.nombre}
                      className="w-full h-56 object-cover"
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.4, ease: "easeOut" },
                      }}
                      onError={(e) => {
                        // Fallback image si la imagen no carga
                        e.currentTarget.src = "/img/placeholder-product.jpg";
                      }}
                    />

                    {/* Badge de categoría */}
                    <div className="absolute top-4 left-4">
                      <Chip
                        variant="flat"
                        className="bg-black/50 text-white backdrop-blur-sm text-xs"
                      >
                        {categoryName}
                      </Chip>
                    </div>

                    {/* ID del producto */}
                    <div className="absolute top-4 right-4">
                      <Badge variant="flat" color="primary" size="sm">
                        ID: {product.id}
                      </Badge>
                    </div>

                    {/* Título del producto (siempre visible) */}
                    <div className="absolute bottom-0 left-0 right-0 p4">
                      <div
                        className="p-3 transform transition-all duration-300 group-hover:bg-white/10 group-hover:backdrop-blur-sm"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(59, 130, 246, 0.95) 0%, rgba(139, 92, 246, 0.9) 100%)",
                          backdropFilter: "blur(0.5px)",
                        }}
                      >
                        <h3 className="text-white font-semibold text-center drop-shadow-lg line-clamp-2">
                          {product.nombre}
                        </h3>
                      </div>
                    </div>

                    {/* Indicador de hover */}
                    <motion.div
                      className="absolute top-16 right-4 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300"
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
                          background: "#ef4444",
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Información adicional debajo de la imagen */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                        Producto
                      </span>
                      <Badge variant="flat" color="secondary" size="sm">
                        {product.categoria}
                      </Badge>
                    </div>

                    <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed mb-3">
                      {product.descripcion}
                    </p>

                    {/* Especificaciones rápidas */}
                    <div className="space-y-2 mb-3">
                      {product.capacidad && (
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-500">Capacidad:</span>
                          <span className="font-medium">
                            {product.capacidad}
                          </span>
                        </div>
                      )}
                      {product.material?.exterior && (
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-500">Material:</span>
                          <span className="font-medium text-right line-clamp-1">
                            {product.material.exterior}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Colores disponibles */}
                    {product.colores_disponibles &&
                      product.colores_disponibles.length > 0 && (
                        <div className="mb-3">
                          <span className="text-xs text-gray-500 block mb-1">
                            Colores:
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {product.colores_disponibles
                              .slice(0, 3)
                              .map((color, idx) => (
                                <span
                                  key={idx}
                                  className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                                >
                                  {color}
                                </span>
                              ))}
                            {product.colores_disponibles.length > 3 && (
                              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                                +{product.colores_disponibles.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <span className="text-xs text-gray-500">
                        {product.origen}
                      </span>
                      <div className="flex items-center text-red-600 text-xs font-medium">
                        Ver más
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