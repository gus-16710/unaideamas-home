import { create } from "zustand";
import { Product, ProductState } from "@/types";
import { categoriesList, initialProducts } from "@/data";

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

  getRandomProducts: (count: number = 6) => {
    const state = get();
    const allProducts = Object.values(state.productsByCategory).flat();

    const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  },

  getOtherProducts: (count: number = 6) => {
    const state = get();
    const otherProducts = Object.values(state.productsByCategory)
      .flat()
      .filter((product) => product.categoria === "otros");

    const shuffled = [...otherProducts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  },
}));
