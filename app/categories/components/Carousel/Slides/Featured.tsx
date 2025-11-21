import { motion } from "framer-motion";
import { FaGift, FaPen } from "react-icons/fa";
import { IoBag, IoBook, IoShirt } from "react-icons/io5";

export default function Featured() {
  return (
    <div className="w-full h-full relative bg-linear-to-br from-purple-100 via-pink-100 to-purple-200 overflow-hidden">
            {/* Patrón de productos animado */}
            <motion.div
              className="absolute inset-0 opacity-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="absolute top-4 left-4 md:top-10 md:left-10"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <IoShirt className="text-7xl md:text-5xl lg:text-6xl text-purple-800" />
              </motion.div>
              <motion.div
                className="absolute bottom-8 right-8 md:bottom-20 md:right-32"
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <IoBook className="text-6xl md:text-4xl lg:text-5xl text-pink-500" />
              </motion.div>
            </motion.div>

            <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-center px-4 md:px-8 lg:px-16 py-6">
              <div className="lg:flex-1 mb-6 lg:mb-0">
                <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-6 max-w-sm mx-auto lg:max-w-none">
                  {[
                    {
                      icon: IoShirt,
                      color: "purple",
                      colorClass: "text-purple-500 border-purple-200",
                      title: "Textiles",
                      desc: "Playeras, gorras",
                    },
                    {
                      icon: FaPen,
                      color: "pink",
                      colorClass: "text-pink-500 border-pink-200",
                      title: "Escritura",
                      desc: "Lápices, plumas",
                    },
                    {
                      icon: IoBook,
                      color: "yellow",
                      colorClass: "text-yellow-500 border-yellow-200",
                      title: "Papelería",
                      desc: "Libretas, agendas",
                    },
                    {
                      icon: IoBag,
                      color: "green",
                      colorClass: "text-green-500 border-green-200",
                      title: "Bolsas",
                      desc: "Ecológicas, promocionales",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`bg-white rounded-xl md:rounded-2xl p-3 md:p-4 lg:p-6 shadow-lg md:shadow-xl border ${item.colorClass} transition-all duration-300 hover:shadow-xl`}
                    >
                      <div>
                        <item.icon
                          className={`text-2xl md:text-3xl lg:text-4xl ${
                            item.colorClass.split(" ")[0]
                          } mb-2 md:mb-3`}
                        />
                      </div>
                      <h3 className="font-bold text-gray-800 text-sm md:text-base">
                        {item.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:flex-1 text-gray-800 space-y-4 lg:space-y-6 text-center lg:text-left lg:pl-8 xl:pl-12">
                <div className="flex items-center justify-center lg:justify-start gap-2 md:gap-3">
                  <motion.div
                    animate={{
                      rotate: [0, 10, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <FaGift className="text-xl md:text-2xl lg:text-3xl text-purple-500" />
                  </motion.div>
                  <span className="text-xs md:text-sm font-semibold bg-purple-500/20 text-purple-700 px-2 py-1 md:px-3 md:py-1 rounded-full">
                    PRODUCTOS DESTACADOS
                  </span>
                </div>

                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Todo en <br className="hidden sm:block" />
                  <span className="bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Promocionales
                  </span>
                </h2>

                <p className="text-sm md:text-lg lg:text-xl text-gray-600 max-w-md mx-auto lg:mx-0">
                  Desde artículos de escritura hasta textiles, tenemos todo para
                  tus campañas promocionales.
                </p>

                <button
                  className="bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold transition-all duration-300 shadow-lg text-sm md:text-base"
                  onClick={() => {
                    const element = document.getElementById("grid-categories");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Explorar Productos
                </button>
              </div>
            </div>
          </div>
  )
}
