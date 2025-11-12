import { Category, CategoryProducts } from "@/types";
import { LuCupSoda } from "react-icons/lu";
import { TiPen } from "react-icons/ti";
import { BsBagHeart } from "react-icons/bs";
import { LuNotebookTabs } from "react-icons/lu";
import { LuPillBottle } from "react-icons/lu";
import { BsCupHot } from "react-icons/bs";

export const categoriesList: Category[] = [
  {
    id: 1,
    name: "Cilindros",
    img: "/img/categories/cilindros.jpg",
    url: "cilindros",
    description:
      "Refresca tu marca con cilindros personalizados. Ideales para eventos, promociones o regalos corporativos, disponibles en una amplia variedad de estilos y colores.",
    icon: LuPillBottle,
    color: "text-green-500",
  },
  {
    id: 2,
    name: "Termos",
    img: "/img/categories/termos.jpg",
    url: "termos",
    description:
      "Termos de alta calidad para mantener tus bebidas a la temperatura ideal",
    icon: BsCupHot,
    color: "text-purple-500",
  },
  {
    id: 3,
    name: "Agendas y Libretas",
    img: "/img/categories/agendas.jpg",
    url: "agendas",
    description:
      "Organiza tu tiempo con nuestras agendas y libretas de diseño único",
    icon: LuNotebookTabs,
    color: "text-red-500",
  },
  {
    id: 4,
    name: "Bolsas",
    img: "/img/categories/bolsas.jpg",
    url: "bolsas",
    description: "Bolsas ecológicas y prácticas para el día a día",
    icon: BsBagHeart,
    color: "text-blue-500",
  },
  {
    id: 5,
    name: "Lapiceros",
    img: "/img/categories/lapiceros.jpg",
    url: "lapiceros",
    description: "Bolígrafos de calidad premium para escribir con estilo",
    icon: TiPen,
    color: "text-yellow-500",
  },
  {
    id: 6,
    name: "Vasos",
    img: "/img/categories/vasos.jpg",
    url: "vasos",
    description:
      "Vasos personalizados ideales para eventos, promociones y uso diario. Diseños modernos y resistentes.",
    icon: LuCupSoda,
    color: "text-orange-500",
  },
];

