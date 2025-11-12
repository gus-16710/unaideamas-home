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
  icon?: React.ElementType;
  color?: string; 
}

export interface CategoryProducts {
  [category: string]: Product[];
}

export interface ProductState {
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
  getRandomProducts: (count: number) => Product[]
}
