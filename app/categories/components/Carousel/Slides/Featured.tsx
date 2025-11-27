// import { motion } from "framer-motion";
// import { FaGift, FaPen } from "react-icons/fa";
// import { IoBag, IoBook, IoShirt } from "react-icons/io5";

// export default function Featured() {
//   return (
//     <div className="w-full h-full relative bg-linear-to-br from-purple-100 via-pink-100 to-purple-200 overflow-hidden">
//             {/* Patrón de productos animado */}
//             <motion.div
//               className="absolute inset-0 opacity-10"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 0.1 }}
//               transition={{ duration: 1 }}
//             >
//               <motion.div
//                 className="absolute top-4 left-4 md:top-10 md:left-10"
//                 animate={{
//                   y: [0, -15, 0],
//                   rotate: [0, 5, 0],
//                 }}
//                 transition={{
//                   duration: 6,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               >
//                 <IoShirt className="text-7xl md:text-5xl lg:text-6xl text-purple-800" />
//               </motion.div>
//               <motion.div
//                 className="absolute bottom-8 right-8 md:bottom-20 md:right-32"
//                 animate={{
//                   y: [0, 15, 0],
//                   rotate: [0, -5, 0],
//                 }}
//                 transition={{
//                   duration: 7,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                   delay: 0.5,
//                 }}
//               >
//                 <IoBook className="text-6xl md:text-4xl lg:text-5xl text-pink-500" />
//               </motion.div>
//             </motion.div>

//             <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-center px-4 md:px-8 lg:px-16 py-6">
//               <div className="lg:flex-1 mb-6 lg:mb-0">
//                 <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-6 max-w-sm mx-auto lg:max-w-none">
//                   {[
//                     {
//                       icon: IoShirt,
//                       color: "purple",
//                       colorClass: "text-purple-500 border-purple-200",
//                       title: "Textiles",
//                       desc: "Playeras, gorras",
//                     },
//                     {
//                       icon: FaPen,
//                       color: "pink",
//                       colorClass: "text-pink-500 border-pink-200",
//                       title: "Escritura",
//                       desc: "Lápices, plumas",
//                     },
//                     {
//                       icon: IoBook,
//                       color: "yellow",
//                       colorClass: "text-yellow-500 border-yellow-200",
//                       title: "Papelería",
//                       desc: "Libretas, agendas",
//                     },
//                     {
//                       icon: IoBag,
//                       color: "green",
//                       colorClass: "text-green-500 border-green-200",
//                       title: "Bolsas",
//                       desc: "Ecológicas, promocionales",
//                     },
//                   ].map((item, index) => (
//                     <div
//                       key={index}
//                       className={`bg-white rounded-xl md:rounded-2xl p-3 md:p-4 lg:p-6 shadow-lg md:shadow-xl border ${item.colorClass} transition-all duration-300 hover:shadow-xl`}
//                     >
//                       <div>
//                         <item.icon
//                           className={`text-2xl md:text-3xl lg:text-4xl ${
//                             item.colorClass.split(" ")[0]
//                           } mb-2 md:mb-3`}
//                         />
//                       </div>
//                       <h3 className="font-bold text-gray-800 text-sm md:text-base">
//                         {item.title}
//                       </h3>
//                       <p className="text-xs md:text-sm text-gray-600">
//                         {item.desc}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="lg:flex-1 text-gray-800 space-y-4 lg:space-y-6 text-center lg:text-left lg:pl-8 xl:pl-12">
//                 <div className="flex items-center justify-center lg:justify-start gap-2 md:gap-3">
//                   <motion.div
//                     animate={{
//                       rotate: [0, 10, 0],
//                       scale: [1, 1.2, 1],
//                     }}
//                     transition={{
//                       duration: 3,
//                       repeat: Infinity,
//                       ease: "easeInOut",
//                     }}
//                   >
//                     <FaGift className="text-xl md:text-2xl lg:text-3xl text-purple-500" />
//                   </motion.div>
//                   <span className="text-xs md:text-sm font-semibold bg-purple-500/20 text-purple-700 px-2 py-1 md:px-3 md:py-1 rounded-full">
//                     PRODUCTOS DESTACADOS
//                   </span>
//                 </div>

