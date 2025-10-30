import { initialProducts } from "@/data";

// Función que puede usarse en Server Components
export function getProductById(id: string) {
  const allProducts = Object.values(initialProducts).flat();
  return allProducts.find(product => product.id === id);
}

export function getAllProducts() {
  return Object.values(initialProducts).flat();
}

export function getProductsByCategory(category: string) {
  return initialProducts[category] || [];
}