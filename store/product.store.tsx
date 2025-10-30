import { create } from "zustand";
import { FaMugHot } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaPenClip } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";

export interface Product {
  id: string;
  nombre: string;
  descripcion: string;
  capacidad: string | null;
  material: {
    exterior: string | null;
    interior: string | null;
  };
  medidas: {
    [key: string]: string | null;
  };
  empaque: {
    [key: string]: string | null;
  };
  colores_disponibles: string[];
  origen: string;
  precio_lista: string;
  disponibilidad: string;
  url_producto: string;
  imagenes_urls: string[];
  categoria?: string; // Campo opcional para enlace directo
}

export interface Category {
  id: number;
  name: string;
  img: string;
  url: string;
  description?: string;
  productCount?: number;
  icon?: React.ReactNode;
}

export interface CategoryProducts {
  [category: string]: Product[];
}

interface ProductState {
  // Estado
  productsByCategory: CategoryProducts;
  categories: Category[];
  selectedCategory: string;
  selectedProduct: Product | null;
  loading: boolean;

  // Acciones
  setSelectedCategory: (category: string) => void;
  setSelectedProduct: (product: Product | null) => void;
  setLoading: (loading: boolean) => void;
  getProductsByCategory: (category: string) => Product[];
  getProductsByCategoryUrl: (categoryUrl: string) => Product[];
  searchProducts: (query: string) => Product[];
  getProductById: (id: string) => Product | undefined;
  getCategories: () => string[];
  getCategoryByUrl: (url: string) => Category | undefined;
  getCategoryInfo: (category: string) => Category | undefined;
  getProductsCountByCategory: (category: string) => number;
}