//                 <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
//                   Todo en <br className="hidden sm:block" />
//                   <span className="bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
//                     Promocionales
//                   </span>
//                 </h2>

//                 <p className="text-sm md:text-lg lg:text-xl text-gray-600 max-w-md mx-auto lg:mx-0">
//                   Desde artículos de escritura hasta textiles, tenemos todo para
//                   tus campañas promocionales.
//                 </p>

//                 <button
//                   className="bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold transition-all duration-300 shadow-lg text-sm md:text-base"
//                   onClick={() => {
//                     const element = document.getElementById("grid-categories");
//                     element?.scrollIntoView({ behavior: "smooth" });
//                   }}
//                 >
//                   Explorar Productos
//                 </button>
//               </div>
//             </div>
//           </div>
//   )
// }


import { motion } from "framer-motion";
import { FaGift, FaPen } from "react-icons/fa";
import { IoBag, IoBook, IoShirt } from "react-icons/io5";

export default function Featured() {
  const categories = [
    {
      icon: IoShirt,
      colorClass: "text-purple-500 border-purple-200 bg-purple-50",
      title: "Textiles",
      desc: "Playeras, gorras",
    },
    {
      icon: FaPen,
      colorClass: "text-pink-500 border-pink-200 bg-pink-50",
      title: "Escritura",
      desc: "Lápices, plumas",
    },
    {
      icon: IoBook,
      colorClass: "text-amber-500 border-amber-200 bg-amber-50",
      title: "Papelería",
      desc: "Libretas, agendas",
    },
    {
      icon: IoBag,
      colorClass: "text-emerald-500 border-emerald-200 bg-emerald-50",
      title: "Bolsas",
      desc: "Ecológicas, promocionales",
    },
  ];

  const floatingIcons = [
    { icon: IoShirt, className: "text-purple-600", position: "top-4 left-4" },
    { icon: IoBook, className: "text-pink-500", position: "bottom-8 right-8" },
    { icon: FaPen, className: "text-amber-500", position: "top-10 right-10" },
    { icon: IoBag, className: "text-emerald-500", position: "bottom-16 left-16" },
  ];

  return (
    <div className="w-full bg-linear-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-linear(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)] bg-size-[20px_20px]"></div>
      </div>

      {/* Floating animated icons */}
      <div className="absolute inset-0 opacity-10">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute ${item.position} hidden sm:block`}
            animate={{
              y: [0, -20, 0],
              rotate: [0, index % 2 === 0 ? 10 : -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
          >
            <item.icon className={`text-4xl md:text-5xl lg:text-6xl ${item.className}`} />
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-16 py-8 sm:py-12 lg:py-20">
        {/* Categories Grid */}
        <div className="lg:flex-1 w-full max-w-2xl mb-8 lg:mb-0 lg:pr-8 xl:pr-12">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {categories.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className={`bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border-2 ${item.colorClass} transition-all duration-300 hover:shadow-2xl cursor-pointer group`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`p-3 rounded-2xl bg-white shadow-inner group-hover:scale-110 transition-transform duration-300 mb-3 sm:mb-4`}>
                    <item.icon
                      className={`text-2xl sm:text-3xl lg:text-4xl ${item.colorClass.split(' ')[0]}`}
                    />
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-tight">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Text Content */}
        <div className="lg:flex-1 w-full max-w-2xl text-gray-800 space-y-6 sm:space-y-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Badge */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <motion.div
                animate={{
                  rotate: [0, 15, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FaGift className="text-2xl sm:text-3xl text-purple-500" />
              </motion.div>
              <span className="text-xs sm:text-sm font-semibold bg-linear-to-r from-purple-500/20 to-pink-500/20 text-purple-700 px-3 sm:px-4 py-2 rounded-full border border-purple-200">
                PRODUCTOS DESTACADOS
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Todo en{" "}
                <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Promocionales
                </span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Desde artículos de escritura hasta textiles, tenemos todo lo que necesitas 
                para hacer brillar tus campañas promocionales con calidad y estilo.
              </p>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg shadow-purple-500/25 text-base sm:text-lg relative overflow-hidden group"
              onClick={() => {
                const element = document.getElementById("grid-categories");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="relative z-10">Explorar Productos</span>
              <div className="absolute inset-0 bg-linear-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white/50 to-transparent pointer-events-none"></div>
    </div>
  );
}