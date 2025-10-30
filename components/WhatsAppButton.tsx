import { Button } from "@heroui/react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <Button
      color="success"
      className="fixed bottom-0 right-0 m-5 rounded-full z-10 h-14 w-14 p-0 shadow-lg hover:shadow-xl transition-shadow "
      isIconOnly
      onPress={() => window.open("https://wa.link/td7buj", "_blank")}
    >
      <FaWhatsapp size={34} color="white" />
    </Button>
  );
}

export default WhatsAppButton;
