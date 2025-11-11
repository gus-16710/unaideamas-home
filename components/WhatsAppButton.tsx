import { Button } from "@heroui/react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <Button
      color="success"
      className="fixed bottom-0 right-0 m-5 rounded-full z-10 p-0 shadow-lg hover:shadow-xl transition-shadow "
      style={{marginBottom: "70px"}}
      isIconOnly
      onPress={() => window.open("https://wa.link/3gvbx3", "_blank")}
    >
      <FaWhatsapp size={24} color="white" />
    </Button>
  );
}

export default WhatsAppButton;
