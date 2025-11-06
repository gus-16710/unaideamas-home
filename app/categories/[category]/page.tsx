import { notFound } from "next/navigation";
import CategoryPageClient from "./CategoryPageClient";

const categories = ["lapiceros", "agendas", "termos", "bolsas", "cilindros", "vasos"];

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

  return <CategoryPageClient category={category} />;
}
