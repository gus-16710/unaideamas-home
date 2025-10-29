// "use client";

// import { AiFillProduct } from "react-icons/ai";
// import { motion } from "framer-motion";
// import { BreadcrumbItem, Breadcrumbs, Card, CardBody } from "@heroui/react";
// import { useRouter } from "next/navigation";

// const categoriesList = [
//   { id: 1, name: "Termos", img: "/img/categories/termos.jpg" },
//   { id: 2, name: "Agendas y Libretas", img: "/img/categories/agendas.jpg" },
//   { id: 3, name: "Bolsas", img: "/img/categories/bolsas.jpg" },
//   { id: 4, name: "Lapiceros", img: "/img/categories/lapiceros.jpg" },
// ];

// export default function Categories() {
//   const router = useRouter();

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white font-sans w-full px-4 sm:px-6 py-8">
//       {/* Header Section */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="flex flex-col items-center text-center mb-8 max-w-6xl mx-auto"
//       >
//         <motion.div
//           initial={{ scale: 0, rotate: -180 }}
//           animate={{ scale: 1, rotate: 0 }}
//           transition={{ duration: 0.8, type: "spring" }}
//           className="mb-4"
//         >
//           <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl shadow-lg">
//             <AiFillProduct size={32} className="text-white" />
//           </div>
//         </motion.div>

//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2 px-4"
//         >
//           Categorías de Productos
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="text-gray-500 text-lg max-w-2xl px-4"
//         >
//           Descubre nuestra cuidadosa selección de productos organizados por
//           categorías
//         </motion.p>
//       </motion.div>

//       {/* Breadcrumbs */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.3 }}
//         className="mb-12 max-w-6xl mx-auto"
//       >
//         <Breadcrumbs
//           classNames={{
//             list: "bg-white/70 backdrop-blur-sm rounded-lg px-4 py-2 shadow-sm border border-white/50",
//           }}
//         >
//           <BreadcrumbItem
//             onPress={() => router.push("/")}
//             className="text-gray-600 hover:text-blue-500 transition-colors"
//           >
//             Inicio
//           </BreadcrumbItem>
//           <BreadcrumbItem className="text-gray-800 font-medium">
//             Categorías
//           </BreadcrumbItem>
//         </Breadcrumbs>
//       </motion.div>

//       {/* Categories Grid */}
//       <div className="w-full max-w-6xl mx-auto">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
//           {categoriesList.map((category, index) => (
//             <motion.div
//               key={category.id}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.5,
//                 ease: "easeOut",
//                 delay: index * 0.1,
//               }}
//               whileHover={{
//                 y: -8,
//                 transition: { duration: 0.3, ease: "easeOut" },
//               }}
//               className="w-full"
//             >
//               <Card
//                 isPressable
//                 onPress={() => router.push(`/categories/${category.id}`)}
//                 className="group bg-white border border-gray-200/80 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden w-full h-full"
//               >
//                 <CardBody className="p-0 w-full">
//                   <div className="relative overflow-hidden w-full">
//                     <motion.img
//                       src={category.img}
//                       alt={category.name}
//                       className="w-full h-48 object-cover"
//                       whileHover={{
//                         scale: 1.05,
//                         transition: { duration: 0.4, ease: "easeOut" },
//                       }}
//                     />

//                     {/* Nuevo diseño de título - Múltiples opciones */}

//                     {/* Opción 1: Fondo con blur (Recomendada) */}
//                     <div className="absolute bottom-0 left-0 right-0 p-4">
//                       <div className="bg-linear-to-r from-blue-600/90 to-purple-600/50 backdrop-blur-xs rounded-xl p-2 transform translate-y-0 group-hover:translate-y-0 transition-transform duration-300">
//                         <h3 className="text-white text-lg font-semibold text-center drop-shadow-lg">
//                           {category.name}
//                         </h3>
//                       </div>
//                     </div>

//                     {/* Hover Indicator */}
//                     <motion.div
//                       className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300"
//                       whileHover={{ rotate: 90 }}
//                     >
//                       <div className="w-2 h-2 bg-blue-500 rounded-full" />
//                     </motion.div>
//                   </div>
//                 </CardBody>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Footer Decoration */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.8 }}
//         className="flex justify-center mt-16 max-w-6xl mx-auto"
//       >
//         <div className="flex space-x-2">
//           {[1, 2, 3].map((dot) => (
//             <motion.div
//               key={dot}
//               className="w-2 h-2 bg-gray-300 rounded-full"
//               animate={{
//                 scale: [1, 1.2, 1],
//                 opacity: [0.5, 1, 0.5],
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 delay: dot * 0.2,
//               }}
//             />
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// }


"use client";

import { AiFillProduct } from "react-icons/ai";
import { motion } from "framer-motion";
import { BreadcrumbItem, Breadcrumbs, Card, CardBody } from "@heroui/react";
import { useRouter } from "next/navigation";

const categoriesList = [
  { id: 1, name: "Termos", img: "/img/categories/termos.jpg" },
  { id: 2, name: "Agendas y Libretas", img: "/img/categories/agendas.jpg" },
  { id: 3, name: "Bolsas", img: "/img/categories/bolsas.jpg" },
  { id: 4, name: "Lapiceros", img: "/img/categories/lapiceros.jpg" },
];

export default function Categories() {
  const router = useRouter();

  return (
    // FONDO PRINCIPAL - Tailwind v4 compatible
    <div 
      className="min-h-screen font-sans w-full px-4 sm:px-6 py-8 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%, #f8fafc 100%)'
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
          backgroundSize: '70px 122px',
          backgroundPosition: '0 0, 0 0, 35px 61px, 35px 61px'
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
                background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)'
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
              background: 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
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
            Descubre nuestra cuidadosa selección de productos organizados por categorías
          </motion.p>
        </motion.div>

        {/* Breadcrumbs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 max-w-6xl mx-auto"
        >
          <Breadcrumbs 
            classNames={{
              list: "rounded-lg px-4 py-2 shadow-sm border"
            }}
            style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(8px)',
              borderColor: 'rgba(255, 255, 255, 0.5)'
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
                  delay: index * 0.1 
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="w-full"
              >
                <Card 
                  isPressable
                  onPress={() => router.push(`/categories/${category.id}`)}
                  className="group rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden w-full h-full border"
                  style={{
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(8px)',
                    borderColor: 'rgba(255, 255, 255, 0.6)'
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
                          transition: { duration: 0.4, ease: "easeOut" }
                        }}
                      />
                      
                      {/* Título mejorado */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div 
                          className="rounded-xl p-3 transform transition-all duration-300"
                          style={{
                            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(139, 92, 246, 0.8) 100%)',
                            backdropFilter: 'blur(8px)'
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
                          width: '40px',
                          height: '40px',
                          background: 'rgba(255, 255, 255, 0.9)',
                          backdropFilter: 'blur(8px)'
                        }}
                        whileHover={{ rotate: 90 }}
                      >
                        <div 
                          className="rounded-full"
                          style={{
                            width: '8px',
                            height: '8px',
                            background: '#3b82f6'
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
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  delay: dot * 0.2 
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}