// Datos extendidos de categorías
const categoriesList: Category[] = [
  {
    id: 1,
    name: "Termos",
    img: "/img/categories/termos.jpg",
    url: "termos",
    description:
      "Termos de alta calidad para mantener tus bebidas a la temperatura ideal",
    icon: <FaMugHot size={32} className="text-white" />,
  },
  {
    id: 2,
    name: "Agendas y Libretas",
    img: "/img/categories/agendas.jpg",
    url: "agendas",
    description:
      "Organiza tu tiempo con nuestras agendas y libretas de diseño único",
    icon: <FaBook size={32} className="text-white" />,
  },
  {
    id: 3,
    name: "Bolsas",
    img: "/img/categories/bolsas.jpg",
    url: "bolsas",
    description: "Bolsas ecológicas y prácticas para el día a día",
    icon: <IoBagOutline size={32} className="text-white" />,
  },
  {
    id: 4,
    name: "Lapiceros",
    img: "/img/categories/lapiceros.jpg",
    url: "lapiceros",
    description: "Bolígrafos de calidad premium para escribir con estilo",
    icon: <FaPenClip size={32} className="text-white" />,
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
      colores_disponibles: ["Blanco", "Negro", "Rojo", "Azul marino"],
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
      colores_disponibles: ["Blanco", "Negro", "Rojo", "Azul marino"],
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
        "Blanco",
        "Negro",
        "Rojo",
        "Azul marino",
        "Amarillo",
        "Verde",
        "Naranja",
        "Rosa",
        "Morado",
        "Turquesa",
        "Fucsia",
        "Lima",
        "Palo de rosa",
        "Púrpura",
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
      colores_disponibles: ["Verde", "Rojo"],
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
        "Blanco",
        "Negro",
        "Naranja",
        "Rojo",
        "Rosa",
        "Verde",
        "Amarillo",
        "Azul",
        "Azul claro",
        "Morado",
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
      colores_disponibles: ["Café"],
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
      colores_disponibles: ["Rojo", "Azul", "Negro", "Verde", "Naranja"],
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
      colores_disponibles: ["Verde claro", "Azul", "Beige"],
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
        "Rojo",
        "Verde claro",
        "Azul claro",
        "Beige",
        "Palo de rosa",
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
      colores_disponibles: ["Negro (tinta)"],
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
        "Negro",
        "Blanco",
        "Rojo",
        "Azul",
        "Verde",
        "Amarillo",
        "Naranja",
        "Rosa",
        "Azul Cielo",
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
      colores_disponibles: ["Azul", "Blanco", "Negro", "Gris", "Rosa", "Rojo"],
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
        "Azul",
        "Blanco",
        "Rojo",
        "Negro",
        "Verde",
        "Amarillo",
        "Naranja",
        "Azul Cielo",
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
      colores_disponibles: ["Rojo", "Azul", "Negro"],
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
        "Rojo",
        "Azul",
        "Negro",
        "Verde",
        "Amarillo",
        "Naranja",
        "Morado",
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
      colores_disponibles: ["Azul", "Rojo", "Negro", "Verde", "Naranja"],
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
      colores_disponibles: ["Azul", "Rojo", "Negro", "Verde", "Naranja"],
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
        "Negro",
        "Morado",
        "Verde",
        "Rojo",
        "Azul",
        "Amarillo",
        "Naranja",
        "Rosa",
        "Turquesa",
        "Blanco",
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
      colores_disponibles: ["Azul", "Rojo", "Verde"],
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
        "Naranja",
        "Verde",
        "Azul",
        "Rojo",
        "Negro",
        "Blanco",
      ],
      origen: "Hecho en México",
      precio_lista: "Consultar precio",
      disponibilidad: "Consultar inventario",
      url_producto: "https://www.promoopcion.com/eco-065.html",
      imagenes_urls: [
        "https://www.promoopcion.com/media/catalog/product/E/C/ECO-065.jpg?store=default&image-type=image",
        "https://www.promoopcion.com/media/catalog/product/E/C/ECO-065_20.jpg?store=default&image-type=image"
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
      colores_disponibles: ["Beige"],
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
      colores_disponibles: ["Beige"],
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
      colores_disponibles: ["Blanco"],
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
      colores_disponibles: ["Beige"],
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
      colores_disponibles: ["Negro"],
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
      colores_disponibles: ["Gris", "Rosa", "Azul", "Verde"],
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
      colores_disponibles: ["Beige"],
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
      colores_disponibles: ["Negro", "Gris", "Rojo", "Azul"],
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
      colores_disponibles: ["Negro", "Azul", "Rojo", "Gris"],
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
      colores_disponibles: ["Beige"],
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
      colores_disponibles: ["Beige"],
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
      colores_disponibles: ["Beige"],
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
      colores_disponibles: ["Negro"],
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
      colores_disponibles: ["No especificado"],
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
      colores_disponibles: ["Negro"],
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
        "Rojo",
        "Naranja",
        "Turquesa",
        "Negro",
        "Azul marino",
      ],
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
        "Negro",
        "Naranja",
        "Rojo",
        "Azul marino",
        "Palo de rosa",
        "Morado",
      ],
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
        "Negro",
        "Rojo",
        "Azul",
        "Azul claro",
        "Lila",
        "Palo de rosa",
      ],
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
      colores_disponibles: ["Gris", "Azul claro", "Turquesa", "Beige"],
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
      colores_disponibles: ["Negro", "Rojo", "Verde", "Azul"],
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
      colores_disponibles: ["Rojo"],
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
        "Libreta vertical A5 de tela con bolsa al frente y detalle de cremallera en color. La libreta es de 80 hojas rayadas (160 páginas). Incluye listón separador del mismo color que el cierre. :contentReference[oaicite:1]{index=1}",
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
      colores_disponibles: ["Negro", "Rojo", "Azul"],
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
        "Negro",
        "Naranja",
        "Rojo",
        "Verde claro",
        "Azul",
        "Morado",
      ],
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
      colores_disponibles: ["Rojo", "Negro", "Azul", "Oro"],
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
      colores_disponibles: ["Negro", "Naranja", "Morado", "Verde", "Azul"],
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
      colores_disponibles: ["Plata", "Rojo", "Negro", "Azul"],
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
      colores_disponibles: ["Amarillo", "Naranja", "Rosa"],
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
      colores_disponibles: ["Rojo", "Verde", "Naranja", "Azul", "Negro"],
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
      colores_disponibles: ["Negro", "Rojo", "Azul"],
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
      colores_disponibles: ["Negro", "Blanco"],
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
        "Blanco",
        "Negro",
        "Rosa",
        "Azul claro",
        "Turquesa",
      ],
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
        "Blanco",
        "Negro",
        "Naranja",
        "Rojo",
        "Rosa",
        "Verde claro",
        "Azul",
        "Azul claro",
        "Plata",
        "Turquesa",
      ],
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
      colores_disponibles: ["Natural (bambú)"],
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
        "Termo para auto de sublimación 15 oz. Interior de acero inoxidable, tapa de plástico con cierre y asa. Ideal para personalización. ",
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
      colores_disponibles: ["Plata", "Blanco"],
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
        "Termo NAYAD NEO de 16 Oz. de doble pared, la interna es de acero inoxidable y la externa de granos de café reciclado. Mantiene bebidas calientes por 3 hrs y frías por 5 hrs. Cuenta con tapa deslizable hacia atrás, botón dorado, cinta metálica color bronce y rosca hermética anti-derrames y anti-escurrimiento. ",
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
      colores_disponibles: ["Café"],
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
      colores_disponibles: ["Café"],
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
        "Termo NAYAD NEO de 16 Oz (≈ 480 ml) de doble pared, la interna es de acero inoxidable y la externa de granos de café reciclado. Mantiene bebidas calientes por 3 horas y frías por 5 horas. Cuenta con cintillo metálico color bronce, botón de seguridad dorado, tapa de rosca hermética anti-derrames y anti-escurrimiento. :contentReference[oaicite:1]{index=1}",
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
      colores_disponibles: ["Café"],
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
        "Termo con exterior de acero inoxidable con interior de plástico y asa de plástico. Incluye tapa transparente con cierre a presión y seguro giratorio en color del termo, con ranura para popote de color. CAP. 1,200 ml. :contentReference[oaicite:1]{index=1}",
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
      colores_disponibles: ["Negro", "Rojo", "Amarillo", "Azul marino", "Lila"],
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
        "Termo de doble pared insulado al alto vacío, mantiene la temperatura caliente por 12 horas y fría por 24. Cuenta con acabado de polvo plástico. La parte inferior es más angosta para poder usarse en el porta vasos del coche. Tiene tapa de rosca con doble apertura: una con seguro elevable para bebidas calientes y otra con pivote desplegable y popote interno. :contentReference[oaicite:1]{index=1}",
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
        "Negro",
        "Naranja",
        "Rojo",
        "Azul",
        "Azul claro",
        "Lila",
        "Beige",
        "Palo de rosa",
      ],
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
        "Termo de plástico de doble pared con asa. Cuenta con tapa transparente con cierre de rosca y sobre tapa giratoria en color del termo, con ranura para popote. Incluye popote de color. :contentReference[oaicite:1]{index=1}",
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
      colores_disponibles: ["Negro", "Rojo", "Azul marino"],
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
        "Termo con exterior de plástico e interior de acero inoxidable. Cuenta con tapa de rosca anti-derrames con seguro abatible. :contentReference[oaicite:1]{index=1}",
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
        "Blanco",
        "Negro",
        "Naranja",
        "Rojo",
        "Verde",
        "Amarillo",
        "Azul marino",
        "Palo de rosa",
        "Morado",
      ],
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
        "Blanco",
        "Plata",
        "Negro",
        "Gris",
        "Rosa pastel",
        "Verde pastel",
      ],
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
        "Doble pared. Pared interna plástico, pared externa acero inoxidable. Base de termo con forma hexagonal. Tapa de plástico con boquilla y sobre tapa de cierre a presión. Terminado mate. Incluye caja individual. :contentReference[oaicite:1]{index=1}",
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
      colores_disponibles: ["Negro", "Blanco", "Azul", "Rojo"],
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
        "Doble pared. Pared interna plástico, pared externa acero inoxidable. Base de corcho. Tapa en dos posiciones. No usar en microondas ni lavavajillas. Incluye caja individual. :contentReference[oaicite:1]{index=1}",
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
      colores_disponibles: ["Plata"],
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
      colores_disponibles: ["Negro", "Rojo", "Verde", "Naranja", "Azul marino"],
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
      colores_disponibles: ["Azul", "Negro", "Gris", "Verde"],
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
      colores_disponibles: ["Negro", "Blanco"],
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
        //tapa: "Plástico",
        //popote: "Silicón",
      },
      medidas: {
        alto: "15.8 cm",
        diámetro: "9 cm",
      },
      empaque: {
        tipo: "Caja individual",
        //cantidad_por_caja: 24,
        peso_bruto: "8.3 kg",
        medidas_caja: "56 x 18.8 x 52 cm",
      },
      colores_disponibles: ["Rosa", "Azul"],
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
        //cantidad_por_caja: 50,
        peso_bruto: "10.40 kg",
        medidas_caja: "49 x 33 x 49 cm",
      },
      colores_disponibles: [
        "Naranja",
        "Azul marino",
        "Verde",
        "Amarillo",
        "Rojo",
        "Negro",
        "Aqua",
        "Fucsia",
      ],
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
        //tapa: "Plástico",
      },
      medidas: {
        alto: "12 cm",
        diámetro: "7.9 cm",
      },
      empaque: {
        tipo: "Caja individual",
        //cantidad_por_caja: 24,
        peso_bruto: "6.8 kg",
        medidas_caja: "57.5 x 15 x 39 cm",
      },
      colores_disponibles: ["Tornasol"],
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
      colores_disponibles: ["Azul", "Negro", "Rosa"],
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
      colores_disponibles: ["Negro", "Plata", "Oro"],
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
      colores_disponibles: ["Negro", "Plata", "Oro"],
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
      colores_disponibles: ["Negro", "Naranja", "Rojo", "Verde claro", "Azul"],
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
        "Amarillo",
        "Azul",
        "Rojo",
        "Blanco",
        "Naranja",
        "Verde",
        "Negro",
        "Verde claro",
        "Rosa",
        "Vino",
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
        "Práctica bolsa de poliéster con jaretas y ojal metálico, acabado fosforescente con cinta reflejante. Ideal para ciclistas. :contentReference[oaicite:0]{index=0}",
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
      colores_disponibles: ["Amarillo"],
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
      colores_disponibles: ["Rojo"],
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
        "Azul rey",
        "Amarillo",
        "Naranja",
        "Blanco",
        "Negro",
        "Rojo",
        "Morado",
        "Verde",
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
        "Azul rey",
        "Amarillo",
        "Naranja",
        "Rojo",
        "Morado",
        "Verde",
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
      colores_disponibles: ["Azul", "Naranja", "Rojo", "Verde"],
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
      colores_disponibles: ["Beige"],
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
      colores_disponibles: ["Multicolor"],
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
      colores_disponibles: ["Blanco", "Negro", "Azul"],
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
};

