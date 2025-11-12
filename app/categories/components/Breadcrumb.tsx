import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Breadcrumb() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mb-5"
    >
      <Breadcrumbs
        classNames={{
          list: "bg-white/70 backdrop-blur-sm rounded-lg px-4 py-2 shadow-sm border border-white/50",
        }}      
        size="lg"      
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
  );
}
