"use client";
import ActionButtons from "@/components/ActionButtons";
import { BreadcrumbItem, Breadcrumbs, Button } from "@heroui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiArrowLeft, FiFolder, FiZoomIn } from "react-icons/fi";

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const images = [
  {
    src: "/img/portfolio/08.jpeg",
    width: 1292,
    height: 1600,
  },
  {
    src: "/img/portfolio/09.jpeg",
    width: 900,
    height: 1600,
  },
  {
    src: "/img/portfolio/10.jpeg",
    width: 1600,
    height: 898,
  },
  {
    src: "/img/portfolio/11.jpeg",
    width: 1197,
    height: 1600,
  },
  {
    src: "/img/portfolio/12.jpeg",
    width: 1493,
    height: 1440,
  },
  {
    src: "/img/portfolio/13.jpeg",
    width: 1600,
    height: 1346,
  },
  {
    src: "/img/portfolio/14.jpeg",
    width: 1271,
    height: 1600,
  },
  {
    src: "/img/portfolio/15.jpeg",
    width: 900,
    height: 1600,
  },
  {
    src: "/img/portfolio/16.jpeg",
    width: 1440,
    height: 1421,
  },
];

// Componente del icono de zoom
const ZoomIcon = ({ photo, index }: any) => {
  return (
    <div className="relative">
      <div
        className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm 
                 rounded-full w-9 h-9 flex items-center justify-center 
                 text-white cursor-pointer transition-all duration-300 
                 ease-in-out border border-white/20 hover:bg-black/80 
                 hover:scale-110 z-10"
        title="Haz clic para ampliar"
      >
        <FiZoomIn size={20} />
      </div>
    </div>
  );
};

export default function Categories() {
  const [selectedImage, setSelectedImage] = useState(-1);
  const router = useRouter();

  const handleImageClick = ({ index }: { index: number }) => {
    setSelectedImage(index);
  };

  const handleCloseLightbox = () => {
    setSelectedImage(-1);
  };

  return (
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

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">
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
              className="p-3 rounded-2xl shadow-lg text-white text-4xl"
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
              }}
            >
              <FiFolder />
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
            Portafolio -
            <span className="bg-linear-to-r from-cyan-500 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              Una Idea Más
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 text-lg max-w-2xl px-4"
          >
            Desde artículos promocionales hasta regalos corporativos, encuentra
            inspiración para destacar tu marca con estilo y calidad.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
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
              className="text-gray-800 font-medium"
              onPress={() => router.push("/categories")}
            >
              Portafolio
            </BreadcrumbItem>
          </Breadcrumbs>
        </motion.div>

        {/* Galería de fotos con iconos de zoom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className=""
        >
          <PhotoAlbum
            photos={images}
            layout="rows"
            onClick={handleImageClick}
            spacing={8}
            padding={0}
            targetRowHeight={300}
            render={{
              extras: (_, { photo, index }) => (
                <ZoomIcon photo={photo} index={index} />
              ),
            }}
          />
        </motion.div>

        {/* Lightbox */}
        <Lightbox
          open={selectedImage >= 0}
          close={handleCloseLightbox}
          slides={images.map((img) => ({
            src: img.src,
            width: img.width,
            height: img.height,
          }))}
          index={selectedImage}
          controller={{ closeOnBackdropClick: true }}
          plugins={[Thumbnails, Zoom, Fullscreen]}
        />

        <div className="flex gap-4 mt-10">
          <Button
            onPress={() => router.back()}
            variant="flat"
            startContent={<FiArrowLeft size={18} />}
            className="flex-1 h-14 text-base font-semibold rounded-xl bg-white/80 backdrop-blur-sm border border-gray-300/50 hover:bg-white transition-all duration-300"
          >
            Volver
          </Button>
        </div>
      </div>

      <ActionButtons />
    </div>
  );
}