export const useProductStore = create<ProductState>((set, get) => ({
  // Estado inicial
  productsByCategory: initialProducts,
  categories: categoriesList,
  selectedCategory: "",
  selectedProduct: null,
  loading: false,

  // Acciones
  setSelectedCategory: (category: string) => {
    set({ selectedCategory: category });
  },

  setSelectedProduct: (product: Product | null) => {
    set({ selectedProduct: product });
  },

  setLoading: (loading: boolean) => {
    set({ loading });
  },

  getProductsByCategory: (category: string) => {
    const state = get();
    return state.productsByCategory[category] || [];
  },

  getProductsByCategoryUrl: (categoryUrl: string) => {
    const state = get();
    return state.productsByCategory[categoryUrl] || [];
  },

  searchProducts: (query: string) => {
    const state = get();
    const allProducts = Object.values(state.productsByCategory).flat();

    return allProducts.filter(
      (product) =>
        product.nombre.toLowerCase().includes(query.toLowerCase()) ||
        product.descripcion.toLowerCase().includes(query.toLowerCase()) ||
        product.id.toLowerCase().includes(query.toLowerCase())
    );
  },

  getProductById: (id: string) => {
    const state = get();
    const allProducts = Object.values(state.productsByCategory).flat();
    return allProducts.find((product) => product.id === id);
  },

  getCategories: () => {
    const state = get();
    return Object.keys(state.productsByCategory);
  },

  getCategoryByUrl: (url: string) => {
    const state = get();
    return state.categories.find((category) => category.url === url);
  },

  getCategoryInfo: (category: string) => {
    const state = get();
    return state.categories.find((cat) => cat.url === category);
  },

  getProductsCountByCategory: (category: string) => {
    const state = get();
    return state.productsByCategory[category]?.length || 0;
  },
}));
