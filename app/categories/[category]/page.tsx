import { notFound } from "next/navigation";

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

  console.log(params);

  if (!categories.includes(category)) {
    return notFound();
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        Productos de la categoría: {category}
      </h1>
      <ul>
        {/* Aquí puedes colocar la lista de productos de esa categoría */}
        <li>Producto 1 de {category}</li>
        <li>Producto 2 de {category}</li>
        <li>Producto 3 de {category}</li>
      </ul>
    </div>
  );
}