// Datos iniciales de productos
export const initialProducts: CategoryProducts = {
  lapiceros: [
    {
      id: "A3157",
      nombre: "Bolígrafo Quadrati",
      descripcion:
        "Bolígrafo de aluminio con forma cuadrada, diseño moderno y excelente área para personalizar. Cuenta con punta, clip, aro central y botón en cromo, grip negro con textura. Utiliza tinta alemana negra y tiene mecanismo de click.",
      capacidad: null,
      material: {
        exterior: "Aluminio",
        interior: null,
      },
      medidas: {
        largo: "14.3 cm",
        diametro: "1.2 cm",
      },
      empaque: {
        individual: "Bolsa de plástico",
        mayorista: "Caja máster de 500 piezas (34 x 28 x 18 cm, 7.8 kg)",
      },
      colores_disponibles: ["#FFFFFF", "#000000", "#FF0000", "#000080"],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://doblevela.com/items/index/A3157",
      imagenes_urls: [
        "https://doblevela.com/images/large/A3157_lrg.jpg",
        "https://doblevela.com/images/large/A3157_blanco_lrg.jpg?v=2",
      ],
      categoria: "lapiceros",
    },
    {
      id: "A2671A",
      nombre: "Stevia",
      descripcion:
        "Bolígrafo metálico con diseño moderno y elegante. Cuenta con mecanismo de click y tinta azul.",
      capacidad: null,
      material: {
        exterior: "Metal",
        interior: null,
      },
      medidas: {
        largo: "14.1 cm",
        diametro: "1.1 cm",
      },
      empaque: {
        tipo: "Bolsa individual",
        color: "Transparente",
      },
      colores_disponibles: ["#FFFFFF", "#000000", "#FF0000", "#000080"],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://doblevela.com/items/index/A2671A",
      imagenes_urls: [
        "https://doblevela.com/images/large/A2671A_lrg.jpg",
        "https://doblevela.com/images/large/A2671A_blanco_lrg.jpg?v=2",
      ],
      categoria: "lapiceros",
    },
    {
      id: "A2113A",
      nombre: "Oddra",
      descripcion:
        "Bolígrafo metálico con recubrimiento brillante en color. Clip, punta y detalles en color plata. Diseño esbelto y ligero que lo hace muy cómodo al escribir. Cuenta con touch para dispositivos táctiles. Mecanismo retráctil.",
      capacidad: null,
      material: {
        exterior: "Aluminio",
        interior: null,
      },
      medidas: {
        largo: "14.3 cm",
        diametro: "1.1 cm",
      },
      empaque: {
        tipo: "Bolsa individual",
        color: "Transparente",
      },
      colores_disponibles: [
        "#FFFFFF",
        "#000000",
        "#FF0000",
        "#000080",
        "#FFFF00",
        "#008000",
        "#FFA500",
        "#FFC0CB",
        "#800080",
        "#40E0D0",
        "#FF00FF",
        "#00FF00",
        "#F0C0C0",
        "#800080",
      ],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://doblevela.com/items/index/A2113A",
      imagenes_urls: [
        "https://doblevela.com/images/large/A2113A_lrg.jpg",
        "https://doblevela.com/images/large/A2113A_blanco_lrg.jpg?v=2",
      ],
      categoria: "lapiceros",
    },
    {
      id: "A3197",
      nombre: "Chrismatik",
      descripcion:
        "Bolígrafo multitintas con figura navideña en la parte superior, disponible en colores verde y rojo. Cuenta con 6 colores de tinta (negro, azul, verde, rojo, morado y naranja) y mecanismo retráctil.",
      capacidad: null,
      material: {
        exterior: "Plástico",
        interior: null,
      },
      medidas: {
        largo: "15 cm",
        diametro: "1.7 cm",
      },
      empaque: {
        tipo: "Caja individual",
        color: "Kraft",
      },
      colores_disponibles: ["#008000", "#FF0000"],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://doblevela.com/items/index/A3197",
      imagenes_urls: [
        "https://doblevela.com/images/large/A3197_lrg.jpg",
        "https://doblevela.com/images/adicionales/_A3197_1.jpg",
      ],
      categoria: "lapiceros",
    },
    {
      id: "A2567",
      nombre: "Maya",
      descripcion:
        "Bolígrafo de plástico con cuerpo y clip de color. Mecanismo de click.",
      capacidad: null,
      material: {
        exterior: "Plástico",
        interior: null,
      },
      medidas: {
        largo: "14 cm",
        diametro: "1 cm",
      },
      empaque: {
        tipo: "Bolsa de plástico",
        color: "Transparente",
      },
      colores_disponibles: [
        "#FFFFFF",
        "#000000",
        "#FFA500",
        "#FF0000",
        "#FFC0CB",
        "#008000",
        "#FFFF00",
        "#0000FF",
        "#87CEEB",
        "#800080",
      ],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://doblevela.com/items/index/A2567",
      imagenes_urls: [
        "https://doblevela.com/images/large/A2567_lrg.jpg",
        "https://doblevela.com/images/large/A2567_blanco_lrg.jpg?v=2",
      ],
      categoria: "lapiceros",
    },
    {
      id: "A2602",
      nombre: "BUNGALO",
      descripcion:
        "Bolígrafo ecológico de bambú con botón, punta y clip metálico. Mecanismo de click.",
      capacidad: null,
      material: {
        exterior: "Bambú",
        interior: null,
      },
      medidas: {
        largo: "14 cm",
        diametro: "1.1 cm",
      },
      empaque: {
        tipo: "Bolsa de plástico",
        color: "Transparente",
      },
      colores_disponibles: ["#A0522D"],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://doblevela.com/items/index/A2602",
      imagenes_urls: [
        "https://doblevela.com/images/large/A2602_lrg.jpg",
        "https://doblevela.com/images/large/A2602_cafe_lrg.jpg?v=2",
      ],
      categoria: "lapiceros",
    },
    {
      id: "BIOP01",
      nombre: "Green Life",
      descripcion:
        "Bolígrafo ecológico fabricado con papel reciclado, clip y punta de plástico. Mecanismo de click.",
      capacidad: null,
      material: {
        exterior: "Papel reciclado",
        interior: null,
      },
      medidas: {
        largo: "13.8 cm",
        diametro: "1 cm",
      },
      empaque: {
        tipo: "Bolsa de plástico",
        color: "Transparente",
      },
      colores_disponibles: ["#FF0000", "#0000FF", "#000000", "#008000", "#FFA500"],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://doblevela.com/items/index/BIOP01",
      imagenes_urls: [
        "https://doblevela.com/images/large/BIOP01_lrg.jpg",
        "https://doblevela.com/images/large/BIOP01_rojo_lrg.jpg?v=2",
      ],
      categoria: "lapiceros",
    },
    {
      id: "A2919",
      nombre: "ECOPEN",
      descripcion:
        "Bolígrafo ecológico y reciclable con cuerpo de plástico ABS y fibra de trigo. Cuenta con clip metálico, punta y detalle al centro en color cromo. Mecanismo de click.",
      capacidad: null,
      material: {
        exterior: "Plástico ABS + Fibra de trigo",
        interior: null,
      },
      medidas: {
        largo: "14 cm",
        diametro: "1.2 cm",
      },
      empaque: {
        tipo: "Bolsa de celofán",
        color: "Transparente",
      },
      colores_disponibles: ["#90EE90", "#0000FF", "#F5F5DC"],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://doblevela.com/items/index/A2919",
      imagenes_urls: [
        "https://doblevela.com/images/large/A2919_lrg.jpg",
        "https://doblevela.com/images/large/A2919_verdeclaro_lrg.jpg?v=2",
      ],
      categoria: "lapiceros",
    },
    {
      id: "A2987",
      nombre: "CORTEZA",
      descripcion:
        "Bolígrafo ecológico de fibra de trigo con mecanismo de click; punta y botón en color natural y clip con cubierta de cartón.",
      capacidad: null,
      material: {
        exterior: "Fibra de trigo",
        interior: null,
      },
      medidas: {
        largo: "14.3 cm",
        diametro: "1 cm",
      },
      empaque: {
        tipo: "Bolsa de plástico",
        color: "Transparente",
      },
      colores_disponibles: [
        "#FF0000",
        "#90EE90",
        "#87CEEB",
        "#F5F5DC",
        "#F0C0C0",
      ],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://doblevela.com/items/index/A2987",
      imagenes_urls: [
        "https://doblevela.com/images/large/A2987_lrg.jpg",
        "https://doblevela.com/images/large/A2987_rojo_lrg.jpg?v=2",
      ],
      categoria: "lapiceros",
    },
    {
      id: "SH-1295",
      nombre: "Bolígrafo Boston",
      descripcion: "Grip antiderrapante. Mecanismo twist. Incluye estuche.",
      capacidad: null,
      material: {
        exterior: "Aleación de cobre",
        interior: null,
      },
      medidas: {
        largo: "14 cm",
        diametro: "1.3 cm",
      },
      empaque: {
        individual: "Sí",
        mayorista: "Caja de 100 piezas (66.5 x 35 x 28.5 cm, 10 kg)",
      },
      colores_disponibles: ["#000000"],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "6218 disponibles (sujeto a cambios)",
      url_producto: "https://www.promoopcion.com/sh-1295.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/-/_/-_sh-1295.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/S/H/SH-1295_1_1.jpg?store=default&image-type=image",
      ],
      categoria: "lapiceros",
    },
    {
      id: "RQ-013",
      nombre: "Bolígrafo Aros",
      descripcion:
        "Bolígrafo metálico con acabado rubber, mecanismo pulsador y tinta negra. Ideal para grabado láser.",
      capacidad: null,
      material: {
        exterior: "Aluminio",
        interior: null,
      },
      medidas: {
        largo: "13.5 cm",
        diametro: "1 cm",
      },
      empaque: {
        individual: "Bolsa de plástico",
        mayorista: "Caja de 500 piezas (32 x 15 x 26.5 cm, 8.5 kg)",
      },
      colores_disponibles: [
        "#000000",
        "#FFFFFF",
        "#FF0000",
        "#0000FF",
        "#008000",
        "#FFFF00",
        "#FFA500",
        "#FFC0CB",
        "#87CEEB",
      ],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://www.promoopcion.com/rq-013.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/r/q/rq-013_.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/r/q/rq-013-b_3.jpg?store=default&image-type=image",
      ],
      categoria: "lapiceros",
    },
    {
      id: "RQ-1010",
      nombre: "Bolígrafo Tift",
      descripcion:
        "Bolígrafo metálico con acabado tipo rubber, botón, clip y punta en color rose gold. Mecanismo pulsador. Incluye funda.",
      capacidad: null,
      material: {
        exterior: "Aluminio",
        interior: null,
      },
      medidas: {
        largo: "13.8 cm",
        diametro: "1.1 cm",
      },
      empaque: {
        individual: "Sí",
        mayorista: "Caja de 500 piezas (58 x 24 x 17 cm, 9 kg)",
      },
      colores_disponibles: ["#0000FF", "#FFFFFF", "#000000", "#808080", "#FFC0CB", "#FF0000"],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://www.promoopcion.com/rq-1010.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/r/q/rq-1010--.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/r/q/rq-1010-a_1.jpg?store=default&image-type=image",
      ],
      categoria: "lapiceros",
    },
    {
      id: "SH-1135",
      nombre: "Bolígrafo Slim",
      descripcion:
        "Bolígrafo de plástico con tapón y tinta negra. Ideal para personalización mediante serigrafía o tampografía.",
      capacidad: null,
      material: {
        exterior: "Plástico",
        interior: null,
      },
      medidas: {
        largo: "14.8 cm",
        diametro: "0.8 cm",
      },
      empaque: {
        individual: "No",
        mayorista: "Caja con 2,000 piezas (54 x 23 x 32 cm, 12 kg)",
      },
      colores_disponibles: [
        "#0000FF",
        "#FFFFFF",
        "#FF0000",
        "#000000",
        "#008000",
        "#FFFF00",
        "#FFA500",
        "#87CEEB",
      ],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://www.promoopcion.com/sh-1135.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/S/H/SH-1135_1.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/s/h/sh-1135-.jpg?store=default&image-type=image",
      ],
      categoria: "lapiceros",
    },
    {
      id: "SH-1215",
      nombre: "Bolígrafo 3 en 1 Smoke",
      descripcion:
        "Bolígrafo de plástico con mecanismo pulsador que ofrece tinta azul, negra y roja. Ideal para personalización mediante serigrafía o tampografía.",
      capacidad: null,
      material: {
        exterior: "Plástico",
        interior: null,
      },
      medidas: {
        largo: "14 cm",
        diametro: "1.3 cm",
      },
      empaque: {
        individual: "No",
        mayorista: "Caja con 1,000 piezas (55 x 23 x 32 cm, 14 kg)",
      },
      colores_disponibles: ["#FF0000", "#0000FF", "#000000"],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://www.promoopcion.com/sh-1215.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/S/H/SH-1215_1.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/S/H/SH-1215_10.jpg?store=default&image-type=image",
      ],
      categoria: "lapiceros",
    },
    {
      id: "SH-1450",
      nombre: "Bolígrafo Chad",
      descripcion:
        "Bolígrafo de plástico con mecanismo pulsador y tinta azul. Ideal para personalización mediante serigrafía o tampografía.",
      capacidad: null,
      material: {
        exterior: "Plástico",
        interior: null,
      },
      medidas: {
        largo: "13.9 cm",
        diametro: "1.2 cm",
      },
      empaque: {
        individual: "Bolsa de plástico",
        mayorista: "Caja con 1,000 piezas (48 x 22 x 31 cm, 9 kg)",
      },
      colores_disponibles: [
        "#FF0000",
        "#0000FF",
        "#000000",
        "#008000",
        "#FFFF00",
        "#FFA500",
        "#800080",
      ],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://www.promoopcion.com/sh-1450.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/S/H/SH-1450_1.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/S/H/SH-1450_20_1.jpg?store=default&image-type=image",
      ],
      categoria: "lapiceros",
    },
    {
      id: "SH-2055",
      nombre: "Bolígrafo Niesen",
      descripcion:
        "Bolígrafo de plástico con mecanismo pulsador y tinta azul. Ideal para personalización mediante serigrafía o tampografía.",
      capacidad: null,
      material: {
        exterior: "Plástico",
        interior: null,
      },
      medidas: {
        largo: "14.3 cm",
        diametro: "1.2 cm",
      },
      empaque: {
        individual: "Bolsa de plástico",
        mayorista: "Caja con 1,000 piezas (52 x 22 x 33 cm, 12.5 kg)",
      },
      colores_disponibles: ["#0000FF", "#FF0000", "#000000", "#008000", "#FFA500"],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://www.promoopcion.com/sh-2055.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/s/h/sh-2055_1.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/S/H/SH-2055_20.jpg?store=default&image-type=image",
      ],
      categoria: "lapiceros",
    },
    {
      id: "SH-2480",
      nombre: "Bolígrafo Sopron",
      descripcion:
        "Bolígrafo de plástico con mecanismo pulsador y tinta negra. Ideal para personalización mediante serigrafía o tampografía.",
      capacidad: null,
      material: {
        exterior: "Plástico",
        interior: null,
      },
      medidas: {
        largo: "14 cm",
        diametro: "1 cm",
      },
      empaque: {
        individual: "Bolsa de plástico",
        mayorista: "Caja con 1,000 piezas (55 x 16 x 31 cm, 8 kg)",
      },
      colores_disponibles: ["#0000FF", "#FF0000", "#000000", "#008000", "#FFA500"],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://www.promoopcion.com/sh-2480.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/S/H/SH-2480.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/S/H/SH-2480_20.jpg?store=default&image-type=image",
      ],
      categoria: "lapiceros",
    },
    {
      id: "GEL-090",
      nombre: "Bolígrafo Yuzuk",
      descripcion:
        "Bolígrafo de tinta de gel con mecanismo pulsador. Ideal para personalización mediante serigrafía.",
      capacidad: null,
      material: {
        exterior: "Plástico",
        interior: null,
      },
      medidas: {
        largo: "14.5 cm",
        diametro: "1 cm",
      },
      empaque: {
        individual: "Bolsa de plástico",
        mayorista: "Caja con 1,000 piezas (48 x 20 x 31 cm, 9.5 kg)",
      },
      colores_disponibles: [
        "#000000",
        "#800080",
        "#008000",
        "#FF0000",
        "#0000FF",
        "#FFFF00",
        "#FFA500",
        "#FFC0CB",
        "#40E0D0",
        "#FFFFFF",
      ],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://www.promoopcion.com/gel-090.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/g/e/gel-090-e.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/g/e/gel-090-v.jpg?store=default&image-type=image",
      ],
      categoria: "lapiceros",
    },
    {
      id: "ECO-080",
      nombre: "Bolígrafo Eco Gruri",
      descripcion:
        "Bolígrafo ecológico con doble pared; la pared interior y el clip son de color blanco, mientras que la pared exterior está fabricada con material de fibra de trigo. Cuenta con mecanismo pulsador y tinta negra.",
      capacidad: null,
      material: {
        exterior: "Fibra de trigo",
        interior: "Plástico",
      },
      medidas: {
        largo: "15.3 cm",
        diametro: "1.4 cm",
      },
      empaque: {
        individual: "Bolsa de plástico",
        mayorista: "Caja con 1,000 piezas (48 x 22 x 33 cm, 13 kg)",
      },
      colores_disponibles: ["#0000FF", "#FF0000", "#008000"],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://www.promoopcion.com/eco-080.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/e/c/eco-080_7.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/e/c/eco-080--_.jpg?store=default&image-type=image",
      ],
      categoria: "lapiceros",
    },
    {
      id: "ECO-065",
      nombre: "Bolígrafo Milta",
      descripcion:
        "Bolígrafo ecológico con mecanismo pulsador, fabricado con material eco-friendly. Incluye funda de cartón reciclado y tinta negra.",
      capacidad: null,
      material: {
        exterior: "Fibra de trigo",
        interior: "Plástico",
      },
      medidas: {
        largo: "14.5 cm",
        diametro: "1.2 cm",
      },
      empaque: {
        individual: "Funda de cartón reciclado",
        mayorista: "Caja con 500 piezas (55 x 22 x 32 cm, 10 kg)",
      },
      colores_disponibles: [
        "#FFA500",
        "#008000",
        "#0000FF",
        "#FF0000",
        "#000000",
        "#FFFFFF",
      ],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://www.promoopcion.com/eco-065.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/E/C/ECO-065.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/E/C/ECO-065_20.jpg?store=default&image-type=image",
      ],
      categoria: "lapiceros",
    },
  ],
  agendas: [
    {
      id: "SET027",
      nombre: "Set Ecológico BioSet",
      descripcion:
        "Set ecológico fabricado con materiales amigables con el medio ambiente. Incluye libreta con cubierta rígida, 80 hojas a rayas, elástico para cerrar y elástico porta bolígrafo. Bolsa de algodón estilo tote. Bolígrafo de cartón con sistema push. Presentado en caja de cartón tipo regalo.",
      capacidad: null,
      material: {
        exterior: "Cartón / Algodón / Papel",
        interior: null,
      },
      medidas: {
        alto: "28.8 cm",
        ancho: "22.2 cm",
        profundidad: "5 cm",
      },
      empaque: {
        tipo: "Caja individual",
        color: "Natural",
      },
      colores_disponibles: ["#F5F5DC"], // Beige
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://www.promoopcion.com/set-027.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/s/e/set-027_plec.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/s/e/set-027-be_1_2.jpg?store=default&image-type=image",
      ],
      categoria: "agendas",
    },
    {
      id: "M80200",
      nombre: "Carpeta Nature",
      descripcion:
        "Carpeta ecológica fabricada en cartón y papel reciclado. Incluye un block de rayas tamaño A4 con 20 hojas, bolígrafo y notas adhesivas. Ideal para presentaciones, oficinas o eventos corporativos.",
      capacidad: null,
      material: {
        exterior: "Cartón / Papel Reciclado",
        interior: null,
      },
      medidas: {
        alto: "34.5 cm",
        ancho: "28.4 cm",
      },
      empaque: {
        tipo: "Bolsa individual",
        color: "Beige",
      },
      colores_disponibles: ["#F5F5DC"], // Beige
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://www.promoopcion.com/m-80200-1.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/m/-/m-80200_1_1.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/m/-/m-80200-2_1.jpg?store=default&image-type=image",
      ],
      categoria: "agendas",
    },
    {
      id: "GM045",
      nombre: "Libreta con Acuarelas Klimpt",
      descripcion:
        "Libreta de dibujo con 10 páginas diferentes, acompañadas de una paleta de 6 colores de acuarela para dar vida a tus creaciones. Desde majestuosos animales, fascinantes peces y asombrosos dinosaurios. Incluye pincel para acuarela.",
      capacidad: null,
      material: {
        exterior: "Papel",
        interior: "Acuarela",
      },
      medidas: {
        alto: "21 cm",
        ancho: "19 cm",
      },
      empaque: {
        tipo: "Bolsa individual",
        color: "Blanco",
      },
      colores_disponibles: ["#FFFFFF"], // Blanco
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://www.promoopcion.com/gm-045.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/g/m/gm-045-b.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/g/m/gm-045-b_7.jpg?store=default&image-type=image",
      ],
      categoria: "agendas",
    },
    {
      id: "GM039",
      nombre: "Libreta Camelot",
      descripcion:
        "Libreta infantil con 40 hojas: 12 con dibujos de animales y 28 en blanco. Incluye compartimento con 11 crayones de colores. Ideal para actividades creativas y educativas.",
      capacidad: null,
      material: {
        exterior: "Cartón",
        interior: null,
      },
      medidas: {
        alto: "9.5 cm",
        ancho: "10.7 cm",
      },
      empaque: {
        tipo: "Bolsa individual",
        color: "Beige",
      },
      colores_disponibles: ["#F5F5DC"], // Beige
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://www.promoopcion.com/gm-039.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/g/m/gm-039-be.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/g/m/gm_039_3_1_1.jpg?store=default&image-type=image",
      ],
      categoria: "agendas",
    },
    {
      id: "HL6590",
      nombre: "Libreta Vonit",
      descripcion:
        "Elegante libreta con 70 hojas a rayas de 12 x 18 cm. Incluye notas adhesivas con los días de la semana, bolígrafo ecológico y broche imantado para cierre.",
      capacidad: null,
      material: {
        exterior: "Curpiel",
        interior: null,
      },
      medidas: {
        alto: "20 cm",
        ancho: "14 cm",
      },
      empaque: {
        tipo: "Bolsa individual",
        color: "Negro",
      },
      colores_disponibles: ["#000000"], // Negro
      origen: "Hecho en México",
      precio_lista: "$77.08 MXN",
      disponibilidad: "Consultar inventario",
      url_producto: "https://www.promoopcion.com/hl-6590.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/h/l/hl-6590_2.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/h/l/hl-6590-1.jpg?store=default&image-type=image",
      ],
      categoria: "agendas",
    },
    {
      id: "HL9104",
      nombre: "Libreta Kadan",
      descripcion:
        "Libreta con 80 hojas a rayas. Cubierta rígida de curpiel y cierre por medio de elástico. Incluye una banda especial para bolígrafo y listón separador de hojas. Bolígrafo no incluido.",
      capacidad: null,
      material: {
        exterior: "Curpiel",
        interior: null,
      },
      medidas: {
        alto: "21 cm",
        ancho: "14.5 cm",
      },
      empaque: {
        tipo: "Bolsa individual",
        color: "A juego con la libreta",
      },
      colores_disponibles: ["#6B7280", "#EC4899", "#2563EB", "#16A34A"], // Gris, Rosa, Azul, Verde
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://www.promoopcion.com/hl-9104.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/h/l/hl-9104_plec.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/h/l/hl-9104-a.jpg?store=default&image-type=image",
      ],
      categoria: "agendas",
    },
    {
      id: "HL9068",
      nombre: "Libreta Eco Senda",
      descripcion:
        "Libreta ecológica fabricada en papel kraft reciclado con lomo de corcho natural. Cuenta con 72 hojas: 40 a raya y 32 punteadas. Incluye elástico para mantener la libreta cerrada y manga de cartón.",
      capacidad: null,
      material: {
        exterior: "Papel kraft reciclado y corcho natural",
        interior: null,
      },
      medidas: {
        alto: "21 cm",
        ancho: "13.5 cm",
      },
      empaque: {
        tipo: "Caja individual",
        color: "A juego con la libreta",
      },
      colores_disponibles: ["#F5F5DC"], // Beige
      origen: "Hecho en México",
      precio_lista: "$89.07 MXN",
      disponibilidad: "Consultar inventario",
      url_producto: "https://www.promoopcion.com/hl-9068.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/h/l/hl-9068-pleca.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/h/l/hl-9068-be_2.jpg?store=default&image-type=image",
      ],
      categoria: "libretas",
    },
    {
      id: "HL9053",
      nombre: "Libreta POE",
      descripcion:
        "Libreta ecológica con 70 hojas a rayas. Cubierta de cartón. Incluye espiral metálico y elástico para cerrar. Su diseño divide el espiral aportando un toque distintivo de las libretas convencionales.",
      capacidad: null,
      material: {
        exterior: "Cartón reciclado",
        interior: "Papel reciclado",
      },
      medidas: {
        alto: "20.5 cm",
        ancho: "14.7 cm",
      },
      empaque: {
        tipo: "Bolsa individual",
        color: "Beige",
      },
      colores_disponibles: ["#000000", "#6B7280", "#DC2626", "#2563EB"], // Negro, Gris, Rojo, Azul
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://www.promoopcion.com/hl-9053.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/h/l/hl-9053.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/h/l/hl-9053-a.jpg?store=default&image-type=image",
      ],
      categoria: "libretas",
    },
    {
      id: "HL030",
      nombre: "Libreta Kenya",
      descripcion:
        "Elegante libreta de curpiel con 80 hojas de raya. Incluye separador de hojas, elástico para cerrar y bolígrafo de plástico.",
      capacidad: null,
      material: {
        exterior: "Curpiel",
        interior: "Papel reciclado",
      },
      medidas: {
        alto: "20.7 cm",
        ancho: "14 cm",
      },
      empaque: {
        tipo: "Caja individual",
        color: "A juego con la libreta",
      },
      colores_disponibles: ["#000000", "#2563EB", "#DC2626", "#6B7280"], // Negro, Azul, Rojo, Gris
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://www.promoopcion.com/hl-030.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/H/L/HL-030_1.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/H/L/HL-030_20_1.jpg?store=default&image-type=image",
      ],
      categoria: "agendas",
    },
    {
      id: "HL1100",
      nombre: "Libreta Joliet",
      descripcion:
        "Libreta ecológica con 100 hojas de raya, espiral metálico doble y banderillas adheribles en 5 colores. Incluye bolígrafo ecológico.",
      capacidad: null,
      material: {
        exterior: "Cartón reciclado",
        interior: "Papel reciclado",
      },
      medidas: {
        alto: "22 cm",
        ancho: "16.3 cm",
      },
      empaque: {
        tipo: "Bolsa individual",
        color: "Beige",
      },
      colores_disponibles: ["#F5F5DC"], // Beige
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://www.promoopcion.com/hl-1100.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/H/L/HL-1100_1.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/H/L/HL-1100_1_1.jpg?store=default&image-type=image",
      ],
      categoria: "agendas",
    },
    {
      id: "HL016",
      nombre: "Libreta Jog",
      descripcion:
        "Libreta compacta con 50 hojas blancas. Incluye bolígrafo ecológico, broche para cerrar, notas amarillas y banderillas adheribles de diferentes colores.",
      capacidad: null,
      material: {
        exterior: "Cartón reciclado",
        interior: "Papel reciclado",
      },
      medidas: {
        alto: "15.2 cm",
        ancho: "10.2 cm",
      },
      empaque: {
        tipo: "Caja de cartón",
        color: "Beige",
      },
      colores_disponibles: ["#F5F5DC"], // Beige
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://www.promoopcion.com/hl-016.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/H/L/HL-016_1.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/H/L/HL-016_1_1.jpg?store=default&image-type=image",
      ],
      categoria: "agendas",
    },
    {
      id: "HL018",
      nombre: "Libreta Palouse",
      descripcion:
        "Libreta ecológica con 70 hojas de raya. Incluye notas amarillas y banderillas de diferentes colores adheribles, regla de 12 cm, compartimento para tarjetas y bolígrafo ecológico.",
      capacidad: null,
      material: {
        exterior: "Cartón reciclado",
        interior: "Papel reciclado",
      },
      medidas: {
        alto: "15.6 cm",
        ancho: "10.7 cm",
      },
      empaque: {
        tipo: "Caja de cartón",
        color: "Beige",
      },
      colores_disponibles: ["#F5F5DC"], // Beige
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://www.promoopcion.com/hl-018.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/h/l/hl-018-1-.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/H/L/HL-018_2.jpg?store=default&image-type=image",
      ],
      categoria: "agendas",
    },
    {
      id: "HL2040",
      nombre: "Libreta Antlia",
      descripcion:
        "Libreta ecológica con 70 hojas de raya, espiral metálico doble y bolígrafo ecológico. Hecha con cartón y papel reciclado.",
      capacidad: null,
      material: {
        exterior: "Cartón reciclado",
        interior: "Papel reciclado",
      },
      medidas: {
        alto: "20.9 cm",
        ancho: "15.4 cm",
      },
      empaque: {
        tipo: "Bolsa individual",
        color: "A juego con la libreta",
      },
      colores_disponibles: ["#000000"], // Negro
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://www.promoopcion.com/hl-2040.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/H/L/HL-2040_1.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/H/L/HL-2040_10.jpg?store=default&image-type=image",
      ],
      categoria: "agendas",
    },
    {
      id: "AGSP026",
      nombre: "Agenda Diaria Lette 2026",
      descripcion:
        "Agenda diaria con 174 hojas. Contiene datos personales, calendarios 2025-2026-2027, planeador 2026, seguimiento de nuevos hábitos y días festivos. Incluye bolígrafo metálico y caja individual tipo regalo.",
      capacidad: null,
      material: {
        exterior: null,
        interior: null,
      },
      medidas: {
        alto: null,
        ancho: null,
      },
      empaque: {
        tipo: "Caja individual tipo regalo",
        color: null,
      },
      colores_disponibles: ["#E5E7EB"], // No especificado (gris claro)
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://www.promoopcion.com/agsp-026.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/a/g/agsp-026-plec.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/a/g/agsp-026-t_6_1.jpg?store=default&image-type=image",
      ],
      categoria: "agendas",
    },
    {
      id: "HL9105",
      nombre: "Set de Libreta Timantti",
      descripcion:
        "Elegante y original set de regalo que consta de libreta con 100 hojas a rayas, cubierta rígida de curpiel y listón separador. Incluye un bolígrafo de metal con terminado mate y la funcionalidad de lápiz infinito en la parte superior. Todo presentado en caja de regalo con cierre imantado y asas de fino material.",
      capacidad: null,
      material: {
        exterior: "Curpiel",
        interior: null,
      },
      medidas: {
        alto: "21 cm",
        ancho: "14.5 cm",
      },
      empaque: {
        tipo: "Bolsa individual",
        color: "A juego con el set",
      },
      colores_disponibles: ["#000000"], // Negro
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://www.promoopcion.com/hl-9105.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/h/l/hl-9105-pleca.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/h/l/hl-9105-am_1.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/h/l/hl-9105-g_3_1.jpg?store=default&image-type=image",
      ],
      categoria: "agendas",
    },
    {
      id: "AD2026",
      nombre: "Agenda Diaria 2026",
      descripcion:
        "Agenda diaria de pasta rígida con cintillo magnético de PU y placa metálica con logotipo en color plata. Incluye 170 hojas (340 páginas) con cuadro de dedicatoria, hoja de datos personales, calendarios 2026 y días festivos, calendarios 2025 a 2029, planificador anual, planificadores mensuales (12), agenda diaria 365 días, directorio de contactos y teléfonos de interés. Cuenta con resorte sujetador para bolígrafo y listón separador impreso con el año 2026.",
      capacidad: null,
      material: {
        exterior: "PU",
        interior: null,
      },
      medidas: {
        alto: "21.2 cm",
        ancho: "14.5 cm",
      },
      empaque: {
        tipo: "Caja individual",
        color: "A juego con la agenda",
      },
      colores_disponibles: [
        "#DC2626",
        "#EA580C",
        "#06B6D4",
        "#000000",
        "#1E3A8A",
      ], // Rojo, Naranja, Turquesa, Negro, Azul marino
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://doblevela.com/items/index/AD2026",
      imagenes_urls: [
        "https://doblevela.com/images/large/AD2026_lrg.jpg?v=2",
        "https://doblevela.com/images/large/AD2026_naranja_lrg.jpg?v=2",
      ],
      categoria: "agendas",
    },
    {
      id: "ADS2026",
      nombre: "Agenda Diaria con Arillo 2026",
      descripcion:
        "Agenda diaria con pasta rígida de PU, arillo metálico y bolígrafo de aluminio del color de la agenda. Incluye 177 hojas (352 páginas) con cuadro de dedicatoria, hoja de datos personales, calendarios 2026 y días festivos, calendarios 2025 a 2029, teléfonos de interés, planificador anual, planificadores mensuales (12), agenda diaria 365 días y directorio de contactos.",
      capacidad: null,
      material: {
        exterior: "PU",
        interior: null,
      },
      medidas: {
        alto: "21.2 cm",
        ancho: "16.4 cm",
        profundidad: null,
      },
      empaque: {
        tipo: "Caja individual",
        color: "Negro",
      },
      colores_disponibles: [
        "#000000",
        "#EA580C",
        "#DC2626",
        "#1E3A8A",
        "#FBCFE8",
        "#9333EA",
      ], // Negro, Naranja, Rojo, Azul marino, Palo de rosa, Morado
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://doblevela.com/items/index/ADS2026",
      imagenes_urls: [
        "https://doblevela.com/images/large/ADS2026_lrg.jpg?v=2",
        "https://doblevela.com/images/large/ADS2026_negro_lrg.jpg?v=2",
      ],
      categoria: "agendas",
    },
    {
      id: "A2428",
      nombre: "Agendario Personal Madison",
      descripcion:
        "Libreta personal tipo agendario estilo cartera, con 99 hojas (198 páginas). Su cubierta cuenta con 4 compartimentos para credenciales, uno con ventana plástica; separador de doble listón y bolígrafo metálico con punta touch, de mecanismo retráctil, del color de la libreta. Contiene: hoja de datos personales, hojas rayadas con área para fecha, hojas punteadas para gráficos o dibujos y sección de directorio de contactos.",
      capacidad: null,
      material: {
        exterior: "Poliuretano",
        interior: null,
      },
      medidas: {
        alto: "18.5 cm",
        ancho: "11.3 cm",
        profundidad: "2.3 cm",
      },
      empaque: {
        tipo: "Caja individual",
        color: "Blanco con cubierta transparente",
      },
      colores_disponibles: [
        "#000000",
        "#DC2626",
        "#2563EB",
        "#60A5FA",
        "#C084FC",
        "#FBCFE8",
      ], // Negro, Rojo, Azul, Azul claro, Lila, Palo de rosa
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://doblevela.com/items/index/A2428",
      imagenes_urls: [
        "https://doblevela.com/images/large/A2428_lrg.jpg?v=2",
        "https://doblevela.com/images/large/A2428_negro_lrg.jpg?v=2",
      ],
      categoria: "agendas",
    },
    {
      id: "A3167",
      nombre: "Agendario Venecia",
      descripcion:
        "Agendario de pasta flexible texturizada con 112 hojas (224 páginas). Incluye cuadro de dedicatoria, hoja de datos personales, calendarios de 2026 a 2029, planificadores anuales, de gastos y de proyectos, agendario, hoja para notas punteadas y listón separador con placa metálica. Incluye bolígrafo de aluminio del color de la libreta con mecanismo de click, que se puede insertar en el lomo de la libreta.",
      capacidad: null,
      material: {
        exterior: "PU",
        interior: null,
      },
      medidas: {
        alto: "21.5 cm",
        ancho: "16.4 cm",
        profundidad: null,
      },
      empaque: {
        tipo: "Caja individual",
        color: "A juego con la agenda",
      },
      colores_disponibles: ["#6B7280", "#60A5FA", "#06B6D4", "#F5F5DC"], // Gris, Azul claro, Turquesa, Beige
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://doblevela.com/items/index/A3167",
      imagenes_urls: [
        "https://doblevela.com/images/large/A3167_lrg.jpg?v=2",
        "https://doblevela.com/images/large/A3167_azul_lrg.jpg?v=2",
      ],
      categoria: "agendas",
    },
    {
      id: "A2570",
      nombre: "LIBRETA VERTICAL SAUDIA",
      descripcion:
        "Libreta vertical A5 de pasta rígida de corcho, con detalle a color de curpiel. De 80 hojas rayadas (160 páginas). Cuenta con separador de listón y porta bolígrafo elástico a color.",
      capacidad: null,
      material: {
        exterior: "Corcho / Termo PU",
        interior: null,
      },
      medidas: {
        alto: "21.5 cm",
        ancho: "14.5 cm",
        profundidad: "1.3 cm",
      },
      empaque: {
        tipo: "Bolsa de Plástico",
        color: "Transparente",
      },
      colores_disponibles: ["#000000", "#DC2626", "#16A34A", "#2563EB"], // Negro, Rojo, Verde, Azul
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://doblevela.com/items/index/A2570",
      imagenes_urls: [
        "https://doblevela.com/images/large/A2570_lrg.jpg?v=2",
        "https://doblevela.com/images/large/A2570_negro_lrg.jpg?v=2",
      ],
      categoria: "agendas",
    },
    {
      id: "A2776",
      nombre: "LIBRETA ECOLÓGICA CORAZÓN LOVELY",
      descripcion:
        "Libreta ecológica de cartón con espiral metálico, 70 hojas rayadas, cinta elástica porta bolígrafo y bolígrafo de cartón. La portada cuenta con suaje en forma de corazón.",
      capacidad: null,
      material: {
        exterior: "Cartón reciclado",
        interior: null,
      },
      medidas: {
        alto: "17.8 cm",
        ancho: "12.7 cm",
        profundidad: "1.5 cm",
      },
      empaque: {
        tipo: "Bolsa de plástico",
        color: "Transparente",
      },
      colores_disponibles: ["#DC2626"], // Rojo
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://doblevela.com/items/index/A2776",
      imagenes_urls: [
        "https://doblevela.com/images/large/A2776_lrg.jpg?v=2",
        "https://doblevela.com/images/large/A2776_rojo_lrg.jpg?v=2",
      ],
      categoria: "agendas",
    },
    {
      id: "A2922",
      nombre: "Zipper",
      descripcion:
        "Libreta vertical A5 de tela con bolsa al frente y detalle de cremallera en color. La libreta es de 80 hojas rayadas (160 páginas). Incluye listón separador del mismo color que el cierre.",
      capacidad: null,
      material: {
        exterior: "Poliéster / Papel",
        interior: null,
      },
      medidas: {
        alto: "21 cm",
        ancho: "14 cm",
        profundidad: "1.4 cm",
      },
      empaque: {
        tipo: "Bolsa individual",
        color: "Transparente",
      },
      colores_disponibles: ["#000000", "#DC2626", "#2563EB"], // Negro, Rojo, Azul
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://doblevela.com/items/index/A2922",
      imagenes_urls: [
        "https://doblevela.com/images/large/A2922_lrg.jpg?v=2",
        "https://doblevela.com/images/large/A2922_negro_lrg.jpg?v=2",
      ],
      categoria: "agendas",
    },
    {
      id: "A3018",
      nombre: "NERUDA",
      descripcion:
        "Set de libreta con bolígrafo metálico. La libreta cuenta con pasta flexible, con textura de líneas verticales en la parte superior y área lisa en la parte inferior para poder personalizarse fácilmente. Es de 96 hojas rayadas (192 páginas), papel de 80 gr color crema. Tiene listón separador en color de la pasta. Incluye bolígrafo de aluminio del color de la libreta con touch screen y detalles en cromo. Presentación: caja de regalo en color negro.",
      capacidad: null,
      material: {
        exterior: "Termo PU (libreta) / Aluminio (bolígrafo)",
        interior: null,
      },
      medidas: {
        libreta: "14.7 cm x 21 cm",
        bolígrafo: "14 cm x 1 cm",
        caja: "19.6 cm x 22 cm",
      },
      empaque: {
        tipo: "Caja individual",
        color: "Negro",
      },
      colores_disponibles: [
        "#000000",
        "#EA580C",
        "#DC2626",
        "#22C55E",
        "#2563EB",
        "#9333EA",
      ], // Negro, Naranja, Rojo, Verde claro, Azul, Morado
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://doblevela.com/items/index/A3018",
      imagenes_urls: [
        "https://doblevela.com/images/large/A3018_lrg.jpg",
        "https://doblevela.com/images/large/A3018_negro_lrg.jpg?v=2",
      ],
      categoria: "agendas",
    },
  ],
  termos: [
    {
      id: "A2198",
      nombre: "Ishtar",
      descripcion:
        "Termo metálico con interior plástico, tapa de rosca hermética, boquilla y tapa abatible con seguro.",
      capacidad: "500 ml",
      material: {
        exterior: "Acero inoxidable",
        interior: "Plástico",
      },
      medidas: {
        diametro: "7 cm",
        altura: "21.5 cm",
      },
      empaque: {
        tipo: "Caja individual",
        color: "Blanco",
      },
      colores_disponibles: ["#DC2626", "#000000", "#2563EB", "#FFD700"], // Rojo, Negro, Azul, Oro
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://doblevela.com/items/index/A2198",
      imagenes_urls: [
        "https://doblevela.com/images/large/A2198_lrg.jpg?v=2",
        "https://doblevela.com/images/large/A2198_negro_lrg.jpg?v=2",
      ],
      categoria: "termos",
    },
    {
      id: "A2337",
      nombre: "ZEKI",
      descripcion:
        "Termo metálico de 400 ml con diseño ergonómico, acabado en esmalte blanco y banda superior de silicón en color. Cuenta con interior en acero inoxidable, tapa de rosca hermética, seguro para líquidos con bisagra en color y goma anti derrapante en la base.",
      capacidad: "400 ml",
      material: {
        exterior: "Acero inoxidable",
        interior: "Acero inoxidable",
      },
      medidas: {
        diametro: "7.8 cm",
        altura: "19.5 cm",
      },
      empaque: {
        tipo: "Caja individual",
        color: "Blanco",
      },
      colores_disponibles: [
        "#000000",
        "#EA580C",
        "#9333EA",
        "#16A34A",
        "#2563EB",
      ], // Negro, Naranja, Morado, Verde, Azul
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://doblevela.com/items/index/A2337",
      imagenes_urls: [
        "https://doblevela.com/images/large/A2337_lrg.jpg?v=2",
        "https://doblevela.com/images/large/A2337_negro_lrg.jpg?v=2",
      ],
      categoria: "termos",
    },
    {
      id: "A2334",
      nombre: "MANZUR",
      descripcion:
        "Termo metálico de acero inoxidable con interior de plástico. Tapa de rosca hermética abatible con boquilla y hendidura, para beber cómodamente los líquidos sin que se derramen. Cintillo intermedio de silicón. Cuerpo diseñado con finos detalles en relieve que le dan un toque elegante y de presencia.",
      capacidad: "470 ml",
      material: {
        exterior: "Acero inoxidable",
        interior: "Plástico",
      },
      medidas: {
        diametro: "7 cm",
        altura: "21.5 cm",
      },
      empaque: {
        tipo: "Caja individual",
        color: "Blanco",
      },
      colores_disponibles: ["#C0C0C0", "#DC2626", "#000000", "#2563EB"], // Plata, Rojo, Negro, Azul
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://doblevela.com/items/index/A2334",
      imagenes_urls: [
        "https://doblevela.com/images/large/A2334_lrg.jpg?v=2",
        "https://doblevela.com/images/large/A2334_negro_lrg.jpg?v=2",
      ],
      categoria: "termos",
    },
    {
      id: "A2430",
      nombre: "YAGO",
      descripcion:
        "Termo de plástico de doble pared con cuerpo en acabado brillante. Cuenta con tapa a presión y seguro deslizable. Capacidad de 590 ml. Presentación en caja individual de color blanco. Libre de BPA.",
      capacidad: "590 ml",
      material: {
        exterior: "Plástico AS",
        interior: "Plástico",
      },
      medidas: {
        diametro: "8.8 cm",
        altura: "19 cm",
      },
      empaque: {
        tipo: "Caja individual",
        color: "Blanco",
      },
      colores_disponibles: ["#EAB308", "#EA580C", "#EC4899"], // Amarillo, Naranja, Rosa
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://doblevela.com/items/index/A2430",
      imagenes_urls: [
        "https://doblevela.com/images/large/A2430_lrg.jpg?v=2",
        "https://doblevela.com/images/large/A2430_amarillo_lrg.jpg?v=2",
      ],
      categoria: "termos",
    },
    {
      id: "A2524",
      nombre: "BLIZAN",
      descripcion:
        "Termo de acero inoxidable con interior de plástico. Cuenta con tapa de cierre a presión y seguro deslizable al color del interior. Diseño poligonal.",
      capacidad: "350 ml",
      material: {
        exterior: "Acero inoxidable",
        interior: "Plástico PP",
      },
      medidas: {
        diametro: "8.3 cm",
        altura: "13 cm",
      },
      empaque: {
        tipo: "Caja individual",
        color: "Blanco",
      },
      colores_disponibles: [
        "#DC2626",
        "#16A34A",
        "#EA580C",
        "#2563EB",
        "#000000",
      ], // Rojo, Verde, Naranja, Azul, Negro
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://doblevela.com/items/index/A2524",
      imagenes_urls: [
        "https://doblevela.com/images/large/A2524_lrg.jpg?v=2",
        "https://doblevela.com/images/large/A2524_negro_lrg.jpg?v=2",
      ],
      categoria: "termos",
    },
    {
      id: "A2525",
      nombre: "BLIZAN M",
      descripcion:
        "Termo de acero inoxidable acabado mate con interior de plástico. Cuenta con tapa de cierre a presión y seguro deslizable en color negro. Diseño poligonal. Capacidad de 350 ml.",
      capacidad: "350 ml",
      material: {
        exterior: "Acero inoxidable",
        interior: "Plástico PP",
      },
      medidas: {
        diametro: "8.3 cm",
        altura: "13 cm",
      },
      empaque: {
        tipo: "Bolsa de plástico",
        color: "Transparente",
      },
      colores_disponibles: ["#000000", "#DC2626", "#2563EB"], // Negro, Rojo, Azul
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://doblevela.com/items/index/A2525",
      imagenes_urls: [
        "https://doblevela.com/images/large/A2525_lrg.jpg?v=2",
        "https://doblevela.com/images/large/A2525_negro_lrg.jpg?v=2",
      ],
      categoria: "termos",
    },
    {
      id: "A2631",
      nombre: "CANDEL",
      descripcion:
        "Termo de acero inoxidable de 350 ml con doble pared aislada al vacío, mantiene las bebidas frías por 20 horas y calientes por 10 horas. Cuenta con asa, acabado en polvo plástico y tapa a presión transparente con seguro deslizable.",
      capacidad: "350 ml",
      material: {
        exterior: "Acero inoxidable 304",
        interior: "Acero inoxidable",
      },
      medidas: {
        diametro: "8.7 cm",
        altura: "11.7 cm",
      },
      empaque: {
        tipo: "Caja individual",
        color: "Blanco",
      },
      colores_disponibles: ["#000000", "#FFFFFF"], // Negro, Blanco
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://doblevela.com/items/index/A2631",
      imagenes_urls: [
        "https://doblevela.com/images/large/A2631_lrg.jpg?v=2",
        "https://doblevela.com/images/large/A2631_blanco_lrg.jpg?v=2",
      ],
      categoria: "termos",
    },
    {
      id: "A2645",
      nombre: "JUNO",
      descripcion:
        "Termo de doble pared de acero inoxidable, insulado al vacío. Cuenta con acabado de polvo plástico. Mantiene las bebidas calientes por 10 hrs. y frías por 20 hrs. Incluye tapa a presión transparente con seguro deslizable.",
      capacidad: "350 ml",
      material: {
        exterior: "Acero inoxidable",
        interior: "Acero inoxidable",
      },
      medidas: {
        diametro: "9 cm",
        altura: "12 cm",
      },
      empaque: {
        tipo: "Caja individual",
        color: "Blanco",
      },
      colores_disponibles: [
        "#FFFFFF",
        "#000000",
        "#EC4899",
        "#60A5FA",
        "#06B6D4",
      ], // Blanco, Negro, Rosa, Azul claro, Turquesa
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://doblevela.com/items/index/A2645",
      imagenes_urls: [
        "https://doblevela.com/images/large/A2645_lrg.jpg?v=2",
        "https://doblevela.com/images/large/A2645_blanco_lrg.jpg?v=2",
      ],
      categoria: "termos",
    },
    {
      id: "A2636",
      nombre: "AKON",
      descripcion:
        "Termo con exterior de acero inoxidable e interior de plástico. Incluye tapa a presión transparente. Capacidad de 350 ml. Presentación: caja individual en color blanco.",
      capacidad: "350 ml",
      material: {
        exterior: "Acero inoxidable",
        interior: "Plástico",
      },
      medidas: {
        diametro: "9 cm",
        altura: "12 cm",
      },
      empaque: {
        tipo: "Caja individual",
        color: "Blanco",
      },
      colores_disponibles: [
        "#FFFFFF",
        "#000000",
        "#EA580C",
        "#DC2626",
        "#EC4899",
        "#22C55E",
        "#2563EB",
        "#60A5FA",
        "#C0C0C0",
        "#06B6D4",
      ], // Blanco, Negro, Naranja, Rojo, Rosa, Verde claro, Azul, Azul claro, Plata, Turquesa
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://doblevela.com/items/index/A2636",
      imagenes_urls: [
        "https://doblevela.com/images/large/A2636_lrg.jpg?v=2",
        "https://doblevela.com/images/large/A2636_blanco_lrg.jpg?v=2",
      ],
      categoria: "termos",
    },
    {
      id: "A2704",
      nombre: "ALLEN",
      descripcion:
        "Termo de doble pared de acero inoxidable con exterior de bambú. Cuenta con tapa a presión con seguro deslizable. Capacidad de 445 ml. Presentación en caja individual de color blanco.",
      capacidad: "445 ml",
      material: {
        exterior: "Acero inoxidable con bambú",
        interior: "Acero inoxidable",
      },
      medidas: {
        diametro: "8.2 cm",
        altura: "17.5 cm",
      },
      empaque: {
        tipo: "Caja individual",
        color: "Blanco",
      },
      colores_disponibles: ["#A1887F"], // Natural (bambú) - color café claro
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://doblevela.com/items/index/A2704",
      imagenes_urls: ["https://doblevela.com/images/large/A2704_lrg.jpg?v=2"],
      categoria: "termos",
    },
    {
      id: "SUB140",
      nombre: "Roxio",
      descripcion:
        "Termo para auto de sublimación 15 oz. Interior de acero inoxidable, tapa de plástico con cierre y asa. Ideal para personalización.",
      capacidad: "450 ml",
      material: {
        exterior: "Acero inoxidable",
        interior: "Acero inoxidable",
      },
      medidas: {
        alto: "15 cm",
        diámetro: "7.5 cm",
      },
      empaque: {
        tipo: "48 piezas por caja",
        color: null,
      },
      colores_disponibles: ["#C0C0C0", "#FFFFFF"], // Plata, Blanco
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://doblevela.com/items/index/SUB140",
      imagenes_urls: [
        "https://doblevela.com/images/large/SUB140_lrg.jpg?v=2",
        "https://doblevela.com/images/large/SUB140_blanco_lrg.jpg?v=2",
      ],
      categoria: "termos",
    },
    {
      id: "A2868",
      nombre: "Nayad Neo - Tapa Deslizable",
      descripcion:
        "Termo NAYAD NEO de 16 Oz. de doble pared, la interna es de acero inoxidable y la externa de granos de café reciclado. Mantiene bebidas calientes por 3 hrs y frías por 5 hrs. Cuenta con tapa deslizable hacia atrás, botón dorado, cinta metálica color bronce y rosca hermética anti-derrames y anti-escurrimiento.",
      capacidad: "480 ml",
      material: {
        exterior: "Granos de café reciclado",
        interior: "Acero inoxidable",
      },
      medidas: {
        diámetro: "8.6 cm",
        altura: "19 cm",
      },
      empaque: {
        tipo: "Caja de color individual",
        color: null,
      },
      colores_disponibles: ["#8B4513"], // Café
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://doblevela.com/items/index/A2868",
      imagenes_urls: [
        "https://doblevela.com/images/large/A2868_lrg.jpg",
        "https://doblevela.com/images/large/A2868_cafe_lrg.jpg?v=2",
      ],
      categoria: "termos",
    },
    {
      id: "A2865",
      nombre: "Nayad Tinos 14 oz",
      descripcion:
        "Termo NAYAD TINOS de 14 oz (414 ml) de doble pared, la interna de acero inoxidable y la externa de granos de café reciclado. Mantiene bebidas calientes por 3 hrs y frías por 5 hrs. Cuenta con cintillo metálico color bronce, tapa a presión con seguro giratorio para evitar salpicaduras.",
      capacidad: "414 ml",
      material: {
        exterior: "Granos de café reciclado",
        interior: "Acero inoxidable",
      },
      medidas: {
        diámetro: "Ø 8.9 cm",
        altura: "16.8 cm",
      },
      empaque: {
        tipo: "Caja de color individual",
        color: null,
      },
      colores_disponibles: ["#8B4513"], // Café
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://doblevela.com/items/index/A2865",
      imagenes_urls: [
        "https://doblevela.com/images/large/A2865_lrg.jpg",
        "https://doblevela.com/images/large/A2865_cafe_lrg.jpg?v=2",
      ],
      categoria: "termos",
    },
    {
      id: "A2867",
      nombre: "Nayad Neo - Tapa Giratoria con Seguro",
      descripcion:
        "Termo NAYAD NEO de 16 Oz (≈ 480 ml) de doble pared, la interna es de acero inoxidable y la externa de granos de café reciclado. Mantiene bebidas calientes por 3 horas y frías por 5 horas. Cuenta con cintillo metálico color bronce, botón de seguridad dorado, tapa de rosca hermética anti-derrames y anti-escurrimiento.",
      capacidad: "480 ml",
      material: {
        exterior: "Granos de café reciclado",
        interior: "Acero inoxidable",
      },
      medidas: {
        diámetro: "8.6 cm",
        altura: "20.3 cm",
      },
      empaque: {
        tipo: "Caja individual de color",
        color: null,
      },
      colores_disponibles: ["#8B4513"], // Café
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://doblevela.com/items/index/A2867",
      imagenes_urls: [
        "https://doblevela.com/images/large/A2867_lrg.jpg",
        "https://doblevela.com/images/large/A2867_cafe_lrg.jpg?v=2",
      ],
      categoria: "termos",
    },
    {
      id: "A2954",
      nombre: "MUGLY",
      descripcion:
        "Termo con exterior de acero inoxidable con interior de plástico y asa de plástico. Incluye tapa transparente con cierre a presión y seguro giratorio en color del termo, con ranura para popote de color. CAP. 1,200 ml.",
      capacidad: "1,200 ml",
      material: {
        exterior: "Acero inoxidable",
        interior: "Plástico",
      },
      medidas: {
        diámetro: "Ø 10 cm",
        altura: "27 cm",
      },
      empaque: {
        tipo: "Caja individual",
        color: "Blanca",
      },
      colores_disponibles: [
        "#000000",
        "#DC2626",
        "#EAB308",
        "#1E3A8A",
        "#C084FC",
      ], // Negro, Rojo, Amarillo, Azul marino, Lila
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://doblevela.com/items/index/A2954",
      imagenes_urls: [
        "https://doblevela.com/images/large/A2954_lrg.jpg",
        "https://doblevela.com/images/large/A2954_negro_lrg.jpg?v=2",
      ],
      categoria: "termos",
    },
    {
      id: "A3049",
      nombre: "KARRY",
      descripcion:
        "Termo de doble pared insulado al alto vacío, mantiene la temperatura caliente por 12 horas y fría por 24. Cuenta con acabado de polvo plástico. La parte inferior es más angosta para poder usarse en el porta vasos del coche. Tiene tapa de rosca con doble apertura: una con seguro elevable para bebidas calientes y otra con pivote desplegable y popote interno.",
      capacidad: "900 ml",
      material: {
        exterior: "Acero inoxidable",
        interior: "Acero inoxidable",
      },
      medidas: {
        diámetro: "Ø 9 cm",
        altura: "25.5 cm",
      },
      empaque: {
        tipo: "Caja de regalo individual",
        color: null,
      },
      colores_disponibles: [
        "#000000",
        "#EA580C",
        "#DC2626",
        "#2563EB",
        "#60A5FA",
        "#C084FC",
        "#F5F5DC",
        "#FBCFE8",
      ], // Negro, Naranja, Rojo, Azul, Azul claro, Lila, Beige, Palo de rosa
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://doblevela.com/items/index/A3049",
      imagenes_urls: [
        "https://doblevela.com/images/large/A3049_lrg.jpg",
        "https://doblevela.com/images/large/A3049_negro_lrg.jpg?v=2",
      ],
      categoria: "termos",
    },
    {
      id: "A3119",
      nombre: "CARIBE",
      descripcion:
        "Termo de plástico de doble pared con asa. Cuenta con tapa transparente con cierre de rosca y sobre tapa giratoria en color del termo, con ranura para popote. Incluye popote de color.",
      capacidad: "770 ml",
      material: {
        exterior: "Plástico PP / Plástico AS",
        interior: null,
      },
      medidas: {
        diámetro: "Ø 9 cm",
        altura: "24.3 cm",
      },
      empaque: {
        tipo: "Caja individual",
        color: null,
      },
      colores_disponibles: ["#000000", "#DC2626", "#1E3A8A"], // Negro, Rojo, Azul marino
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://doblevela.com/items/index/A3119",
      imagenes_urls: [
        "https://doblevela.com/images/large/A3119_lrg.jpg",
        "https://doblevela.com/images/large/A3119_negro_lrg.jpg?v=2",
      ],
      categoria: "termos",
    },
    {
      id: "A3124",
      nombre: "VANILLA",
      descripcion:
        "Termo con exterior de plástico e interior de acero inoxidable. Cuenta con tapa de rosca anti-derrames con seguro abatible.",
      capacidad: "350 ml",
      material: {
        exterior: "Plástico",
        interior: "Acero inoxidable",
      },
      medidas: {
        diámetro: "Ø 9.2 cm",
        altura: "13 cm",
      },
      empaque: {
        tipo: "Caja individual",
        color: null,
      },
      colores_disponibles: [
        "#FFFFFF",
        "#000000",
        "#EA580C",
        "#DC2626",
        "#16A34A",
        "#EAB308",
        "#1E3A8A",
        "#FBCFE8",
        "#9333EA",
      ], // Blanco, Negro, Naranja, Rojo, Verde, Amarillo, Azul marino, Palo de rosa, Morado
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://doblevela.com/items/index/A3124",
      imagenes_urls: [
        "https://doblevela.com/images/large/A3124_lrg.jpg",
        "https://doblevela.com/images/large/A3124_blanco_lrg.jpg?v=2",
      ],
      categoria: "termos",
    },
    {
      id: "TMPS-94",
      nombre: "TERMO DIJON",
      descripcion:
        "Doble pared. Cerrado al vacío. Pared interna y externa acero inoxidable. Tapa de plástico con válvula de seguridad. Mantiene temperatura caliente 6 hrs y temperatura fría 8 hrs aproximadamente. Incluye caja individual.",
      capacidad: "350 ml",
      material: {
        exterior: "Acero inoxidable",
        interior: "Acero inoxidable",
      },
      medidas: {
        diámetro: "≈ 8.8 cm",
        altura: "≈ 12.6 cm",
      },
      empaque: {
        tipo: "Caja individual",
        color: null,
      },
      colores_disponibles: [
        "#FFFFFF",
        "#C0C0C0",
        "#000000",
        "#6B7280",
        "#FBCFE8",
        "#BBF7D0",
      ], // Blanco, Plata, Negro, Gris, Rosa pastel, Verde pastel
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://www.promoopcion.com/tmps-94.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/t/m/tmps-94_1_1.jpg?store=default&image-type=image",
      ],
      categoria: "termos",
    },
    {
      id: "TMPS-111",
      nombre: "TERMO JAUNE",
      descripcion:
        "Doble pared. Pared interna plástico, pared externa acero inoxidable. Base de termo con forma hexagonal. Tapa de plástico con boquilla y sobre tapa de cierre a presión. Terminado mate. Incluye caja individual.",
      capacidad: "520 ml",
      material: {
        exterior: "Acero inoxidable",
        interior: "Plástico",
      },
      medidas: {
        alto: "18 cm",
        diámetro: "6.5 cm",
      },
      empaque: {
        tipo: "Caja individual",
        color: null,
      },
      colores_disponibles: ["#000000", "#FFFFFF", "#2563EB", "#DC2626"], // Negro, Blanco, Azul, Rojo
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://www.promoopcion.com/tmps-111.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/t/m/tmps-111_1_4.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/t/m/tmps_111-a_1.jpg?store=default&image-type=image",
      ],
      categoria: "termos",
    },
    {
      id: "TMPS-82",
      nombre: "TERMO BURGO",
      descripcion:
        "Doble pared. Pared interna plástico, pared externa acero inoxidable. Base de corcho. Tapa en dos posiciones. No usar en microondas ni lavavajillas. Incluye caja individual.",
      capacidad: "480 ml",
      material: {
        exterior: "Acero inoxidable",
        interior: "Plástico",
      },
      medidas: {
        alto: "18.5 cm",
        diámetro: "8.5 cm",
      },
      empaque: {
        tipo: "Caja individual",
        color: null,
      },
      colores_disponibles: ["#C0C0C0"], // Plata
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://www.promoopcion.com/tmps-82.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/t/m/tmps-82.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/T/M/TMPS-82_20.jpg?store=default&image-type=image",
      ],
      categoria: "termos",
    },
    {
      id: "TMPS-256",
      nombre: "TERMO DAVOR",
      descripcion:
        "Termo de doble pared, cerrado al vacío. Pared interna y externa de acero inoxidable. Incluye tapa de plástico con cierre push y válvula de seguridad. Su asa de plástico facilita su transporte, siendo ideal para uso en coche, escuela u oficina. Mantiene la temperatura caliente por 6 horas y fría por 12 horas. Capacidad de 600 ml. Incluye caja individual.",
      capacidad: "600 ml",
      material: {
        exterior: "Acero inoxidable",
        interior: "Acero inoxidable",
      },
      medidas: {
        alto: "18.2 cm",
        diámetro: "9.5 cm",
      },
      empaque: {
        tipo: "Caja individual",
        color: null,
      },
      colores_disponibles: [
        "#000000",
        "#DC2626",
        "#16A34A",
        "#EA580C",
        "#1E3A8A",
      ], // Negro, Rojo, Verde, Naranja, Azul marino
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://www.promoopcion.com/tmps-256.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/t/m/tmps-256-pleca_3.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/t/m/tmps-256-n_2_2_1.jpg?store=default&image-type=image",
      ],
      categoria: "termos",
    },
    {
      id: "TMPS-172",
      nombre: "TERMO SNORKEL",
      descripcion:
        "Doble pared. Pared interna plástico, pared externa acero inoxidable. Tapa de plástico con válvula de seguridad y popote metálico con boquilla removible de silicón. Incluye caja individual.",
      capacidad: "480 ml",
      material: {
        exterior: "Acero inoxidable",
        interior: "Plástico",
      },
      medidas: {
        alto: "17.5 cm",
        diámetro: "8.3 cm",
      },
      empaque: {
        tipo: "Caja individual",
        color: null,
      },
      colores_disponibles: ["#2563EB", "#000000", "#6B7280", "#16A34A"], // Azul, Negro, Gris, Verde
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://www.promoopcion.com/tmps-172.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/t/m/tmps_172.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/t/m/tmps-172-g.jpg?store=default&image-type=image",
      ],
      categoria: "termos",
    },
    {
      id: "TMPS-165",
      nombre: "TERMO JUNEAU",
      descripcion:
        "Termo de doble pared, cerrado al vacío. Pared interna y externa de acero inoxidable. Terminado tipo rubber. Incluye tapa de plástico con simulación de madera y filtro de acero inoxidable. Mantiene temperatura caliente por 6 horas y fría por 8 horas aproximadamente. Incluye caja individual.",
      capacidad: "480 ml",
      material: {
        exterior: "Acero inoxidable",
        interior: "Acero inoxidable",
      },
      medidas: {
        alto: "22.7 cm",
        diámetro: "6.5 cm",
      },
      empaque: {
        tipo: "Caja individual",
        color: null,
      },
      colores_disponibles: ["#000000", "#FFFFFF"], // Negro, Blanco
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://www.promoopcion.com/tmps-165.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/t/m/tmps-165_2_3.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/t/m/tmps-165-n_1.jpg?store=default&image-type=image",
      ],
      categoria: "termos",
    },
    {
      id: "TMPS-247",
      nombre: "TERMO ANTALL",
      descripcion:
        "Termo de doble pared, cerrado al vacío. Pared interna y externa de acero inoxidable. Tapa de plástico con cierre de rosca que le aporta mayor seguridad. Cuenta con dos funcionalidades en la tapa: boquilla para beber con sobre tapa push y ranura para popote con sobre tapa adicional. Popote con boquilla de silicón, avanzado sistema de cierre anti derrames y asa de plástico. Su práctico tamaño permite transportarlo fácilmente a cualquier lugar. Ideal para niños y adultos. Mantiene temperatura caliente por 6 horas y fría por 8 horas. Capacidad de 15 oz. Base de 6.5 cm de diámetro. Incluye cuerpo con terminado rugoso y caja individual.",
      capacidad: "450 ml",
      material: {
        exterior: "Acero inoxidable",
        interior: "Acero inoxidable",
      },
      medidas: {
        alto: "15.8 cm",
        diámetro: "9 cm",
      },
      empaque: {
        tipo: "Caja individual",
        peso_bruto: "8.3 kg",
        medidas_caja: "56 x 18.8 x 52 cm",
      },
      colores_disponibles: ["#EC4899", "#2563EB"], // Rosa, Azul
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://www.promoopcion.com/tmps-247.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/t/m/tmps-247_plec.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/t/m/tmps-247-p_7.jpg?store=default&image-type=image",
      ],
      categoria: "termos",
    },
    {
      id: "TMPS-231",
      nombre: "TERMO BATANI",
      descripcion:
        "Termo de doble pared. Pared interna de acero inoxidable y externa de plástico. Tapa con sistema de rosca que garantiza un cierre hermético. Sobretapa con sistema push que previene derrames. Su elegante detalle metálico rompe con la monocromía y añade un toque de distinción. Incluye caja individual.",
      capacidad: "350 ml",
      material: {
        exterior: "Plástico",
        interior: "Acero inoxidable",
      },
      medidas: {
        alto: "15 cm",
        diámetro: "7 cm",
      },
      empaque: {
        tipo: "Caja individual",
        peso_bruto: "10.40 kg",
        medidas_caja: "49 x 33 x 49 cm",
      },
      colores_disponibles: [
        "#EA580C",
        "#1E3A8A",
        "#16A34A",
        "#EAB308",
        "#DC2626",
        "#000000",
        "#06B6D4",
        "#EC4899",
      ], // Naranja, Azul marino, Verde, Amarillo, Rojo, Negro, Aqua, Fucsia
      origen: "Hecho en México",
      precio_lista: "$65.02 MXN",
      disponibilidad: "Consultar inventario",
      url_producto: "https://www.promoopcion.com/tmps-231.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/t/m/tmps-231_.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/t/m/tmps-231-y_2.jpg?store=default&image-type=image",
      ],
      categoria: "termos",
    },
    {
      id: "TMPS-168",
      nombre: "TERMO TAHANA TORNASOL",
      descripcion:
        "Termo de doble pared, cerrado al vacío. Pared interna y externa de acero inoxidable con acabado efecto tornasol. Tapa de plástico con válvula de seguridad. Mantiene temperatura caliente por 6 horas y fría por 8 horas aproximadamente. Incluye caja individual.",
      capacidad: "350 ml",
      material: {
        exterior: "Acero inoxidable",
        interior: "Acero inoxidable",
      },
      medidas: {
        alto: "12 cm",
        diámetro: "7.9 cm",
      },
      empaque: {
        tipo: "Caja individual",
        peso_bruto: "6.8 kg",
        medidas_caja: "57.5 x 15 x 39 cm",
      },
      colores_disponibles: ["#FF6B6B"], // Tornasol (usando un color vibrante que representa el efecto tornasol)
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://www.promoopcion.com/tmps-168.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/t/m/tmps_168_tornasol_3-4.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/t/m/tmps_168_adicional.jpg?store=default&image-type=image",
      ],
      categoria: "termos",
    },
    {
      id: "TAZ-039",
      nombre: "TAZA TERMO LEWES",
      descripcion:
        "Taza termo de doble pared, cerrada al vacío. Pared interna y externa de acero inoxidable. Tapa de plástico con cierre a presión y válvula de seguridad. Mantiene temperatura caliente por 6 horas y fría por 8 horas aproximadamente. Incluye caja individual.",
      capacidad: "350 ml",
      material: {
        exterior: "Acero inoxidable",
        interior: "Acero inoxidable",
      },
      medidas: {
        alto: "12.5 cm",
        diámetro: "9.5 cm",
      },
      empaque: {
        tipo: "Caja individual",
        peso_bruto: "7.70 kg",
        medidas_caja: "42 x 27 x 39 cm",
      },
      colores_disponibles: ["#2563EB", "#000000", "#EC4899"], // Azul, Negro, Rosa
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://www.promoopcion.com/taz-039.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/t/a/taz-039_3.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/t/a/taz-039-1-.jpg?store=default&image-type=image",
      ],
      categoria: "termos",
    },
  ],
  bolsas: [
    {
      id: "BO1",
      nombre: "Bolsa Mandadera Asa Popote",
      descripcion:
        "Prácticas y coloridas bolas mandaderas con asa y espacio para popote. Ideales para bebidas frías o calientes, perfectas para llevar al trabajo, la escuela o de paseo. Fabricadas en material resistente y reutilizable.",
      capacidad: null,
      material: {
        exterior: "PVC",
        interior: null,
      },
      medidas: {
        alto: "35 cm",
        ancho: "40 cm",
        profundidad: "12 cm",
      },
      empaque: {
        tipo: null,
        color: null,
      },
      colores_disponibles: ["#FF0000", "#0000FF", "#00FF00", "#FFA500", "#FFFF00"],
      origen: "Hecho en México",
      precio_lista: "",
      disponibilidad: "",
      url_producto: "#",
      imagenes_urls: [
        "https://http2.mlstatic.com/D_NQ_NP_2X_674256-MLM71094386536_082023-F.webp",
        "https://http2.mlstatic.com/D_NQ_NP_2X_968003-MLM49942677236_052022-F.webp",
      ],
      categoria: "bolsas",
    },
    {
      id: "BO7",
      nombre: "Bolsa Blanca",
      descripcion:
        "Bolsa blanca, área de personalizar 29 x 20 cm. PET Non Woven 80 gramos.",
      capacidad: null,
      material: {
        exterior: "Non Woven",
        interior: null,
      },
      medidas: {
        alto: "34 cm",
        ancho: "38 cm",
        profundidad: "12 cm",
      },
      empaque: {
        tipo: null,
        color: null,
      },
      colores_disponibles: ["#FFFFFF"],
      origen: "Hecho en México",
      precio_lista: "",
      disponibilidad: "",
      url_producto: "#",
      imagenes_urls: [
        "https://takka.mx/wp-content/uploads/2024/11/SIN-962-B.jpg",
        "https://takka.mx/wp-content/uploads/2024/11/SIN-962-1.jpg",
      ],
      categoria: "bolsas",
    },
    {
      id: "BO6",
      nombre: "Mochila con cordón",
      descripcion:
        "Mochila con cordón fabricada en poliéster, acabado con costuras y ojillos de metal. Area de publicidad 21 x 29 cm.",
      capacidad: null,
      material: {
        exterior: "Poliéster",
        interior: null,
      },
      medidas: {
        alto: "43 cm",
        ancho: "35 cm",
      },
      empaque: {
        tipo: null,
        color: null,
      },
      colores_disponibles: [
        "#FF0000",
        "#000000",
        "#0000FF",
        "#FFFFFF",
        "#FFA500",
        "#FFFF00",
      ],
      origen: "Hecho en México",
      precio_lista: "",
      disponibilidad: "",
      url_producto: "#",
      imagenes_urls: [
        "https://calendariosymas.com/wp-content/uploads/2024/07/Tu-publicidad-Aqui-2024-07-15T165425.114.png",
        "https://calendariosymas.com/wp-content/uploads/2024/07/Diseno-sin-titulo-83.png",
      ],
      categoria: "bolsas",
    },
    {
      id: "BO5",
      nombre: "Bolsa Confort",
      descripcion:
        "Cómoda y versatil bolsa confort fabricada de Non Woven, de 80 gramos, área de publicidad 20 x 29 cm.",
      capacidad: null,
      material: {
        exterior: "Now Woven",
        interior: null,
      },
      medidas: {
        alto: "34 cm",
        ancho: "38 cm",
        profundidad: "12 cm",
      },
      empaque: {
        tipo: null,
        color: null,
      },
      colores_disponibles: ["#FF0000", "#0000FF", "#00FF00", "#000000", "#FFFFFF", "#800000"],
      origen: "Hecho en México",
      precio_lista: "",
      disponibilidad: "",
      url_producto: "#",
      imagenes_urls: [
        "https://calendariosymas.com/wp-content/uploads/2023/07/BC02.jpg",
        "https://calendariosymas.com/wp-content/uploads/2024/07/Diseno-sin-titulo-82.png",
      ],
      categoria: "bolsas",
    },
    {
      id: "BO8",
      nombre: "Bolsa Boutique",
      descripcion:
        "Bolsa boutique, área de personalizar 21 x 29 cm. PET Non Woven 80 gramos.",
      capacidad: null,
      material: {
        exterior: "Non Woven",
        interior: null,
      },
      medidas: {
        alto: "40 cm",
        ancho: "35 cm",
      },
      empaque: {
        tipo: null,
        color: null,
      },
      colores_disponibles: ["#FFFFFF"],
      origen: "Hecho en México",
      precio_lista: "",
      disponibilidad: "",
      url_producto: "#",
      imagenes_urls: [
        "https://http2.mlstatic.com/D_NQ_NP_2X_976086-MLM75559255393_042024-F.webp",
        "https://http2.mlstatic.com/D_NQ_NP_2X_639963-MLM75404506986_042024-F.webp",
      ],
      categoria: "bolsas",
    },
    {
      id: "BO4",
      nombre: "Bolsa Ecológica",
      descripcion:
        "Bolsa promocional reutilizable 100% polipropileno (Non Woven) de 90gr y termosellada",
      capacidad: null,
      material: {
        exterior: "Polipropileno",
        interior: null,
      },
      medidas: {
        alto: "42 cm",
        ancho: "33 cm",
        profundidad: "17 cm",
      },
      empaque: {
        tipo: null,
        color: null,
      },
      colores_disponibles: [
        "#FFFF00",
        "#FF0000",
        "#800080",
        "#0000FF",
        "#00FF00",
        "#000000",
        "#FFFFFF",
        "#FFA500",
        "#000080",
      ],
      origen: "Hecho en México",
      precio_lista: "",
      disponibilidad: "",
      url_producto: "#",
      imagenes_urls: [
        "https://calendariosymas.com/wp-content/uploads/2020/08/BE05.jpg",
        "https://calendariosymas.com/wp-content/uploads/2020/08/BE02.jpg",
        "https://calendariosymas.com/wp-content/uploads/2020/08/BE03-600x600.jpg",
        "https://calendariosymas.com/wp-content/uploads/2023/07/BE01-1.jpg",
      ],
      categoria: "bolsas",
    },
    {
      id: "BO3",
      nombre: "Bolsa Metalizada",
      descripcion:
        "Bolsa metalizada 100% Polipropileno. Área de publicidad 29x21cm. Resistencia 15 kg.",
      capacidad: null,
      material: {
        exterior: "Polipropileno",
        interior: null,
      },
      medidas: {
        alto: "35 cm",
        ancho: "40 cm",
        profundidad: "16 cm",
      },
      empaque: {
        tipo: null,
        color: null,
      },
      colores_disponibles: ["#C0C0C0", "#0000FF", "#FFD700", "#FF69B4"],
      origen: "Hecho en México",
      precio_lista: "",
      disponibilidad: "",
      url_producto: "#",
      imagenes_urls: [
        "https://calendariosymas.com/wp-content/uploads/2024/08/M22-69.png",
        "https://calendariosymas.com/wp-content/uploads/2024/09/M22-70.png",
        "https://calendariosymas.com/wp-content/uploads/2024/09/Escanee-para-ver-a-detalle-los-colores.png",
      ],
      categoria: "bolsas",
    },
    {
      id: "BO2",
      nombre: "Bolsa Mandadera Plus",
      descripcion:
        "Bolsa mandadera promocional de polipropelino reutilizable, con asa de Non Woven, resistente al agua con una resistencia 7 Kg.",
      capacidad: null,
      material: {
        exterior: "Polipropileno",
        interior: null,
      },
      medidas: {
        alto: "30 cm",
        ancho: "34.5 cm",
        profundidad: "15 cm",
      },
      empaque: {
        tipo: null,
        color: null,
      },
      colores_disponibles: ["conic-gradient(from 0deg, #ff004d, #ff7a00, #ffd300, #00c853, #00aaff, #6a00ff, #ff004d)"],
      origen: "Hecho en México",
      precio_lista: "",
      disponibilidad: "",
      url_producto: "#",
      imagenes_urls: [
        "https://calendariosymas.com/wp-content/uploads/2023/07/BMP07.jpg",
        "https://calendariosymas.com/wp-content/uploads/2024/07/Diseno-sin-titulo-78.png",
        "https://calendariosymas.com/wp-content/uploads/2024/07/Diseno-sin-titulo-79.png",
        "https://calendariosymas.com/wp-content/uploads/2024/07/Diseno-sin-titulo-80.png",
        "https://calendariosymas.com/wp-content/uploads/2024/07/Diseno-sin-titulo-81.png",
      ],
      categoria: "bolsas",
    },
    {
      id: "A2478",
      nombre: "Bolsa Ecológica STAR L",
      descripcion:
        "Bolsa ecológica termosellada con asas y diseño brillante. Peso máximo de carga de 10 kgs.",
      capacidad: null,
      material: {
        exterior: "Non Woven 130 GSM",
        interior: null,
      },
      medidas: {
        alto: "40 cm",
        ancho: "35 cm",
        profundidad: "12 cm",
      },
      empaque: {
        tipo: "Granel (200 piezas por caja)",
        color: null,
      },
      colores_disponibles: ["#000000", "#C0C0C0", "#FFD700"],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://doblevela.com/items/index/A2478",
      imagenes_urls: [
        "https://doblevela.com/images/large/A2478_lrg.jpg",
        "https://doblevela.com/images/large/A2704_unico_lrg.jpg?v=2",
      ],
      categoria: "bolsas",
    },
    {
      id: "A2479",
      nombre: "Bolsa ecológica (chica) STAR",
      descripcion:
        "Bolsa ecológica termosellada con asas y diseño brillante. Peso máximo de carga de 10 kgs.",
      capacidad: null,
      material: {
        exterior: "Non Woven 130 GSM",
        interior: null,
      },
      medidas: {
        alto: "23 cm",
        ancho: "35 cm",
        profundidad: "10 cm",
      },
      empaque: {
        tipo: "Granel (200 piezas por caja) :contentReference[oaicite:1]{index=1}",
        color: null,
      },
      colores_disponibles: ["#000000", "#C0C0C0", "#FFD700"],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://doblevela.com/items/index/A2479",
      imagenes_urls: [
        "https://doblevela.com/images/large/A2479_lrg.jpg",
        "https://doblevela.com/images/large/A2479_negro_lrg.jpg?v=2",
      ],
      categoria: "bolsas",
    },
    {
      id: "A2542",
      nombre: "Mariel",
      descripcion:
        "Bolsa ecológica cosida con diseño de ondas. Cuenta con compartimento exterior y asas. Peso máximo de carga 8 kgs.",
      capacidad: null,
      material: {
        exterior: "Non Woven",
        interior: null,
      },
      medidas: {
        alto: "33 cm",
        ancho: "38 cm",
        profundidad: "11.5 cm",
        asa: "20 cm",
      },
      empaque: {
        tipo: "Granel (200 piezas por caja)",
        color: null,
      },
      colores_disponibles: ["#000000", "#FFA500", "#FF0000", "#90EE90", "#0000FF"],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://doblevela.com/items/index/A2542",
      imagenes_urls: [
        "https://doblevela.com/images/large/A2542_lrg.jpg",
        "https://doblevela.com/images/large/A2542_negro_lrg.jpg?v=2",
      ],
      categoria: "bolsas",
    },
    {
      id: "NONW01",
      nombre: "Bolsa Ecostyle",
      descripcion:
        "Bolsa ecológica básica con asa, cosida 100 % material ecológico Non Woven. Peso máximo de carga 10 kgs.",
      capacidad: null,
      material: {
        exterior: "Non Woven",
        interior: null,
      },
      medidas: {
        alto: "39.5 cm",
        ancho: "36.5 cm",
        profundidad: null,
      },
      empaque: {
        tipo: "Granel",
        color: null,
      },
      colores_disponibles: [
        "#FFFF00",
        "#0000FF",
        "#FF0000",
        "#FFFFFF",
        "#FFA500",
        "#00FF00",
        "#000000",
        "#90EE90",
        "#FFC0CB",
        "#800000",
      ],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://doblevela.com/items/index/NONW01",
      imagenes_urls: [
        "https://doblevela.com/images/large/NONW01_lrg.jpg",
        "https://doblevela.com/images/large/NONW01_amarillo_lrg.jpg?v=2",
      ],
      categoria: "bolsas",
    },
    {
      id: "A2144",
      nombre: "REFLEX",
      descripcion:
        "Práctica bolsa de poliéster con jaretas y ojal metálico, acabado fosforescente con cinta reflejante. Ideal para ciclistas. ",
      capacidad: null,
      material: {
        exterior: "Poliéster",
        interior: null,
      },
      medidas: {
        alto: "42.5 cm",
        ancho: "33 cm",
      },
      empaque: {
        tipo: "Granel (200 piezas por caja)",
        color: null,
      },
      colores_disponibles: ["#FFFF00"],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://doblevela.com/items/index/A2144",
      imagenes_urls: [
        "https://doblevela.com/images/large/A2144_lrg.jpg",
        "https://doblevela.com/images/large/A2144_amarillo_lrg.jpg?v=2",
      ],
      categoria: "bolsas",
    },
    {
      id: "A3188",
      nombre: "GLEAM",
      descripcion: "Bolsa de Non Woven metalizado.",
      capacidad: null,
      material: {
        exterior: "Non Woven metalizado",
        interior: null,
      },
      medidas: {
        alto: "35 cm",
        ancho: "34 cm",
        profundidad: "9.8 cm",
      },
      empaque: {
        tipo: "Granel",
        color: null,
      },
      colores_disponibles: ["#FF0000"],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://doblevela.com/items/index/A3188",
      imagenes_urls: [
        "https://doblevela.com/images/large/A3188_lrg.jpg",
        "https://doblevela.com/images/adicionales/_A3188_3.jpg",
      ],
      categoria: "bolsas",
    },
    {
      id: "SIN-131",
      nombre: "BOLSA CIMBOA",
      descripcion: "Bolsa sellada a calor.",
      capacidad: null,
      material: {
        exterior: "Non Woven",
        interior: null,
      },
      medidas: {
        alto: "43 cm",
        ancho: "35 cm",
        profundidad: null,
      },
      empaque: {
        tipo: "Caja de 300 piezas",
        color: null,
      },
      colores_disponibles: [
        "#000080",
        "#FFFF00",
        "#FFA500",
        "#FFFFFF",
        "#000000",
        "#FF0000",
        "#800080",
        "#00FF00",
      ],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "27216 disponibles",
      url_producto: "https://www.promoopcion.com/sin-131.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/S/I/SIN-131_1.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/s/i/sin-131-o_7.jpg?store=default&image-type=image",
      ],
      categoria: "bolsas",
    },
    {
      id: "SIN-147",
      nombre: "BOLSA BAGGARA",
      descripcion: "Bolsa con fuelle y asas. Sellada a calor.",
      capacidad: null,
      material: {
        exterior: "Non Woven Laminado",
        interior: null,
      },
      medidas: {
        alto: "37.5 cm",
        ancho: "24.5 cm",
        profundidad: "10 cm",
      },
      empaque: {
        tipo: "Caja de 400 piezas",
        color: null,
      },
      colores_disponibles: [
        "#000080",
        "#FFFF00",
        "#FFA500",
        "#FF0000",
        "#800080",
        "#00FF00",
      ],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "4353 disponibles",
      url_producto: "https://www.promoopcion.com/sin-147.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/S/I/SIN-147_1.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/S/I/SIN-147_20.jpg?store=default&image-type=image",
      ],
      categoria: "bolsas",
    },
    {
      id: "SIN-315",
      nombre: "BOLSA-MOCHILA ARACAR",
      descripcion: "Bolsa-mochila con tirantes de cordón y cierre de jareta.",
      capacidad: null,
      material: {
        exterior: "Non Woven / Poliéster",
        interior: null,
      },
      medidas: {
        alto: "41.5 cm",
        ancho: "32.5 cm",
        profundidad: null,
      },
      empaque: {
        tipo: "Caja de 200 piezas",
        color: null,
      },
      colores_disponibles: ["#0000FF", "#FFA500", "#FF0000", "#00FF00"],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "3119 disponibles",
      url_producto: "https://www.promoopcion.com/sin-315.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/s/i/sin-315.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/s/i/sin-315-v.jpg?store=default&image-type=image",
      ],
      categoria: "bolsas",
    },
    {
      id: "ACC-002",
      nombre: "BOLSA CIRO",
      descripcion:
        "Bolsa de yute laminada con cierre de cordón, ventana de PVC y parche de algodón para impresión.",
      capacidad: null,
      material: {
        exterior: "Yute laminado",
        interior: null,
      },
      medidas: {
        alto: "30 cm",
        ancho: "18 cm",
        profundidad: "10 cm",
      },
      empaque: {
        tipo: "Caja de 60 piezas",
        color: null,
      },
      colores_disponibles: ["#F5F5DC"],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://www.promoopcion.com/acc-002.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/a/c/acc-002-be-.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/a/c/acc-002_3.jpg?store=default&image-type=image",
      ],
      categoria: "bolsas",
    },
    {
      id: "SIN-023",
      nombre: "BOLSA-MOCHILA PRIDE",
      descripcion:
        "Bolsa-mochila con tirantes de cordón y cerrado de jareta. Su diseño arcoiris, colorido y alegre refleja la diversidad y la inclusividad.",
      capacidad: null,
      material: {
        exterior: "Poliéster",
        interior: null,
      },
      medidas: {
        alto: "43 cm",
        ancho: "34 cm",
        profundidad: null,
      },
      empaque: {
        tipo: "Caja de 200 piezas",
        color: null,
      },
      colores_disponibles: ["conic-gradient(from 0deg, #ff004d, #ff7a00, #ffd300, #00c853, #00aaff, #6a00ff, #ff004d)"],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://www.promoopcion.com/sin-023.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/s/i/sin-023-mc-e.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/s/i/sin-023-mc_1.jpg?store=default&image-type=image",
      ],
      categoria: "bolsas",
    },
    {
      id: "SIN-765",
      nombre: "BOLSA GIFT",
      descripcion:
        "Bolsa de PVC con fuelle y bordes de color. Su diseño transparente la hace ideal para crear sets de regalo personalizados. Cuenta con un asa diseñada para llevarla cómodamente con una sola mano.",
      capacidad: null,
      material: {
        exterior: "PVC",
        interior: null,
      },
      medidas: {
        alto: "35 cm",
        ancho: "24 cm",
        profundidad: "10 cm",
      },
      empaque: {
        tipo: "Caja de 200 piezas",
        color: null,
      },
      colores_disponibles: ["#FFFFFF", "#000000", "#0000FF"],
      origen: "Hecho en México",
      precio_lista: "$16.83 MXN",
      disponibilidad: "2662 disponibles",
      url_producto: "https://www.promoopcion.com/sin-765.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/s/i/sin-765_plc.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/s/i/sin-765-b_2.jpg?store=default&image-type=image",
      ],
      categoria: "bolsas",
    },
  ],
  cilindros: [
    {
      id: "ANF-006",
      nombre: "CILINDRO LAKE",
      descripcion:
        "Sistema de rosca twist-off que permite abrir y cerrar la tapa en un giro. Mantener en su empaque individual antes y después de su transformación. No apto para bebidas calientes. No introducir en microondas ni lavavajillas.",
      capacidad: "850 ml",
      material: {
        exterior: "PET",
        interior: null,
      },
      medidas: {
        diametro: "7.4 cm",
        altura: "24.5 cm",
      },
      empaque: {
        tipo: "Bolsa individual",
        color: "No especificado",
      },
      colores_disponibles: [
        "#EAB308", // Amarillo
        "#2563EB", // Azul
        "#000000", // Negro
        "#16A34A", // Verde
        "#FFFFFF", // Transparente (usando blanco como base)
        "#EA580C", // Naranja
        "#EC4899", // Rosa
        "#9333EA", // Morado
      ],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad:
        "Disponibles unidades en stock (verificar) :contentReference[oaicite:1]{index=1}",
      url_producto: "https://www.promoopcion.com/anf-006.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/a/n/anf-006_2.jpg",
        "https://www.promoopcion.com/media/catalog/product/A/N/ANF-006_20_6.jpg",
      ],
      categoria: "cilindros",
    },
    {
      id: "ANF-009",
      nombre: "CILINDRO SINKER",
      descripcion:
        "Sistema de rosca twist-off que permite abrir y cerrar la tapa en un giro. Incluye válvula de seguridad. No exponer el cilindro a temperaturas mayores a 40 °C y revisar que la tapa no esté cerrada completamente para su almacenamiento y transportación. No apto para bebidas calientes. No introducir en microondas ni lavavajillas.",
      capacidad: "575 ml",
      material: {
        exterior: "PET",
        interior: null,
      },
      medidas: {
        diametro: "6 cm",
        altura: "18.9 cm",
      },
      empaque: {
        tipo: "Bolsa individual",
        color: "No especificado",
      },
      colores_disponibles: [
        "#16A34A", // Verde
        "#EA580C", // Naranja
        "#2563EB", // Azul
        "#DC2626", // Rojo
        "#000000", // Negro
        "#FFFFFF", // Blanco
        "#C0C0C0", // Plata
        "#EC4899", // Rosado
        "#6B7280", // Gris
        "#9333EA", // Morado
        "#EAB308", // Amarillo
      ],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://www.promoopcion.com/anf-009.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/a/n/anf-009_ico.jpg",
        "https://www.promoopcion.com/media/catalog/product/A/N/ANF-009_20_1.jpg",
        "https://www.promoopcion.com/media/catalog/product/A/N/ANF-009_3.jpg",
      ],
      categoria: "cilindros",
    },
    {
      id: "ANF-041",
      nombre: "CILINDRO ODESA",
      descripcion:
        "Sistema de rosca twist-off que permite abrir y cerrar la tapa en un giro. Incluye válvula de seguridad. Mantener el linner en el interior de la tapa en todo momento, se debe retirar hasta su uso final. No exponer el cilindro a temperaturas mayores a 40 °C y revisar que la tapa no esté cerrada completamente para su almacenamiento y transportación. Mantener en su empaque individual antes y después de su transformación. No apto para bebidas calientes. No introducir en microondas ni lavavajillas.",
      capacidad: "500 ml",
      material: {
        exterior: "PET",
        interior: null,
      },
      medidas: {
        diametro: "6.8 cm",
        altura: "17 cm",
      },
      empaque: {
        tipo: "Bolsa individual",
        color: "No especificado",
      },
      colores_disponibles: [
        "#16A34A", // Verde
        "#EA580C", // Naranja
        "#2563EB", // Azul
        "#DC2626", // Rojo
        "#000000", // Negro
        "#FFFFFF", // Blanco
        "#C0C0C0", // Plata
        "#EC4899", // Rosado
        "#6B7280", // Gris
        "#9333EA", // Morado
        "#EAB308", // Amarillo
      ],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad:
        "Consultar inventario (existencias sujetas a cambio) :contentReference[oaicite:1]{index=1}",
      url_producto: "https://www.promoopcion.com/anf-041.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/a/n/anf-041_icon.jpg",
        "https://www.promoopcion.com/media/catalog/product/a/n/anf-041-m_7.jpg",
        "https://www.promoopcion.com/media/catalog/product/a/n/anf-041-vec.jpg?store=default&image-type=image",
      ],
      categoria: "cilindros",
    },
    {
      id: "ANF-072",
      nombre: "CILINDRO PARVO",
      descripcion:
        "Sistema de rosca twist-off que permite abrir y cerrar la tapa en un giro. Mantener el linner en el interior de la tapa en todo momento, se debe retirar hasta su uso final. No exponer el cilindro a temperaturas mayores a 40 °C y revisar que la tapa no esté cerrada completamente para su almacenamiento y transportación. Mantener en su empaque individual antes y después de su transformación. No apto para bebidas calientes. No introducir en microondas ni lavavajillas.",
      capacidad: "750 ml",
      material: {
        exterior: "Plástico",
        interior: null,
      },
      medidas: {
        diametro: "7 cm",
        altura: "22.5 cm",
      },
      empaque: {
        tipo: "Bolsa individual",
        color: "No especificado",
      },
      colores_disponibles: [
        "#000000", // Negro
        "#FFFFFF", // Blanco
        "#EC4899", // Rosado
        "#9333EA", // Morado
        "#60A5FA", // Azul Cielo
        "#1E3A8A", // Azul Marino
        "#BBF7D0", // Verde Pastel
        "#DC2626", // Rojo
      ],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario (existencias sujetas a cambio)",
      url_producto: "https://www.promoopcion.com/anf-072.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/a/n/anf-072_1_13.jpg",
        "https://www.promoopcion.com/media/catalog/product/a/n/anf-072_1.jpg",
        "https://www.promoopcion.com/media/catalog/product/a/n/anf-072_1_2.jpg",
      ],
      categoria: "cilindros",
    },
    {
      id: "ANF-075",
      nombre: "CILINDRO LEMN",
      descripcion:
        "Cilindro de plástico con tapa de bambú. No exponer el cilindro a temperaturas mayores a 40 °C y revisar que la tapa no esté cerrada completamente para su almacenamiento y transportación. Mantener en su empaque individual antes y después de su transformación. No apto para bebidas calientes. No introducir en microondas ni lavavajillas. El bambú es un producto natural el cual puede presentar variaciones en tonalidades y vetas.",
      capacidad: "600 ml",
      material: {
        exterior: "Plástico",
        interior: null,
      },
      medidas: {
        diametro: "7 cm",
        altura: "18.9 cm",
      },
      empaque: {
        tipo: "Unidad individual",
      },
      colores_disponibles: [
        "#000000", // Negro
        "#2563EB", // Azul
        "#7F1D1D", // Tinto
        "#FFFFFF", // Blanco
        "#16A34A", // Verde
        "#FBCFE8", // Rosa Pastel
      ],
      origen: "Importado",
      precio_lista: "Consultar precio",
      disponibilidad:
        "En stock (existencias sujetas a cambio) :contentReference[oaicite:1]{index=1}",
      url_producto: "https://www.promoopcion.com/anf-075.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/a/n/anf-075_2_1.jpg",
        "https://www.promoopcion.com/media/catalog/product/a/n/anf-075-b_7.jpg",
        "https://www.promoopcion.com/media/catalog/product/a/n/anf-075--.jpg",
      ],
      categoria: "cilindros",
    },
    {
      id: "ANF-088",
      nombre: "CILINDRO FESTY",
      descripcion:
        "Sistema de rosca twist-off que permite abrir y cerrar la tapa en un giro. Incluye válvula de seguridad. No exponer el cilindro a temperaturas mayores a 40 °C y revisar que la tapa no esté cerrada completamente para su almacenamiento y transportación. Mantener en su empaque individual antes y después de su transformación. No apto para bebidas calientes. No introducir en microondas ni lavavajillas.",
      capacidad: "500 ml",
      material: {
        exterior: "PET",
        interior: null,
      },
      medidas: {
        diametro: "7.6 cm",
        altura: "15.7 cm",
      },
      empaque: {
        tipo: "Bolsa individual",
      },
      colores_disponibles: [
        "#2563EB", // Azul
        "#EAB308", // Amarillo
        "#9333EA", // Morado
        "#EA580C", // Naranja
        "#000000", // Negro
        "#DC2626", // Rojo
        "#16A34A", // Verde
      ],
      origen: "Importado",
      precio_lista: "Consultar precio",
      disponibilidad: "En stock (existencias sujetas a cambio)",
      url_producto: "https://www.promoopcion.com/anf-088.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/a/n/anf-088_icon.jpg",
        "https://www.promoopcion.com/media/catalog/product/a/n/anf-088_ambiente_1.jpg",
        "https://www.promoopcion.com/media/catalog/product/a/n/anf-088_2_7.jpg",
      ],
      categoria: "cilindros",
    },
    {
      id: "A2339",
      nombre: "CILINDRO RIVER",
      descripcion:
        "Cilindro de plástico PET con tapa de rosca abatible y boquilla. Su diseño es ergonómico, se ajusta perfectamente a la mano al sostenerlo. CAP. 750 ml. *BPA FREE.",
      capacidad: "750 ml",
      material: {
        exterior: "Plástico PET",
        interior: null,
      },
      medidas: {
        diametro: "7.5 cm",
        altura: "23 cm",
      },
      empaque: {
        tipo: "Bolsa individual",
      },
      colores_disponibles: [
        "#6B7280", // Humo
        "#DC2626", // Rojo
        "#16A34A", // Verde
        "#2563EB", // Azul
      ],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario (existencias sujetas a cambio)",
      url_producto: "https://doblevela.com/items/index/A2339",
      imagenes_urls: [
        "https://doblevela.com/images/large/A2339_lrg.jpg?v=1894994337",
        "https://doblevela.com/images/large/A2339_humo_lrg.jpg?v=91702438",
        "https://doblevela.com/images/large/A2339_rojo_lrg.jpg?v=1073927767",
        "https://doblevela.com/images/adicionales/_A2339_1.jpg",
      ],
      categoria: "cilindros",
    },
    {
      id: "A2470",
      nombre: "CILINDRO BOWLING",
      descripcion:
        "Cilindro de Tritan con tapa de rosca con asa. Capacidad 750 ml. *BPA FREE.",
      capacidad: "750 ml",
      material: {
        exterior: "Tritan",
        interior: null,
      },
      medidas: {
        diametro: "7.5 cm",
        altura: "27.5 cm",
      },
      empaque: {
        tipo: "Bolsa individual",
      },
      colores_disponibles: [
        "#EA580C", // Naranja
        "#FFFFFF", // Transparente
        "#6B7280", // Humo
      ],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario (existencias sujetas a cambio)",
      url_producto: "https://doblevela.com/items/index/A2470",
      imagenes_urls: [
        "https://doblevela.com/images/large/A2470_lrg.jpg?v=1944171363",
        "https://doblevela.com/images/large/A2470_naranja_lrg.jpg?v=114871370",
        "https://doblevela.com/images/large/A2470_transparente_lrg.jpg?v=552440533",
      ],
      categoria: "cilindros",
    },
    {
      id: "A2752",
      nombre: "CILINDRO TADEO",
      descripcion:
        "Cilindro de plástico PET libre de BPA, con tapa de rosca y válvula. Cuerpo y tapa del mismo color. CAP. 500 ml.",
      capacidad: "500 ml",
      material: {
        exterior: "Plástico PET",
        interior: null,
      },
      medidas: {
        diametro: "6.7 cm",
        altura: "16 cm",
      },
      empaque: {
        tipo: "Bolsa individual",
      },
      colores_disponibles: [
        "#EA580C", // Naranja
        "#DC2626", // Rojo
        "#EC4899", // Rosa
        "#16A34A", // Verde
        "#EAB308", // Amarillo
        "#2563EB", // Azul
        "#6B7280", // Humo
        "#FFFFFF", // Transparente
      ],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario (existencias sujetas a cambio)",
      url_producto: "https://doblevela.com/items/index/A2752",
      imagenes_urls: [
        "https://doblevela.com/images/large/A2752_lrg.jpg?v=545859074",
        "https://doblevela.com/images/large/A2752_naranja_lrg.jpg?v=2137533303",
        "https://doblevela.com/images/large/A2752_rosa_lrg.jpg?v=1090978310",
      ],
      categoria: "cilindros",
    },
    {
      id: "A3150",
      nombre: "ACUARIO",
      descripcion:
        "Cilindro de plástico PET con tapa de rosca abatible con boquilla para beber. CAP. 950 ml. *BPA FREE.",
      capacidad: "950 ml",
      material: {
        exterior: "Plástico PET",
        interior: null,
      },
      medidas: {
        diametro: "7 cm",
        altura: "26 cm",
        notas: "Ø 7 x 26 cm",
      },
      empaque: {
        tipo: "Bolsa individual",
      },
      colores_disponibles: [
        "#DC2626", // Rojo
        "#2563EB", // Azul
        "#6B7280", // Humo
        "#FFFFFF", // Transparente
      ],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Verificar inventario (existencias sujetas a cambio)",
      url_producto: "https://doblevela.com/items/index/A3150",
      imagenes_urls: [
        "https://doblevela.com/images/large/A3150_lrg.jpg",
        "https://doblevela.com/images/large/A3150_rojo_lrg.jpg?v=1535687674",
        "https://doblevela.com/images/large/A3150_azul_lrg.jpg?v=365944318",
      ],
      categoria: "cilindros",
    },
    {
      id: "A3151",
      nombre: "CILINDRO DE PLÁSTICO TADEUS 500 ML",
      descripcion:
        "Cilindro de plástico PET con cuerpo transparente y tapa de rosca a color con válvula. CAP. 500 ml. *BPA FREE.",
      capacidad: "500 ml",
      material: {
        exterior: "Plástico PET",
        interior: null,
      },
      medidas: {
        diametro: "6.7 cm",
        altura: "16 cm",
      },
      empaque: {
        tipo: "Bolsa individual",
      },
      colores_disponibles: [
        "#000000", // Negro
        "#EA580C", // Naranja
        "#DC2626", // Rojo
        "#EC4899", // Rosa
        "#16A34A", // Verde
        "#2563EB", // Azul
      ],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Verificar inventario (existencias sujetas a cambio)",
      url_producto: "https://doblevela.com/items/index/A3151",
      imagenes_urls: [
        "https://doblevela.com/images/large/A3151_lrg.jpg",
        "https://doblevela.com/images/large/A3151_negro_lrg.jpg?v=1489368968",
        "https://doblevela.com/images/large/A3151_naranja_lrg.jpg?v=261424416",
      ],
      categoria: "cilindros",
    },
  ],
  vasos: [
    {
      id: "A2939",
      nombre: "PIPO",
      descripcion:
        "Vaso de vidrio de borosilicato de doble pared con cara de oso. Cuenta con tapa de bambú y sello de silicón. CAP. 220 ml.",
      capacidad: "220 ml",
      material: {
        exterior: "Vidrio de borosilicato",
        interior: null,
      },
      medidas: {
        diametro: "Ø 9.3 cm",
        altura: "9 cm",
      },
      empaque: {
        tipo: "Caja individual en color blanco",
      },
      colores_disponibles: ["#FFFFFF00"],
      origen: "Hecho en México ",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario (existencias sujetas a cambio) ",
      url_producto: "https://doblevela.com/items/index/A2939",
      imagenes_urls: [
        "https://doblevela.com/images/large/A2939_lrg.jpg?v=1073690386",
        "https://doblevela.com/images/large/A2939_transparente_lrg.jpg?v=1713777277",
        "https://doblevela.com/images/adicionales/_A2939_1.jpg",
      ],
      categoria: "vasos",
    },
    {
      id: "A2964",
      nombre: "KLAUS",
      descripcion:
        "Vaso de plástico de doble pared con diseño navideño y lentejuelas en su interior. Cuenta con tapa de cúpula con figura de Santa Claus con lentejuelas y popote. CAP. 500 ml. *BPA FREE. ",
      capacidad: "500 ml",
      material: {
        exterior: "Plástico PS",
        interior: null,
      },
      medidas: {
        diametro: "10 cm",
        altura: "20 cm",
      },
      empaque: {
        tipo: "Caja individual (presentación de regalo)",
      },
      colores_disponibles: ["#FF0000"],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Verificar inventario (existencias sujetas a cambio)",
      url_producto: "https://doblevela.com/items/index/A2964",
      imagenes_urls: [
        "https://doblevela.com/images/large/A2964_lrg.jpg?v=34977803",
        "https://doblevela.com/images/large/A2964_rojo_lrg.jpg?v=1834458300",
        "https://doblevela.com/images/adicionales/_A2964_1.jpg",
      ],
      categoria: "vasos",
    },
    {
      id: "A2993",
      nombre: "VASO LUMINOSO PHANTOM",
      descripcion:
        "Vaso de plástico transparente que brilla en la oscuridad, cuenta con tapa de presión y popote. CAP. 700 ml. *BPA FREE.",
      capacidad: "700 ml",
      material: {
        exterior: "Plástico PP",
        interior: null,
      },
      medidas: {
        diametro: "10 cm",
        altura: "18 cm",
      },
      empaque: {
        tipo: "Bolsa individual",
        color: "No especificado",
      },
      colores_disponibles: ["#FFFFFF00"],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Verificar inventario (existencias sujetas a cambio)",
      url_producto: "https://doblevela.com/items/index/A2993",
      imagenes_urls: [
        "https://doblevela.com/images/large/A2993_lrg.jpg?v=1774612864",
        "https://doblevela.com/images/large/A2993_transparente_lrg.jpg?v=500993459",
        "https://doblevela.com/images/adicionales/_A2993_3.jpg",
      ],
      categoria: "vasos",
    },
    {
      id: "A2881",
      nombre: "VASO LIB",
      descripcion:
        "Vaso de plástico PP traslúcido con glitter de colores, cuenta con tapa de presión a color y popote del color de la tapa. CAP. 750 ml. Libre de BPA. ",
      capacidad: "750 ml",
      material: {
        exterior: "Plástico PP traslúcido con glitter",
        interior: null,
      },
      medidas: {
        diametro: "10.6 cm",
        altura: "18 cm",
      },
      empaque: {
        tipo: "Caja máster",
        color: "No especificado",
      },
      colores_disponibles: [
        "#000000",
        "#FFA500",
        "#FF0000",
        "#FFC0CB",
        "#008000",
        "#0000FF",
        "#FFD700",
        "#800080",
      ],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Verificar inventario (existencias sujetas a cambio)",
      url_producto: "https://doblevela.com/items/index/A2881",
      imagenes_urls: [
        "https://doblevela.com/images/large/A2881_lrg.jpg?v=831500716",
        "https://doblevela.com/images/large/A2881_negro_lrg.jpg?v=532395235",
        "https://doblevela.com/images/large/A2881_rojo_lrg.jpg?v=233547767",
      ],
      categoria: "vasos",
    },
    {
      id: "VST3946",
      nombre: "VASO TÉRMICO DOBLE PARED TED",
      descripcion:
        "Vaso térmico de doble pared, cuenta con tapa que cierra a presión y seguro deslizable. CAP. 600 ml. *BPA FREE. ",
      capacidad: "600 ml",
      material: {
        exterior: "Plástico PP",
        interior: null,
      },
      medidas: {
        diametro: "8.6 cm",
        altura: "19.5 cm",
      },
      empaque: {
        tipo: "Bolsa individual",
        color: "No especificado",
      },
      colores_disponibles: ["#FFA500"],
      origen: "Hecho en México ",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario (existencias sujetas a cambio)",
      url_producto: "https://doblevela.com/items/index/VST3946",
      imagenes_urls: [
        "https://doblevela.com/images/large/VST3946_lrg.jpg?v=916953360",
        "https://doblevela.com/images/large/VST3946_naranja_lrg.jpg?v=1054055402",
      ],
      categoria: "vasos",
    },
    {
      id: "A2345",
      nombre: "VASO EXPRESO",
      descripcion:
        "Vaso de plástico con tapa de presión y válvula de seguridad, cuenta con banda protectora de termoplástico en la parte inferior. CAP. 350 ml. *BPA FREE. ",
      capacidad: "350 ml",
      material: {
        exterior: "Plástico PP",
        interior: null,
      },
      medidas: {
        diametro: "8.7 cm",
        altura: "12.3 cm",
      },
      empaque: {
        tipo: "Bolsa individual",
        color: "No especificado",
      },
      colores_disponibles: ["#000000", "#FF0000", "#0000FF"],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Verificar inventario (existencias sujetas a cambio)",
      url_producto: "https://doblevela.com/items/index/A2345",
      imagenes_urls: [
        "https://doblevela.com/images/large/A2345_lrg.jpg?v=726503398",
        "https://doblevela.com/images/large/A2345_negro_lrg.jpg?v=70913838",
        "https://doblevela.com/images/large/A2345_rojo_lrg.jpg?v=1304908909",
      ],
      categoria: "vasos",
    },
    {
      id: "A2727",
      nombre: "VASO ECOLÓGICO MOCCA",
      descripcion:
        "Vaso ecológico a base de fibra de trigo para bebidas calientes. Con tapa de rosca anti derrames. CAP. 325 ml.",
      capacidad: "325 ml",
      material: {
        exterior: "Fibra de trigo",
        interior: null,
      },
      medidas: {
        diametro: "9.2 cm",
        altura: "13.3 cm",
      },
      empaque: {
        tipo: "Bolsa individual",
      },
      colores_disponibles: ["#90EE90", "#87CEEB", "#F5F5DC"],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad:
        "Verificar inventario (existencias sujetas a cambio) :contentReference[oaicite:1]{index=1}",
      url_producto: "https://doblevela.com/items/index/A2727",
      imagenes_urls: [
        "https://doblevela.com/images/large/A2727_lrg.jpg?v=57188395",
        "https://doblevela.com/images/large/A2727_verdeclaro_lrg.jpg?v=2087898041",
        "https://doblevela.com/images/large/A2727_azulclaro_lrg.jpg?v=439091443",
      ],
      categoria: "vasos",
    },
    {
      id: "A2342",
      nombre: "VASO BACHELOR",
      descripcion:
        "Vaso de plástico con tapa a presión y popote. Variedad de colores. Para llevar en el auto. CAP. 930 ml. *BPA FREE.",
      capacidad: "930 ml",
      material: {
        exterior: "Plástico PP",
        interior: null,
      },
      medidas: {
        diametro: "7 cm",
        altura: "19 cm",
      },
      empaque: {
        tipo: "Empaque individual / Presentación master",
        color: "No especificado",
      },
      colores_disponibles: [
        "#FFFFFF",
        "#000000",
        "#FF0000",
        "#90EE90",
        "#FFFF00",
        "#C8A2C8",
        "#FFFFFF00",
        "#FFA500",
        "#FFC0CB",
      ],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario (existencias sujetas a cambio)",
      url_producto: "https://doblevela.com/items/index/A2342",
      imagenes_urls: [
        "https://doblevela.com/images/large/A2342_lrg.jpg?v=1067246197",
        "https://doblevela.com/images/large/A2342_blanco_lrg.jpg?v=1843358704",
        "https://doblevela.com/images/large/A2342_negro_lrg.jpg?v=541470900",
      ],
      categoria: "vasos",
    },
    {
      id: "TMPS255",
      nombre: "VASO LODY",
      descripcion:
        "Vaso de plástico de una pared. Cuenta con una tapa tipo domo con cierre a presión, incluye un popote ancho, lo que lo hace ideal para disfrutar una gran variedad de bebidas con diferentes toppings o incluso crema batida.",
      capacidad: "500 ml",
      material: {
        exterior: "Plástico",
        interior: null,
      },
      medidas: {
        diametro: "6.3 cm",
        altura: "15.8 cm",
      },
      empaque: {
        tipo: "Caja colectiva",
        color: "No especificado",
      },
      colores_disponibles: [
        "#FFFFFF",
        "#FF0000",
        "#FFC0CB",
        "#FFA500",
        "#CCFF00",
        "#848884",
        "#FFFFF0",
      ],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario (stock variable) ",
      url_producto: "https://www.promoopcion.com/tmps-255.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/t/m/tmps-255_3.jpg",
        "https://www.promoopcion.com/media/catalog/product/t/m/tmps-255-vn_7.jpg",
        "https://www.promoopcion.com/media/catalog/product/t/m/tmps-255-pn_2_1.jpg?store=default&image-type=image",
      ],
      categoria: "vasos",
    },
    {
      id: "TMPS-237",
      nombre: "VASO BLUR",
      descripcion:
        "Vaso de plástico de una pared. Añade fantasía y diversión, con este vaso que cambia de color al verter bebidas frías. Su tapa y popote coinciden con el tono que el vaso revelará al enfriarse. Perfecto para quienes buscan una experiencia refrescante y visualmente atractiva en cada bebida.",
      capacidad: "800 ml",
      material: {
        exterior: "Plástico",
        interior: null,
      },
      medidas: {
        diametro: "6.4 cm (base)",
        altura: "18 cm",
        otra_medida: "10.8 × 18 cm",
      },
      empaque: {
        tipo: "Caja master (200 piezas)",
        color: "No especificado",
        medida_caja: "55 × 43 × 44 cm",
        peso_caja: "12.20 kg",
      },
      colores_disponibles: ["#0000FF", "#FFC0CB", "#FFFF00", "#008000", "#800080"],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://www.promoopcion.com/tmps-237.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/t/m/tmps-237--e_.jpg",
        "https://www.promoopcion.com/media/catalog/product/t/m/tmps-237-a_3.jpg",
        "https://www.promoopcion.com/media/catalog/product/t/m/tmps-237.jpg",
      ],
      categoria: "vasos",
    },
    {
      id: "TMPS-744",
      nombre: "VASO JAS",
      descripcion:
        "Vaso de plástico con tapa tipo push y popote. Capacidad 27 oz (≈800 ml). Base de 6.4 cm de diámetro. Área de impresión apta para serigrafía.",
      capacidad: "800 ml",
      material: {
        exterior: "Plástico",
        interior: null,
      },
      medidas: {
        diametro: "6.4 cm",
        altura: "18 cm",
      },
      empaque: {
        tipo: "Caja colectiva (200 piezas)",
        color: "No especificado",
      },
      colores_disponibles: [
        "#0000FF",
        "#AEC6CF",
        "#FFFFFF",
        "#FFFFF0",
        "#800080",
        "#000000",
        "#FFA500",
        "#FFA500",
        "#FF69B4",
        "#FFB6C1",
        "#FF0000",
        "#00FF00",
        "#CCFF00",
      ],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario (existencias sujetas a change) ",
      url_producto: "https://www.promoopcion.com/tmps-744.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/t/m/tmps_744.jpg",
        "https://www.promoopcion.com/media/catalog/product/t/m/tmps-744.jpg",
        "https://www.promoopcion.com/media/catalog/product/t/m/tmps_744_n_accesorios.jpg",
      ],
      categoria: "vasos",
    },
    {
      id: "TMPS-74",
      nombre: "VASO TIRICH",
      descripcion: "Vaso de plástico. Incluye tapa con ranura. ",
      capacidad: "475 ml",
      material: {
        exterior: "Plástico",
        interior: null,
      },
      medidas: {
        diametro: "No especificado",
        altura: "16 cm",
        otra_medida: "9 × 16 cm",
      },
      empaque: {
        tipo: "Caja colectiva (200 piezas)",
        color: "No especificado",
      },
      colores_disponibles: [
        "#000000",
        "#FFC0CB",
        "#FFB6C1",
        "#FFFFF0",
        "#FFA500",
        "#FF0000",
        "#808080",
        "#0000FF",
      ],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad:
        "Consultar inventario (existencias sujetas a cambio) :contentReference[oaicite:1]{index=1}",
      url_producto: "https://www.promoopcion.com/tmps-74.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/t/m/tmps_74.jpg",
        "https://www.promoopcion.com/media/catalog/product/t/m/tmps-74-v_1.jpg",
        "https://www.promoopcion.com/media/catalog/product/t/m/tmps-74-a_1.jpg",
      ],
      categoria: "vasos",
    },
  ],
};
