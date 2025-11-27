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
  Spinner,
  useDisclosure,
} from "@heroui/react";
import { FaWhatsapp } from "react-icons/fa";
import { PiMapPinFill } from "react-icons/pi";

export default function ActionButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Arreglo de mensajes aleatorios
  const messages = [
    "¿Tienes un proyecto en mente? ¡Hablemos! 💭",
    "¡Cotiza gratis tu idea! 📋",
    "¿Buscas resultados? Te escuchamos 👂",
    "¡Hagamos magia juntos! ✨ Escríbenos",
    "Atención inmediata por WhatsApp 📱",
    "¿Necesitas ayuda? Chatea con nosotros 💬",
    "¡Contáctanos por WhatsApp! 🚀",
    "¿Preguntas? Te ayudamos al instante 🤗",
    "¡Ideamos tu proyecto juntos! 💡",
    "¿Listo para destacar? Chatea ahora 🚀",
    "Transformemos tus ideas en realidad 🎨",
    "¡Oferta especial por tiempo limitado! ⏳",
    "¿Listo para comenzar? Escríbenos ya! 🔥",
    "¡No esperes más! Te atendemos al instante ⚡",
    "¿Sueñas con un diseño increíble? Hablemos 💭",
    "¡Hola! ¿En qué te podemos ayudar? 😊",
    "¡Estamos aquí para ti! Escríbenos 👋",
    "Tu éxito es nuestra prioridad 💪",
    "Somos tus aliados creativos 🤝",
    "¡Primera consulta gratis! 🆓",
    "Te damos ideas sin compromiso 💡",
    "Asesoría personalizada gratis 🎯",
    "Descubre cómo podemos ayudarte 🔍",
    "¡Mándanos un WhatsApp! 💚",
    "Respuesta inmediata por WhatsApp ⚡",
    "Click y chatea al instante 💬"
  ];

  // Función para obtener un mensaje aleatorio
  const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  };

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

    // Controlar la aparición intermitente de la burbuja
    const bubbleInterval = setInterval(() => {
      // Cambiar el mensaje cada vez que aparece la burbuja
      setCurrentMessage(getRandomMessage());
      setShowBubble(true);
      
      // Ocultar después de 3 segundos
      setTimeout(() => {
        setShowBubble(false);
      }, 5000);
      
    }, 15000); // Mostrar cada 15 segundos

    // Mostrar la burbuja inicialmente después de 2 segundos con mensaje aleatorio
    const initialBubble = setTimeout(() => {
      setCurrentMessage(getRandomMessage());
      setShowBubble(true);
      setTimeout(() => setShowBubble(false), 3000);
    }, 2000);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(bubbleInterval);
      clearTimeout(initialBubble);
    };
  }, []);

  return (
    <>
      {/* Botón de ubicación */}
      <motion.div
        className="fixed right-0 z-10"
        initial={{ bottom: "150px" }}
        animate={{
          bottom: isVisible ? "140px" : "80px",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ marginRight: "20px" }}
      >
        <Button
          color="danger"
          className="rounded-full p-0 shadow-lg hover:shadow-xl transition-shadow h-12 w-12"
          isIconOnly
          onPress={onOpen}
        >
          <PiMapPinFill size={30} color="white" />
        </Button>
      </motion.div>

      {/* Botón de WhatsApp con burbuja */}
      <motion.div
        className="fixed right-0 z-10"
        initial={{ bottom: "90px" }}
        animate={{
          bottom: isVisible ? "80px" : "20px",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ marginRight: "20px" }}
      >
        {/* Burbuja flotante */}
        <motion.div
          className="absolute right-12 top-1/2 transform -translate-y-1/2 z-20"
          initial={{ opacity: 0, x: 10, scale: 0.8 }}
          animate={{
            opacity: showBubble ? 1 : 0,
            x: showBubble ? 0 : 10,
            scale: showBubble ? 1 : 0.8,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg border border-gray-200 relative whitespace-nowrap">
            <span className="text-sm font-medium">{currentMessage}</span>
            
            {/* Puntito de la burbuja */}
            <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2">
              <div className="w-2 h-2 bg-white rotate-45 border-r border-b border-gray-200 "></div>
            </div>
          </div>
        </motion.div>

        <Button
          color="success"
          className="rounded-full p-0 shadow-lg hover:shadow-xl transition-shadow relative z-10 h-12 w-12"
          isIconOnly
          onPress={() => window.open("https://wa.link/3gvbx3", "_blank")}
        >
          <FaWhatsapp size={30} color="white" />
        </Button>
      </motion.div>

      {/* Botón de scroll to top */}
      <motion.button
        type="button"
        className="bg-gray-800/50 p-3 rounded-full text-zinc-100 fixed bottom-0 right-0 font-medium shadow-md mb-5 mr-5 transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg z-10 h-12 w-12 flex justify-center items-center"
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
        <IoIosArrowUp size={24} />
      </motion.button>

      {/* Drawer del mapa */}
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onOpenChange={onOpenChange}
        backdrop="blur"
        className="w-full h-[calc(100vh)]"
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1"></DrawerHeader>
              <DrawerBody className="relative flex justify-center items-center w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.8011204996683!2d-96.94669479999999!3d19.5930193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db2fb97388d95b%3A0x833eed38e7d0412a!2sUna%20Idea%20Mas%20publicidad%20Banderilla!5e0!3m2!1ses!2smx!4v1762894183203!5m2!1ses!2smx"
                  style={{ border: "0" }}
                  height={"100%"}
                  width={"100%"}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-large z-20"
                ></iframe>
                <Spinner className="absolute z-10" color="secondary" />
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