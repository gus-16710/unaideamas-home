import { notFound } from "next/navigation";
import CategoryPageClient from "./CategoryPageClient";

const productsByCategory: Record<string, any[]> = {
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
      imagenes_urls: ["https://doblevela.com/images/large/A3157_lrg.jpg"],
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
      imagenes_urls: ["https://doblevela.com/images/large/A2671A_lrg.jpg"],
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
      imagenes_urls: ["https://doblevela.com/images/large/A2113A_lrg.jpg"],
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
        "https://doblevela.com/images/adicionales/_A3197_4.jpg",
      ],
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
      imagenes_urls: ["https://doblevela.com/images/large/A2567_lrg.jpg"],
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
      imagenes_urls: ["https://doblevela.com/images/large/A2602_lrg.jpg"],
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
      imagenes_urls: ["https://doblevela.com/images/large/BIOP01_lrg.jpg"],
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
      imagenes_urls: ["https://doblevela.com/images/large/A2919_lrg.jpg"],
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
      imagenes_urls: ["https://doblevela.com/images/large/A2987_lrg.jpg"],
    },
  ],
  agendas: [
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
      imagenes_urls: ["https://doblevela.com/images/large/AD2026_lrg.jpg?v=2"],
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
      imagenes_urls: ["https://doblevela.com/images/large/ADS2026_lrg.jpg?v=2"],
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
      imagenes_urls: ["https://doblevela.com/images/large/A2428_lrg.jpg?v=2"],
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
      imagenes_urls: ["https://doblevela.com/images/large/A3167_lrg.jpg?v=2"],
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
      imagenes_urls: ["https://doblevela.com/images/large/A2570_lrg.jpg?v=2"],
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
      imagenes_urls: ["https://doblevela.com/images/large/A2776_lrg.jpg?v=2"],
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
      imagenes_urls: ["https://doblevela.com/images/large/A2922_lrg.jpg?v=2"],
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
      imagenes_urls: ["https://doblevela.com/images/large/A3018_lrg.jpg"],
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
      imagenes_urls: ["https://doblevela.com/images/large/A2198_lrg.jpg?v=2"],
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
      imagenes_urls: ["https://doblevela.com/images/large/A2337_lrg.jpg?v=2"],
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
      imagenes_urls: ["https://doblevela.com/images/large/A2334_lrg.jpg?v=2"],
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
      imagenes_urls: ["https://doblevela.com/images/large/A2430_lrg.jpg?v=2"],
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
      imagenes_urls: ["https://doblevela.com/images/large/A2524_lrg.jpg?v=2"],
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
      imagenes_urls: ["https://doblevela.com/images/large/A2525_lrg.jpg?v=2"],
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
      imagenes_urls: ["https://doblevela.com/images/large/A2631_lrg.jpg?v=2"],
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
      imagenes_urls: ["https://doblevela.com/images/large/A2645_lrg.jpg?v=2"],
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
      imagenes_urls: ["https://doblevela.com/images/large/A2636_lrg.jpg?v=2"],
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
      imagenes_urls: ["https://doblevela.com/images/large/A2478_lrg.jpg"],
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
      imagenes_urls: ["https://doblevela.com/images/large/A2479_lrg.jpg"],
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
      imagenes_urls: ["https://doblevela.com/images/large/A2542_lrg.jpg"],
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
      imagenes_urls: ["https://doblevela.com/images/large/NONW01_lrg.jpg"],
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
      imagenes_urls: ["https://doblevela.com/images/large/A2144_lrg.jpg"],
    },
    {
      id: "A3188",
      nombre: "GLEAM",
      descripcion:
        "Bolsa de Non Woven metalizado.",
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
    },
  ],
};

const categories = ["lapiceros", "agendas", "termos", "bolsas"];

export async function generateStaticParams() {
  return categories.map((category) => ({ category }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  if (!categories.includes(category)) {
    return notFound();
  }

  const products = productsByCategory[category];

  return <CategoryPageClient category={category} products={products} />;
}
