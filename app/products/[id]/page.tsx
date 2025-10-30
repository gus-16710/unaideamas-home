import { notFound } from "next/navigation";
import { getAllProducts, getProductById } from "@/utils/product-utils";
import ProductDetailClient from "./ProductDetailClient";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  const product = getProductById(id);

  if (!product) {
    return notFound();
  }

  return <ProductDetailClient product={product} />;
}

export async function generateStaticParams() {
  const allProducts = getAllProducts();

  return allProducts.map((product) => ({
    id: product.id,
  }));
}
