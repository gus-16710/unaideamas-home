// "use client";

// import { AiFillProduct } from "react-icons/ai";
// import { motion } from "framer-motion";
// import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";
// import { useRouter } from "next/navigation";

// interface CategoryPageClientProps {
//   category: string;
//   products: any[];
// }

// export default function CategoryPageClient({
//   category,
//   products,
// }: CategoryPageClientProps) {
//   const router = useRouter();

//   return (
//     // FONDO PRINCIPAL - Tailwind v4 compatible
//     <div
//       className="min-h-screen font-sans w-full relative overflow-hidden"
//       style={{
//         background:
//           "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%, #f8fafc 100%)",
//       }}
//     >
//       {/* Patrón geométrico sutil */}
//       <div
//         className="absolute inset-0 opacity-20"
//         style={{
//           backgroundImage: `
//             linear-gradient(30deg, #cbd5e1 12%, transparent 12.5%, transparent 87%, #cbd5e1 87.5%, #cbd5e1),
//             linear-gradient(150deg, #cbd5e1 12%, transparent 12.5%, transparent 87%, #cbd5e1 87.5%, #cbd5e1),
//             linear-gradient(30deg, #cbd5e1 12%, transparent 12.5%, transparent 87%, #cbd5e1 87.5%, #cbd5e1),
//             linear-gradient(150deg, #cbd5e1 12%, transparent 12.5%, transparent 87%, #cbd5e1 87.5%, #cbd5e1)
//           `,
//           backgroundSize: "70px 122px",
//           backgroundPosition: "0 0, 0 0, 35px 61px, 35px 61px",
//         }}
//       ></div>

//       {/* Contenido */}
//       <div className="relative z-10 max-w-3xl mx-auto shadow-2xl p-6">
//         {/* Header Section */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="flex flex-col items-center text-center mb-8 max-w-6xl mx-auto"
//         >
//           <motion.div
//             initial={{ scale: 0, rotate: -180 }}
//             animate={{ scale: 1, rotate: 0 }}
//             transition={{ duration: 0.8, type: "spring" }}
//             className="mb-4"
//           >
//             <div
//               className="p-3 rounded-2xl shadow-lg"
//               style={{
//                 background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
//               }}
//             >
//               <AiFillProduct size={32} className="text-white" />
//             </div>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-3xl md:text-4xl font-bold mb-2 px-4 pb-1"
//             style={{
//               background: "linear-gradient(135deg, #1e293b 0%, #475569 100%)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text",
//             }}
//           >
//             Categoría - {category.charAt(0).toUpperCase() + category.slice(1)}
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="text-gray-600 text-lg max-w-2xl px-4"
//           >
//             Explora los productos disponibles en la categoría{" "}
//             <strong>
//               {category.charAt(0).toUpperCase() + category.slice(1)}
//             </strong>
//             .
//           </motion.p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="mb-12 max-w-6xl mx-auto"
//         >
//           <Breadcrumbs
//             classNames={{
//               list: "bg-white/70 backdrop-blur-sm rounded-lg px-4 py-2 shadow-sm border border-white/50",
//             }}
//           >
//             <BreadcrumbItem
//               onPress={() => router.push("/")}
//               className="text-gray-600 hover:text-blue-500 transition-colors"
//             >
//               Inicio
//             </BreadcrumbItem>
//             <BreadcrumbItem
//               className="text-gray-800"
//               onPress={() => router.push("/categories")}
//             >
//               Categorías
//             </BreadcrumbItem>
//             <BreadcrumbItem
//               className="text-gray-800 font-medium"
//               onPress={() => router.push("/categories")}
//             >
//               {category.charAt(0).toUpperCase() + category.slice(1)}
//             </BreadcrumbItem>
//           </Breadcrumbs>
//         </motion.div>

//         {/* Categories Grid */}
//         <div className="w-full max-w-6xl mx-auto mb-10">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 w-full">
//             {products.length === 0 ? (
//               <p className="text-gray-600 text-center col-span-full">
//                 No hay productos disponibles en esta categoría.
//               </p>
//             ) : (
//               products.map((product, index) => (
//                 <motion.div
//                   key={product.id}
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{
//                     duration: 0.5,
//                     ease: "easeOut",
//                     delay: index * 0.1,
//                   }}
//                   whileHover={{
//                     y: -8,
//                     transition: { duration: 0.3, ease: "easeOut" },
//                   }}
//                   className="w-full"
//                 >
//                   <div
//                     className="border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white"
//                     onClick={() => router.push(`/products/${product.id}`)}
//                   >
//                     <img
//                       src={product.imagenes_urls[0]}
//                       alt={product.name}
//                       className="w-full h-48 object-cover"
//                     />
//                     <div className="p-4">
//                       <h2 className="text-lg font-semibold text-gray-800">
//                         {product.name}
//                       </h2>
//                       <p className="mt-2 text-gray-600">
//                         {product.description}
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { AiFillProduct } from "react-icons/ai";
import { motion } from "framer-motion";
import { BreadcrumbItem, Breadcrumbs, Card, CardBody, CardFooter, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { FiExternalLink } from "react-icons/fi";

interface CategoryPageClientProps {
  category: string;
  products: any[];
}

export default function CategoryPageClient({
  category,
  products,
}: CategoryPageClientProps) {
  const router = useRouter();

  const handleProductClick = (productId: string) => {
    router.push(`/products/${productId}`);
  };

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
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
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
        <div className="w-full mb-16">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
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
                    className="w-full h-full border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm"
                    // Removemos isPressable para evitar el conflicto de botones anidados
                  >
                    {/* Imagen del producto */}
                    <div 
                      className="relative overflow-hidden cursor-pointer"
                      onClick={() => handleProductClick(product.id)}
                    >
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <CardBody className="p-4">
                      {/* Nombre del producto */}
                      <h3 className="font-bold text-lg text-gray-800 line-clamp-2 mb-2">
                        {product.nombre}
                      </h3>
                      
                      {/* Descripción */}
                      <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                        {product.descripcion}
                      </p>
                    </CardBody>

                    <CardFooter className="p-4 pt-0">
                      <div className="w-full">
                        {/* Capacidad y colores */}
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                            {product.capacidad}
                          </span>
                          <span className="text-xs text-gray-500">
                            {product.colores_disponibles.length} colores
                          </span>
                        </div>

                        {/* Botón de acción - Ahora es el único botón en la tarjeta */}
                        <Button
                          fullWidth
                          size="sm"
                          className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium shadow-lg shadow-blue-500/25"
                          endContent={<FiExternalLink size={14} />}
                          onPress={() => handleProductClick(product.id)}
                        >
                          Ver detalles
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}