import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import { FaWhatsapp } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa6";
import { PiMapPinFill, PiMapPinLineFill } from "react-icons/pi";

export default function ActionButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    const handleScroll = () => {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed right-0 z-10"
        initial={{ bottom: "120px" }}
        animate={{
          bottom: isVisible ? "120px" : "70px",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ marginRight: "20px" }}
      >
        <Button
          color="danger"
          className="rounded-full p-0 shadow-lg hover:shadow-xl transition-shadow"
          isIconOnly
          onPress={onOpen}
        >
          <PiMapPinFill size={24} color="white" />
        </Button>
      </motion.div>

      <motion.div
        className="fixed right-0 z-10"
        initial={{ bottom: "70px" }}
        animate={{
          bottom: isVisible ? "70px" : "20px",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ marginRight: "20px" }}
      >
        <Button
          color="success"
          className="rounded-full p-0 shadow-lg hover:shadow-xl transition-shadow"
          isIconOnly
          onPress={() => window.open("https://wa.link/3gvbx3", "_blank")}
        >
          <FaWhatsapp size={24} color="white" />
        </Button>
      </motion.div>

      <motion.button
        type="button"
        className="bg-gray-800/50 p-3 rounded-full text-zinc-100 fixed bottom-0 right-0 font-medium shadow-md mb-5 mr-5 transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg z-10"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <IoIosArrowUp />
      </motion.button>
           
      <Drawer isOpen={isOpen} placement="bottom" onOpenChange={onOpenChange} backdrop="blur" className="w-full h-[calc(100vh)]">
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
              
              </DrawerHeader>
              <DrawerBody>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.8011204996683!2d-96.94669479999999!3d19.5930193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db2fb97388d95b%3A0x833eed38e7d0412a!2sUna%20Idea%20Mas%20publicidad%20Banderilla!5e0!3m2!1ses!2smx!4v1762894183203!5m2!1ses!2smx"                  
                  style={{ border: "0" }}
                  height={"100%"}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-large z-20"
                ></iframe>
              </DrawerBody>
              <DrawerFooter>
                <Button color="default" onPress={onClose}>
                  Cerrar
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
